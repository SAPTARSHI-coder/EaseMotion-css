# :placeholder-shown Label

## Description
Implements a floating label pattern using the `:placeholder-shown` pseudo-class. Labels sit inside the input at half-opacity when the placeholder is visible (field empty). On focus or when content is entered, the label animates upward to a smaller position above the input. The placeholder itself is hidden (transparent) to avoid overlap.

## Usage
Open `demo.html` and click or tab into any form field. The label floats upward with a smooth transition. Type text to keep the label raised; clear the field to see it drop back. The demo includes text inputs, an email field, a password field, and a textarea.

## Browser Support
`:placeholder-shown` is supported in Chrome 47+, Firefox 51+, Safari 10.1+, Edge 79+, and Opera 34+. The floating label technique requires the input placeholder to be a single space for the "shown" state detection. Respects `prefers-reduced-motion`.
