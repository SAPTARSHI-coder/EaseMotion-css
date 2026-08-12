# CSS Card Deck Fan

A pure CSS animated card deck that smoothly fans out when the user hovers over the deck or focuses one of the cards using the keyboard.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth card fan animation
* Individual card hover/focus interaction
* Keyboard accessible
* Responsive on desktop, tablet, and mobile
* Supports `prefers-reduced-motion`
* Uses CSS transforms and transitions

## Files

```text
css-card-deck-fan/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The cards are positioned on top of each other using absolute positioning.

When the parent `.card-deck` is hovered or contains a focused card, each card receives a different:

* `translate()`
* `rotate()`
* `z-index`

value.

This creates the visual effect of a physical deck of cards fanning outward.

## Accessibility

The component includes:

* Semantic `<main>`, `<header>`, `<section>`, and `<article>` elements
* Descriptive `aria-label` for the card collection
* Keyboard focus using `tabindex="0"`
* Visible `:focus-visible` styles
* `aria-hidden="true"` on decorative icons
* Reduced-motion support using `prefers-reduced-motion`

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then place the card deck markup inside your page.

No JavaScript or external library is required.

## Browser Support

The component uses widely supported CSS features including:

* CSS transforms
* CSS transitions
* CSS Grid/Flexbox
* CSS custom properties
* `:focus-visible`
* `prefers-reduced-motion`

## Customization

You can customize the deck by changing the CSS variables:

```css
:root {
    --card-width: 210px;
    --card-height: 290px;
    --transition: 600ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

The card colors and fan angles can also be modified directly in `style.css`.

## Contribution

This example was created for the EaseMotion CSS project as a CSS-only animated component.

Related issue: #68309
