# CSS field-sizing Demo

## 1. What does this do?
This component renders an interactive form containing text fields and textareas that dynamically resize horizontally or vertically based on their input length using the native CSS `field-sizing` property.

## 2. How is it used?
Configure standard form inputs and map the `field-sizing` property in CSS:
```html
<form>
  <!-- Horizontal Auto-size Input -->
  <input type="text" class="form-input auto-size-input" placeholder="Type here...">

  <!-- Vertical Auto-size Textarea -->
  <textarea class="form-input auto-size-textarea" placeholder="Type lines..."></textarea>
</form>
```

```css
.auto-size-textarea {
  field-sizing: content;
  min-height: 80px;
  max-height: 260px;
}
```

## 3. Why is it useful?
It introduces native form auto-sizing capabilities leveraging modern CSS Baseline standards, replacing heavy, resource-intensive JavaScript character calculations and input resize listener scripts.
