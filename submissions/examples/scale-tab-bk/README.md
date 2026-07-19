# Scale Tab Component (Space UI Theme)

A responsive, high-precision spaceship cockpit dashboard component demonstrating dynamic scale transitions for tab selectors and content panels. 

Built entirely with pure HTML and CSS, leveraging the variables, keyframes, and layout configurations of the **EaseMotion CSS** animation library.

---

## 🧱 Project Structure

- **`demo.html`**: A self-contained mockup console showcasing the cockpit dashboard, custom keyboard controls, and three interactive tabs (Orbit, Propulsion, and Life Support).
- **`style.css`**: Component styling containing the space backgrounds, scaling transitions, radar scopes, and responsive breakpoint rules.
- **`README.md`**: Explanatory documentation of features and EaseMotion properties.

---

## 🚀 Run the Demo

To view the live showcase:
1. Make sure `easemotion.css` is built and available at the root of the repository (referred to as `../../../easemotion.css` in `demo.html`).
2. Open `demo.html` directly in any web browser, or serve it using a lightweight local web server:
   ```bash
   npx serve submissions/examples/scale-tab-bk/
   ```

---

## ✨ Features & Space Design Patterns

1. **Starlight Grid Background**:
   - Integrates a light starry vector backdrop using CSS radial-gradient positions and deep nebula glows to set a premium space cockpit atmosphere.
2. **Tab Selector Scale Hover & Active States**:
   - Tab labels scale down to 95% opacity by default. Hovering over a label scales it up (`transform: scale(0.98)`). Activating it via radio input scales it to 105% (`transform: scale(1.05)`) with a cyber-cyan glow.
3. **Elastic Content Panel Scaling**:
   - Active panels scale and translate into place (`transform: scale(0.95) translateY(12px)` to `transform: scale(1) translateY(0)`) using a customized spring cubic-bezier curve that mimics precision landing docks.
4. **Radar Scope Simulation**:
   - The Orbit Telemetry panel features a rotating conic-gradient radar sweep (`radar-rotate`) and a pulsing active target node (`ease-kf-pulse`).
5. **Interactive Propulsion & Life Support Graphics**:
   - Includes custom, pure-CSS metric graphs that pulse continuously to resemble fuel cells and shield levels.
6. **Pure CSS Switching**:
   - Employs hidden radio selectors and sibling combinators to navigate between views without relying on heavy JavaScript frameworks.

---

## 🎛️ EaseMotion CSS Integration

| Resource / Class | Applied to | Description / Purpose |
|---|---|---|
| `--ease-font-sans` | Body wrapper | Standardizes modern typography (`Inter`) |
| `--ease-font-mono` | Console readouts | Applies monospace typography (`JetBrains Mono`/`Fira Code`) for metrics |
| `--ease-space-*` | Panel grids, margin padding | Align elements to EaseMotion's spatial standards |
| `--ease-radius-md` / `lg` | Console cards, buttons | Standardizes corner rounded profiles |
| `ease-fade-in` | Main container | Fades the dashboard in on page initial rendering |
| `ease-slide-up` | Main container | Slides the dashboard upward on load |
| `ease-kf-pulse` | Target radar ping | Standard loop pulse keyframe for status updates |

---

## ♿ Accessibility & Performance

- **ARIA Semantics**: Mapped to standard tab roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`) with synchronized `aria-selected` and `aria-controls` properties for assistive technologies.
- **Keyboard Access**: Labels are focusable via tab index. Keydown events are captured so pressing Space or Enter toggles the radio selectors, updating active tabs.
- **Reduced Motion Support**: Inside `@media (prefers-reduced-motion: reduce)`, all rotating sweeps, color shifts, and scale/translate transitions are completely deactivated, guaranteeing safety for motion-sensitive users.
- **Compositor Efficiency**: Scaling and opacity alterations are performed in the GPU rendering layer, preventing layout reflows and reducing CPU paint cycles.
