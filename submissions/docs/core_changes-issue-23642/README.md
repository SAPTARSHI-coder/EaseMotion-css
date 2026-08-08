# Text Gradient Utility — Issue #23642

## What does this do?

This submission proposes adding a text gradient utility (`.ease-text-gradient`) using CSS background clipping to easily create gradient text headers, including customizable CSS variables and common presets.

## How is it used?

Apply the `.ease-text-gradient` class to heading or text elements. Optional preset modifiers can be added for quick styling:

```html
<!-- Default Purple-to-Pink -->
<h1 class="ease-text-gradient">Hello World</h1>

<!-- Sunset Preset (Orange-to-Pink) -->
<h1 class="ease-text-gradient ease-text-gradient-sunset">Sunset Glow</h1>

<!-- Custom Variable Override -->
<h1
  class="ease-text-gradient"
  style="--ease-gradient-from: #f43f5e; --ease-gradient-to: #eab308;"
>
  Custom Text
</h1>
```

## Why is it useful?

It provides a quick, standardized, and highly customizable typographic style utility that works on any block or inline-block text without duplicating complex background clipping, mask, or text-fill rules.

---

## Proposed Changes in Core Code

To integrate these utilities, the following updates are proposed for `core/utilities.css`:

### File: `core/utilities.css`

Append these classes:

```css
/* ── Text Gradient Utilities ── */
.ease-text-gradient {
  --ease-gradient-from: #6c63ff;
  --ease-gradient-to: #e040fb;
  background: linear-gradient(
    135deg,
    var(--ease-gradient-from),
    var(--ease-gradient-to)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
}

.ease-text-gradient-sunset {
  --ease-gradient-from: #f97316;
  --ease-gradient-to: #ec4899;
}

.ease-text-gradient-ocean {
  --ease-gradient-from: #06b6d4;
  --ease-gradient-to: #3b82f6;
}

.ease-text-gradient-forest {
  --ease-gradient-from: #10b981;
  --ease-gradient-to: #059669;
}
```

Fixes #23642
