# Modern CSS Typing Effect Component

A lightweight, high-precision typing and erasing animation component built entirely with pure HTML and CSS. It supports looping multiline text arrays, sequential terminal simulators, custom cursor blinks, and light/dark mode themes.

---

## 1. What does this do?

This component simulates realistic keyboard typing. It features:

- **Zero JavaScript**: Animates characters and caret blinks entirely using CSS `@keyframes` animations.
- **Realistic Typing Orchestration**: Controls typing, cursor blinking on hold, erasing, and looping sequences with precise timing.
- **Perfect Cursor Alignment**: Uses character width units (`ch`) in CSS to dynamically match word lengths, ensuring the cursor blinks precisely at the end of each word.
- **Multiple Layout Modes**:
  - **Hero Suffix Loop**: Alternates words dynamically at the end of a fixed phrase (e.g., "Build websites", "Build interfaces").
  - **IDE Terminal Console**: Types multiple lines of code sequentially.
  - **Status Alert Banner**: Loops system status notifications with live pulsing indicator dots.
- **Adaptive Theme Support**: Styled with CSS variables that adapt automatically to dark and light modes.

---

## 2. How is it used?

### Layout A: Hero Headline Typing (Alternating Words)

To rotate between phrases, stack them inside a `.ease-typewriter-container` and apply the matching animation classes:

```html
<h2 class="hero-text">
  Build
  <span class="ease-typewriter-container">
    <!-- Anchor text reserves space for the container, others overlap absolutely -->
    <span class="ease-typewriter-text text-1">modern websites.</span>
    <span class="ease-typewriter-text text-2">fluid interfaces.</span>
    <span class="ease-typewriter-text text-3">motion systems.</span>
  </span>
</h2>
```

### CSS Setup for Custom Words

Define the keyframes for each word, setting the ending width to the character length of the text (`ch` unit):

```css
/* "modern websites." (16 chars) */
@keyframes typing-hero-1 {
  0% {
    width: 0;
    border-color: transparent;
  }
  1% {
    width: 0;
    border-color: var(--cursor-color);
  }
  10% {
    width: 16ch;
    border-color: var(--cursor-color);
  } /* Type in completed */
  12%,
  16%,
  20% {
    border-color: transparent;
  } /* Blink cursor on hold */
  14%,
  18%,
  22% {
    border-color: var(--cursor-color);
  }
  23% {
    width: 16ch;
    border-color: var(--cursor-color);
  }
  30% {
    width: 0;
    border-color: var(--cursor-color);
  } /* Erase completed */
  31%,
  100% {
    width: 0;
    border-color: transparent;
  }
}

.text-1 {
  animation: typing-hero-1 12s infinite;
}
```

---

## Class Catalog

| Class Name                   | Type      | Description                                                                             |
| :--------------------------- | :-------- | :-------------------------------------------------------------------------------------- |
| `.ease-typewriter-container` | Container | Relative wrapper that centers and contains typing texts.                                |
| `.ease-typewriter-text`      | Element   | Base class that crops text (`overflow: hidden`) and styles the cursor (`border-right`). |
| `.ease-terminal-line`        | Element   | Monospace terminal line class that types sequentially.                                  |
| `.mock-terminal`             | Container | Renders a terminal/IDE mockup with macOS-style window controls.                         |
| `.status-banner`             | Container | Renders a pill-shaped status notification bar.                                          |
| `.status-pulse`              | Element   | A green/blue status beacon with a ripple animation.                                     |

---

## 3. Why is it useful?

1. **Zero Script Footprint**: Ideal for fast-loading landing pages and static blogs. It runs natively without loading heavy client-side scripts, maintaining perfect Lighthouse performance.
2. **Engaging UX**: Draws attention to core marketing copy, hero tags, or live status metrics immediately.
3. **No Layout Shift (CLS)**: The relative layout anchor (`.text-1`) reserves the text's vertical height in the document flow. This prevents other content blocks on the page from jumping up or down when typing/erasing.
4. **Accurate Caret Placement**: Animating the width based on character length (`ch`) instead of percentage (`%`) ensures the caret sits snugly against the final character on any monospaced font, avoiding artificial gaps.
5. **Reduced Motion Compliant**: Respects OS-level accessibility settings via `@media (prefers-reduced-motion: reduce)`, instantly converting the animation to static text for users who prefer low motion.
