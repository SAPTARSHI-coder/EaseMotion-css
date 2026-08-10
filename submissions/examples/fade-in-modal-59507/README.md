# CSS Fade-In Modal for SaaS Showcase Layouts

A modern, lightweight, pure CSS fade-in modal layout designed for SaaS applications. Built exclusively with HTML5 and CSS3, it requires zero JavaScript.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript dependencies or frameworks required.
- **Smooth Animations:** Elegant fade-in and scale up effects with CSS transitions.
- **Accessible:** Uses `aria` roles and includes `prefers-reduced-motion` support.
- **Responsive Design:** Adapts fluidly to mobile, tablet, and desktop screens.
- **Premium Aesthetics:** Employs vibrant gradients, glassmorphic backdrop filters, and subtle hover interactions.

## 🛠️ Usage

This showcase uses the `:target` CSS pseudo-class to toggle the modal state without JavaScript. The trigger buttons use standard href anchors pointing to the modal's ID.

### HTML Structure

```html
<!-- Trigger -->
<a href="#demo-modal" class="btn btn-primary" role="button">Open Modal</a>

<!-- Modal Overlay & Container -->
<div id="demo-modal" class="modal-overlay">
  <div class="modal-container" role="dialog" aria-modal="true">
    <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
    <!-- Modal Content... -->
  </div>
</div>
```

### CSS Custom Properties

Easily customize the modal's look and feel by modifying these CSS variables in `:root`:

```css
:root {
  --primary-color: #6366f1;
  --modal-bg: #ffffff;
  --overlay-bg: rgba(17, 24, 39, 0.6);
  --border-radius: 16px;
  --transition-speed: 0.4s;
  /* ...other variables */
}
```

## 📱 Responsiveness
The modal is fully responsive. On screens smaller than 480px, it reduces border radii, tightens padding, and stacks buttons vertically to provide a better mobile experience.
