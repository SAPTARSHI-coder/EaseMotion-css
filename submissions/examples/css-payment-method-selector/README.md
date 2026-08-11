````markdown
# CSS Payment Method Selector

A responsive and accessible payment method selector built using
HTML and CSS only.

## Features

- Pure CSS implementation
- Native radio-button keyboard navigation
- Animated selection states
- Hover and focus interactions
- Credit/Debit Card option
- UPI option
- Digital Wallet option
- Net Banking option
- Inline SVG icons
- Responsive mobile layout
- Accessible semantic HTML
- `:focus-visible` support
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## Files

```text
css-payment-method-selector/
├── demo.html
├── style.css
└── README.md
````

## How It Works

Each payment method is implemented using a native radio input
wrapped inside a label.

The actual radio input is visually hidden while remaining available
to keyboard and assistive technology users.

The visual state is controlled using the CSS sibling selector:

```css
.payment-option input:checked + .option-content {
  border-color: var(--accent);
  background: var(--accent-soft);
}
```

This allows the selected payment method to update without JavaScript.

## Accessibility

The component uses:

* Native `<input type="radio">`
* A shared radio `name` for mutually exclusive selection
* Semantic `<fieldset>` and `<legend>`
* Keyboard navigation through native radio controls
* `:focus-visible` focus indication
* Decorative SVG icons marked with `aria-hidden`
* Reduced-motion support

## Responsive Design

The selector adapts to smaller screens using CSS media queries.

On mobile:

* Payment options remain easy to tap.
* The payment button becomes full width.
* Header content stacks vertically.
* Text and spacing scale appropriately.

## Customization

The primary visual values are stored as CSS custom properties:

```css
:root {
  --accent: #5b5bd6;
  --accent-soft: #f0efff;
  --text: #172033;
  --muted: #667085;
  --border: #d9e0ea;
}
```

These variables can be changed to match a project's design system.

## Usage

Copy `demo.html` and `style.css` into your project.

No JavaScript or external library is required for selecting
a payment method.

The Continue button is intentionally non-functional because this
submission demonstrates the UI component only.

## Browser Support

The component uses standard HTML and CSS features including:

* CSS custom properties
* CSS transitions
* CSS media queries
* `:checked`
* `:focus-visible`
* `prefers-reduced-motion`
* Inline SVG

## Contribution

This example was created for the EaseMotion CSS project.

Issue: #68622

```
```
