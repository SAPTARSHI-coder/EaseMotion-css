# CSS Slide-Up Popover

A lightweight, pure CSS and HTML slide-up popover component tailored for SaaS interfaces, part of the **EaseMotion CSS** library. This component provides a clean, smooth, and performant slide-up animation for context menus or settings panels without relying on any JavaScript.

## 🚀 Features

- **Pure CSS/HTML:** Zero JavaScript dependencies.
- **Smooth Animations:** Utilizes hardware-accelerated CSS transitions with custom cubic-bezier timing for an elastic feel.
- **Accessible & Responsive:** Adapts seamlessly across viewport sizes and respects `prefers-reduced-motion` settings.
- **SaaS-Ready:** Modern, clean, and easily customizable design tokens.

## 📦 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.

### HTML Structure
```html
<input type="checkbox" id="popover-toggle" class="popover-toggle">
<div class="trigger-wrapper">
    <label for="popover-toggle" class="btn btn-primary">Toggle Popover</label>
    <div class="popover">
        <!-- Popover content goes here -->
    </div>
</div>
```

## 🎨 Custom Properties (Design Tokens)

You can easily customize the modal by overriding these CSS variables in `:root`:

- `--primary-color`: Primary accent color (default: `#3b82f6`)
- `--bg-popover`: Background color of the popover (default: `#ffffff`)
- `--transition-speed`: Speed of the popover animation (default: `0.4s`)
- `--border-radius`: Border radius for the popover (default: `12px`)

## ♿ Accessibility

The popover component includes `prefers-reduced-motion` media queries out-of-the-box, ensuring that users with motion sensitivity receive an instant toggling experience without the slide-up animation.

---

*Part of the EaseMotion CSS library showcases.*
