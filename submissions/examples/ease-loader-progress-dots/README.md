# Progress Dots (`ease-loader-progress-dots`)

A classic sequential three-dot loader, commonly used as a "typing" or "processing" indicator in chat interfaces and modern web applications.

## 🚀 Features & EaseMotion Showcase

This simple but highly effective animation relies on staggering keyframe delays across sibling elements:

- **Sequential Animation**: Uses `nth-child` targeted `animation-delay` (with negative values) to start the dots in staggered sequence without having to wait for the first loop to finish.
- **Combined Transforms**: Animates both `scale` and `opacity` simultaneously to create a natural, "breathing" typing effect.
- **Chat Interface Ready**: Comes pre-packaged in a pill-shaped wrapper, making it visually identical to common messaging app typing indicators (like iOS or Slack).

## 🛠️ Usage

This demo is entirely self-contained. You can open `demo.html` directly in your browser. All required CSS is at the top of the `style.css` file.

```html
<div class="ease-loader-progress-dots">
  <span></span>
  <span></span>
  <span></span>
</div>
