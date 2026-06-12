# ⚡ Ease Floating Action Speed Dial Menu

Animated floating speed dial menu component for EaseMotion CSS.

## ✨ What it does

A floating action button fixed at the bottom of the screen that
expands into multiple smaller action buttons with smooth staggered
animations when clicked.

## 🚀 How to Use

```html
<div class="ease-speed-dial" id="myDial">
  <div class="ease-speed-dial__menu">
    <button class="ease-speed-dial__item" title="Share">📤</button>
    <button class="ease-speed-dial__item" title="Edit">✏️</button>
    <button class="ease-speed-dial__item" title="Save">💾</button>
  </div>
  <button class="ease-speed-dial__trigger">+</button>
</div>

<script>
  const dial = document.getElementById("myDial");
  dial
    .querySelector(".ease-speed-dial__trigger")
    .addEventListener("click", () => {
      dial.classList.toggle("open");
    });
</script>
```

## 🎨 Color Variants

| Class                      | Color           |
| -------------------------- | --------------- |
| _(default)_                | Indigo & blue   |
| `ease-speed-dial--rose`    | Rose & pink     |
| `ease-speed-dial--emerald` | Emerald & green |

## 📁 Files

| File        | Description           |
| ----------- | --------------------- |
| `demo.html` | Full interactive demo |
| `style.css` | Speed dial styles     |
| `README.md` | Documentation         |

## 🌍 Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅      |
| Firefox | ✅      |
| Safari  | ✅      |
| Edge    | ✅      |
