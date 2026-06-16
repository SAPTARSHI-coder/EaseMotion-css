# Magnetic Button Variant

## 1. What does this do?

Adds a `.ease-btn-magnetic` variant to the button component that subtly moves the button toward the cursor on hover, creating a playful magnetic micro-interaction.

## 2. How is it used?

**CSS** — link the stylesheet and add the class:

```html
<button class="ease-btn ease-btn-primary ease-btn-magnetic" data-magnetic-strength="0.4">
  Get Started
</button>
```

**JavaScript** — include the script once:

```html
<script src="https://cdn.jsdelivr.net/npm/easemotion-css/core/magnetic.js"></script>
```

Or initialize programmatically:

```html
<script>
  // Auto-initializes on DOMContentLoaded
  // Or for dynamic content:
  EaseMotionMagnetic.init(document.getElementById("my-container"));
</script>
```

**Configuration via data attributes:**

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-magnetic-strength` | `0.3` | Movement multiplier (0 = no movement, 1 = full cursor-follow) |
| `data-magnetic-radius` | `100` | Maximum distance in px for the effect to activate |

## 3. Why is it useful?

- **Animation-first**: Turns a basic button into an engaging interactive element with zero configuration.
- **Composable**: Works with any existing `.ease-btn-*` variant (primary, outline, ghost, etc.).
- **Human-readable**: The class name `.ease-btn-magnetic` is self-documenting.
- **Accessible**: Disabled on touch devices, respects `prefers-reduced-motion`, and works with keyboard navigation.
- **Curated**: Consolidates 10+ similar community submissions into one maintainer-reviewed, standardized variant.
