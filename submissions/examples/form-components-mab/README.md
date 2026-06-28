# Form Components Suite (form-components-mab)

## 1. What does this do?

Provides a complete, highly accessible, animation-first suite of form controls including text inputs, floating labels, validation states, toggles, custom checkboxes, custom radio buttons, select dropdowns, and textareas.

## 2. How is it used?

Add the corresponding class names directly to your markup:

```html
<!-- Input fields with validation states -->
<input class="input" type="text" placeholder="Default Input" />
<input class="input input-error" type="text" placeholder="Error state" />
<input class="input input-success" type="text" placeholder="Success state" />

<!-- Floating Labels -->
<div class="field">
  <input class="input" id="email" type="text" placeholder=" " />
  <label class="label" for="email">Email Address</label>
</div>

<!-- Toggles -->
<label class="toggle">
  <input type="checkbox" />
  <span class="toggle-thumb"></span>
</label>

<!-- Custom Checkbox & Radio -->
<label class="checkbox">
  <input type="checkbox" />
  <span class="checkbox-mark"></span>
  Remember Me
</label>

<label class="radio">
  <input type="radio" name="option" />
  <span class="radio-mark"></span>
  Standard Option
</label>

<!-- Select -->
<select class="select">
  <option>Choose an option</option>
</select>

<!-- Textarea -->
<textarea class="textarea" rows="4" placeholder="Your message..."></textarea>
```

## 3. Why is it useful?

EaseMotion CSS lacks built-in styles for form controls, forcing developers to implement styling manually. Forms are the foundation of interactive web apps. This submission solves that gap by providing a ready-to-use form component suite.

Key highlights:
- **Design Token Integration**: Dynamically leverages spacing, color, and border-radius tokens.
- **Micro-Animations**: Uses fluid `cubic-bezier` timing curves for focus states, toggles, checkbox scales, and floating label slides.
- **Accessibility (A11y)**: Fully supports keyboard focus indicators (`:focus-visible`), outlines, and disabled states.
- **Dark Mode Ready**: Automatically adapts to system settings using CSS variable inheritance.
