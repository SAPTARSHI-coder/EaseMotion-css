# CSS-Only Interactive Tabs

This is a demonstration of a fully functional, interactive tab component built exclusively with HTML and CSS, without a single line of JavaScript.

## How it works

The core of this technique is the **"CSS Radio Button Hack"**. 

1. **Hidden Radios:** We use standard HTML `<input type="radio">` elements but hide them visually with `display: none;`.
2. **Labels as Buttons:** We use `<label>` elements linked to those radio buttons using the `for` attribute. Clicking a label activates its corresponding radio button.
3. **General Sibling Combinator (`~`):** We use this CSS selector to target elements that come *after* the checked radio button in the HTML structure.
4. **State Management (`:checked`):** When a radio button is `:checked`, we can style its siblings accordingly. In this case, we show the matching content panel and move the slider indicator.

### CSS Selector Example

```css
/* If tab1 is checked, show the first section */
#tab1:checked ~ .content-sections section:nth-child(1) {
    opacity: 1;
    visibility: visible;
}
```

## Features

* **Zero JS Dependency**: Faster load times and no script execution overhead.
* **Animated State Changes**: Smooth slider indicator and fading content panels.
* **Accessible Foundation**: Uses native HTML form elements for keyboard accessibility.

## Usage

Simply open `demo.html` in your browser to interact with the tabs. The logic is entirely self-contained within `style.css`.
