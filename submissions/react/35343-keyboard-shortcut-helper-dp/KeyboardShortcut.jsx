import React, { memo, useMemo, useState } from "react";
import "./style.css";

const VARIANTS = ["outline", "filled", "soft", "minimal"];
const SIZES = ["small", "medium", "large"];
const PLATFORMS = ["windows", "mac"];

const shortcutExamples = [
  { label: "Command Palette", keys: ["Ctrl", "K"], macKeys: ["Command", "K"] },
  { label: "Search", keys: ["Ctrl", "F"], macKeys: ["Command", "F"] },
  { label: "Save", keys: ["Ctrl", "S"], macKeys: ["Command", "S"] },
  { label: "Settings", keys: ["Ctrl", ","], macKeys: ["Command", ","] },
  { label: "Rename", keys: ["F2"] },
  { label: "Terminal", keys: ["Ctrl", "`"], macKeys: ["Control", "`"] },
  {
    label: "Developer Tools",
    keys: ["Ctrl", "Shift", "I"],
    macKeys: ["Command", "Option", "I"],
  },
  {
    label: "Navigation",
    keys: ["Alt", "ArrowRight"],
    macKeys: ["Command", "ArrowRight"],
  },
];

const keyLabels = {
  ctrl: {
    windows: "Ctrl",
    mac: "⌘",
    spoken: { windows: "Control", mac: "Command" },
  },
  control: {
    windows: "Ctrl",
    mac: "⌃",
    spoken: { windows: "Control", mac: "Control" },
  },
  cmd: {
    windows: "Ctrl",
    mac: "⌘",
    spoken: { windows: "Control", mac: "Command" },
  },
  command: {
    windows: "Ctrl",
    mac: "⌘",
    spoken: { windows: "Control", mac: "Command" },
  },
  meta: {
    windows: "Ctrl",
    mac: "⌘",
    spoken: { windows: "Control", mac: "Command" },
  },
  mod: {
    windows: "Ctrl",
    mac: "⌘",
    spoken: { windows: "Control", mac: "Command" },
  },
  shift: {
    windows: "Shift",
    mac: "⇧",
    spoken: { windows: "Shift", mac: "Shift" },
  },
  alt: { windows: "Alt", mac: "⌥", spoken: { windows: "Alt", mac: "Option" } },
  option: {
    windows: "Alt",
    mac: "⌥",
    spoken: { windows: "Alt", mac: "Option" },
  },
  enter: {
    windows: "Enter",
    mac: "Return",
    spoken: { windows: "Enter", mac: "Return" },
  },
  return: {
    windows: "Enter",
    mac: "Return",
    spoken: { windows: "Enter", mac: "Return" },
  },
  esc: {
    windows: "Esc",
    mac: "Esc",
    spoken: { windows: "Escape", mac: "Escape" },
  },
  escape: {
    windows: "Esc",
    mac: "Esc",
    spoken: { windows: "Escape", mac: "Escape" },
  },
  tab: { windows: "Tab", mac: "Tab", spoken: { windows: "Tab", mac: "Tab" } },
  space: {
    windows: "Space",
    mac: "Space",
    spoken: { windows: "Space", mac: "Space" },
  },
  delete: {
    windows: "Del",
    mac: "⌦",
    spoken: { windows: "Delete", mac: "Forward Delete" },
  },
  del: {
    windows: "Del",
    mac: "⌦",
    spoken: { windows: "Delete", mac: "Forward Delete" },
  },
  backspace: {
    windows: "Backspace",
    mac: "⌫",
    spoken: { windows: "Backspace", mac: "Delete" },
  },
  arrowup: {
    windows: "↑",
    mac: "↑",
    spoken: { windows: "Up Arrow", mac: "Up Arrow" },
  },
  arrowright: {
    windows: "→",
    mac: "→",
    spoken: { windows: "Right Arrow", mac: "Right Arrow" },
  },
  arrowdown: {
    windows: "↓",
    mac: "↓",
    spoken: { windows: "Down Arrow", mac: "Down Arrow" },
  },
  arrowleft: {
    windows: "←",
    mac: "←",
    spoken: { windows: "Left Arrow", mac: "Left Arrow" },
  },
};

function getDetectedPlatform() {
  if (typeof navigator === "undefined") {
    return "windows";
  }

  const platform =
    navigator.userAgentData?.platform || navigator.platform || "";
  return /mac|iphone|ipad|ipod/i.test(platform) ? "mac" : "windows";
}

function getSafeOption(value, options, fallback) {
  return options.includes(value) ? value : fallback;
}

function normalizeKeys(keys) {
  if (Array.isArray(keys)) {
    return keys
      .flatMap((key) => String(key).split("+"))
      .map((key) => key.trim())
      .filter(Boolean);
  }

  return String(keys || "")
    .split("+")
    .map((key) => key.trim())
    .filter(Boolean);
}

function formatKey(key, platform, platformAware) {
  const normalizedKey = String(key).toLowerCase().replace(/\s+/g, "");
  const keyData = keyLabels[normalizedKey];

  if (!keyData) {
    return { visual: String(key), spoken: String(key) };
  }

  const renderedPlatform = platformAware ? platform : "windows";
  return {
    visual: keyData[renderedPlatform],
    spoken: keyData.spoken[renderedPlatform],
  };
}

