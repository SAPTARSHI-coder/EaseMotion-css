# Semantic Dual-State Color Architecture

## What does this do?
Proposes a massive, framework-wide styling refactor to aggressively eradicate all dangerously hardcoded Hex and RGB color values within individual UI components. This actively replaces them with unified, semantic CSS variables tied perfectly to the browser's native `@media (prefers-color-scheme: dark)` API.

## How is it used?
Maintainers and core contributors must systematically audit every single CSS styling declaration across the entire repository—specifically targeting the 15+ core files spanning `components/*.css`.

Currently, developers are violently hardcoding specific colors directly into the components:
```css
/* ❌ BAD: Completely destroys any hope of implementing a native Dark Mode */
.ease-card {
  background-color: #ffffff; /* Forever blindingly white */
  color: #0f172a;            /* Forever dark */
  border-color: #cbd5e1;
}
```

This incredibly toxic legacy approach must be entirely ripped out. The core `variables.css` must formally define dual-state semantic tokens that swap natively based on the OS theme, and components must strictly reference those dynamic tokens:
```css
/* ✅ GOOD: Perfect Semantic Namespace */
:root {
  --ease-surface: #ffffff;
  --ease-text: #0f172a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ease-surface: #0f172a;
    --ease-text: #f8fafc;
  }
}

/* The component is now completely agnostic and perfectly adaptable! */
.ease-card {
  background-color: var(--ease-surface);
  color: var(--ease-text);
}
```

## Why is it useful?
Currently, EaseMotion physically cannot support a true, OS-level Dark Mode out of the box. Because the framework dangerously hardcodes values like `#ffffff` directly into `.ease-card` and `.ease-modal`, when an enterprise developer attempts to add a dark mode to their application, they are violently forced to write hundreds of lines of messy, overriding CSS (e.g., `body.dark .ease-card { background: #000 !important; }`). This completely destroys code maintainability and vastly inflates the CSS payload footprint.

By aggressively forcing the entire framework to utilize dual-state semantic variables naturally mapped to the native `@media (prefers-color-scheme: dark)` query, we completely eradicate this architectural blocker. The components become perfectly agnostic; they simply request "the surface color," and the CSS variable natively returns a white hex or a dark hex depending entirely on the user's macOS, Windows, or iOS settings. This instantly secures a mathematically flawless, perfectly immersive Dark Mode for all downstream enterprise applications without requiring developers to write a single line of override CSS.
