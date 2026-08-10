# Ease Tag Cloud Display

A responsive and accessible tag cloud component built with pure HTML and CSS. Tags are displayed with different visual weights to emphasize popular topics while providing smooth hover interactions and keyboard accessibility.

## Features

- Responsive flexbox-based tag cloud layout
- Multiple tag weight levels (Small, Medium, Large, Extra Large)
- Smooth hover and focus animations
- Keyboard accessibility with `:focus-visible`
- Semantic HTML structure using lists and links
- Dark theme design
- Supports `prefers-reduced-motion`
- No JavaScript required

## Files

```
49010-ease-tag-cloud-display-vk/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<ul class="ease-tag-cloud">
    <li><a class="ease-tag ease-tag--xl" href="#">CSS</a></li>
    <li><a class="ease-tag ease-tag--lg" href="#">Animation</a></li>
    <li><a class="ease-tag ease-tag--md" href="#">Accessibility</a></li>
    <li><a class="ease-tag ease-tag--sm" href="#">Grid</a></li>
</ul>
```

## Tag Weight Classes

| Class | Description |
| ------ | ----------- |
| `.ease-tag--sm` | Small emphasis |
| `.ease-tag--md` | Medium emphasis |
| `.ease-tag--lg` | High emphasis |
| `.ease-tag--xl` | Highest emphasis |

## Highlights

- Variable tag sizes create a clear visual hierarchy.
- Staggered positioning gives the layout a natural cloud-like appearance.
- Smooth hover and keyboard focus interactions.
- Responsive layout for different screen sizes.
- Pure HTML and CSS implementation.

## Accessibility

- Semantic `<ul>` and `<li>` structure.
- Keyboard navigation using `:focus-visible`.
- Respects the user's `prefers-reduced-motion` preference.
- High-contrast colors for better readability.

## How to Run

Open `demo.html` in a modern web browser.

No installation or build process is required.

## Notes

- Built entirely with HTML and CSS.
- No JavaScript is required.
- Designed as a reusable tag cloud component for documentation, portfolios, dashboards, blogs, and technology showcases.