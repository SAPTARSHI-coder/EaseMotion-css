# CSS Neon Glow Tabs for Glassmorphism UI Layouts

A pure CSS Tabs component designed for Glassmorphism interfaces, featuring a fluid Neon Glow indicator that smoothly transitions between active tabs.

## Features
- **Pure CSS Interaction**: Uses the hidden radio button pattern (`input type="radio"` + `label`) coupled with CSS sibling selectors (`~`) to switch tabs and move the active indicator without any JavaScript.
- **Neon Glow Animation**: An animated `.neon-indicator` bar features a prominent `box-shadow` glow that slides into place via CSS `transform`.
- **Glassmorphism Aesthetic**: Showcases deep background blur (`backdrop-filter`), semi-transparent borders, and light text shadows on active tabs to simulate a premium frosted glass effect.
- **Accessible**: Uses visually-hidden (`sr-only` equivalent) radio buttons to preserve native keyboard navigation (arrow keys to switch tabs) and exposes clear focus states.
- **Custom Properties**: Highly customizable via variables like `--tab-transition-duration`, `--neon-glow-color`, and `--neon-glow-spread`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The tabs structure relies on a precise DOM order so sibling selectors can target the correct indicator position and content panels.

```html
<div class="tabs-header">
  <input type="radio" name="tabs" id="tab-1" class="tab-input" checked>
  <label for="tab-1" class="tab-label">Tab 1</label>
  
  <input type="radio" name="tabs" id="tab-2" class="tab-input">
  <label for="tab-2" class="tab-label">Tab 2</label>

  <div class="neon-indicator"></div>
</div>
<div class="tabs-body">
  <div class="tab-panel" id="panel-1">...</div>
  <div class="tab-panel" id="panel-2">...</div>
</div>
```
