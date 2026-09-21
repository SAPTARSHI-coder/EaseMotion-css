# EaseMotion Treeview Menu (Material Design)

A pure CSS implementation of a nested treeview directory utilizing Material Design 3 (M3) aesthetics, color tokens, state layers, and typography. No JavaScript required.

## Features
- **Zero JS Dependencies:** Relies on structural CSS (the hidden checkbox hack) combined with general sibling combinators (`~`) to toggle nested menus.
- **Material Design 3 Compliance:** Implements M3 pill-shaped list items, tonal background interactions for active states, elevation shadows, and standard touch target sizing.
- **Modern Grid Animation:** Utilizes `grid-template-rows: 0fr -> 1fr` for buttery smooth expansion animations without the janky timing inherent to legacy `max-height` workarounds.
- **Accessible & Performant:** Hardware-accelerated CSS properties, automatically adapts to minimum 48px touch targets on mobile devices, and fully supports `prefers-reduced-motion` settings.

## Usage

Structure your treeview by nesting standard HTML lists.

1. Wrap child lists in a `<div class="em-treeview-sub-container">` for the smooth Grid animation.
2. Bind the toggle behavior using matching `id` and `for` attributes between the `<input type="checkbox">` and its corresponding `<label>`.
3. Use `.em-treeview-leaf` with an `<a>` tag for actionable end-nodes.

```html
<ul class="em-treeview">
  <li class="em-treeview-node">
    <input type="checkbox" id="md-folder-1" class="em-treeview-toggle" aria-hidden="true" />
    <label for="md-folder-1" class="em-treeview-label" tabindex="0">
      <span class="em-treeview-chevron"></span>
      <span class="em-treeview-text">My Folder</span>
    </label>
    
    <!-- Required for smooth Grid animation -->
    <div class="em-treeview-sub-container">
      <ul class="em-treeview-sub">
        <li class="em-treeview-leaf">
          <a href="#" class="em-treeview-link">
            <span class="em-treeview-spacer"></span>
            <span class="em-treeview-text">My File</span>
          </a>
        </li>
      </ul>
    </div>
  </li>
</ul>
