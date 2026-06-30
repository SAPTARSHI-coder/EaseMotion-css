# CSS Box Decoration Break Feature

Submits layout utility architectures and multi-line typographic text wraps (`.ease-decoration-clone`, `.ease-decoration-slice`) under issue #15388.

## Functional Mechanics

- **The Problem:** When applying background gradients, borders, box-shadows, or side paddings onto long inline elements (like text emphasis anchors or callout block text strings) that wrap onto multiple screen lines, standard layout engines slice the container open. The end of the first line and the start of the second line lose their border-radius curves, margins, and border styles, producing broken graphical artifacts.
- **The Solution:** Independent fragment replication. The `.ease-decoration-clone` utility enforces `box-decoration-break: clone`. This instructs browsers to render decoration properties—including border edges, gradients, and padding blocks—independently around every single line string wrap, ensuring neat typographic balance across fluid multi-line screens.

## Usage Layout Structure

```html
<p style="max-width: 300px;">
  <span
    class="ease-decoration-clone"
    style="background: indigo; padding: 4px; border-radius: 4px;"
  >
    Multi-line copy elements reshape themselves elegantly here...
  </span>
</p>
```

Closes #15388
