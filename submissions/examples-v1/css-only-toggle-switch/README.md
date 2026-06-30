# CSS-Only Toggle Switch

A beautiful, fully functional toggle switch component built with 100% HTML and CSS. No JavaScript required.

## How it works

This component leverages the **"Checkbox Hack"**.

1.  **Hidden Checkbox:** The native HTML `<input type="checkbox">` is visually hidden (opacity 0, width 0).
2.  **Styled Label/Slider:** The visual toggle switch is created using a `<label>` element containing a `<span>` for the slider. Clicking the label natively toggles the hidden checkbox.
3.  **`:checked` Pseudo-class:** We use CSS to check if the hidden input is `:checked`. If it is, we apply styles to the adjacent sibling (`+ .slider`) to change its background color and translate the inner circle (using the `::before` pseudo-element).
4.  **Transitions:** CSS transitions provide the smooth sliding animation between the on and off states.

## Features

- **Zero JavaScript**: Completely relies on native HTML behavior and CSS state selectors.
- **Accessible**: Uses standard form inputs, making it keyboard navigable (supports `focus` state styles).
- **Customizable**: Easy to adapt sizes, colors, and border radii using the provided CSS variables or direct edits.

## Usage

Open `demo.html` in your browser. The styles and interaction logic are self-contained in `style.css`.
