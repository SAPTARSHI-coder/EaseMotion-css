# CSS Tab: Origami Paper Fold

A pure HTML and CSS tab component featuring an origami-inspired paper corner fold. The active tab uses a clipped triangular corner and a folded-paper effect created entirely with CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- Origami-inspired triangular corner fold
- CSS `clip-path` for the paper cut
- CSS pseudo-elements for the folded section and crease
- Smooth tab transitions
- Responsive design
- Keyboard-accessible tab controls
- Dark background compatible
- `prefers-reduced-motion` support
- No external libraries

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the tab structure:

```html
<div class="origami-tabs">

    <input
        type="radio"
        name="origami-tab"
        id="tab-home"
        checked
    >

    <input
        type="radio"
        name="origami-tab"
        id="tab-design"
    >

    <input
        type="radio"
        name="origami-tab"
        id="tab-code"
    >

    <div
        class="tab-list"
        role="tablist"
        aria-label="Content sections"
    >

        <label for="tab-home" class="tab">
            <span class="tab-icon" aria-hidden="true">
                ◇
            </span>
            <span>Home</span>
        </label>

        <label for="tab-design" class="tab">
            <span class="tab-icon" aria-hidden="true">
                ◈
            </span>
            <span>Design</span>
        </label>

        <label for="tab-code" class="tab">
            <span class="tab-icon" aria-hidden="true">
                &lt;/&gt;
            </span>
            <span>Code</span>
        </label>

    </div>

    <div class="tab-panels">

        <section class="tab-panel panel-home">
            <h2>Welcome Home</h2>
            <p>
                A clean starting point for the tab interface.
            </p>
        </section>

        <section class="tab-panel panel-design">
            <h2>Thoughtful Design</h2>
            <p>
                An origami-inspired interface created entirely with CSS.
            </p>
        </section>

        <section class="tab-panel panel-code">
            <h2>Pure CSS</h2>
            <p>
                The component works without JavaScript.
            </p>
        </section>

    </div>

</div>
```

## How It Works

The tabs use native radio inputs to maintain the selected state.

Each label is associated with a radio input:

```html
<label for="tab-design" class="tab">
    <span>Design</span>
</label>
```

When a radio input is selected, CSS sibling selectors display the corresponding panel and style the active tab.

For example:

```css
#tab-design:checked ~ .tab-list label:nth-of-type(2) {
    /* active tab styles */
}
```

No JavaScript is required.

## Origami Fold Effect

The active tab uses a clipped triangular corner to create the appearance of a paper corner being cut and folded inward.

The paper shape is created with:

```css
clip-path: polygon(
    0 0,
    calc(100% - 30px) 0,
    100% 30px,
    100% 100%,
    0 100%
);
```

The folded triangular section is generated using a pseudo-element:

```css
.tab::before {
    content: "";
}
```

A second pseudo-element creates the diagonal crease that visually separates the folded section from the main sheet.

This keeps the origami effect lightweight and entirely CSS-based.

## Customization

### Change the paper color

```css
:root {
    --paper: #f7f3ea;
}
```

### Change the folded section

```css
:root {
    --paper-fold: #d8d0c2;
    --paper-fold-light: #ebe5da;
}
```

### Change the accent color

```css
:root {
    --accent: #a86445;
}
```

### Change the transition speed

```css
.tab {
    transition:
        transform 0.45s ease,
        background 0.35s ease,
        color 0.35s ease,
        box-shadow 0.35s ease;
}
```

## Accessibility

The component uses native radio inputs as the tab state controls, allowing users to navigate the controls using the keyboard.

Keyboard focus is made visible with:

```css
:focus-visible {
    outline: 2px solid white;
}
```

Decorative icons use:

```html
aria-hidden="true"
```

so they are not unnecessarily announced by assistive technologies.

## Reduced Motion

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
    .tab,
    .tab::before,
    .tab::after,
    .tab-panel {
        transition: none;
        animation: none;
    }
}
```

This removes decorative transitions while keeping the tabs functional.

## Responsive Behavior

The component adapts to smaller screens by:

- Reducing tab height
- Reducing spacing
- Adjusting icon and text sizes
- Reducing the folded corner size
- Adjusting content padding

The three tabs remain usable on narrow screens.

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

Select different tabs to see the active paper tab change and reveal its origami-style folded corner.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This component demonstrates how CSS `clip-path`, pseudo-elements, transitions, transforms, gradients, shadows, and native form controls can create a tactile origami-inspired tab interface without JavaScript or external libraries.

The pattern can be adapted for:

- Navigation tabs
- Segmented controls
- Settings interfaces
- Dashboard sections
- Portfolio navigation
- Content switching interfaces

## Files

- `demo.html` — Demo page
- `style.css` — Tab styling and origami fold effect
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.