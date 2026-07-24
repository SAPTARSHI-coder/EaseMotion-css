# Rotate-on-Hover Settings Gear Icon (#49879)

An accessible micro-interaction component that spins a vector settings cog gracefully using smooth spring dynamics when a cursor hovers or a keyboard focuses on the parent panel element.

### How to use
Add the structural target class `ease-rotate-gear` to any graphic icon tag within your actionable layout anchors:

```html
<button class="settings-action-trigger">
    <svg class="ease-rotate-gear"><!-- SVG Path Details --></svg>
</button>