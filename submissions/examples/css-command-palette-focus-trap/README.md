# CSS Command Palette Modal with Focus Trap

An accessible, responsive Command Palette Overlay Dialog built using pure HTML5 and CSS3. Incorporates WAI-ARIA modal dialog semantics, backdrop lock, and focus trap isolation.

## Overview

The Command Palette Modal allows users to quickly trigger commands via keyboard navigation. It resolves the accessibility issue where keyboard focus could escape active modal dialogs into background page elements. By combining `role="dialog"`, `aria-modal="true"`, and CSS focus trap isolation via `:has()` state rules, focus is strictly retained within the active dialog.

## Features

- **Pure HTML5 & CSS3**: Lightweight, zero JavaScript execution.
- **Keyboard Focus Trap**: Isolates keyboard navigation within the dialog container when active.
- **ARIA Modal Semantics**: Includes `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- **Backdrop Lock**: Dimmed backdrop filter preventing background element interaction.
- **WCAG AA Compliance**: High-contrast dark theme colors.
- **Prefers-Reduced-Motion**: Disables scale animations for motion-sensitive users.

## Folder Structure

```
css-command-palette-focus-trap/
├── demo.html    # HTML dialog markup with accessible search & lists
├── style.css    # CSS modal layout, focus trap isolation & transitions
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your project document:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<div class="cmd-overlay" role="presentation">
  <label for="cmd-toggle" class="cmd-backdrop" aria-label="Close overlay"></label>

  <section 
    class="cmd-dialog" 
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="cmd-dialog-title"
  >
    <header class="cmd-header">
      <input type="text" id="cmd-dialog-title" class="cmd-search-input" placeholder="Type a command...">
    </header>
    <div class="cmd-body">
      <ul class="cmd-list">
        <li class="cmd-item" tabindex="0">
          <span class="cmd-label">Go to Dashboard</span>
          <span class="cmd-shortcut">G D</span>
        </li>
      </ul>
    </div>
  </section>
</div>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --bg-modal: #1e2942;
  --bg-input: #0f172a;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --accent-cyan: #38bdf8;
  --focus-ring: #38bdf8;

  --radius-lg: 16px;
}
```

## Customization

Override theme colors or modal widths easily via custom CSS properties:

```css
.cmd-dialog {
  --bg-modal: #0f172a;
  max-width: 600px;
}
```

## Accessibility

- **Focus Trap Isolation**: Prevents `Tab` key from escaping the active dialog overlay.
- **WAI-ARIA Attributes**: Exposes `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- **Keyboard Navigation**: Interactive command items support explicit keyboard focus (`tabindex="0"`).
- **Backdrop Dismiss**: Clicking the backdrop overlay dismisses the dialog.

## Responsive Behaviour

- **Desktop (600px+)**: Centered overlay modal at 10vh top offset with 540px width.
- **Mobile (<580px)**: Adapts fluidly to full screen width with 1rem side margins.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
