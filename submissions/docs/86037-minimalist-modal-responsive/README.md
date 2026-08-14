# Minimalist Modal Dialog — Responsive Layout

## Overview
This guide covers responsive breakpoints for the Minimalist Modal Dialog Window.
The modal uses semantic dialog structure, flexible sizing, and CSS custom properties.

## Markup
Use a dialog element and a clear heading.
Keep primary and secondary actions as real buttons.

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__panel">
    <h2 id="modal-title">Confirm action</h2>
    <p>Review the information before continuing.</p>
    <div class="modal__actions">
      <button type="button">Cancel</button>
      <button type="button">Continue</button>
    </div>
  </div>
</dialog>
```

## Responsive Rules
Use a flexible width with a maximum width on large screens.
Reduce padding at narrow breakpoints.
Avoid fixed heights that can clip long content.
Allow the dialog body to scroll when content exceeds the viewport.

## Modifiers
Use modifiers for compact or wide presentation variants.
Keep modifier selectors scoped to the modal block.

## Custom Properties
Expose panel width, padding, radius, surface, text, and shadow as variables.
Theme variables at the component or page scope.

## Accessibility
Use a descriptive dialog label.
Keep focus inside an actively opened modal when implementing scripted behavior.
Return focus to the invoking control after closing.
Ensure every action is keyboard reachable.
Maintain visible focus indicators.

## Demo
Open `demo.html` and resize the viewport.
Use keyboard navigation to inspect action order and focus visibility.

## Testing
Test long content, small screens, browser zoom, keyboard navigation, and desktop widths.

## Files
`README.md` documents the responsive scope.
`demo.html` is the standalone example.
`style.css` contains responsive presentation rules.
