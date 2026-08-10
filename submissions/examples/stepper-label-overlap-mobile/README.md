# Stepper Label Overlap Mobile Fix

## Description

This example prevents stepper labels from overlapping on smaller screens by allowing each step to wrap gracefully while maintaining consistent alignment and spacing.

## Usage

```html
<div class="stepper">
  <div class="step">
    <div class="circle active">1</div>
    <span>Account Setup</span>
  </div>

  <div class="step">
    <div class="circle">2</div>
    <span>Personal Information</span>
  </div>

  <div class="step">
    <div class="circle">3</div>
    <span>Verification Process</span>
  </div>
</div>
```

## CSS

```css
.stepper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.step {
  flex: 1 1 160px;
  min-width: 140px;
  text-align: center;
}

.step span {
  overflow-wrap: anywhere;
  word-break: break-word;
}
```

## Benefits

- Prevents label overlap on mobile
- Responsive and flexible layout
- Improves readability
- Pure CSS solution
- Easy to reuse in multi-step forms and progress indicators