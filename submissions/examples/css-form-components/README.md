# CSS Form Components

**What does this do?**
This adds beautiful, accessible, custom-styled form components to EaseMotion CSS, completing the v1.1 roadmap goal. It includes styled text inputs, checkboxes, and radio buttons using pure CSS and zero JavaScript.

**How is it used?**

**1. Text Inputs**
```html
<input type="text" class="ease-input" placeholder="Enter your name">
```

**2. Checkboxes**
```html
<label class="ease-checkbox-wrapper">
  <input type="checkbox" class="ease-checkbox-input">
  <span class="ease-checkbox-box"></span>
  Remember me
</label>
```

**3. Radio Buttons**
```html
<label class="ease-radio-wrapper">
  <input type="radio" name="plan" class="ease-radio-input">
  <span class="ease-radio-circle"></span>
  Premium Plan
</label>
```

**Why is it useful?**
Default browser form controls are notoriously hard to style and look different across operating systems. This submission provides a consistent, premium design language for forms that perfectly matches the `EaseMotion CSS` philosophy. The checkboxes and radio buttons use the `:checked` pseudo-class for smooth, accessible micro-animations.
