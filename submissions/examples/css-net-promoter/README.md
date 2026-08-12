````markdown
# CSS Net Promoter Score

A minimalist **Net Promoter Score (NPS)** interface built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- 0–10 NPS rating scale
- NPS score display
- Detractors, Passives, and Promoters categories
- Hover effects
- Responsive design
- Minimal dark-tech UI
- Reduced-motion support

## File Structure

```text
css-net-promoter-score/
│
├── demo.html
├── style.css
└── README.md
````

## How to Run

1. Create a folder named `css-net-promoter-score`.
2. Create the three files:

   * `demo.html`
   * `style.css`
   * `README.md`
3. Add the corresponding code.
4. Open `demo.html` in a browser.

No installation or dependencies are required.

## NPS Scale

The component uses the standard NPS scale:

| Score | Category   |
| ----: | ---------- |
|   0–6 | Detractors |
|   7–8 | Passives   |
|  9–10 | Promoters  |

## Change the Score

In `demo.html`, modify:

```html
<div class="score">
    <strong>72</strong>
    <span>/ 100</span>
</div>
```

For example:

```html
<div class="score">
    <strong>85</strong>
    <span>/ 100</span>
</div>
```

## Change Active Ratings

The `active` class controls the highlighted rating:

```html
<div class="scale-item active">
    <span class="number">9</span>
    <span class="dot"></span>
</div>
```

The strongest highlighted value uses:

```html
<div class="scale-item active highlight">
    <span class="number">10</span>
    <span class="dot"></span>
</div>
```

Since this is a CSS-only demo, changing the displayed score does not automatically change the highlighted rating.

## Customization

### Change Background

```css
:root {
    --background: #08090b;
}
```

### Change Card Color

```css
:root {
    --surface: #111318;
}
```

### Change Border

```css
:root {
    --border: #292d34;
}
```

### Change Text Color

```css
:root {
    --text: #f3f4f5;
}
```

## Technologies

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Gradients
* CSS Transitions
* CSS Media Queries

## Responsive Design

The component adapts to different screen sizes.

**Desktop:** 11-point scale with three category cards.

**Tablet:** Category cards switch to a single-column layout.

**Mobile:** Scale indicators and typography become smaller to fit the screen.

## Accessibility

Reduced-motion preferences are supported using:

```css
@media (prefers-reduced-motion: reduce) {
    .dot,
    .number,
    .category {
        transition: none;
    }
}
```

## Browser Support

Works in modern:

* Chrome
* Edge
* Firefox
* Safari

## License

Free to use, modify, and integrate into personal, educational, and open-source projects.

```
```
