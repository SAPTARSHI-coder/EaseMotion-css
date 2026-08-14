# Animated Radio (`ease-radio-animated`)

A custom radio button component featuring a satisfying inner scale animation and an interactive ripple effect. Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS**: Requires zero JavaScript. It works by hiding the native `<input type="radio">` and using the `:checked` pseudo-class to animate adjacent sibling spans.
- **Bouncy Fill**: The inner circle utilizes a `cubic-bezier` timing function to quickly pop in and slightly overshoot its target size for a premium, bouncy feel.
- **Ripple Effect**: An `@keyframes` animation triggers exclusively when the radio button is selected, creating a brief, expanding colored ripple behind the component.
- **Accessible**: Uses `<label>` wrapping so clicking the text selects the radio, and includes `:focus-visible` styles for keyboard navigation.

## 🛠️ Usage

Wrap the native radio input and the custom spans inside a `.ease-radio` label container. Ensure the input is placed *before* the `.ease-radio-circle`.

```html
<label class="ease-radio">
  <input type="radio" name="options" value="1" class="ease-radio-input" />
  <span class="ease-radio-circle"></span>
  <span class="ease-radio-label">Option 1</span>
</label>
