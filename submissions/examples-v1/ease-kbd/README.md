# Keyboard Shortcut Display

## What does this add?

A component for showing keyboard shortcuts with styled key badges (`kbd.ease-kbd`), connector separators between keys, a hover tooltip showing the shortcut's name, and a full table layout for grouping multiple shortcuts.

## How is it used?

```html
<table class="ease-kbd-table">
  <thead>
    <tr><th>Action</th><th>Shortcut</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Save file</td>
      <td>
        <span class="ease-kbd-group" data-tooltip="Save File">
          <kbd class="ease-kbd">Ctrl</kbd>
          <span class="ease-kbd-connector">+</span>
          <kbd class="ease-kbd">S</kbd>
        </span>
      </td>
    </tr>
  </tbody>
</table>
```

- Each key is its own `<kbd class="ease-kbd">` badge.
- `.ease-kbd-connector` renders `+` for simultaneous key presses, or `,` between sequential combos (e.g. `Ctrl+Tab` , `Ctrl+Shift+Tab` for cycling tabs).
- Wrapping the whole combo in `.ease-kbd-group` with a `data-tooltip="..."` attribute shows that text in a pure-CSS tooltip on hover — no JavaScript required.

## Why does it fit EaseMotion CSS?

Keyboard shortcut references show up in settings pages, command palettes, and onboarding docs constantly, and they're almost always styled inconsistently. This packages the individual key-badge look, the connector convention, and a full reference table into one reusable set of classes — and the tooltip means a shortcut's purpose is discoverable without cluttering the table with an extra description column.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and hover over any shortcut in the table to see its tooltip.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

Tooltip and hover transitions respect `prefers-reduced-motion: reduce` (the tooltip still appears, just without the fade/slide-in).
