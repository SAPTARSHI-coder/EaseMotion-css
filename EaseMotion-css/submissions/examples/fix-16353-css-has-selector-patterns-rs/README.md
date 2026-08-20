# CSS `:has()` Selector Utility Patterns

This submission introduces utility patterns that leverage the revolutionary CSS `:has()` pseudo-class.

## Bug / Feature Description
For decades, CSS could only style elements "downwards" (e.g., changing a child when a parent is hovered). Styling a parent element based on its children, or styling a previous sibling, required JavaScript event listeners. The `:has()` selector, universally supported in modern browsers, solves this natively.

## Fix / Implementation Details
This PR demonstrates 4 incredibly powerful patterns using `:has()`:
- **Pattern 1**: Hoisting form validation state (`.ease-form-group:has(:invalid)`). If an input is invalid, the entire parent wrapper highlights red, and the label color changes.
- **Pattern 2**: Conditional Component Styling (`.ease-has-card:has(img)`). A card automatically removes its padding if an image is injected into it. Or, it gives itself a glowing border if a "Featured" badge is present inside.
- **Pattern 3**: Global Sibling Interaction (`.ease-has-list:has(.ease-list-item:hover)`). When hovering one item in a list, all other siblings dim seamlessly.
- **Pattern 4**: Previous sibling selection (`:has(+ .is-active)`). Changing the color of a connecting line in a stepper *before* the active step.

## How to Test
1. Open `demo.html` in your browser.
2. In the Form Validation section, observe how the entire block surrounding the invalid URL input is red.
3. In the Component section, observe the different border and padding behaviors dynamically applied to the cards based on their contents.
4. In the Sibling Dimming section, hover over a list item and watch all the *other* list items fade out.
