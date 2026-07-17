# Animated Breadcrumb (`ease-breadcrumb-animated`)

A responsive breadcrumb trail that utilizes `translateX` CSS animations to elegantly slide new navigation nodes into view. Built for the EaseMotion-css framework.

## 🚀 Features

- **Sequential Entry Animation**: When the `.ease-crumb-enter` class is appended to a new list item, the text slides in from the right while the chevron (`›`) separator is delayed by `0.15s` before gracefully scaling/fading into view.
- **Overflow Handling**: By leveraging `display: flex` combined with `overflow-x: auto` and `white-space: nowrap`, the breadcrumb safely handles extensive filesystem paths or deep nested routes by enabling horizontal scrolling on mobile, with hidden scrollbars for a cleaner UI.
- **A11y Compliant**: Relies heavily on `aria-current="page"` to natively style the active, deepest navigational node.

## 🛠️ Usage

For static HTML, you can drop the CSS classes directly onto an ordered list `<ol>`. For Single Page Applications (React/Vue/etc), append the `.ease-crumb-enter` class dynamically when a new route is pushed to the stack to trigger the animation.

```html
<nav aria-label="Breadcrumb" class="ease-breadcrumb-wrapper">
  <ol class="ease-breadcrumb">
    
    <li class="ease-crumb-item">
      <a href="#" class="ease-crumb-link">Home</a>
    </li>
    
    <!-- Dynamically added item with animation class -->
    <li class="ease-crumb-item ease-crumb-enter">
      <span class="ease-separator" aria-hidden="true">›</span>
      <a href="#" class="ease-crumb-link" aria-current="page">Current Page</a>
    </li>

  </ol>
</nav>
