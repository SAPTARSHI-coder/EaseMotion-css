# Motion Engine Runtime Event Listener Attacher Vitest Showcase

A pure CSS test showcase and documentation suite inspecting Vitest unit test assertion specs for Motion Engine Runtime Attachers in EaseMotion.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Vitest Unit Test Specs**: Validates synthetic listener registration mocks (`vi.spyOn(target, 'addEventListener')`), handler tracking, and non-blocking passive scroll execution.
- **Deduplication & Leak Prevention**: Ensures multiple registration calls on identical DOM nodes are safely deduplicated.
- **60 FPS Hardware Acceleration**: Keyframe box-shadow pulses and neon glow shifts run at 60 FPS.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage & Integration

Link `style.css` in your project:

```html
<button class="demo-btn btn-attacher ease-anim-attacher-pulse">
  Run Attacher Spec 🧪
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 2s;
  --ease-timing: ease-in-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Pulse transition duration | `2s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Cyber cyan theme accent | `#0ea5e9` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/motion-engine-runtime-attacher-vitest/`
- **Issue Reference**: `#81972`
- **Files Included**: `demo.html`, `style.css`, `README.md`
