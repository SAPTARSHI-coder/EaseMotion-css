# Neumorphic Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-neumorphic-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement Neumorphic Soft interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional modal window driven entirely by CSS, designed with a Neumorphic (Soft UI) aesthetic. It uses the checkbox hack (`input[type="checkbox"]` with the `~` sibling selector) to manage state without JavaScript. The modal features a spring-eased scale-up transition when opened, scale-hover interactions to intensify outer shadows, and inset shadow active states for a tactile button feel.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes several CSS custom properties attached to the `:root` pseudo-class for easy tuning of colors, shadows, and animations:

```css
:root {
  --ease-neu-bg-um: #e0e5ec;
  --ease-neu-shadow-light-um: rgba(255, 255, 255, 0.8);
  --ease-neu-shadow-dark-um: rgba(163, 177, 198, 0.6);
  --ease-neu-timing-um: 0.4s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

It allows developers to implement complex, interactive Neumorphic states with zero JavaScript overhead. Managing Neumorphic box-shadow transitions (extruded vs pressed states) combined with scale animations can be tricky. This component packages it into a clean, highly performant CSS structure that degrades gracefully for users preferring reduced motion.
