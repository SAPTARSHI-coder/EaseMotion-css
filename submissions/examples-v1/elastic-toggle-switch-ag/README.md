# Elastic Toggle Switch (Neon)

## 1. What does this do?

Provides a pure CSS toggle switch with neon styling and elastic transitions that stretch the toggle thumb during state changes.

## 2. How is it used?

Link `easemotion.css` and the local `style.css` inside your HTML:

```html
<label class="neon-toggle-wrapper-ag theme-cyan-ag">
  <input type="checkbox" class="neon-toggle-input-ag" checked />
  <span class="neon-toggle-track-ag">
    <span class="neon-toggle-status-ag status-on-ag">ON</span>
    <span class="neon-toggle-status-ag status-off-ag">OFF</span>
    <span class="neon-toggle-thumb-ag"></span>
  </span>
  <span class="neon-toggle-label-ag">Enable System</span>
</label>
```

### Modifier Classes

- Colors: `theme-cyan-ag`, `theme-green-ag`, `theme-pink-ag`, `theme-amber-ag`, `theme-purple-ag`
- Sizes: `size-sm-ag`, `size-lg-ag`

---

## 3. Why is it useful?

It provides an interactive toggle switch that is accessible and responsive without using any JavaScript, using CSS transitions for smooth rendering.
