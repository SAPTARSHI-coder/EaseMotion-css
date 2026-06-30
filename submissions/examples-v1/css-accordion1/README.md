# CSS-Only Accordion

A smooth expanding FAQ accordion using native `<details>`/`<summary>`
elements with the CSS Grid `grid-template-rows` transition technique
— no JavaScript, no fixed heights.

## Structure

css-accordion/

├── demo.html

├── style.css

└── README.

## Usage

```html
<details class="accordion-item">
  <summary class="accordion-summary">
    <span class="summary-icon">★</span>
    <span class="summary-title">Your question here?</span>
    <span class="summary-arrow">›</span>
  </summary>
  <div class="accordion-body">
    <div class="accordion-content">
      <p>Your answer goes here.</p>
    </div>
  </div>
</details>
```

Add `open` attribute to expand by default:

```html
<details class="accordion-item" open></details>
```

## How It Works

The grid expansion technique avoids fixed heights entirely:

```css
.accordion-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease;
}

details[open] .accordion-body {
  grid-template-rows: 1fr;
}

.accordion-content {
  overflow: hidden;
}
```

`grid-template-rows` transitions from `0fr` to `1fr`, expanding the
inner content smoothly regardless of content height.

## Features

- Pure HTML & CSS — no JavaScript
- Smooth height animation via CSS Grid trick
- Rotating arrow indicator
- Active border highlight on open item
- `<code>` styling inside content
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases

- FAQ sections
- Documentation pages
- Settings panels
- Onboarding guides
