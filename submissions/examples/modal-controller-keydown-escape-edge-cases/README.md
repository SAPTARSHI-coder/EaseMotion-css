# Modal Controller Keydown Escape Listener Edge Case Test Showcase

A pure CSS test showcase and documentation suite inspecting edge cases, focus trapping, and keyboard Escape listener interactions for Modal Controllers in the EaseMotion animation library.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies using CSS `:target` state handlers.
- **Edge Case Coverage**: Validates single modal overlay dismissals, nested modal stack unwinding, and focus restoration.
- **Keyboard & Focus Trap Inspection**: Ensures keyboard navigation remains trapped inside active modal containers.
- **60 FPS Hardware Acceleration**: Backdrop blur (`backdrop-filter: blur(12px)`) and modal scale transforms run smoothly at 60 FPS.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage & Integration

Link `style.css` in your HTML markup and trigger modal targets via standard anchor fragments:

```html
<a href="#modal-standard" class="demo-btn btn-modal">
  Open Modal
</a>

<div id="modal-standard" class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal-container">
    <div class="modal-header">
      <h3>Modal Controller</h3>
      <a href="#" class="modal-close">&times;</a>
    </div>
    <div class="modal-body">Modal Content</div>
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

- **Submission Directory**: `submissions/examples/modal-controller-keydown-escape-edge-cases/`
- **Issue Reference**: `#81975`
- **Files Included**: `demo.html`, `style.css`, `README.md`
