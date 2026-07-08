# Animated Split Button Collection

**EaseMotion CSS — Issue #15857**
`submissions/examples/split-button-collection/`

A split button component (primary action + dropdown caret sharing one visual unit) with smooth CSS animations for divider fade, caret rotation, and menu reveal.

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles and transitions |
| `demo.html` | Live demo with all variants |
| `README.md` | This file |

## Classes

| Class | Element | Behaviour |
|---|---|---|
| `ease-split-btn` | `div` | Container joining main button and caret into one unit |
| `ease-split-btn-main` | `button` | Primary action button |
| `ease-split-btn-divider` | `span` | Thin separator; fades in on hover |
| `ease-split-btn-caret` | `button` | Dropdown trigger button |
| `ease-split-caret-rotate` | `span` | Rotates 180° when menu is open |
| `ease-split-menu-reveal` | `ul` | Dropdown menu; scales and fades in from caret anchor |
| `ease-split-menu-divider` | `li` | Thin horizontal rule inside menu |
| `is-open` | `ease-split-btn` | Toggled by JS to open/close menu |

## Variants

| Class on `ease-split-btn` | Look |
|---|---|
| *(none)* | Primary — indigo |
| `ease-split-btn-danger` | Red destructive style |
| `ease-split-btn-neutral` | Outline on white |
| `ease-split-theme-dark` | Dark dropdown menu |

## Usage

```html
<div class="ease-split-btn" id="my-split">
  <button class="ease-split-btn-main">Save</button>
  <span class="ease-split-btn-divider"></span>
  <button class="ease-split-btn-caret" onclick="toggleSplit('my-split')">
    <span class="ease-split-caret-rotate">▾</span>
  </button>
  <ul class="ease-split-menu-reveal">
    <li><button>Save as draft</button></li>
    <li><button>Save and publish</button></li>
  </ul>
</div>

<script>
function toggleSplit(id) {
  document.getElementById(id).classList.toggle('is-open');
}
document.addEventListener('click', function(e) {
  document.querySelectorAll('.ease-split-btn.is-open').forEach(function(btn) {
    if (!btn.contains(e.target)) btn.classList.remove('is-open');
  });
});
</script>
```

## Notes

- All visual states are pure CSS transitions
- JS is one `classList.toggle` call only
- `prefers-reduced-motion` respected

## Contributor

**Akanksha Thakur** (`@thakurakanksha288`) — GSSoC 2026