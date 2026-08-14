# Animated File Diff Highlight Viewer

**EaseMotion CSS — Issue #15855**
`submissions/examples/file-diff-viewer/`

A line-level diff viewer with smooth CSS animations for added, removed, and modified lines. Useful for changelogs, PR previews, and version-comparison UIs.

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles and keyframes |
| `demo.html` | Live demo with code and changelog variants |
| `README.md` | This file |

## Classes

| Class | Element | Behaviour |
|---|---|---|
| `ease-diff-block` | `div` | Outer container with border and radius |
| `ease-diff-header` | `div` | File name bar with badge support |
| `ease-diff-line` | `div` | Base line container; neutral state |
| `ease-diff-added` | `ease-diff-line` | Green tint; slides in from left on mount |
| `ease-diff-removed` | `ease-diff-line` | Red tint; strikethrough animates in |
| `ease-diff-modified` | `ease-diff-line` | Amber tint; highlight pulse animation |
| `ease-diff-line-number` | `span` | Muted gutter; brightens with line state |
| `ease-diff-code` | `code` or `span` | Line content area |
| `ease-diff-badge-added` | `span` | Green badge for added count |
| `ease-diff-badge-removed` | `span` | Red badge for removed count |

## Themes

| Class on `ease-diff-block` | Look |
|---|---|
| *(none)* | Default — light background |
| `ease-diff-theme-dark` | Dark navy background |

## Usage

```html
<div class="ease-diff-block">
  <div class="ease-diff-header">
    <span>filename.js</span>
    <span class="ease-diff-badge ease-diff-badge-added">+2</span>
    <span class="ease-diff-badge ease-diff-removed">-1</span>
  </div>
  <div class="ease-diff-line ease-diff-removed">
    <span class="ease-diff-line-number">1</span>
    <code class="ease-diff-code">old code here</code>
  </div>
  <div class="ease-diff-line ease-diff-added">
    <span class="ease-diff-line-number">1</span>
    <code class="ease-diff-code">new code here</code>
  </div>
  <div class="ease-diff-line ease-diff-modified">
    <span class="ease-diff-line-number">2</span>
    <code class="ease-diff-code">changed line here</code>
  </div>
</div>
```

## Notes

- 100% pure CSS — no JavaScript required
- Diff computation is the consuming app's job; this only styles pre-classified lines
- `prefers-reduced-motion` respected

## Contributor

**Akanksha Thakur** (`@thakurakanksha288`) — GSSoC 2026