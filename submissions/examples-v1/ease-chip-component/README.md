# Ease Chip Component

## What does this do?
A modern, versatile **Chip Component** designed to represent categories, filters, user labels, contacts, or dismissible search tags. It supports standard rounded/pill shapes, 10 themed variants (including outline and gradient options), prefix icon slots, avatar layouts, closable tag animations, and selectable active status styles.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Basic Chip
Apply the `ease-chip` class to any inline container:
```html
<div class="ease-chip">
  <span>Tag Label</span>
</div>
```

### 2. Sizing & Shape Variants
Choose between standard rounded corners and circular Pill shapes:
```html
<!-- Rounded border-radius (default) -->
<div class="ease-chip">Rounded Corner</div>

<!-- Circular Pill shape -->
<div class="ease-chip ease-chip-pill">Pill Chip</div>
```

### 3. Themed Color Modifiers
Color variables can be customized using these classes:
- `.ease-chip-primary`
- `.ease-chip-secondary`
- `.ease-chip-success`
- `.ease-chip-warning`
- `.ease-chip-danger`
- `.ease-chip-info`
- `.ease-chip-outline`
- `.ease-chip-gradient`

Example of success outline pill:
```html
<div class="ease-chip ease-chip-pill ease-chip-outline ease-chip-success">
  Success Outline
</div>
```

### 4. Rich Content Inserts (Icons & Avatars)
Insert prefix SVGs or profile images directly inside the chip:
```html
<!-- Chip with Prefix Icon -->
<div class="ease-chip ease-chip-info">
  <svg class="chip-icon-prefix" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  <span>Featured</span>
</div>

<!-- Chip with Circular Avatar -->
<div class="ease-chip ease-chip-pill">
  <img class="chip-avatar" src="avatar.jpg" alt="User Avatar">
  <span>Jane Smith</span>
</div>
```

### 5. Interactive Actions

#### Closable / Dismissible Tags
Add `.ease-chip-closable` and a closing button. Triggering the `.ease-chip-dismiss` class via JS handles the exit scale animation:
```html
<div class="ease-chip ease-chip-closable">
  <span>Category</span>
  <button class="chip-close-btn">&times;</button>
</div>
```

#### Selectable & Filter Tags
Use `<button>` elements and toggle `.ease-selected` on click to animate checkmark transitions:
```html
<!-- Selectable category chip -->
<button class="ease-chip ease-chip-selectable">Select Tag</button>

<!-- Filter chip with checkmark slide -->
<button class="ease-chip ease-chip-filter">
  <span class="filter-check"></span>
  Filter Active
</button>
```

## Features

- **Pill & Border Flexibility**: Support for standard pill/square structures, outline modifiers, and custom inline drop-shadow filters.
- **Micro-interactions**: Transition scaling on hover, selectable status color changes, and slider checked symbols.
- **Dismissible CSS Transitions**: Smoothly collapses the width, height, margin, and opacity of tags when deleted.
- **Prefix and Suffix Slots**: Pre-scaled margins for icons, circular profile avatars, and closable cross buttons.
- **Customizable System**: Controlled via custom properties (`--chip-bg`, `--chip-color`, `--chip-border`).

## Tech Stack
- HTML
- CSS (Custom properties, flexbox alignment, width/opacity collapse transition keyframes)

## Preview
Open `demo.html` directly in your browser to close tags, toggle selection states, inspect CSS gradient borders, and test layout responsiveness!

## Contribution Notes
- Class naming was handled by the contributor.
- Maintainer will rename to ease-* convention before merging.
