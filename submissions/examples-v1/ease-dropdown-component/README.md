# Ease Dropdown Component (Animated Menu System)

The **Ease Dropdown Component** provides a modular, flexible, and animated menu system designed for navigation bars, action grouping, avatar user menus, sorting lists, and multi-level flyout trees in modern SaaS applications.

This component aligns with the design tokens of **EaseMotion CSS**, utilizing the framework's core timing variables, ease curves, shadows, and spacing scales.

---

## Features

- **Smooth Micro-animations:** Fluid fade and slide-down (or slide-up) transitions optimized with CSS transforms.
- **7 UI Variants:** Out-of-the-box configurations covering all common dashboard and navigation scenarios.
- **Keyboard-friendly Structure:** Tab focusable controls, Arrow key cycling, Home/End shortcut support, and Escape to close.
- **Click-Outside-to-Close:** Auto-hides menus when the user clicks elsewhere on the page.
- **Glassmorphism Theme:** Built-in `.ease-dropdown-menu--glass` modifier for translucent, premium styling.
- **Customizable Custom Properties:** Configurable variables for padding, borders, background, shadows, and state colors.

---

## CSS Variables (Customization Guide)

You can easily override the default look of the dropdown by re-defining these properties on your `:root` or directly on a specific `.ease-dropdown` wrapper:

```css
:root {
  --ease-dropdown-bg: var(--ease-color-surface, #ffffff);
  --ease-dropdown-border-color: var(--ease-color-neutral-200, #e2e8f0);
  --ease-dropdown-shadow: var(--ease-shadow-lg);
  --ease-dropdown-radius: var(--ease-radius-md, 8px);
  --ease-dropdown-min-width: 220px;

  --ease-dropdown-item-hover-bg: var(--ease-color-neutral-100, #f1f5f9);
  --ease-dropdown-item-hover-color: var(--ease-color-neutral-900, #0f172a);
  --ease-dropdown-item-active-bg: var(--ease-color-primary, #6c63ff);
  --ease-dropdown-item-active-color: #ffffff;

  --ease-dropdown-item-danger-hover-bg: var(--ease-color-danger-light, #fee2e2);
  --ease-dropdown-item-danger-hover-color: var(
    --ease-color-danger-dark,
    #991b1b
  );
}
```

---

## Dropdown Variants

### 1. Simple Dropdown

Used for choosing single values or filters (e.g., sort parameters).

```html
<div class="ease-dropdown">
  <button class="ease-btn-secondary ease-dropdown-trigger">
    Sort By: Newest
  </button>
  <ul class="ease-dropdown-menu">
    <li>
      <button class="ease-dropdown-item ease-dropdown-item--active">
        Newest First
      </button>
    </li>
    <li><button class="ease-dropdown-item">Oldest First</button></li>
  </ul>
</div>
```

### 2. Hover Dropdown (Pure CSS Trigger)

Opens automatically on mouse hover. Adding the class `.ease-dropdown--hover` enables this behavior without Javascript toggle classes.

```html
<div class="ease-dropdown ease-dropdown--hover">
  <a href="#" class="ease-dropdown-trigger">Resources</a>
  <ul class="ease-dropdown-menu">
    <li><a href="#" class="ease-dropdown-item">Documentation</a></li>
    <li><a href="#" class="ease-dropdown-item">Video Guides</a></li>
  </ul>
</div>
```

### 3. Click Toggle Dropdown

Standard dropdown that toggles visible state upon click (uses `.is-open` class on the parent).

```html
<div class="ease-dropdown">
  <button class="ease-btn-primary ease-dropdown-trigger">
    Manage Repository
  </button>
  <!-- Using .ease-dropdown-menu--bounce overrides ease-in curve with bouncy entry -->
  <ul class="ease-dropdown-menu ease-dropdown-menu--bounce">
    <li class="ease-dropdown-header">Standard Actions</li>
    <li><button class="ease-dropdown-item">✏️ Edit Name</button></li>
    <li>
      <button class="ease-dropdown-item ease-dropdown-item--disabled">
        🔒 Lock Branch
      </button>
    </li>
    <li class="ease-dropdown-divider"></li>
    <li>
      <button class="ease-dropdown-item ease-dropdown-item--danger">
        🗑️ Delete
      </button>
    </li>
  </ul>
</div>
```

### 4. Multi-level Nested Dropdown

Displays secondary flyout menus opening to the side. Supports click or hover configurations.

```html
<div class="ease-dropdown">
  <button class="ease-btn-secondary ease-dropdown-trigger">
    Share Document
  </button>
  <ul class="ease-dropdown-menu">
    <li><button class="ease-dropdown-item">🔗 Copy Public Link</button></li>

    <!-- Submenu node -->
    <li class="ease-dropdown-submenu">
      <button
        class="ease-dropdown-item ease-dropdown-submenu-trigger"
        aria-haspopup="true"
      >
        💬 Send to Channels
      </button>
      <ul class="ease-dropdown-menu">
        <li><button class="ease-dropdown-item">Slack</button></li>
        <li><button class="ease-dropdown-item">Discord</button></li>
      </ul>
    </li>
  </ul>
</div>
```

### 5. Icon Dropdown

Minimalist trigger using an icon (e.g. notifications bell or settings gear) instead of text labels.

```html
<div class="ease-dropdown">
  <button class="icon-btn ease-dropdown-trigger" aria-label="Notifications">
    <svg>...</svg>
  </button>
  <ul class="ease-dropdown-menu ease-dropdown-menu--right">
    <li class="ease-dropdown-header">Notifications</li>
    <li><button class="ease-dropdown-item">Weekly Backup Completed</button></li>
  </ul>
</div>
```

### 6. Avatar Dropdown

Perfect for user profiles inside web dashboards.

```html
<div class="ease-dropdown">
  <button
    class="avatar-wrapper ease-dropdown-trigger"
    aria-label="User profile menu"
  >
    JD
  </button>
  <ul class="ease-dropdown-menu ease-dropdown-menu--right">
    <div class="user-meta">John Doe (john@example.com)</div>
    <li class="ease-dropdown-divider"></li>
    <li><a href="#" class="ease-dropdown-item">Your Profile</a></li>
    <li><a href="#" class="ease-dropdown-item">Settings</a></li>
    <li class="ease-dropdown-divider"></li>
    <li>
      <button class="ease-dropdown-item ease-dropdown-item--danger">
        Sign Out
      </button>
    </li>
  </ul>
</div>
```

### 7. Navigation Dropdown

Designed for top header bars, maintaining alignment and structural consistency inside nav containers.

```html
<nav class="navbar">
  <ul class="nav-links">
    <li class="ease-dropdown">
      <button class="nav-link ease-dropdown-trigger">Features</button>
      <ul class="ease-dropdown-menu">
        <li><a href="#" class="ease-dropdown-item">Motion Core</a></li>
        <li>
          <a href="#" class="ease-dropdown-item">Hardware Acceleration</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

---

## Accessibility Best Practices (Keyboard Support)

For a fully accessible experience, include the following attributes in your markup:

1. Set `aria-haspopup="true"` and `aria-expanded="false"` on the trigger.
2. Bind the trigger button to the menu card via `aria-labelledby="[trigger-id]"`.
3. Set `role="menu"` on the floating menu, and `role="menuitem"` on all item links/buttons.
4. Integrate the keyboard handler script (featured inside `demo.html`) to bind `ArrowDown`, `ArrowUp`, `Escape`, `Home`, and `End` keys to cycle focus properly.
