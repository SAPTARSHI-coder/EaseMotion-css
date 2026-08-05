# Form Validation Message Spacing

## Description

This example improves the spacing between form inputs and validation messages to create a cleaner and more readable layout on all screen sizes.

## Problem

Validation messages can appear too close to their associated input fields, especially on smaller screens, making forms feel crowded.

## Solution

Apply consistent spacing above validation messages and maintain proper spacing between form groups.

```css
.validation-message {
  display: block;
  margin-top: 8px;
  line-height: 1.4;
}

.form-group {
  margin-bottom: 22px;
}
```

## Benefits

- Improves readability
- Better mobile responsiveness
- Consistent form spacing
- Lightweight CSS-only solution