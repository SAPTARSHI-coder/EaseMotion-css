# Tab Bar Slide Indicator

A lightweight, CSS-driven tab bar component with a sliding underline indicator. The active tab position is controlled via the `--active-index` CSS custom property, keeping all positional logic in styles rather than JavaScript.

## Usage

```html
<div class="tbsi-tabs" style="--active-index: 0;">
    <button class="tbsi-tab" data-index="0">Home</button>
    <button class="tbsi-tab" data-index="1">Explore</button>
    <button class="tbsi-tab" data-index="2">Library</button>
    <button class="tbsi-tab" data-index="3">Settings</button>
    <div class="tbsi-indicator"></div>
</div>

<script>
    const tabs = document.querySelector('.tbsi-tabs');
    tabs.querySelectorAll('.tbsi-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.style.setProperty('--active-index', btn.getAttribute('data-index'));
        });
    });
</script>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--tbsi-active-color` | `#1f2937` | Color of the active/hovered tab text |
| `--tbsi-inactive-color` | `#9ca3af` | Color of inactive tab text |
| `--tbsi-indicator-color` | `#6366f1` | Color of the sliding underline indicator |
| `--tbsi-transition-duration` | `0.35s` | Duration of the indicator slide transition |
