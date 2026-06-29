# :optional / :required

## Description
Uses the `:optional` and `:required` pseudo-classes to visually distinguish required form fields from optional ones. Required fields have a dark red border and subtle background; optional fields use neutral styling. Badge labels (Required/Optional) provide additional clarity. The form includes text inputs, a select dropdown, and a checkbox.

## Usage
Open `demo.html` and inspect each form field. Required fields (First Name, Last Name, Email, Terms) display with a red border and "Required" badge. Optional fields (Nickname, Phone, Newsletter) show neutral styling and an "Optional" badge. Focus states also differ between the two types.

## Browser Support
`:optional` and `:required` are supported in Chrome 10+, Firefox 4+, Safari 5+, Edge 12+, and Opera 10+. They apply to `<input>`, `<select>`, and `<textarea>` elements. The custom select arrow uses an inline SVG background. Respects `prefers-reduced-motion`.
