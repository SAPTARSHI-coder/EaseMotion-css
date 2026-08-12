# css-pull-down-refresh-aaniya22
Pure CSS pull-down refresh indicator with a spinning icon animation. No JavaScript required — a hidden checkbox drives the "pulled" state for the demo, but the same `:checked ~` pattern can be swapped for a real touch/scroll-driven class toggle in production.

## How to use
```html
<div class="ease-pull-refresh-aaniya22">
  <input type="checkbox" id="pull-toggle-aaniya22" class="ease-pull-checkbox-aaniya22" />
  <label for="pull-toggle-aaniya22" class="ease-pull-track-aaniya22">
    <span class="ease-pull-icon-aaniya22">&#8635;</span>
    <span class="ease-pull-text-aaniya22">Pull to refresh</span>
  </label>
  <div class="ease-pull-content-aaniya22">
    <p>Content list item one</p>
    <p>Content list item two</p>
    <p>Content list item three</p>
  </div>
</div>
```

Checking the hidden checkbox reveals the refresh track (via `height` transition) and spins the refresh icon continuously with a CSS `@keyframes` animation — mimicking the classic pull-to-refresh interaction. Respects `prefers-reduced-motion` by disabling the spin.
