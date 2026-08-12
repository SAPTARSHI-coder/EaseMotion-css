# CSS Credit Card Form

A three-field credit card payment form that visually auto-detects the card type (Visa, Mastercard, Amex) based on the first digit typed, using CSS attribute selectors.

## Features
- Mostly CSS implementation with a tiny inline Javascript helper.
- **Component Architecture (Documented in Code)**: 
  - **The Form Layout**: A standard 3-field layout (`Card Number`, `Expiry Date`, `CVV`). Uses CSS Flexbox for the side-by-side split row on the bottom fields.
  - **The Attribute Selector Trick**: Natively, CSS attribute selectors like `input[value^="4"]` only read the initial `value` attribute present in the HTML source, not the live value typed by the user. To bridge this gap and allow CSS to drive the UI logic, a tiny inline Javascript helper is added to the input: `oninput="this.setAttribute('value', this.value)"`.
  - **Auto-Detection Logic**: The `.card-logos` wrapper contains multiple hidden brand text logos (`VISA`, `MC`, `AMEX`) and a default generic icon. We use the CSS general sibling combinator (`~`) to link the input value to the logos. If the input value starts with `4` (Visa), `5` (Mastercard), or `3` (Amex), the CSS ruleset animates the default logo out (`opacity: 0`, `transform: translateY(-5px)`) and animates the corresponding brand logo in.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the form background, borders, and input focus states while preserving the brand colors (Visa Blue, Mastercard Red).
- Fully accessible semantic structure. Uses `<form>`, `<label>`, and `<input>` tags. The dynamically updating logos are purely visual feedback and are hidden from screen readers via `aria-hidden="true"`, ensuring they don't interrupt the user's typing flow with redundant announcements.

## Usage
Open `demo.html` in your browser. Type a number starting with 4, 5, or 3 into the Card Number field to watch the logo smoothly update.

## Files
- `demo.html`: The HTML structure defining the form, inputs, and the inline attribute syncing script.
- `style.css`: The styling, flexbox layouts, and the critical `input[value^="X"] ~ .logo` UI routing logic.
