import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

const DEFAULT_COMMANDS = [
  { id: "new-file", label: "New File", group: "General", shortcut: "Ctrl N" },
  {
    id: "new-window",
    label: "New Window",
    group: "General",
    shortcut: "Ctrl Shift N",
  },
  {
    id: "open-settings",
    label: "Open Settings",
    group: "General",
    shortcut: "Ctrl ,",
  },
  { id: "toggle-theme", label: "Toggle Theme", group: "Appearance" },
  { id: "zoom-in", label: "Zoom In", group: "Appearance", shortcut: "Ctrl +" },
  {
    id: "zoom-out",
    label: "Zoom Out",
    group: "Appearance",
    shortcut: "Ctrl -",
  },
  {
    id: "go-to-file",
    label: "Go to File...",
    group: "Navigation",
    shortcut: "Ctrl P",
  },
  {
    id: "go-to-line",
    label: "Go to Line...",
    group: "Navigation",
    shortcut: "Ctrl G",
  },
];

function groupCommands(commands) {
  const groups = new Map();
  commands.forEach((command) => {
    const groupName = command.group || "Other";
    if (!groups.has(groupName)) groups.set(groupName, []);
    groups.get(groupName).push(command);
  });
  return groups;
}

function matchesQuery(command, query) {
  if (!query) return true;
  const haystack = [command.label, command.group, ...(command.keywords || [])]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export default function CommandPalette({
  commands = DEFAULT_COMMANDS,
  placeholder = "Search commands...",
  title = "Command Palette",
  emptyMessage = "No matching commands found.",
  shortcutEnabled = true,
  onSelect = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const baseId = useId();
  const dialogId = `${baseId}-dialog`;
  const dialogTitleId = `${baseId}-title`;
  const listboxId = `${baseId}-listbox`;

  const filteredCommands = useMemo(
    () => commands.filter((command) => matchesQuery(command, query)),
    [commands, query]
  );

  const groupedCommands = useMemo(
    () => groupCommands(filteredCommands),
    [filteredCommands]
  );

  const activeCommand = filteredCommands[activeIndex] || null;

  const openPalette = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const closePalette = useCallback(() => {
    setIsClosing(true);
  }, []);

  const handleOverlayAnimationEnd = useCallback(
    (event) => {
      if (event.target !== event.currentTarget) return;
      if (isClosing) {
        setIsOpen(false);
        setIsClosing(false);
        triggerRef.current?.focus();
      }
    },
    [isClosing]
  );

  useEffect(() => {
    if (isOpen && !isClosing) {
      inputRef.current?.focus();
    }
  }, [isOpen, isClosing]);

  useEffect(() => {
    if (!shortcutEnabled) return undefined;

    function handleGlobalKeyDown(event) {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isShortcut) {
        event.preventDefault();
        setIsOpen((current) => {
          if (current) return current;
          openPalette();
          return true;
        });
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [shortcutEnabled, openPalette]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!activeCommand || !listRef.current) return;
    const activeEl = listRef.current.querySelector(
      `[data-command-id="${activeCommand.id}"]`
    );
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [activeCommand]);

  function moveActiveIndex(direction) {
    if (filteredCommands.length === 0) return;
    setActiveIndex((current) => {
      const next =
        (current + direction + filteredCommands.length) %
        filteredCommands.length;
      return next;
    });
  }

  function handleSelect(command) {
    if (!command) return;
    onSelect(command);
    closePalette();
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveActiveIndex(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveActiveIndex(-1);
        break;
      case "Tab":
        event.preventDefault();
        moveActiveIndex(event.shiftKey ? -1 : 1);
        break;
      case "Enter":
        event.preventDefault();
        handleSelect(activeCommand);
        break;
      case "Escape":
        event.preventDefault();
        closePalette();
        break;
      default:
        break;
    }
  }

  let renderedIndex = -1;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="command-palette-trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={openPalette}
      >
        <span>Open Command Palette</span>
        {shortcutEnabled && (
          <span className="command-palette-trigger-hint" aria-hidden="true">
            Ctrl K
          </span>
        )}
      </button>

      {(isOpen || isClosing) && (
        <div
          className={`command-palette-overlay${isClosing ? " is-closing" : ""}`}
          onAnimationEnd={handleOverlayAnimationEnd}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePalette();
          }}
        >
          <div
            id={dialogId}
            className={`command-palette${isClosing ? " is-closing" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
          >
            <h2 id={dialogTitleId} className="command-palette-title">
              {title}
            </h2>

            <div className="command-palette-search">
              <input
                ref={inputRef}
                type="text"
                className="command-palette-input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={listboxId}
                aria-autocomplete="list"
                aria-activedescendant={
                  activeCommand
                    ? `${listboxId}-option-${activeCommand.id}`
                    : undefined
                }
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div
              id={listboxId}
              ref={listRef}
              role="listbox"
              aria-label={title}
              className="command-palette-list"
            >
              {filteredCommands.length === 0 && (
                <p className="command-palette-empty">{emptyMessage}</p>
              )}

              {Array.from(groupedCommands.entries()).map(
                ([groupName, items]) => (
                  <div
                    className="command-palette-group"
                    role="group"
                    aria-label={groupName}
                    key={groupName}
                  >
                    <p className="command-palette-group-label">{groupName}</p>
                    {items.map((command) => {
                      renderedIndex += 1;
                      const optionIndex = renderedIndex;
                      const isActive = optionIndex === activeIndex;
                      return (
                        <div
                          key={command.id}
                          id={`${listboxId}-option-${command.id}`}
                          data-command-id={command.id}
                          role="option"
                          aria-selected={isActive}
                          tabIndex={-1}
                          className={`command-palette-option${isActive ? " is-active" : ""}`}
                          onMouseEnter={() => setActiveIndex(optionIndex)}
                          onClick={() => handleSelect(command)}
                        >
                          <span className="command-palette-option-label">
                            {command.label}
                          </span>
                          {command.shortcut && (
                            <span
                              className="command-palette-option-shortcut"
                              aria-hidden="true"
                            >
                              {command.shortcut}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
