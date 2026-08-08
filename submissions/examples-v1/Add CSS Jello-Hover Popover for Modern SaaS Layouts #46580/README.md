# CSS Jello-Hover Popover for Modern SaaS Layouts

A pure CSS animated popover utilizing an organic, bouncy "Jello" entrance animation triggered upon hover and focus. Styled to perfectly match Modern SaaS application aesthetics, this component is ideal for user profile menus, settings dropdowns, and contextual actions. 

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the native `:hover` and `:focus-within` pseudoclasses for a seamless, accessible interaction that correctly handles both mouse and keyboard users.
- **Modern SaaS Aesthetics**: Features a crisp, high-utility layout with system typography (`Inter`), subtle borders (`#e2e8f0`), distinct interactive hover states for menu items, and soft realistic drop shadows (`0 10px 15px -3px rgba(0,0,0,0.1)`).
- **Accessible Design**: Fully supports native keyboard navigation. Users can Tab to the trigger button, which reveals the popover (via `:focus-within`). They can then continue tabbing seamlessly through the internal menu items. It utilizes proper semantic tags and ARIA attributes (`role="tooltip"`, `aria-describedby`).
- **Organic Jello Animation**: Exposes CSS Custom Properties (`var(--ease-...)`). The jello animation (`@keyframes ease-jello-hover`) applies an alternating, decaying skew on both the X and Y axes simultaneously while maintaining horizontal centering, creating a distinct, satisfying jelly-like bounce.
- **Fully Responsive**: Designed with mobile screens in mind.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper" tabindex="0">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="jello-popover-content">
    My Account
  </button>
  
  <!-- Popover Content -->
  <div id="jello-popover-content" class="ease-jello-popover" role="tooltip">
    <div class="popover-content">
      <div class="user-info">
        <p class="user-name">Alex Smith</p>
      </div>
      <ul class="popover-menu">
        <li><a href="#">Workspace Settings</a></li>
        <li><a href="#" class="logout">Log out</a></li>
      </ul>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-jello-timing` | `0.8s` | Total duration of the jello entrance animation |
| `--ease-jello-easing` | `ease-out` | Easing function applied to the overall timeline |
| `--ease-jello-skew` | `8deg` | Maximum initial degree of skew applied to both axes |
| `--ease-jello-scale-start` | `0.95` | The initial scale size before the jello bounce begins |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Leverages the `Inter` web font while seamlessly degrading to native system-ui stacks for peak performance.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component simulating a SaaS user-profile menu.
