# CSS Accessible Combobox with ARIA-Live Announcements

An accessible, high-contrast Autocomplete Combobox component built with pure HTML5 and CSS3 featuring `aria-live="polite"` result announcements for screen readers.

## Overview

The Combobox component addresses screen reader blind spots during autocomplete searches. By combining WAI-ARIA combobox semantics (`role="combobox"`, `role="listbox"`, `role="option"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-haspopup="listbox"`) with an `aria-live="polite"` status region, screen readers immediately announce suggestion availability and count changes to visually impaired users.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript execution.
- **ARIA-Live Announcements**: `aria-live="polite"` region notifies assistive technologies of search options.
- **WAI-ARIA Combobox Semantics**: Includes `role="combobox"`, `role="listbox"`, and `role="option"`.
- **Keyboard Focused Options**: Explicit focus ring and `aria-selected` status highlighting.
- **WCAG AA Compliance**: High-contrast dark theme colors (>4.5:1 ratio).
- **Prefers-Reduced-Motion**: Motion-safe focus and border transitions.

## Folder Structure

```
css-combobox-aria-live-list/
├── demo.html    # Combobox HTML markup with aria-live region
├── style.css    # CSS dropdown layout, variables & focus styles
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<div class="combobox-wrapper">
  <input 
    type="text" 
    class="combobox-input" 
    placeholder="Search..." 
    role="combobox" 
    aria-autocomplete="list" 
    aria-expanded="true" 
    aria-haspopup="listbox" 
    aria-controls="options-listbox"
    aria-describedby="live-status"
  >

  <!-- ARIA-Live Announcements Region -->
  <div id="live-status" class="live-region" aria-live="polite">
    5 suggestion options available.
  </div>

  <ul id="options-listbox" class="options-list" role="listbox">
    <li class="option-item" role="option" aria-selected="true" tabindex="0">
      <span class="option-name">EaseMotion CSS</span>
    </li>
  </ul>
</div>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --bg-input: #1e2942;
  --bg-option-hover: #2563eb;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --accent-cyan: #38bdf8;
  --focus-ring: #38bdf8;

  --radius-lg: 16px;
}
```

## Customization

Customize option hover colors or listbox scroll height easily:

```css
.option-item:hover {
  background: #059669; /* Custom active green option hover */
}
```

## Accessibility

- **Live Announcements**: `aria-live="polite"` region communicates list updates to assistive technologies.
- **WAI-ARIA Combobox**: Fully structured `role="combobox"`, `role="listbox"`, and `role="option"`.
- **Keyboard Navigation**: Interactive options support keyboard focus (`tabindex="0"`).
- **WCAG AA Compliance**: High contrast background-to-text ratio.

## Responsive Behaviour

- **Desktop (600px+)**: Centered card layout with 580px max width.
- **Mobile (<480px)**: Fluid full-width autocomplete container with scrollable options list.

## Browser Compatibility

- Chrome / Edge 80+
- Firefox 75+
- Safari 14+
- iOS Safari / Android Chrome
