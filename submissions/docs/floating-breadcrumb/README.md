# Documentation: Floating Breadcrumb Component (#79232)

Comprehensive integration guide and usage documentation for the EaseMotion library's **Floating Breadcrumb** component (`#79232`), fully addressing documentation issue `#78617`.

## 🚀 Overview & Features

- **Floating Elevation:** Built with frosted glassmorphism styling and smooth hover lifts (`-2px`).
- **Responsive Layout:** Clean semantic `<nav>` and `<ol>` flexbox layout supporting automatic path separators.
- **Accessibility:** Full support for keyboard focus states, `aria-current="page"`, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage Example

```html
<nav class="ease-floating-breadcrumb" aria-label="Breadcrumb Navigation">
    <ol class="em-breadcrumb-list">
        <li class="em-breadcrumb-item"><a href="#" class="em-breadcrumb-link">Home</a></li>
        <li class="em-breadcrumb-item"><a href="#" class="em-breadcrumb-link">Components</a></li>
        <li class="em-breadcrumb-item active" aria-current="page">Breadcrumb</li>
    </ol>
</nav>