export const KeyboardShortcut = memo(function KeyboardShortcut({
  keys = ["Ctrl", "K"],
  variant = "outline",
  size = "medium",
  platformAware = true,
  platform,
  className = "",
}) {
  const resolvedPlatform = platform || getDetectedPlatform();
  const safePlatform = getSafeOption(resolvedPlatform, PLATFORMS, "windows");
  const safeVariant = getSafeOption(variant, VARIANTS, "outline");
  const safeSize = getSafeOption(size, SIZES, "medium");

  const shortcutParts = useMemo(
    () =>
      normalizeKeys(keys).map((key) =>
        formatKey(key, safePlatform, platformAware)
      ),
    [keys, safePlatform, platformAware]
  );

  const accessibleLabel = shortcutParts.map((key) => key.spoken).join(" plus ");

  return (
    <span
      className={`ks-shortcut ks-shortcut--${safeVariant} ks-shortcut--${safeSize} ${className}`.trim()}
      aria-label={accessibleLabel}
    >
      {shortcutParts.map((key, index) => (
        <React.Fragment key={`${key.spoken}-${index}`}>
          {index > 0 && (
            <span className="ks-shortcut__separator" aria-hidden="true">
              +
            </span>
          )}
          <kbd className="ks-shortcut__key">{key.visual}</kbd>
        </React.Fragment>
      ))}
    </span>
  );
});

function ControlGroup({ label, value, options, onChange }) {
  return (
    <fieldset className="ks-control-group">
      <legend>{label}</legend>
      <div className="ks-segmented-control">
        {options.map((option) => (
          <label key={option} className="ks-segmented-control__item">
            <input
              type="radio"
              name={label}
              value={option}
              checked={value === option}
              onChange={(event) => onChange(event.target.value)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ShowcaseRow({ example, variant, size, platform }) {
  const keys =
    platform === "mac" && example.macKeys ? example.macKeys : example.keys;

  return (
    <li className="ks-showcase-row">
      <span>{example.label}</span>
      <KeyboardShortcut
        keys={keys}
        variant={variant}
        size={size}
        platform={platform}
      />
    </li>
  );
}

export default function KeyboardShortcutShowcase() {
  const [variant, setVariant] = useState("soft");
  const [size, setSize] = useState("medium");
  const [platform, setPlatform] = useState("windows");

  return (
    <section className="ks-demo" aria-labelledby="keyboard-shortcut-title">
      <div className="ks-demo__hero">
        <div>
          <p className="ks-demo__eyebrow">Reusable React component</p>
          <h1 id="keyboard-shortcut-title">Keyboard Shortcut Helper</h1>
          <p className="ks-demo__description">
            A polished shortcut primitive for command surfaces, settings panels,
            editors, and product documentation.
          </p>
        </div>
        <div
          className="ks-demo__hero-shortcuts"
          aria-label="Featured shortcuts"
        >
          <KeyboardShortcut
            keys={["Ctrl", "K"]}
            variant="filled"
            size="large"
            platform={platform}
          />
          <KeyboardShortcut
            keys={["Ctrl", "Shift", "P"]}
            variant="outline"
            size="large"
            platform={platform}
          />
        </div>
      </div>

      <div className="ks-demo__grid">
        <div className="ks-card ks-card--controls">
          <div>
            <h2>Interactive Playground</h2>
            <p>
              Change the rendering once and every shortcut updates immediately.
            </p>
          </div>

          <ControlGroup
            label="Variant"
            value={variant}
            options={VARIANTS}
            onChange={setVariant}
          />
          <ControlGroup
            label="Size"
            value={size}
            options={SIZES}
            onChange={setSize}
          />
          <ControlGroup
            label="Platform"
            value={platform}
            options={PLATFORMS}
            onChange={setPlatform}
          />
        </div>

        <div className="ks-card">
          <div className="ks-card__header">
            <div>
              <h2>Application Shortcuts</h2>
              <p>Common commands from modern productivity interfaces.</p>
            </div>
            <KeyboardShortcut
              keys={["Ctrl", "/"]}
              variant="minimal"
              size="small"
              platform={platform}
            />
          </div>

          <ul className="ks-showcase-list">
            {shortcutExamples.map((example) => (
              <ShowcaseRow
                key={example.label}
                example={example}
                variant={variant}
                size={size}
                platform={platform}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="ks-demo__comparison">
        <article className="ks-card">
          <h2>Windows and Linux</h2>
          <div className="ks-comparison-stack">
            <KeyboardShortcut
              keys={["Ctrl", "Enter"]}
              variant="filled"
              platform="windows"
            />
            <KeyboardShortcut
              keys={["Ctrl", "Alt", "ArrowRight"]}
              variant="soft"
              platform="windows"
            />
            <KeyboardShortcut
              keys={["Ctrl", "Backspace"]}
              variant="outline"
              platform="windows"
            />
          </div>
        </article>

        <article className="ks-card">
          <h2>macOS</h2>
          <div className="ks-comparison-stack">
            <KeyboardShortcut
              keys={["Command", "Return"]}
              variant="filled"
              platform="mac"
            />
            <KeyboardShortcut
              keys={["Command", "Option", "ArrowRight"]}
              variant="soft"
              platform="mac"
            />
            <KeyboardShortcut
              keys={["Backspace"]}
              variant="outline"
              platform="mac"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
