# Text Color Wipe Hover

**What does this do?**
Sweeps a color left-to-right across text on hover using a CSS gradient and
`background-clip: text`. No JavaScript required.

**How is it used?**
```html
<!-- Basic usage -->
<h1 class="ease-hover-color-wipe">Build faster.</h1>

<!-- Custom colors -->
<h1 class="ease-hover-color-wipe"
    style="--ease-wipe-from: #e5e5e5; --ease-wipe-to: #f97316;">
  Animation-first CSS.
</h1>
```

**CSS Custom Properties:**

| Property | Default | Description |
|---|---|---|
| `--ease-wipe-from` | `currentColor` | Starting text color |
| `--ease-wipe-to` | `#6366f1` | Color text wipes into |

**Why is it useful?**
A color wipe adds polished motion feedback to headings and CTAs without
JavaScript. The `background-clip: text` technique is widely supported and
fits EaseMotion CSS's animation-first, zero-JS philosophy perfectly.

---

Submitted by: @bh462007
Date: 2026-05-31