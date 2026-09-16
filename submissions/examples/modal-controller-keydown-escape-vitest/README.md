# Modal Controller Keydown Escape Listener Vitest Showcase

A pure CSS test showcase and documentation suite inspecting Vitest unit test assertion specs for Modal Controller keydown Escape listeners in the EaseMotion animation library.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies using CSS `:target` state handlers.
- **Vitest Unit Test Specs**: Validates synthetic keydown event dispatching (`KeyboardEvent('keydown', { key: 'Escape' })`), DOM unmounting, and focus restoration assertions.
- **Keyboard & Focus Trap Inspection**: Ensures keyboard navigation remains trapped inside active modal containers during test executions.
- **60 FPS Hardware Acceleration**: Backdrop blur (`backdrop-filter: blur(12px)`) and modal scale transforms run smoothly at 60 FPS.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage & Integration

Link `style.css` in your HTML markup and trigger modal targets via standard anchor fragments:

```html
<a href="#modal-vitest-std" class="demo-btn btn-modal">
  Launch Vitest Modal
</a>

<div id="modal-vitest-std" class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal-container">
    <div class="modal-header">
      <h3>Vitest Modal Controller Spec</h3>
      <a href="#" class="modal-close">&times;</a>
    </div>
    <div class="modal-body">Vitest synthetic keydown test active.</div>
  </div>
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Modal transition duration | `0.35s` |
| `--ease-timing` | Cubic-bezier timing function | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--primary-accent` | Cyber indigo theme accent | `#6366f1` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/modal-controller-keydown-escape-vitest/`
- **Issue Reference**: `#81974`
- **Files Included**: `demo.html`, `style.css`, `README.md`
