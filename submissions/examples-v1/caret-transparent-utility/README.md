# Caret Transparent Utility CSS Demo — EaseMotion CSS

A premium, interactive demonstration of the CSS `caret-transparent` utility class, showing how to hide default browser cursors and implement custom visual caret effects.

## What does this do?

This demo highlights the use cases and visual possibilities of the CSS `caret-color: transparent` property. It features:

- **Caret Visibility Playground**: Direct comparison between standard text inputs (using native carets) and transparent caret inputs (`.ease-caret-transparent`).
- **Interactive Retro Terminal (Custom Block Caret)**: A retro command-line simulator where the native blinking cursor is hidden via `.ease-caret-transparent` and replaced with an animated, retro block cursor (`█`) that tracks user input.
- **Modern PIN/OTP Code Inputs**: A 4-digit verification code component that hides the default thin cursor and utilizes pure CSS animation triggers to show a custom blinking bottom-border caret.

## How is it used?

Apply the core utility class to any text input, textarea, or `contenteditable` container:

```html
<!-- Input with hidden blinking cursor -->
<input type="text" class="ease-caret-transparent" placeholder="Type here..." />
```

```css
/* Core stylesheet utility mappings */
.ease-caret-transparent {
  caret-color: transparent !important;
}

.ease-caret-current {
  caret-color: currentColor !important;
}
```

## Why is it useful?

- **Custom Caret Styles**: Essential for creating themed cursors (e.g. terminals, retro typewriter effects, or specialized rich text editors) that are otherwise overridden by default browser cursor lines.
- **Improved Security and Focus Visuals**: Ideal for credit card, PIN, or OTP input interfaces where a standard blinking line is visually disruptive or misaligned.
- **Polished UI/UX**: Allows developers to align caret colors and behaviors precisely with high-fidelity brand design systems without native browser style limitations.

## Tech Stack

- HTML5 (semantic layout)
- CSS3 (transitions, variables, flexbox/grid, custom animations)
- JavaScript (interactive terminal prompt logic & auto-focus navigation)

## Preview

Open `demo.html` in your web browser to test the utility and interact with the sandbox components.
