# Footer Component

A comprehensive, production-ready footer component with modern glassmorphism design and premium features.

## Features

- ✨ Premium glassmorphism design with backdrop blur effects
- 🎨 Animated gradient background orbs
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌓 Light/Dark mode support
- ♿ Accessibility compliant (ARIA labels, keyboard navigation)
- 🎭 Smooth animations and hover effects
- 🌐 Social media icons (GitHub, Twitter, YouTube, LinkedIn, Discord, etc.)
- 📧 Newsletter subscription form
- 🎯 CSS custom properties for easy theming

## Usage

```html
<footer class="ease-footer">
  <div class="ease-footer-container">
    <div class="ease-footer-grid">
      <!-- Brand Section -->
      <div class="ease-footer-brand">
        <a href="#" class="ease-footer-logo">
          <span class="ease-footer-logo-icon">⚡</span>
          <span>EaseMotion</span>
        </a>
        <p class="ease-footer-description">Your description</p>
        <div class="ease-footer-social">
          <a href="https://github.com/..."><span class="icon"></span></a>
        </div>
      </div>
      
      <!-- Link Columns -->
      <div class="ease-footer-col">
        <h3 class="ease-footer-col-title">Product</h3>
        <ul class="ease-footer-links">
          <li><a href="#">Features</a></li>
        </ul>
      </div>
    </div>
    
    <div class="ease-footer-bottom">
      <div class="ease-footer-copyright">
        <span>&copy; 2024 Your Company</span>
      </div>
    </div>
  </div>
</footer>
```

## Customization

```css
:root {
  --ease-footer-accent: #6366f1;
  --ease-footer-padding: 4rem 2rem 2rem;
}
```

## Demo

Open `footer-demo.html` to see the component in action.

## Author

Created by eranmol2007-coder for EaseMotion CSS

## License

MIT
