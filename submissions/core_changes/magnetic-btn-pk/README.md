# Magnetic Button Variant

## 1. What does this do?
Adds a `.ease-btn-magnetic` variant to the button component that subtly moves the button toward the cursor on hover.

## 2. How is it used?
```html
<button class="ease-btn ease-btn-primary ease-btn-magnetic" data-magnetic-strength="0.4">
  Get Started
</button>
<script src="https://cdn.jsdelivr.net/npm/easemotion-css/core/magnetic.js"></script>
```

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-magnetic-strength` | `0.3` | Movement multiplier |
| `data-magnetic-radius` | `100` | Max distance in px |

## 3. Why is it useful?
Animation-first, composable with any `.ease-btn-*` variant, accessible (touch/no-preference), consolidates 10+ community submissions.
