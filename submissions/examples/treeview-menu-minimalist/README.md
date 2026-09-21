# EaseMotion Treeview Menu (Minimalist)

A pure CSS, zero-JS implementation of a collapsible nested directory menu, designed with a clean, low-clutter minimalist aesthetic.

## Features
- **Zero JS Dependencies:** Operates using the HTML hidden checkbox hack (`:checked`) paired with sibling selectors to toggle local container states.
- **Modern CSS Grid Animation:** Uses `grid-template-rows: 0fr -> 1fr` to create perfectly buttery-smooth height transitions without resorting to unpredictable `max-height` estimates.
- **Minimalist Styling:** Strips away heavy visual treatments in favor of crisp typography, subdued gray borders, structural whitespace, and dynamically drawn CSS chevrons.
- **Accessible & Performant:** Hardware-accelerated chevron rotation, automatically adapting touch targets for touch-devices, keyboard focus outlines via `focus-visible`, and `prefers-reduced-motion` checks.

## Usage

1. Nest `<ul>` standard tags within an `.em-treeview-sub-container` to map the CSS grid hierarchy.
2. For branch/folder nodes, configure an `<input type="checkbox">` and map it securely to a `<label>` via its `id`/`for` relationship.
3. For leaf nodes (actionable endpoints), utilize a simple anchor `<a>` wrapped in `.em-treeview-link`.

```html
<ul class="em-treeview">
  <li class="em-treeview-node">
    <input type="checkbox" id="folder-1" class="em-treeview-toggle" aria-hidden="true" />
    <label for="folder-1" class="em-treeview-label" tabindex="0">
      <span class="em-treeview-icon"></span> Minimal Folder
    </label>
    
    <!-- Required wrapper for Grid transition technique -->
    <div class="em-treeview-sub-container">
      <ul class="em-treeview-sub">
        <li class="em-treeview-leaf">
          <a href="#" class="em-treeview-link">Endpoint File</a>
        </li>
      </ul>
    </div>
  </li>
</ul>
