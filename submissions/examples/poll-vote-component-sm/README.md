# CSS Poll Vote Component

A responsive and accessible poll component built entirely with HTML and CSS. It provides animated vote bars, percentage results, vote counts, selection states, keyboard focus styles, and responsive behavior without JavaScript or external dependencies.

## Features

* Pure HTML and CSS
* No JavaScript
* Animated vote bars
* CSS-only selection interaction
* Percentage-based results
* Vote counts
* Selected option indicator
* Hover animation
* Keyboard accessibility
* Visible `:focus-visible` state
* Responsive layout
* Reduced-motion support
* No external libraries or CDNs

## Folder Structure

```text
submissions/examples/poll-vote-component-sm/
├── demo.html
├── style.css
└── README.md
```

## Usage

Add the stylesheet to your HTML:

```html
<link rel="stylesheet" href="style.css">
```

The component uses standard radio inputs so users can select one poll option.

```html
<label class="poll-option">
  <input type="radio" name="frontend" value="react">

  <span class="option-content">
    <span class="option-name">React</span>

    <span class="vote-track">
      <span class="vote-bar react-bar"></span>
    </span>
  </span>
</label>
```

## How It Works

Each poll option contains a visually hidden radio input.

When an option is selected:

* The selected option receives an accent border.
* The selected option receives a highlighted background.
* The percentage becomes more prominent.
* A check indicator appears.
* The vote bar animates.
* Other options are visually de-emphasized.

The interaction is implemented using CSS selectors such as:

```css
input:checked + .option-content
```

and:

```css
.poll-form:has(input:checked)
```

No JavaScript is required for the visual interaction.

## Accessibility

The component uses native radio controls to provide keyboard and screen-reader-friendly selection behavior.

Accessibility considerations include:

* Semantic `<form>` element
* Native radio inputs
* Associated `<label>` elements
* Visible keyboard focus state
* `:focus-visible` support
* Descriptive heading structure
* Reduced-motion support using `prefers-reduced-motion`
* No interaction that depends exclusively on hover

## Responsive Design

The component adapts to smaller screens by:

* Reducing card padding
* Adjusting typography
* Maintaining full-width vote bars
* Allowing footer content to wrap
* Preserving touch-friendly option areas

## Browser Support

The component uses modern CSS features including `:has()` for enhanced CSS-only state styling.

Modern browsers with `:has()` support are recommended for the complete experience.

The core poll selection still uses standard HTML radio controls.

## Customization

Vote percentages can be changed directly in the CSS:

```css
.react-bar {
  width: 42%;
}

.vue-bar {
  width: 28%;
}

.angular-bar {
  width: 18%;
}

.svelte-bar {
  width: 12%;
}
```

Colors, spacing, borders, shadows, and typography can also be customized through the CSS variables defined in `:root`.

## Testing

The demo can be tested without a development server.

Open `demo.html` directly in a modern browser and verify:

* Poll options can be selected.
* Keyboard navigation works.
* Selected options receive visual feedback.
* Vote bars animate.
* Hover states work.
* The layout responds on mobile screens.
* Reduced-motion preferences are respected.

## Contribution

This component is submitted as part of the EaseMotion CSS examples collection.

## License

This contribution follows the license and contribution requirements of the EaseMotion CSS repository.
