# CSS Swing-Hover Popover

### 1. What does this do?
This adds an interactive user interface popover utility styled with an elegant, springy, 3D "swinging hinge" entry effect triggered completely through pure CSS hover and focus states.

### 2. How is it used?
Wrap your trigger elements and content containers inside the perspective wrapper block:
```html
<div class="swing-popover-wrapper" tabindex="0">
  <button class="swing-trigger">Hover Me</button>
  <div class="swing-popover-content">
    Popover Content here
  </div>
</div>