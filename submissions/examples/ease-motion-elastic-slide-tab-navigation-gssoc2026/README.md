# Elastic Slide Tab Navigation - EaseMotion CSS

A zero-JS CSS radio button driven tab bar featuring elastic indicator sliding and smooth panel fade-in transitions.

## 1. What does this do?
This component renders interactive tabs where the active selection pill slides dynamically across tab items using custom cubic-bezier elastic timing.

## 2. How is it used?
Link `style.css` and use standard CSS radio input sibling selectors:

```html
<link rel="stylesheet" href="style.css">

<div class="tabs-container">
  <input type="radio" id="tab-1" name="tabs" checked>
  <div class="tabs-nav">
    <label for="tab-1">Tab 1</label>
    <div class="active-indicator"></div>
  </div>
</div>
```

## 3. Why is it useful?
- **Zero JavaScript:** Leverages radio `:checked` sibling selectors (`~`) for pure declarative UI state management.
- **Spring Indicator Motion:** Employs elastic easing curves (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`).
- **Accessible Structure:** Includes ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`).
