# Animated Toggle Switch Component

### What does this do?
This submission adds highly interactive, customizable, and accessible animated toggle switches (`.ease-toggle`) supporting multiple advanced motion styles (Smooth, Bouncy, Elastic, 3D Flip, Neon Glow, and Icon Morphing).

---

### How is it used?

Wrap a standard, accessibly hidden `<input type="checkbox">` alongside a `.ease-toggle-track` inside a `.ease-toggle` label container. This structure ensures native accessibility semantics (keyboard focus, spacebar triggers, screen reader announcements) are retained while styling the switch dynamically:

```html
<label class="ease-toggle ease-toggle--md ease-toggle--primary">
  <input type="checkbox" class="ease-toggle-input">
  <span class="ease-toggle-track">
    <span class="ease-toggle-knob"></span>
  </span>
  <span class="ease-toggle-label">Toggle Feature</span>
</label>
```

#### Motion Modifiers
Apply these classes to the outer `.ease-toggle` container to change the transition kinetics:
- **Bouncy Transition**: `.ease-toggle--bouncy` (Overshoots and snaps organically using a spring bezier curve).
- **Elastic / Stretch Transition**: `.ease-toggle--elastic` (Knob stretches out liquidly in the direction of motion when active, then snaps back).
- **3D Flip Transition**: `.ease-toggle--flip` (The entire track rotates 180 degrees in 3D space, reversing colors and rotating the knob to face forward).
- **Neon Glow Transition**: `.ease-toggle--neon` (Creates a deep breathing ambient neon box-shadow aura around the track when enabled).

#### Icon Morphing Switch
To animate icons inside the knob (e.g. for light/dark mode switches), add nested SVGs inside the `.ease-toggle-knob` with `.ease-toggle-icon-off` and `.ease-toggle-icon-on` classes:

```html
<label class="ease-toggle ease-toggle--md ease-toggle--primary">
  <input type="checkbox" class="ease-toggle-input">
  <span class="ease-toggle-track">
    <span class="ease-toggle-knob">
      <!-- Off Icon (e.g. Sun / Cross) -->
      <svg class="ease-toggle-icon-off" viewBox="0 0 24 24">...</svg>
      <!-- On Icon (e.g. Moon / Check) -->
      <svg class="ease-toggle-icon-on" viewBox="0 0 24 24">...</svg>
    </span>
  </span>
  <span class="ease-toggle-label">Icon Toggle</span>
</label>
```

#### Size Scale Classes (Helper Classes)
- **Small (sm)**: `.ease-toggle--sm`
- **Medium (md - Default)**: `.ease-toggle--md`
- **Large (lg)**: `.ease-toggle--lg`

#### Theme Classes
- **Primary Accent**: `.ease-toggle--primary`
- **Success Accent**: `.ease-toggle--success`
- **Warning Accent**: `.ease-toggle--warning`
- **Danger Accent**: `.ease-toggle--danger`

#### Disabled States
To disable a switch, simply add the standard `disabled` attribute to the `<input>` element and the helper class `.ease-toggle--disabled` to the label wrapper. The switch will automatically mute its colors and disable interactions:

```html
<label class="ease-toggle ease-toggle--disabled">
  <input type="checkbox" class="ease-toggle-input" disabled>
  <span class="ease-toggle-track">
    <span class="ease-toggle-knob"></span>
  </span>
</label>
```

---

### Custom CSS Variables Configuration

You can fully customize the toggle switches by declaring/overriding CSS custom properties on any wrapper component:

```css
.my-custom-toggle {
  --toggle-width: 60px;
  --toggle-height: 32px;
  --toggle-padding: 4px;
  --toggle-bg-off: #e2e8f0;
  --toggle-bg-on: #ec4899; /* Hot Pink */
  --toggle-knob-bg: #ffffff;
  --toggle-speed: 0.25s;
}
```

---

### Why does it fit EaseMotion CSS?

Interactive toggle inputs are a critical form element that settings panels and admin dashboards rely on. 

This implementation aligns with EaseMotion's philosophy:
1. **Zero-runtime JavaScript**: All complex motion states, 3D rotations, stretching/morphing dimensions, and icon translations are done using pure CSS transitions, transforms, and keyframes.
2. **Built-in Accessibility**: Many CSS toggle libraries use `display: none` on the input, which completely breaks accessibility. This component utilizes the screen-reader-safe (`sr-only`) technique, ensuring keyboard users can focus (`Tab`) and toggle (`Spacebar`) the element, styled with a prominent `:focus-visible` ring.
3. **Respects Reduced Motion**: Built-in `@media (prefers-reduced-motion)` overrides immediately disable motion transitions, ensuring users with visual sensitivities receive safe, instant state swaps.
