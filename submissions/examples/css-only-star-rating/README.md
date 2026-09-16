# CSS-Only Star Rating

An interactive 5-star rating component built entirely with HTML and CSS, requiring absolutely no JavaScript.

## How it works

This component uses a clever combination of the **CSS Radio Button Hack** and the `flex-direction: row-reverse` layout property.

1.  **Hidden Radios:** We use five `<input type="radio">` elements, one for each star rating, and hide them.
2.  **Star Labels:** We use `<label>` elements linked to the radios. We style these labels with SVG background images of stars.
3.  **The `row-reverse` Trick:** In HTML, the 5th star comes *first*, followed by the 4th, 3rd, 2nd, and 1st. We place them in a flex container with `flex-direction: row-reverse`. This visually displays them from 1 to 5, left to right.
4.  **Why `row-reverse`?:** CSS sibling selectors (`~`) only select elements that come *after* the current element in the DOM. By reversing the DOM order, when you hover or click the 3rd star, the 2nd and 1st stars actually come *after* it in the HTML structure. This allows us to use `label:hover ~ label` and `input:checked ~ label` to "fill in" all the stars to the left of the interacted one.

## Features

*   **Zero JS**: No scripts needed for state management or hover effects.
*   **Interactive**: Supports both hover (preview) and checked (selected) states.
*   **Modern CSS**: Utilizes the `:has()` pseudo-class to show a thank-you message when any rating is selected.

## Usage

Simply open `demo.html` in your browser. All styles and logic are in `style.css`.
