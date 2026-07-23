# Ease Glassmorphism Card (#43002)

### 1. What does this do?
This is an advanced UI layout card implementing glassmorphic principles (frosted-glass blurs and ambient pass-through gradients) boosted by hardware-accelerated 3D hover animations.

### 2. How is it used?
Apply the global `.glass-card` selector class directly to your container boxes. You can adjust background variables inside `:root`:

```html
<div class="glass-card">
  <div class="glass-card-header">...</div>
  <div class="glass-card-body">...</div>
</div>