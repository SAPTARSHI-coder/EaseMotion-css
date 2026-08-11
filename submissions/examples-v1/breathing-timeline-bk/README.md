# Corporate Breathing Timeline (EaseMotion)

A responsive, high-fidelity milestone and release pipeline component designed after Enterprise Corporate dashboard patterns. It features slow, rhythmic "breathing" status markers, clean status badges, interactive step checklists, and full light/dark theme adaptation.

Built entirely with pure HTML and CSS, leveraging the design tokens and keyframe structures of the **EaseMotion CSS** animation library.

---

## 🧱 Project Structure

- **`demo.html`**: A fully functional showcase containing the interactive roadmap layout, dark mode switcher, and staggered-delay loading items.
- **`style.css`**: Component styling defining the breathing keyframes, connecting segments, status theme colors, and layout positioning.
- **`README.md`**: Explanatory documentation of design, features, and classes used.

---

## 🚀 Run the Demo

To view the live showcase:
1. Make sure `easemotion.css` is built and available at the root of the repository (referred to as `../../../easemotion.css` in `demo.html`).
2. Open `demo.html` directly in any web browser, or serve it using a lightweight local web server:
   ```bash
   npx serve submissions/examples/breathing-timeline-bk/
   ```

---

## ✨ Features & Corporate Design Patterns

1. **Breathing Status Indicators**:
   - **Outer Sonar Ring (`ease-kf-breathing-ring`)**: A slow, expanding, and fading border outline that loops infinitely to represent "monitoring" or "live network" activity.
   - **Active Inner Core (`ease-kf-breathing-core`)**: A glowing core dot that inhales and exhales (scaling up/down and changing brightness) on active tasks.
2. **Breathing Timeline Segment (`ease-kf-line-glow`)**:
   - The connecting path segment between active milestones slowly pulses in gradient opacity, drawing the user's eye down the pipeline flow.
3. **Breathing Active Card (`ease-kf-breathing-card`)**:
   - The card representing the "In Progress" step (Phase 3) pulses its border-color and shadow glow dynamically using a custom breathing cycle.
4. **Staggered Page Load**:
   - Utilizes staggered loading times (mapped inline via `animation-delay` using EaseMotion base values) so cards slide and fade up gracefully in chronological order.
5. **Interactive Checklist**:
   - Each phase card displays sub-milestones with checklist items. Checking off a task strikes it through and lowers opacity using smooth, GPU-accelerated CSS transitions.
6. **Pure CSS Light/Dark Mode Switcher**:
   - A toggle built using the `:checked` checkbox selector technique to switch between a slate-dark dashboard scheme and a clean-white business document scheme without any JavaScript.

---

## 🎛️ EaseMotion CSS Integration

| Resource / Class | Applied to | Description / Purpose |
|---|---|---|
| `--ease-color-primary` | Buttons, Active Cards | Brand accent color token |
| `--ease-font-sans` | Body wrapper | Standardizes modern corporate typography (`Inter`) |
| `--ease-space-*` | Card padding, timeline margins | Follows the EaseMotion spacing hierarchy |
| `--ease-radius-lg` | Card containers | Standardizes consistent corner roundings |
| `--ease-shadow-*` | Timeline cards | Applies elevation shadows based on active theme states |
| `ease-fade-in` | Title, timeline-items | Fades elements in during initial rendering |
| `ease-slide-up` | Title, timeline-items | Translates elements upward smoothly on load |
| `ease-ease` | CSS transitions | Standard EaseMotion timing function |
| `ease-ease-bounce` | Checkbox interactions | Playful spring-like timing function for checkmarks |

---

## ♿ Accessibility & Performance

- **Keyboard Navigation**: Timeline cards are focusable (`tabindex="0"`) with a clear, high-contrast focus outline. Checkboxes can be checked via keyboard space/enter.
- **Theme Switch Accessibility**: The theme switch label supports full keyboard controls (`space`/`enter` mapping) for toggle interactions.
- **Reduced Motion Support**: Inside `@media (prefers-reduced-motion: reduce)`, all loop keyframes (`animation: none`) and transitions are disabled, keeping the layout fully functional and static for accessibility compliance.
- **Performance Optimized**: Transitions are bound to `transform` and `opacity` properties to avoid rendering reflows and minimize browser layout recalculation.
