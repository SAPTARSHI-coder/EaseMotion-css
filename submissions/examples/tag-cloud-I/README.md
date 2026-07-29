 
# Animated Tag Cloud (ease-tag-cloud)

Tag cloud with varying text sizes (by weight) that animate on hover — tags sized by weight, hover scale + color change, staggered entrance.

## Files

- demo.html - Interactive demo
- style.css - Tag cloud styles
- README.md - Documentation

## Features

- 📊 Tags sized by `--ease-tag-weight` (1-5)
- ✨ Hover: scale + color change
- 🎯 Staggered entrance animation
- 🎨 Multiple color variants (blue, green, pink)

## Usage

```html
<div class="ease-tag-cloud">
    <span class="tag" style="--ease-tag-weight: 5;">Popular</span>
    <span class="tag" style="--ease-tag-weight: 3;">Medium</span>
    <span class="tag" style="--ease-tag-weight: 1;">Small</span>
</div>

<!-- Color variants -->
<div class="ease-tag-cloud-blue">
    <span class="tag-blue" style="--ease-tag-weight: 4;">Tag</span>
</div>