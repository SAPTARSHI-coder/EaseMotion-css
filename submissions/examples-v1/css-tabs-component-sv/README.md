# CSS-only Tabs Component

## What does this do?

This example creates a fully functional tabbed interface using only HTML and CSS.

The component uses radio buttons and labels to switch between content panels without requiring JavaScript.

Features include:

- Animated tab transitions
- Active tab highlighting
- Keyboard-accessible navigation
- Pure CSS implementation
- Reduced-motion support

---

## How is it used?

### Tab Inputs

```html
<input type="radio" name="tabs" id="tab1" checked>
<input type="radio" name="tabs" id="tab2">
<input type="radio" name="tabs" id="tab3">
```

### Tab Labels

```html
<label for="tab1">Profile</label>
<label for="tab2">Settings</label>
<label for="tab3">Security</label>
```

### Content Panels

```html
<div id="panel1" class="tab-panel">
  Profile Content
</div>
```

---

## Why is it useful?

Tabs are one of the most common UI patterns used in dashboards, documentation websites, settings pages, and admin panels.

This implementation demonstrates how complex UI interactions can be achieved with pure HTML and CSS while remaining lightweight, accessible, and dependency-free.