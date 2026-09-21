# EaseMotion Treeview Menu (Minimalist)

A pure CSS, JavaScript-free implementation of a collapsible treeview/directory menu designed with a crisp, clean minimalist aesthetic.

## Features
- **Zero JS Dependencies:** Uses the HTML hidden checkbox hack (`:checked`) combined with CSS sibling combinators to manage local UI states.
- **Modern CSS Grid Animation:** Achieves perfectly smooth expand/collapse transitions using `grid-template-rows: 0fr` to `1fr`. This eliminates the timing bugs traditionally associated with animating `max-height`.
- **Minimalist Styling:** Focuses on typography, subtle gray contrasts, whitespace, and clean CSS-drawn chevron indicators.
- **Accessible & Performant:** Hardware-accelerated transforms, scaled touch targets for mobile, `prefers-reduced-motion` compliance, and keyboard navigation support via `tabindex`.

## Usage

1. Nest `<ul>` tags within the `.em-treeview-sub-container` to create hierarchy.
2. For any branch node, use an `<input type="checkbox">` and connect it to a `<label>` using matching `id` and `for` attributes.
3. For leaf nodes, use a standard anchor `<a>` tag inside the list item.

```html
<ul class="em-treeview">
  <li class="em-treeview-node">
    <input type="checkbox" id="folder-1" class="em-treeview-toggle" aria-hidden="true" />
    <label for="folder-1" class="em-treeview-label" tabindex="0">
      <span class="em-treeview-icon"></span> Folder Name
    </label>
    
    <!-- Animation Wrapper -->
    <div class="em-treeview-sub-container">
      <ul class="em-treeview-sub">
        <li class="em-treeview-leaf">
          <a href="#" class="em-treeview-link">File Name</a>
        </li>
      </ul>
    </div>
  </li>
</ul>
