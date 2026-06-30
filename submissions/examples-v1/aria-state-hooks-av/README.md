# Native ARIA CSS Selectors Architecture

## What does this do?

Proposes a critical accessibility and state-management refactor across the entire framework to aggressively eradicate arbitrary utility classes (like `.is-active` and `.show`), replacing them entirely with native ARIA attribute CSS selectors (e.g., `[aria-expanded="true"]`).

## How is it used?

Maintainers and core contributors must systematically audit all interactive components across `components/*.css` and `submissions/examples/*/script.js` (spanning 10+ core files).

Currently, developers are dangerously managing component visual states by toggling arbitrary, meaningless CSS classes using JavaScript:

```javascript
// ❌ BAD: Completely meaningless to screen readers. Incredibly easy to desync.
button.classList.toggle("is-active");
menu.classList.toggle("show");
```

```css
/* ❌ BAD: CSS relies on arbitrary, inaccessible classes */
.menu.show {
  display: block;
}
```

This entire legacy approach must be ripped out. JavaScript must strictly be used to toggle the native ARIA attributes on the elements, and the CSS must strictly use those ARIA attributes as its visual state hooks:

```javascript
// ✅ GOOD: JavaScript strictly manages the native accessibility tree
button.setAttribute("aria-expanded", "true");
```

```css
/* ✅ GOOD: CSS visually reacts directly to the accessibility tree */
button[aria-expanded="true"] + .menu {
  display: block;
}
```

## Why is it useful?

Currently, EaseMotion's interactive components suffer from severe WCAG accessibility desyncs. When an enterprise developer toggles an `.is-active` class on a modal or a dropdown, the component visually appears on the screen. However, because the developer inevitably forgot to manually update the `aria-expanded` or `aria-hidden` attributes via their JavaScript, visually impaired users (using screen readers) have absolutely no idea the menu just opened, trapping them in a broken state.

By violently forcing the framework's CSS to visually style _only_ off the native ARIA attributes (`[aria-expanded="true"]`), we create an unbreakable "single source of truth." If the developer's JavaScript fails to update the ARIA attribute, the menu physically will not open on the screen! This completely forces downstream developers to write 100% accessible code by default, guaranteeing that the visual state of the framework and the screen-reader accessibility tree are mathematically impossible to desync.
