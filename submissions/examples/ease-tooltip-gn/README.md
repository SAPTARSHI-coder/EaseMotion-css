# ease-tooltip — CSS-only Animated Tooltips

1. **What does this add?** Pure CSS tooltips that appear on hover/focus using a `data-tip` attribute and `::before` pseudo-elements with a fade + scale entrance animation. No JavaScript, no extra HTML required.
2. **How is it used?**
```html
<!-- Just add data-tip — no extra HTML needed -->
<button class="ease-btn ease-tooltip" data-tip="Click to save">
  Save
</button>

<span class="ease-tooltip ease-tooltip-bottom ease-tooltip-dark"
      data-tip="This opens in a new tab">
  Learn more ↗
</span>

<!-- Positions -->
<div class="ease-tooltip">Top (default)</div>
<div class="ease-tooltip ease-tooltip-bottom">Bottom</div>
<div class="ease-tooltip ease-tooltip-left">Left</div>
<div class="ease-tooltip ease-tooltip-right">Right</div>

<!-- Color variants -->
<div class="ease-tooltip ease-tooltip-dark">Dark</div>
<div class="ease-tooltip ease-tooltip-light">Light</div>

<!-- Delay variant -->
<div class="ease-tooltip ease-tooltip-delay">Appears after 500ms</div>
```
3. **Why is it useful?** Zero JavaScript, single attribute (`data-tip`) drives the content via `content: attr(data-tip)`, smooth fade+scale transition on hover/focus — aligned with EaseMotion CSS's animation-first, human-readable, zero-dependency philosophy. `:focus-visible` support included for keyboard accessibility.