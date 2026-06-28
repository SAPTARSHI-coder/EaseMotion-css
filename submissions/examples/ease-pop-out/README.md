# Ease Pop Out Animation

## Description
This animation makes an element briefly scale up and then quickly disappear using a smooth pop-out effect.

---

## Animation Behavior

- Starts at normal size (scale 1)
- Slightly grows (scale 1.1)
- Shrinks to nothing (scale 0)
- Fades out (opacity 0)

---

## Usage

```html
<button class="pop" onclick="this.classList.add('pop')">
  Click me
</button>