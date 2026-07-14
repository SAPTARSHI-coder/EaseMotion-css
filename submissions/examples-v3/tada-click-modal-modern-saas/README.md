# CSS Tada-Click Modal for Modern SaaS Layouts

A responsive, pure CSS modal featuring a smooth **Tada-Click** entrance animation designed for modern SaaS interfaces. The component requires **no JavaScript** and uses a checkbox toggle for opening and closing the modal.

## ✨ Features

- Pure HTML + CSS (No JavaScript)
- Smooth **Tada-Click** animation
- Modern SaaS-inspired UI
- Fully responsive
- Keyboard accessible
- CSS custom properties for easy customization
- Lightweight and reusable

## 📁 Files

```
submissions/
└── tada-click-modal-modern-saas/
    ├── demo.html
    ├── style.css
    └── README.md
```

## 🚀 Usage

1. Open `demo.html` directly in your browser.
2. Click the **Launch Modal** button.
3. The modal opens with a smooth **Tada-Click** animation.
4. Click **Close** to dismiss the modal.

## 🎨 Customization

The animation can be customized using CSS variables:

```css
:root {
    --duration: 0.65s;
    --ease: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --scale-start: 0.8;

    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --radius: 18px;
}
```

You can easily modify:

- Animation duration
- Animation easing
- Initial scale
- Button colors
- Border radius
- Shadows

## ♿ Accessibility

- Keyboard accessible (`tabindex`)
- Focus styles included
- Semantic HTML structure
- Responsive on desktop, tablet, and mobile devices

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## 💡 Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a reusable, animation-first UI component built entirely with CSS. The Tada-Click interaction adds a lively, polished motion suitable for modern SaaS applications while remaining lightweight, customizable, and easy to integrate into any project.

## 📜 License

This submission follows the licensing and contribution guidelines of the EaseMotion CSS repository.