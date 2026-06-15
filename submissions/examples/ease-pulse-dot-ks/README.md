# Pulsing Status Indicator Dot

## 1. What does this do?

This adds a self-contained status dot (e.g. online, busy, offline, or alerts) that continuously pulses an outer ambient glow ring.

## 2. How is it used?

Wrap a `.status-dot` element in a `.status-dot-container` for layout safety:

```html
<!-- Default Green Dot -->
<span class="status-dot-container">
  <span class="status-dot"></span>
</span>

<!-- Variant Colors -->
<span class="status-dot danger"></span>
<span class="status-dot warning"></span>
<span class="status-dot primary"></span>
```

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by using clean, declarative classes (`.status-dot`, `.status-dot.danger`) for a highly practical real-time UI element, utilizing keyframe animations with no JS dependencies.
