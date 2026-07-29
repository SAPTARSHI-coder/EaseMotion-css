# Animated Sidebar Navigation with Collapse Effect

## What does this do?
A pure-CSS animated sidebar navigation that collapses from a full-width panel (icons + labels) to an icon-only rail, with smooth width transition, active item highlighting, a left accent bar, hover tooltips in collapsed mode, and a responsive mobile overlay.

## How is it used?

### HTML Structure
```html
<!-- Desktop collapse toggle (hidden checkbox) -->
<input type="checkbox" id="sidebar-toggle" />
<!-- Mobile open toggle (hidden checkbox) -->
<input type="checkbox" id="mobile-toggle" style="display:none" />

<!-- Mobile hamburger -->
<label class="mobile-toggle-btn" for="mobile-toggle">…</label>
<!-- Mobile backdrop -->
<label class="overlay-backdrop" for="mobile-toggle"></label>

<div class="layout">
  <aside class="sidebar">

    <!-- Brand area -->
    <div class="sidebar-brand">
      <div class="brand-icon">E</div>
      <span class="brand-name">EaseMotion</span>
    </div>

    <!-- Nav list -->
    <ul class="sidebar-nav">
      <li class="nav-item active">          <!-- active class = highlighted -->
        <a href="#" class="nav-link">
          <span class="nav-icon"><!-- SVG icon --></span>
          <span class="nav-label">Dashboard</span>
          <span class="nav-tooltip">Dashboard</span>  <!-- shown when collapsed -->
        </a>
      </li>
      <!-- more nav-items … -->
      <li class="nav-divider"></li>         <!-- section divider -->
    </ul>

    <!-- Collapse toggle button -->
    <div class="sidebar-footer">
      <label class="collapse-btn" for="sidebar-toggle">
        <span class="collapse-icon"><!-- chevron SVG --></span>
        <span class="collapse-label">Collapse</span>
      </label>
    </div>

  </aside>

  <main class="main-content">
    <!-- page content -->
  </main>
</div>
```

### Class Reference
| Class | Purpose |
|---|---|
| `layout` | Flex wrapper — sidebar + content |
| `sidebar` | The sidebar panel |
| `sidebar-brand` | Logo/brand area at top |
| `brand-icon` | Square logo mark |
| `brand-name` | Text name (hidden when collapsed) |
| `sidebar-nav` | `<ul>` nav item list |
| `nav-item` | Single nav entry |
| `nav-item.active` | Currently active page |
| `nav-link` | Anchor inside each nav item |
| `nav-icon` | Icon wrapper (stays visible when collapsed) |
| `nav-label` | Text label (fades out when collapsed) |
| `nav-tooltip` | Tooltip visible only in collapsed mode |
| `nav-divider` | Horizontal rule between nav groups |
| `sidebar-footer` | Bottom area holding the collapse button |
| `collapse-btn` | `<label>` wired to `#sidebar-toggle` |
| `collapse-icon` | Chevron arrow (flips on collapse) |
| `collapse-label` | "Collapse" text |
| `main-content` | Main page area |
| `mobile-toggle-btn` | Hamburger label (mobile only) |
| `overlay-backdrop` | Dark overlay (mobile only) |

### Collapse Mechanism
The entire interaction is powered by two hidden checkboxes. No JavaScript required.

```css
/* Desktop collapse */
#sidebar-toggle:checked ~ .layout .sidebar { width: 72px; }
#sidebar-toggle:checked ~ .layout .nav-label { opacity: 0; max-width: 0; }

/* Mobile open */
#mobile-toggle:checked ~ .layout .sidebar { transform: translateX(0); }
```

## Why is it useful?
Sidebar navigation is the backbone of admin dashboards, documentation sites, and web apps. EaseMotion CSS currently has no sidebar component. This submission fills that gap with a zero-JavaScript, accessible-first implementation that:

- Uses the **checkbox hack** to manage collapse/expand state — no JS bundle cost.
- Applies `transition: width` with `overflow: hidden` for a smooth icon-only rail collapse, a common UX pattern on tools like VS Code, Notion, and Linear.
- Shows **icon tooltips** in collapsed mode so navigation remains usable even at narrow width.
- Marks active routes with a **left accent bar** — a clear, widely-understood affordance.
- Includes a **mobile overlay** (`position: fixed` + backdrop) so the sidebar works across all screen sizes from a single CSS file.
- Respects `prefers-reduced-motion` by disabling all transitions for users who have requested reduced motion.

This aligns with EaseMotion's philosophy of delivering polished, practical UI patterns as composable CSS utilities.
