# Accordion

A smooth accordion where the active panel expands and its caret rotates.

## Features
- Grid-template-rows animation for buttery height changes
- Caret spins 180&deg; on the open panel
- First panel open by default

## Usage
```html
<div class="ac-item ac-open">
  <div class="ac-header" onclick="this.parentElement.classList.toggle('ac-open')"><span class="ac-title">Title</span><span class="ac-caret">&#9662;</span></div>
  <div class="ac-body"><div class="ac-body-inner"><p>Body...</p></div></div>
</div>
```

## Browser Support
- Chrome, Firefox, Safari, Edge (evergreen)

## Tech Stack
- Pure HTML + CSS, zero JavaScript dependencies
