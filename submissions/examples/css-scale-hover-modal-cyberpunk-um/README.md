# Cyberpunk Neon Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-cyberpunk-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement Cyberpunk Neon interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional modal window driven entirely by CSS, designed with a high-contrast Cyberpunk aesthetic. It uses the zero-JS checkbox hack (`input[type="checkbox"]` with the `~` sibling selector) to manage state. The modal features a 3D perspective scale-up transition when opened. Interactive elements (buttons, close icons) feature aggressive neon glows, scanline glitch effects on hover, and scale-hover transforms to emphasize interactivity.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of neon colors, text shadows, and animations:

```css
:root {
  --ease-cyber-neon-primary-um: #0ff; /* Cyan */
  --ease-cyber-neon-secondary-um: #f0f; /* Magenta */
  --ease-cyber-neon-alert-um: #ff0055; /* Hot Red/Pink */
  --ease-cyber-timing-um: 0.3s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Building complex Cyberpunk UI elements often relies on heavy canvas drawing or JavaScript to handle glows, glitches, and states. This component packages a complete, highly interactive neon modal into a lightweight CSS structure. It leverages CSS custom properties for glowing `box-shadow` layering and compositor-friendly `transform` and `opacity` rules to ensure smooth 60fps animations.
