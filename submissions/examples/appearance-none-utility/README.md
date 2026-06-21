# Appearance None Utility

Introduces the browser-default styling reset utility token (`.ease-appearance-none`) under issue #15067.

## Functional Mechanics

- **The Problem:** Default browser styling on form control elements like `<select>`, `<input>`, or `<button>` can vary dramatically across browsers and OS platforms, making unified styling hard to achieve.
- **The Solution:** Resets the platform-native styling from the user agent, allowing developer-defined custom CSS to apply consistently. The `.ease-appearance-none` class utilizes standard and vendor-prefixed properties to clear default controls.

## Usage Layout Structure
```html
<select class="ease-appearance-none">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

Closes #15067
