# Neumorphic Soft Rotate-Click Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-rotate-click-modal-neumorphic-um/`

A pure CSS animated Modal utilizing a smooth Rotate-Click interaction transition, styled to complement soft, tactile Neumorphic (soft UI) interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window designed around the Neumorphic (or Soft UI) design trend. It features light, soft backgrounds with prominent outset and inset box-shadows that make elements appear extruded from or pressed into the background. The entrance animation uses a gentle 3D perspective `rotateX` transform. Interactive elements feature a satisfying "Rotate-Click" active state where the shadow switches from outset to inset while slightly rotating, creating a highly realistic physical button press effect.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`. Ensure your body background matches the `--ease-neu-bg-um` color so the neumorphic shadows blend seamlessly.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of background colors and the light/dark shadow tones that create the neumorphic effect:

```css
:root {
  --ease-neu-bg-um: #e0e5ec; /* Soft grey background */
  --ease-neu-shadow-light-um: rgba(255, 255, 255, 0.7);
  --ease-neu-shadow-dark-um: rgba(163, 177, 198, 0.6);
  --ease-neu-timing-um: 0.4s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Neumorphic interfaces rely heavily on complex, multi-layered box-shadows. Animating these shadows (especially switching between `inset` and outset) can cause performance issues if not handled carefully. This component implements these shadow transitions alongside hardware-accelerated transforms (for the rotate-click feel) purely in CSS. This avoids JavaScript overhead, guarantees smooth frame rates, and ensures that the physical "pressed" state of buttons feels immediate and tactile to the user.
