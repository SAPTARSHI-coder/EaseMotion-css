# Cyberpunk Neon-Glow Input Field

## 1. What does this do?
This submission implements a cyberpunk-styled secure text input field. In its default state, it is framed by a simple neon cyan border. When focused by a user, the border shifts to a glowing neon magenta/pink border and loops an active pulsing glow box-shadow animation.

## 2. How is it used?
Developers can use this component by placing the `.input-group` markup inside their form elements and wrapping their input text tags in the `.cyber-input` class.

```html
<div class="input-group">
  <input type="text" class="cyber-input" placeholder="ENTER KEY...">
  <label class="input-label">ACCESS_GRID</label>
</div>
```

## 3. Why is this useful?
It serves as an introductory, beginner-level example showing:
- **Focus Pseudo-Class Styling:** Teaches how to style interactive forms using the `:focus` selector.
- **Custom Pulse Keyframes:** Highlights simple glowing shadow animations using CSS variables.
- **Responsive Sibling Selection:** Employs sibling selectors (`~`) to illuminate adjacent labels when input elements are selected.
