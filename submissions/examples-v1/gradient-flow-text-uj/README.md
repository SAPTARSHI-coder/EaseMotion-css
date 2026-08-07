# Text Gradient Flow

## What does this do?

It continuously animates a colorful gradient across clipped text, producing a vibrant flowing colour sweep on headings and body copy.

## How is it used?

Apply `gradient-flow-text-uj` to any text element:

```html
<h1 class="gradient-flow-text-uj">Dynamic Heading</h1>
```

Customise the palette and speed with CSS variables:

| Variable | Default | Purpose |
|---|---|---|
| `--flow-color-a` | `#6c63ff` | Start / end stop colour |
| `--flow-color-b` | `#c084fc` | Mid stop colour |
| `--flow-color-c` | `#06b6d4` | Accent stop colour |
| `--flow-duration` | `3s` | Full cycle duration |

### Palette example

```html
<!-- Warm sunset variant -->
<h2 class="gradient-flow-text-uj"
    style="--flow-color-a:#f59e0b; --flow-color-b:#ef4444;
           --flow-color-c:#f97316; --flow-duration:4s;">
  Ship Ideas That Matter
</h2>
```

## Why is this useful?

Animated gradient text is a staple of modern SaaS landing pages and marketing sites. By moving only `background-position` — a compositor-friendly property — the effect avoids layout recalculation and runs at full 60 fps with minimal CPU load. Motion is automatically paused for users who prefer reduced motion.
