# CSS Emoji Picker Input

A pure-CSS implementation of a chat input field featuring an integrated, animated emoji picker popup. The toggle state of the picker is managed entirely using HTML and CSS, requiring no JavaScript event listeners for the open/close interactions.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a realistic chat input UI. Inside the text input field, there is a smiley face icon. Clicking this icon smoothly animates a floating emoji picker popup into view (using a scale-up and fade-in transition). Clicking the icon again smoothly closes the popup. 

*Note: Because this is a pure CSS demonstration, clicking the actual emojis will not insert them into the input field, as modifying input values requires JavaScript.*

### 2. How is it used?

The implementation uses the "Checkbox Hack". A hidden `<input type="checkbox">` stores the open/close state of the popup. The smiley face icon acts as the `<label>` for this checkbox. When the checkbox is checked, the CSS uses the general sibling combinator (`~`) to target the `.emoji-picker-popup` and trigger its entrance animation.

```html
<div class="emoji-input-wrapper">
  
  <!-- The Text Input -->
  <input type="text" class="message-input">
  
  <!-- The Hidden State Manager -->
  <input type="checkbox" id="emoji-toggle" class="emoji-checkbox">
  
  <!-- The Toggle Button -->
  <label for="emoji-toggle" class="emoji-trigger">😊</label>
  
  <!-- The Popup Content -->
  <div class="emoji-picker-popup">
    <!-- Emoji Grid -->
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can theme the picker and input to match your application via root variables:

```css
:root {
  --picker-bg: #ffffff;
  --picker-border: #e2e8f0;
  --input-focus: #3b82f6; /* Focus ring and active states */
}
```

### 3. Why is it useful?

Building dropdowns, popovers, and pickers usually involves importing a JavaScript library (like React-Popper or Floating-UI) to handle state and positioning. By utilizing the CSS Checkbox Hack and `position: absolute`, you can create highly robust UI states natively in the browser. This approach is incredibly lightweight, runs interaction state on the UI thread without latency, and is perfect for prototyping, lightweight templates, or environments where minimizing JavaScript payload is critical. Furthermore, the component includes `@media (prefers-reduced-motion: reduce)` to disable the scale animation for accessibility compliance.
