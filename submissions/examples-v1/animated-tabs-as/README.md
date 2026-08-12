# Animated Tabs with Sliding Indicator

### What does this do?

It is a tabbed panel where selecting a tab slides an underline indicator to it and fades in the matching content, using only CSS.

### How is it used?

```html
<div class="tabs">
  <input type="radio" name="tab" id="tab-1" class="tab-input" checked />
  <input type="radio" name="tab" id="tab-2" class="tab-input" />
  <div class="tab-list">
    <label for="tab-1" class="tab-label">Overview</label>
    <label for="tab-2" class="tab-label">Features</label>
    <span class="tab-indicator" aria-hidden="true"></span>
  </div>
  <div class="tab-panels">
    <div class="tab-panel"><h3>Overview</h3><p>...</p></div>
    <div class="tab-panel"><h3>Features</h3><p>...</p></div>
  </div>
</div>
```

The radio inputs, the tab list, and the panels are siblings, so `:checked` can move the indicator and show the matching panel. All radios share one `name`, so only one tab is active at a time.

### Why is it useful?

Tabs organize content into panels without extra pages. This moves a sliding indicator and fades panels with only transforms and transitions driven by `:checked`, so it needs no JavaScript. The radios keep native keyboard navigation, the tab list shows a focus ring, and the panel animation is disabled under `prefers-reduced-motion: reduce`.
