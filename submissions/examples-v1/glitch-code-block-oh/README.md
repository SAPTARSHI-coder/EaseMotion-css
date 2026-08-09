# Component: Glitch Code Block

This submission implements the Glitch Code Block for GSSoC issue **#41992**.

## Description

Animated code blocks with glitch effects featuring nature-inspired design.

## Features

- **Glitch Animation**: Two-layer offset glitch effect
- **Syntax Highlighting**: Multiple language color schemes
- **Window Controls**: macOS-style dots
- **Multiple Variants**: JavaScript, HTML, CSS, Bash
- **Hover Enhancement**: Faster glitch on hover
- **Mini Variant**: Compact code blocks

## Usage

```html
<div class="glitch-code-block">
  <div class="code-header">
    <span class="code-title">javascript</span>
  </div>
  <pre class="code-content">
    <code>Your code here...</code>
  </pre>
  <div class="glitch-layer layer-1">...</div>
  <div class="glitch-layer layer-2">...</div>
</div>
```

## Variants

| Variant | Border | Title Color |
|---------|--------|-------------|
| Default | White | Muted |
| `.nature` | Green | Green |
| `.warning` | Yellow | Yellow |

## Syntax Highlighting

| Token | Color |
|-------|-------|
| keyword | Purple (#c084fc) |
| variable | Cyan (#22d3ee) |
| function | Green (#22c55e) |
| number | Yellow (#fbbf24) |
| property | Blue (#60a5fa) |
| value | Pink (#f472b6) |

## Animations

```css
@keyframes glitchLayer1 {
  0%, 100% { opacity: 0; transform: translateX(0); }
  5% { opacity: 0.8; transform: translateX(-3px); }
  10% { opacity: 0; }
  /* ... more keyframes ... */
}

@keyframes glitchLayer2 {
  0%, 100% { opacity: 0; transform: translateX(0); }
  10% { opacity: 0.6; transform: translateX(4px); }
  /* ... more keyframes ... */
}
```

## Glitch Effect

The glitch effect uses two layers with:
- `clip-path: inset()` to show/hide parts
- Offset transforms for displacement
- Different colors for each layer
- Staggered timing for organic feel

## Acceptance Criteria

- ✅ Glitch animation with two layers
- ✅ Syntax highlighting
- ✅ Multiple language variants
- ✅ Window controls
- ✅ Hover enhancement
- ✅ README.md included
