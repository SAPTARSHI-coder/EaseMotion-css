# CSS Horizontal Scroll Section

A responsive **horizontal scrolling content section** built entirely with HTML5 and CSS3. It allows users to browse a collection of cards horizontally while the surrounding page continues to scroll vertically.

The component is lightweight, touch-friendly, keyboard-accessible, and requires no JavaScript.

## ✨ Features

* Pure HTML5 and CSS3
* No JavaScript required
* Native horizontal scrolling
* Normal vertical page scrolling before and after the section
* CSS scroll snapping
* Responsive desktop, tablet, and mobile layouts
* Touch-friendly scrolling
* Keyboard focus support
* Custom scrollbar styling
* Smooth card hover effects
* CSS Custom Properties
* `prefers-reduced-motion` support
* No external dependencies

## 📂 Folder Structure

```text
css-horizontal-scroll/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern browser.
2. Scroll down to the horizontal showcase section.
3. On desktop, use the mouse wheel with horizontal scrolling support or drag the scrollbar.
4. On touch devices, swipe horizontally across the cards.
5. Keyboard users can focus the scroll container and navigate through the content.
6. Customize the cards and styling through `style.css`.

## 🧱 Basic Structure

The horizontal section uses a dedicated scroll container:

```html
<div
    class="horizontal-track"
    tabindex="0"
    aria-label="Horizontally scrollable collection"
>
    <article class="scroll-card">
        <h3>Motion</h3>
        <p>
            Smooth CSS animations for modern interfaces.
        </p>
    </article>

    <article class="scroll-card">
        <h3>Components</h3>
        <p>
            Reusable CSS interface patterns.
        </p>
    </article>
</div>
```

The cards are placed inside a horizontal flex container.

## ↔️ Horizontal Scrolling

The main scrolling behavior is created with:

```css
.horizontal-track {
    display: flex;

    overflow-x: auto;

    overflow-y: hidden;

    scroll-snap-type: x mandatory;

    scroll-behavior: smooth;
}
```

Each card uses:

```css
.scroll-card {
    flex: 0 0 var(--card-width);

    scroll-snap-align: start;
}
```

This allows the cards to remain in a single horizontal row while snapping naturally into position.

## 📐 CSS Custom Properties

The component provides several variables for customization.

| Variable         | Description                   |
| ---------------- | ----------------------------- |
| `--bg`           | Page background color         |
| `--surface`      | Card background color         |
| `--surface-soft` | Secondary background          |
| `--primary`      | Main accent color             |
| `--primary-soft` | Soft accent background        |
| `--text`         | Primary text color            |
| `--muted`        | Secondary text color          |
| `--border`       | Border color                  |
| `--radius`       | Card border radius            |
| `--transition`   | Animation transition duration |
| `--card-width`   | Desktop card width            |
| `--track-gap`    | Gap between horizontal cards  |
| `--shadow`       | Card shadow                   |

### Example

```css
:root {
    --primary: #2563eb;
    --primary-soft: #eff6ff;

    --card-width: 320px;
    --track-gap: 1.5rem;

    --radius: 22px;
    --transition: 0.35s ease;
}
```

## 📱 Responsive Behavior

### Desktop

Cards are displayed in a wide horizontal row with a fixed card width.

### Tablet

Card dimensions and spacing are reduced to make better use of the available viewport.

### Mobile

Cards use a viewport-relative width so that part of the next card remains visible. This provides a visual hint that additional content is available horizontally.

Example:

```css
@media (max-width: 600px) {
    .scroll-card {
        flex-basis: 82vw;
    }
}
```

## 🖱️ Touch Scrolling

The component uses native browser scrolling and is therefore naturally compatible with touch devices.

```css
.horizontal-track {
    -webkit-overflow-scrolling: touch;

    overscroll-behavior-x: contain;
}
```

Users can swipe horizontally without requiring JavaScript.

## 🎯 Scroll Snap

CSS Scroll Snap makes each card settle into a clean position after scrolling:

```css
.horizontal-track {
    scroll-snap-type: x mandatory;
}

.scroll-card {
    scroll-snap-align: start;
}
```

This improves usability when browsing multiple cards.

## ⌨️ Keyboard Accessibility

The horizontal scroll container includes:

```html
tabindex="0"
```

This makes the container focusable so keyboard users can interact with the scroll area.

A visible focus indicator is provided:

```css
.horizontal-track:focus-visible {
    outline: 3px solid
        rgba(37, 99, 235, 0.3);
}
```

## ♿ Accessibility

Accessibility considerations include:

* Semantic `<main>` and `<section>` elements
* Semantic `<article>` cards
* Descriptive headings
* Accessible section labels
* Focusable horizontal scroll container
* Visible `:focus-visible` state
* Decorative icons marked with `aria-hidden`
* Native browser scrolling
* Reduced-motion support

## ✨ Card Animations

Cards have a lightweight hover effect:

```css
.scroll-card:hover {
    transform: translateY(-8px);
}
```

The card icon also receives a subtle scale and rotation:

```css
.scroll-card:hover .card-icon {
    transform:
        rotate(-6deg)
        scale(1.08);
}
```

These effects provide visual feedback without JavaScript.

## 📊 Scroll Indicator

A small animated progress indicator appears below the horizontal track.

It is created entirely with CSS:

```css
@keyframes scrollProgress {
    0% {
        transform: translateX(-120%);
    }

    50% {
        transform: translateX(250%);
    }

    100% {
        transform: translateX(-120%);
    }
}
```

The indicator is decorative and does not control the scroll position.

## 🌙 Reduced Motion

The component respects the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto;
    }
}
```

This disables decorative animations and smooth scrolling while keeping the horizontal scrolling functionality available.

## ⚡ Performance

The component is designed to remain lightweight:

* No JavaScript
* No animation libraries
* No external fonts
* No external assets
* CSS transitions and keyframes only
* Native browser scrolling
* CSS Scroll Snap

## 🌐 Browser Support

The component is intended for modern browsers supporting:

* CSS Flexbox
* CSS Custom Properties
* CSS Scroll Snap
* CSS `:focus-visible`
* CSS Animations
* CSS Media Queries

Supported browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## 🎯 Suitable Use Cases

This component can be used for:

* Portfolio projects
* Product showcases
* Feature collections
* Service cards
* Technology lists
* Team member showcases
* Case studies
* Image galleries
* Project timelines
* Horizontal content explorers

## 📄 License

This example follows the same license as the EaseMotion CSS project.
