# Basic Setting Toggle Row

## What it does

This submission adds a simple CSS-only setting toggle row for preference panels, account settings, notification controls, and dashboard configuration sections.

It aligns a setting title, helper text, and a visual toggle control in one compact row.

## How to use it

Add the utility class to a label containing setting text, a checkbox, and a toggle track:

```html
<label class="basic-setting-toggle-row">
  <span class="setting-copy">
    <strong>Email notifications</strong>
    <span>Receive updates when activity happens.</span>
  </span>
  <input type="checkbox" checked />
  <span class="toggle-track" aria-hidden="true"></span>
</label>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across settings pages, cards, sidebars, account panels, and dashboard controls. It stays lightweight by using semantic HTML and CSS only.

## Included features

- Setting title, helper text, and toggle layout
- CSS-only checkbox toggle styling
- Checked and unchecked visual states
- Keyboard focus styling
- Divider support between rows
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the setting toggle row
- `README.md` - usage and contribution context
