# Modern Keyboard Shortcut (KBD) Component

**Category:** Components — Data & Display  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-kbd-component/`

---

## 1. What does this do?

The **Modern Keyboard Shortcut (KBD) Component** provides a range of highly styled keycap tokens and layouts for displaying keyboard shortcut commands. It uses semantic HTML `<kbd>` elements to create visually distinct physical keys.

### Core Visual Capabilities:
- **3D Beveled Keycaps (Classic)** — uses layers of solid box shadows and linear gradients to simulate a realistic mechanical keyboard key with depth and height.
- **Notion-style Flat Outlines** — modern clean outlines with minimal backgrounds for highly responsive codebases and clean interfaces.
- **Command-Palette Glows** — neon tinted outlines and glow properties, ideal for search bar indicators or command menus.
- **Micro Press Feedback** — hovering over 3D keys realistically simulates a mechanical "press-down" effect via transition offsets (`translateY(1.5px)` with reduced depth-shadows).
- **Responsive Lists & grids** — includes reusable flex/grid containers for cheat sheets, menus, search-input hints, and inline paragraph text.

---

## 2. How is it used?

### Simple 3D Keycap Group

Combine multiple `.ease-kbd` elements using a `.ease-kbd-group` container:

```html
<div class="ease-kbd-group">
  <kbd class="ease-kbd">Ctrl</kbd>
  <span class="ease-kbd-connector">+</span>
  <kbd class="ease-kbd">Shift</kbd>
  <span class="ease-kbd-connector">+</span>
  <kbd class="ease-kbd">P</kbd>
</div>
```

### Notion-style Outline Modifiers

Add the `.ease-kbd--outline` modifier for flat borders:

```html
<div class="ease-kbd-group">
  <kbd class="ease-kbd ease-kbd--outline">⌘ Cmd</kbd>
  <span class="ease-kbd-connector">+</span>
  <kbd class="ease-kbd ease-kbd--outline">K</kbd>
</div>
```

### Command-palette Glow Modifiers

Add the `.ease-kbd--glow` modifier for color-highlighted panels:

```html
<kbd class="ease-kbd ease-kbd--glow">Esc</kbd>
```

### Sizing Scale Options

Three size scales are available:

```html
<!-- Large standalone keys -->
<kbd class="ease-kbd ease-kbd--lg">Spacebar</kbd>

<!-- Default size -->
<kbd class="ease-kbd">Enter</kbd>

<!-- Small inline paragraph keys -->
<kbd class="ease-kbd ease-kbd--sm">Esc</kbd>
```

---

## 3. Why is it useful?

1. **Zero JavaScript** — The mechanical click simulations, layout scaling, and responsive hover transitions are driven purely by native CSS custom variables and transition rules.
2. **Perfect Semantic Markup** — Built completely around the native HTML `<kbd>` tag, ensuring that accessibility readers, assistive technologies, and crawlers recognize shortcuts correctly without custom ARIA role declarations.
3. **Interactive & Tactile** — Stays visually satisfying. The micro-animations (the click-press depth simulation) give users immediate physical feedback without heavy scripting overhead.
4. **Three Context Styles out of the Box** — Allows styling keys to match the precise aesthetic context of the product—whether classic 3D keys for detailed shortcut panels, minimal outlines for inline markdown documents, or glows for futuristic UI command inputs.
5. **Highly Responsive Grid Structures** — The flex group system automatically handles wrapping and clean positioning on thin screens, while custom list patterns expand to fill columns dynamically.
6. **A11y & Motion Compliance** — Supports `prefers-reduced-motion` natively to preserve high readability and remove hover transitions for users with cognitive or visual sensitivities.
