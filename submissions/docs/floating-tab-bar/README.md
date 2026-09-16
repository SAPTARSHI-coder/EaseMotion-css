# Documentation: Floating Tab Bar Component (#78378)

Comprehensive integration guide and usage documentation for the EaseMotion library's **Floating Tab Bar** component (`#78378`), fully addressing documentation issue `#78541`.

## 🚀 Overview & Features

- **Frosted Glassmorphism Styling:** Built with background blur (`backdrop-filter: blur(16px)`) and subtle glowing borders.
- **Zero JavaScript Dependencies:** Pure HTML and CSS implementation.
- **Accessibility:** Full support for keyboard navigation, focus-visible states, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage Example

```html
<nav class="ease-floating-tab-bar" aria-label="Floating Navigation Bar">
    <button class="em-tab-item active" aria-current="page">Home</button>
    <button class="em-tab-item">Explore</button>
    <button class="em-tab-item">Activity</button>
    <button class="em-tab-item">Profile</button>
</nav>
