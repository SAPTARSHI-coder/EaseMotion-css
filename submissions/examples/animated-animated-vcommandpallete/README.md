# ease-command-palette

A `Cmd/Ctrl+K` command palette for instantly searching EaseMotion CSS class names across the docs site.

## Usage

```html
<button class="cmdk-trigger">Search classes… <kbd>⌘K</kbd></button>
<div class="cmdk-overlay" hidden>
  <div class="cmdk-panel">
    <input type="text" class="cmdk-input" placeholder="Type a class name...">
    <ul class="cmdk-results"></ul>
  </div>
</div>