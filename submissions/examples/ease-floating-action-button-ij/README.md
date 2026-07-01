# Floating Action Button

## What does this do?

Creates a sticky speed-dial FAB that sits at the bottom-right of the viewport. Clicking the main button fans out multiple action items with staggered transforms and opacity transitions. The main icon rotates 45 degrees to indicate the open state.

## How is it used?

Wrap the FAB in a `.fab-container` element. The main toggle uses class `.fab-button` and the dial items are inside a `.fab-dial` list. Toggle the `.fab-open` class on the container to show/hide the dial.

```html
<div class="fab-container">
  <button class="fab-button" id="fabToggle" aria-label="Toggle menu">
    <svg class="fab-icon">…</svg>
  </button>
  <ul class="fab-dial">
    <li class="fab-item" style="--i:1">
      <span class="fab-label">Edit</span>
      <button class="fab-btn" aria-label="Edit">…</button>
    </li>
    <!-- additional items -->
  </ul>
</div>
```

```js
document.getElementById('fabToggle').addEventListener('click', function () {
  this.closest('.fab-container').classList.toggle('fab-open');
});
```

## Why is this useful?

FABs are a common Material Design pattern for primary actions. This implementation adds a compact speed-dial expansion that feels responsive thanks to staggered timing and spring-like cubic-bezier curves, without any JavaScript animation libraries.
