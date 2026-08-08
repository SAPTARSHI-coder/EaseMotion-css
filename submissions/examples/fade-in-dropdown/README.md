# CSS Fade-In Dropdown

A responsive fintech dashboard dropdown built using pure HTML and CSS.

The dropdown uses CSS transitions to smoothly fade and slide into view when the user hovers over or focuses on the menu button.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Fade-in dropdown animation
* Slide-down transition
* Keyboard-friendly focus interaction
* Rotating dropdown arrow
* Hover effects
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties
* `prefers-reduced-motion` support

## Folder Structure

```text
fade-in-dropdown/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Open `demo.html` in a browser.

No build tools or JavaScript are required.

## How It Works

The dropdown is initially hidden using:

```css
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
}
```

When the user hovers over the dropdown or focuses an element inside it, the menu becomes visible:

```css
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

The transition creates the fade-in and slide-down effect.

## CSS Custom Properties

The main colors can be customized through `:root`.

| Property            | Description                  |
| ------------------- | ---------------------------- |
| `--background`      | Page background              |
| `--card-background` | Dropdown and card background |
| `--text`            | Primary text                 |
| `--muted`           | Secondary text               |
| `--accent`          | Accent color                 |
| `--success`         | Positive value color         |
| `--border`          | Border color                 |

Example:

```css
:root {
  --accent: #38bdf8;
}
```

## Responsive Design

**Desktop:** Dropdown appears beside the dashboard heading.

**Tablet:** Dropdown moves below the heading and dashboard cards become stacked.

**Mobile:** Dropdown and cards use the full available width.

## Accessibility

The dropdown supports keyboard interaction through `:focus-within`.

Reduced-motion preferences are also respected:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, transitions are disabled.

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59372 — Add CSS Fade-In Dropdown for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
