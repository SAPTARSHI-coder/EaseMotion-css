# Speed Dial (`ease-speed-dial`)

An expandable floating action button that reveals multiple quick actions. Commonly used for mobile interfaces where multiple primary actions need to be accessible from a single entry point.

---

## Features

- **Floating Action Button**: Fixed-position circular button with elevation shadow
- **Expandable Actions**: Smaller buttons fan out with staggered animation
- **Positions**: Bottom-right (default), bottom-left, top-right, top-left
- **Directions**: Up (default), down, left, right
- **Trigger**: Click (default) or hover (via `.ease-speed-dial--hover`)
- **Tooltips**: Labels appear on action button hover
- **Backdrop**: Semi-transparent overlay when expanded
- **Keyboard**: Escape key closes the dial
- **Dark mode**: Automatic via `prefers-color-scheme: dark`

---

## Usage

```html
<div
  class="ease-speed-dial ease-speed-dial--br ease-speed-dial--up"
  id="myDial"
>
  <div class="ease-speed-dial__backdrop"></div>

  <div class="ease-speed-dial__actions">
    <button class="ease-speed-dial__action" data-action="edit">
      ✏️
      <span class="ease-speed-dial__tooltip">Edit</span>
    </button>
    <button class="ease-speed-dial__action" data-action="share">
      🔗
      <span class="ease-speed-dial__tooltip">Share</span>
    </button>
  </div>

  <button class="ease-speed-dial__btn" aria-label="Open actions">+</button>
</div>

<script>
  const dial = document.getElementById("myDial");
  document
    .querySelector(".ease-speed-dial__btn")
    .addEventListener("click", () => {
      dial.classList.toggle("ease-speed-dial--open");
    });
</script>
```

### Positions

| Class                 | Position               |
| --------------------- | ---------------------- |
| `ease-speed-dial--br` | Bottom-right (default) |
| `ease-speed-dial--bl` | Bottom-left            |
| `ease-speed-dial--tr` | Top-right              |
| `ease-speed-dial--tl` | Top-left               |

### Directions

| Class                    | Direction            |
| ------------------------ | -------------------- |
| `ease-speed-dial--up`    | Fan upward (default) |
| `ease-speed-dial--down`  | Fan downward         |
| `ease-speed-dial--left`  | Fan left             |
| `ease-speed-dial--right` | Fan right            |

### Hover trigger

```html
<div class="ease-speed-dial ease-speed-dial--br ease-speed-dial--hover">
  ...
</div>
```

---

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | Yes       |
| Firefox | Yes       |
| Safari  | Yes       |
| Edge    | Yes       |

---

## Tech Stack

- HTML
- CSS (animations, transitions, flexbox)
- Minimal JavaScript (class toggling, Escape key, outside click)

---

## Preview

Open `demo.html` directly in your browser to see the component. Click the + button in the bottom-right corner.

---

## Contribution Notes

- Class naming follows `ease-*` convention
- CSS handles all visual states; JS only manages `--open` class
- Maintainer can integrate into `components/` after review
