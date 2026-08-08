import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import "./style.css";

/**
 * JelloAccordion — React accordion with a smooth jello entrance animation.
 * Issue #50773 · submissions/react/feature-jello-accordion-component-ab
 *
 * Supports:
 * 1) Simple single panel: <JelloAccordion title="FAQ">Hello</JelloAccordion>
 * 2) Multi panel via `items` prop
 *
 * @param {object} props
 * @param {React.ReactNode} [props.children] - Panel body (single-item mode)
 * @param {string} [props.title='Details'] - Header label (single-item mode)
 * @param {Array<{id?: string, title: string, content: React.ReactNode, defaultOpen?: boolean}>} [props.items]
 * @param {boolean} [props.allowMultiple=false] - Allow multiple panels open
 * @param {'soft'|'medium'|'strong'} [props.intensity='medium'] - Jello intensity
 * @param {boolean} [props.defaultOpen=false] - Open the first/single panel by default
 * @param {boolean} [props.enterOnMount=true] - Play entrance jello when items mount
 * @param {string} [props.className=''] - Extra class names
 * @param {string} [props.label] - Accessible name for the accordion region
 */
export default function JelloAccordion({
  children = "Hello",
  title = "Details",
  items,
  allowMultiple = false,
  intensity = "medium",
  defaultOpen = false,
  enterOnMount = true,
  className = "",
  label = "Jello accordion",
  ...rest
}) {
  const reactId = useId();
  const [reducedMotion, setReducedMotion] = useState(false);

  const panels = useMemo(() => {
    if (Array.isArray(items) && items.length > 0) {
      return items.map((item, index) => ({
        id: String(item.id ?? `${reactId}-item-${index}`),
        title: item.title,
        content: item.content,
        defaultOpen: Boolean(item.defaultOpen),
      }));
    }

    return [
      {
        id: `${reactId}-single`,
        title,
        content: children,
        defaultOpen,
      },
    ];
  }, [items, children, title, defaultOpen, reactId]);

  const initialOpen = useMemo(() => {
    const openIds = panels
      .filter((panel) => panel.defaultOpen)
      .map((panel) => panel.id);
    if (openIds.length > 0) return openIds;
    if (defaultOpen && panels[0]) return [panels[0].id];
    return [];
  }, [panels, defaultOpen]);

  const [openIds, setOpenIds] = useState(initialOpen);
  const [jelloIds, setJelloIds] = useState([]);
  const [mountPhase, setMountPhase] = useState(
    enterOnMount ? "pending" : "static"
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || !enterOnMount) {
      setMountPhase("static");
      setJelloIds([]);
      return;
    }

    setMountPhase("pending");
    const frame = requestAnimationFrame(() => {
      setMountPhase("entering");
    });
    return () => cancelAnimationFrame(frame);
  }, [enterOnMount, reducedMotion, panels.length]);

  const isOpen = useCallback((id) => openIds.includes(id), [openIds]);

  const toggle = useCallback(
    (id) => {
      const alreadyOpen = openIds.includes(id);

      if (allowMultiple) {
        if (alreadyOpen) {
          setOpenIds((current) => current.filter((value) => value !== id));
          setJelloIds((current) => current.filter((value) => value !== id));
          return;
        }

        setOpenIds((current) => [...current, id]);
        if (!reducedMotion) {
          setJelloIds((current) => [
            ...current.filter((value) => value !== id),
            id,
          ]);
        }
        return;
      }

      if (alreadyOpen) {
        setOpenIds([]);
        setJelloIds([]);
        return;
      }

      setOpenIds([id]);
      if (!reducedMotion) setJelloIds([id]);
    },
    [allowMultiple, openIds, reducedMotion]
  );

  const clearJello = useCallback((id) => {
    setJelloIds((current) => current.filter((value) => value !== id));
  }, []);

  const onHeaderKeyDown = useCallback(
    (event, id) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle(id);
      }
    },
    [toggle]
  );

  const rootClass = [
    "jello-accordion-ab",
    `jello-accordion-intensity-${intensity}-ab`,
    mountPhase === "entering" ? "is-entering-ab" : "",
    mountPhase === "static" ? "is-static-ab" : "",
    reducedMotion ? "is-reduced-motion-ab" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} role="region" aria-label={label} {...rest}>
      {panels.map((panel, index) => {
        const open = isOpen(panel.id);
        const headerId = `${panel.id}-header`;
        const panelId = `${panel.id}-panel`;
        const jelloing = jelloIds.includes(panel.id);

        return (
          <div
            key={panel.id}
            className={[
              "jello-accordion-item-ab",
              open ? "is-open-ab" : "",
              jelloing ? "is-jelloing-ab" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ "--jello-accordion-stagger-ab": `${index * 70}ms` }}
            onAnimationEnd={(event) => {
              if (event.target !== event.currentTarget) return;
              if (
                event.animationName.indexOf("jello-accordion-open-ab") === -1
              ) {
                return;
              }
              clearJello(panel.id);
            }}
          >
            <h3 className="jello-accordion-heading-ab">
              <button
                type="button"
                id={headerId}
                className="jello-accordion-trigger-ab"
                aria-expanded={open ? "true" : "false"}
                aria-controls={panelId}
                onClick={() => toggle(panel.id)}
                onKeyDown={(event) => onHeaderKeyDown(event, panel.id)}
              >
                <span className="jello-accordion-title-ab">{panel.title}</span>
                <span className="jello-accordion-icon-ab" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!open}
              className="jello-accordion-panel-ab"
            >
              <div className="jello-accordion-panel-inner-ab">
                {panel.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Optional demo helper with sample FAQ items.
 */
export function JelloAccordionDemoAb() {
  return (
    <div className="jello-accordion-demo-ab">
      <JelloAccordion
        allowMultiple={false}
        intensity="medium"
        enterOnMount
        label="EaseMotion FAQ"
        items={[
          {
            id: "what",
            title: "What is EaseMotion CSS?",
            content:
              "A zero-dependency, animation-first CSS framework with human-readable class names.",
            defaultOpen: true,
          },
          {
            id: "jello",
            title: "Why a jello accordion?",
            content:
              "A short jello entrance makes panels feel playful when they appear and when they open.",
          },
          {
            id: "a11y",
            title: "Is it accessible?",
            content:
              "Yes — real buttons, aria-expanded / aria-controls, and reduced-motion support.",
          },
        ]}
      />
    </div>
  );
}
