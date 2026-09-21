# EaseMotion Treeview Menu (Glassmorphism + Glowing)

A pure CSS, JavaScript-free implementation of a collapsible nested directory menu, designed with a sleek Glassmorphism aesthetic and neon glowing active states.

## Features
- **Zero JS Dependencies:** Relies entirely on the HTML hidden checkbox hack (`:checked`) paired with sibling selectors to toggle nested container states natively in the browser.
- **Glassmorphism Aesthetic:** Utilizes `backdrop-filter: blur`, translucent `rgba()` backgrounds, and subtle borders to create a frosted glass effect that dynamically overlays the environment beneath it. 
- **Glowing Accents:** High-tech, soft glowing `text-shadow` and `box-shadow` effects highlight expanded directories and hover states.
- **Modern Grid Animation:** Achieves perfectly smooth height expansion and collapse by transitioning `grid-template-rows` from `0fr` to `1fr`.
- **Accessible & Performant:** Hardware-accelerated transforms, `focus-visible` states for keyboard navigation, scaled touch targets for mobile, and built-in `prefers-reduced-motion` compliance.

## Usage

1. Nest `<ul>` tags within an `.em-treeview-sub-container` to map the CSS grid hierarchy properly.
2. For branch (folder) nodes, create an `<input type="checkbox">` and map it securely to a `<label>` via its `id`/`for` relationship.
3. Wrap your overarching container in `.em-glass-panel` to apply the glassmorphism backdrop.

```html
<nav class="em-glass-panel">
  <ul class="em-treeview">
    <li class="em-treeview-node">
      <input type="checkbox" id="glass-folder" class="em-treeview-toggle" aria-hidden="true" />
      <label for="glass-folder" class="em-treeview-label" tabindex="0">
        <span class="em-treeview-icon"></span> Glowing Folder
      </label>
      
      <!-- Required wrapper for Grid transition -->
      <div class="em-treeview-sub-container">
        <ul class="em-treeview-sub">
          <li class="em-treeview-leaf">
            <a href="#" class="em-treeview-link">File Endpoint</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
