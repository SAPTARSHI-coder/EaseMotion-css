# ease-drawer

## What does this do?

Off-canvas drawer/sidebar panel that **slides in from any edge** (left, right, top, bottom) on demand. Includes a backdrop overlay, focus trap for accessibility, and keyboard (Escape) dismiss.

## How is it used?

```html
<!-- Backdrop -->
<div class="ease-drawer-backdrop" id="backdrop"></div>

<!-- Drawer panel -->
<div
  class="ease-drawer ease-drawer--left"
  id="myDrawer"
  role="dialog"
  aria-modal="true"
>
  <div class="ease-drawer-header">
    <h2 class="ease-drawer-title">Title</h2>
    <button class="ease-drawer-close" data-close>✕</button>
  </div>
  <div class="ease-drawer-body">Content here</div>
  <div class="ease-drawer-footer">Footer</div>
</div>

<script>
  function open() {
    document.getElementById("myDrawer").classList.add("ease-open");
    document.getElementById("backdrop").classList.add("ease-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    /* reverse */
  }
</script>
```

### Positions

| Variant | Class                  | Slides                  |
| ------- | ---------------------- | ----------------------- |
| Left    | `.ease-drawer--left`   | `translateX(-100%) → 0` |
| Right   | `.ease-drawer--right`  | `translateX(100%) → 0`  |
| Top     | `.ease-drawer--top`    | `translateY(-100%) → 0` |
| Bottom  | `.ease-drawer--bottom` | `translateY(100%) → 0`  |

### Available Classes

| Class                                       | Purpose                             |
| ------------------------------------------- | ----------------------------------- |
| `.ease-drawer`                              | Fixed panel container (flex column) |
| `.ease-drawer--left/--right/--top/--bottom` | Position + initial translate        |
| `.ease-drawer.ease-open`                    | Visible state (translate to 0)      |
| `.ease-drawer-backdrop`                     | Semi-transparent overlay            |
| `.ease-drawer-backdrop.ease-open`           | Visible backdrop                    |
| `.ease-drawer-header`                       | Top bar with title + close          |
| `.ease-drawer-title`                        | Heading inside header               |
| `.ease-drawer-close`                        | Close button                        |
| `.ease-drawer-body`                         | Scrollable content area             |
| `.ease-drawer-footer`                       | Bottom action area                  |

### JS API (inline, no dependencies)

| Method                                   | Description     |
| ---------------------------------------- | --------------- |
| `el.classList.add('ease-open')`          | Show drawer     |
| `el.classList.remove('ease-open')`       | Hide drawer     |
| `backdrop.classList.toggle('ease-open')` | Toggle backdrop |

Recommended: set `document.body.style.overflow = 'hidden'` when open to prevent background scroll, restore on close.

### Accessibility

- `role="dialog"` and `aria-modal="true"` on the drawer
- `aria-label` on close button
- Focus trap: Tab/Shift+Tab cycle within the open drawer
- Escape key closes and returns focus to trigger
- `prefers-reduced-motion` disables transitions

### Design Tokens Used

| Token                      | Fallback              | Purpose               |
| -------------------------- | --------------------- | --------------------- |
| `--ease-color-surface`     | `#fff` / `#141e33`    | Drawer background     |
| `--ease-color-text`        | `#1e293b` / `#e2e8f0` | Title/body text       |
| `--ease-color-neutral-200` | `#e2e8f0` / `#334155` | Header/footer borders |
| `--ease-color-neutral-400` | `#94a3b8`             | Close button default  |
| `--ease-color-neutral-100` | `#f1f5f9` / `#1e293b` | Close button hover bg |
| `--ease-color-primary`     | `#6c63ff`             | Focus outline         |
| `--ease-radius-md`         | `0.5rem`              | Close button radius   |
| `--ease-shadow-xl`         | `0 20px 60px...`      | Drawer shadow         |
| `--ease-speed-normal`      | `250ms`               | Transition duration   |
| `--ease-ease`              | cubic-bezier          | Transition timing     |
| `--ease-font-sans`         | sans-serif            | Font family           |

Fixes #25555
