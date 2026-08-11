# 3D Tilt Select Menu

## What does this do?

This submission creates a responsive, accessible native select menu with layered 3D depth and a subtle tilt interaction inspired by admin dashboards.

## How is it used?

```html
<div class="select-field-jp ease-tilt-select-jp">
  <label for="workspace">Workspace</label>

  <div class="select-shell-jp">
    <span class="icon-jp" aria-hidden="true">▦</span>

    <select id="workspace" name="workspace">
      <option>All workspaces</option>
      <option>Product Design</option>
      <option>Engineering</option>
    </select>

    <span class="arrow-jp" aria-hidden="true"></span>
  </div>
</div>
```

Customize the interaction through CSS variables:

```css
:root {
  --ease-tilt-duration-jp: 420ms;
  --ease-tilt-curve-jp: cubic-bezier(.22, 1, .36, 1);
  --ease-tilt-x-jp: 4deg;
  --ease-tilt-y-jp: -5deg;
  --ease-select-radius-jp: 1rem;
  --ease-select-accent-jp: #7867ff;
  --ease-select-depth-jp: 14px;
}
```

The native select stays fully functional. Hovering the field or focusing the select tilts the shell while the icon, text, and arrow use `translateZ()` to create depth.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Select menus are common in dashboards, forms, reports, settings pages, and admin panels.

This example fits EaseMotion CSS because it:

- uses restrained 3D tilt to communicate interaction;
- keeps a native select for keyboard and assistive-technology support;
- provides visible labels and focus feedback;
- exposes reusable motion and depth variables;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
