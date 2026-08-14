# Transition Specific Properties

## What does this do?

Demonstrates using specific transition properties instead of `transition: all` for hover animations.

## How is it used?

Add the class to any HTML element:

```html
<div class="hover-grow">Your content here</div>
```

## Why is it useful?

Using `transition: all` can cause unnecessary animations and may override transitions already defined by the user. Using specific properties such as `transform`, `opacity`, or `color` improves performance and makes animations more predictable.

This approach is useful for hover effects such as:

* Buttons
* Cards
* Interactive UI components
* Navigation items

## Tech Stack

* HTML
* CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.

## Contribution Notes

This submission demonstrates best practices for hover transitions by replacing `transition: all` with property-specific transitions.
