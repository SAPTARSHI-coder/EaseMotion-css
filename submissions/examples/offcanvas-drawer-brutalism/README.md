# EaseMotion Offcanvas Drawer (Brutalism Theme)

A pure CSS, JavaScript-free implementation of a slide-out offcanvas drawer styled using modern Brutalist UI principles. It features thick borders, hard block shadows, stark contrasts, and aggressive typography.

## Features
- **Zero JS Dependencies:** Relies entirely on the HTML hidden checkbox hack (`:checked`) to govern global state, utilizing CSS general sibling combinators (`~`).
- **Brutalist Aesthetic:** Heavy borders, monospace typography, primary color blocks (pure red/blue), and translation-based 2D block shadows.
- **Hardware-Accelerated Transitions:** Employs `transform: translateX` for performant, snappy slide-out animations matching the brutalist theme.
- **Responsive:** Fluidly scales drawer widths across mobile (`90vw`), tablet (`400px`), and desktop (`450px`).
- **Accessible:** Built-in support for `prefers-reduced-motion` and semantic use of `role="button"` and `tabindex` on pure CSS trigger labels.

## Usage

1. Include the hidden `.em-drawer-toggle` checkbox near the root of your layout.
2. Link the trigger `<label>` (open button), overlay `<label>`, and close button `<label>` to the checkbox's ID (`for="brutal-drawer-toggle"`).
3. Ensure the `.em-drawer` container is placed as a sibling to the checkbox in the DOM structure.

```html
<!-- State Manager -->
<input type="checkbox" id="brutal-drawer-toggle" class="em-drawer-toggle" aria-hidden="true" />

<!-- Trigger Node -->
<label for="brutal-drawer-toggle" class="em-btn-brutal" role="button" tabindex="0">
  OPEN MENU
</label>

<!-- The Drawer -->
<aside class="em-drawer">
  <!-- Content here -->
</aside>
