# 3D-Flip Modal

A modern, pure CSS 3D-Flip Modal designed for SaaS showcase layouts. This component uses CSS 3D transforms (`perspective` and `rotateX`) to create a smooth, dynamic flipping entrance effect without relying on JavaScript.

## 🚀 Features

- **Pure CSS/HTML**: No JavaScript required, utilizing the hidden checkbox hack for state management.
- **3D Transform Animation**: Utilizes a custom `cubic-bezier` transition for a realistic, bouncy 3D flip effect.
- **Fully Responsive**: Adapts seamlessly to desktop, tablet, and mobile viewports.
- **Accessible**: Includes `prefers-reduced-motion` support to disable 3D transforms and use simple fades for users who prefer reduced motion.
- **Easy Customization**: Built with CSS custom properties (variables) for quick theming and adjustments.

## 📁 File Structure

- `demo.html` - The showcase layout containing the modal structure.
- `style.css` - The pure CSS stylesheet with all 3D animations and styles.

## 🎨 Custom Properties

You can easily customize the modal's appearance by modifying the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #4f46e5;
    --primary-hover: #4338ca;
    --secondary-color: #e5e7eb;
    --secondary-hover: #d1d5db;
    --text-main: #111827;
    --text-muted: #6b7280;
    --bg-main: #f9fafb;
    --bg-modal: #ffffff;
    --overlay-bg: rgba(0, 0, 0, 0.6);
    --transition-speed: 0.6s;
    --border-radius: 12px;
}
```

## 🛠 Usage

1. Copy the HTML structure from `demo.html` into your project. Make sure to keep the `<input type="checkbox" id="modal-toggle">` and the labels linked to this ID for the toggle functionality to work.
2. Link or copy the CSS from `style.css` to your project's stylesheet.
3. Customize the colors and sizing via the provided CSS variables.

Enjoy building your next SaaS landing page!
