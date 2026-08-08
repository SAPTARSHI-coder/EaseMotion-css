# Animated Modal/Dialog Submission

## 1. What does this do?
It provides a modern, animated modal/dialog component with multiple variants (alert, confirm, form, success, image preview, fullscreen), smooth entrance/exit animations, backdrop blur effects, and full keyboard accessibility. Perfect for confirmations, forms, alerts, and content previews.

## 2. How is it used?
Wrap modal content in `.modal-overlay` with `.modal` inside. Use different animation classes (`ease-scale-in`, `ease-slide-up`, `ease-fade-in`) for entrance effects. Open modals by adding `.active` class to overlay. Close by clicking overlay, close button, or pressing Escape.

## 3. Why is it useful?
- Essential component for modern web applications
- 6 different modal types (alert, confirm, form, success, image, fullscreen)
- Smooth scale, fade, and slide animations
- Backdrop blur effect for better focus
- Keyboard accessible (Escape to close)
- Focus management (auto-focus first input)
- Click outside to close
- Form validation support
- Image preview with caption
- Fullscreen modal for immersive content
- Toast notifications for feedback
- Fully responsive design
- Accessible with ARIA labels and `prefers-reduced-motion` support
- Easy to customize colors, sizes, and animations
- Maintainer can easily standardize this as `.ease-modal-[YOUR_INITIALS]` in the core library.