# EaseMotion CSS Typewriter Animation Component

A lightweight, hardware-accelerated, pure CSS typewriter animation component. It relies on the `steps()` CSS timing function to reveal text character-by-character, along with a blinking cursor inside the `::after` pseudo-element.

---

## Class Reference

- `.ease-typewriter`: Apply this class to a text block element (e.g. `<span>`, `<p>`, `<h1>`). It automatically handles character step transitions, clips overflow, and appends the blinking cursor.

---

## Customization (CSS Variables)

Customize typing behavior inline or in stylesheets using these custom properties:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-typewriter-chars` | The exact character count of the text (including spaces) | `20` |
| `--ease-typewriter-speed` | Typing animation duration | `3s` |
| `--ease-typewriter-cursor-color` | The border color of the typing cursor | `currentColor` |

---

## How to Use

### 1. Basic HTML Structure
Wrap the text in an inline-block container with the `.ease-typewriter` class. You **must** specify the character count using `--ease-typewriter-chars` to align character steps correctly:

```html
<h1 class="ease-typewriter" style="--ease-typewriter-chars: 12; --ease-typewriter-speed: 2s;">
  Hello World!
</h1>
```

### 2. Multi-line / Sequential Typing
To type multiple sentences sequentially, apply different animation delays or trigger them upon element entry:

```html
<p class="ease-typewriter" style="--ease-typewriter-chars: 20; --ease-typewriter-speed: 3s;">
  First line of text...
</p>
```

---

## Accessibility & Performance
- **Screen Reader Support**: Assistive technologies (like VoiceOver or NVDA) read the full text content immediately.
- **Font Selection**: To ensure perfect character stepping (where each character corresponds to exactly one step step width), it is highly recommended to use **monospaced fonts** (e.g., Courier, Consolas, or Roboto Mono) for the typewriter text block.
- **Reduced Motion**: Disables typewriter animation and reveals the full text immediately if `prefers-reduced-motion: reduce` is detected.
