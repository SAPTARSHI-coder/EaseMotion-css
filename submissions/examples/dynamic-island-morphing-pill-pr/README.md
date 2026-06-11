# Interactive CSS-Only Dynamic Island (Morphing Pill Component)

## What does this do?
A purely CSS-driven "Dynamic Island" style component. Starts as a compact pill
and seamlessly morphs into an expanded notification card when clicked,
using smooth bezier transitions and a hidden HTML checkbox. Zero JavaScript.

## How is it used?

```html
<div class="ease-dynamic-island">
  <input type="checkbox" id="island-toggle" class="island-toggle-hack" />

  <label for="island-toggle" class="island-morph-container">

    <!-- Compact State -->
    <div class="island-compact-state">
      <span>🔔 Notification</span>
    </div>

    <!-- Expanded State -->
    <div class="island-expanded-state">
      <p class="island-title">Incoming Call</p>
      <p class="island-subtitle">John Doe • Mobile</p>
    </div>

  </label>
</div>
```

## Why is it useful?
Developers usually assume fluid morphing UI requires heavy JavaScript libraries
like Framer Motion. This component proves it can be done with pure CSS, aligning
perfectly with EaseMotion CSS's animation-first philosophy.
Includes prefers-reduced-motion support.