# 🧩 Profile Badge Avatar Layouts with Hover Scale

A modern, isolated layout implementation designed for standard UI profile representations. It packages clean status positioning anchors alongside an organic spring-mass hover scaling micro-interaction.

---

### Customization Scopes

You can quickly override sizing parameters or motion metrics locally using inline styles or utility variables:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-avatar-scale` | `1.1` | The target scale factor multiplier applied upon triggered hover states. |
| `--ease-avatar-duration` | `0.3s` | The absolute window of time required to settle transition cycles. |
| `--ease-avatar-timing` | `cubic-bezier(...)` | Custom elastic cubic-bezier easing to give the bounce a premium feel. |

### Implementation Sample
```html
<div class="avatar-wrapper">
  <div class="ease-avatar-hover" style="--ease-avatar-scale: 1.15;">
    <img src="avatar.jpg" alt="Profile">
  </div>
  <span class="status-badge online"></span>
</div>
