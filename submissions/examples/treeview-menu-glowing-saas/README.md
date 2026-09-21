# EaseMotion Glowing Treeview Menu (SaaS Modern)

A pure CSS implementation of an interactive treeview/directory menu designed with a modern SaaS dark-mode aesthetic and neon glowing accents.

## Features
- **Zero JS Dependencies:** Uses the HTML hidden checkbox hack (`:checked` pseudo-class) combined with CSS sibling combinators (`~`) to manage the expand/collapse states.
- **SaaS Modern Styling:** Integrates glowing text and border effects using `EaseMotion` design tokens.
- **Hierarchical Connections:** Features subtle left-borders outlining the tree hierarchy for better visual scanning.
- **Accessible & Performant:** Includes `prefers-reduced-motion` media queries and large tap targets on mobile devices. Uses semantic `<ul>` and `<li>` structure.

## Usage

1. Nest `<ul>` elements within `<li>` tags to create folders.
2. For any folder (collapsible node), insert an `<input type="checkbox">` and a matching `<label>`.
3. The `id` of the checkbox must perfectly match the `for` attribute of the label.
4. For leaves (end files), simply use an `<a>` or `<button>` element with the `.em-treeview-link` class.

```html
<ul class="em-treeview">
  <li class="em-treeview-node">
    <input type="checkbox" id="unique-folder-id" class="em-treeview-toggle" />
    <label for="unique-folder-id" class="em-treeview-label">Folder Name</label>
    <ul class="em-treeview-sub">
      <li><a href="#" class="em-treeview-link">File Name</a></li>
    </ul>
  </li>
</ul>
