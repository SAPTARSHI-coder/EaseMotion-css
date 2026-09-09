# Floating Tab Bar with Pastel Styling (#91047)

## What does this do?
Provides a floating, glassmorphic bottom navigation dock featuring soft pastel accent highlights, micro-animations, and responsive tab items.

## How is it used?
Wrap radio inputs and labels inside `.floating-tab-container` and `.floating-tab-bar`:

```html
<nav class="floating-tab-container" aria-label="Floating main navigation">
  <div class="floating-tab-bar" role="tablist">
    <div class="tab-item" role="presentation">
      <input type="radio" id="tab-home" name="floating-nav" role="tab" checked>
      <label for="tab-home" class="tab-label">
        <svg class="tab-icon" viewBox="0 0 24 24">...</svg>
        <span>Home</span>
      </label>
    </div>
    <div class="tab-item" role="presentation">
      <input type="radio" id="tab-search" name="floating-nav" role="tab">
      <label for="tab-search" class="tab-label">
        <svg class="tab-icon" viewBox="0 0 24 24">...</svg>
        <span>Search</span>
      </label>
    </div>
  </div>
</nav>
```

Custom pastel color palette tokens can be configured using CSS variables:
```css
.floating-tab-container {
  --pastel-mint: #d1fae5;
  --pastel-lavender: #e0e7ff;
  --pastel-rose: #ffe4e6;
  --pastel-peach: #fef3c7;
  --pastel-blue: #e0f2fe;
}
```

## Why is it useful?
Floating bottom navigation bars improve mobile usability and ergonomic access while giving modern web apps a sleek, floating aesthetic. The soft pastel palette provides high visual clarity, calm aesthetic feedback, and smooth state indicators without harsh contrast shifts.
