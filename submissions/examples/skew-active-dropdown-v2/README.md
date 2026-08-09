# CSS Skew-Active Dropdown

A responsive fintech dashboard dropdown built using pure HTML and CSS.

The component demonstrates a **Skew-Active** interaction where the dropdown enters with a skewed transform and smoothly returns to its normal position when activated.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Skew entrance animation
* Smooth active-state transition
* Rotating dropdown arrow
* Hover and focus interactions
* Keyboard-friendly navigation
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties
* `prefers-reduced-motion` support

## Folder Structure

```text
skew-active-dropdown/
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

No JavaScript or build tools are required.

## How It Works

The dropdown starts with a horizontal skew:

```css
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: skewX(-12deg) translateY(-10px);
}
```

When the dropdown is hovered or focused, the transform changes to its normal position:

```css
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: skewX(0) translateY(0);
}
```

This creates the Skew-Active effect using only CSS.

## Menu Item Interaction

Individual menu items also use a small skew movement when hovered or focused:

```css
.dropdown-menu a:hover,
.dropdown-menu a:focus {
  transform: skewX(-5deg) translateX(4px);
}
```

## CSS Custom Properties

The main visual properties are controlled through CSS custom properties.

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

**Desktop:** The dropdown appears beside the dashboard heading and cards are displayed in three columns.

**Tablet:** The header and cards adapt to a narrower layout.

**Mobile:** The dropdown and cards use the available screen width.

## Accessibility

The dropdown uses semantic navigation and supports keyboard interaction through `:focus-within`.

Reduced-motion preferences are respected using:

```css
@media (prefers-reduced-motion: reduce)
```

Animations and transitions are disabled when the user prefers reduced motion.

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59370 — Add CSS Skew-Active Dropdown for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
