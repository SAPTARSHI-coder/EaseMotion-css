# CSS Slide-Up Drawer for SaaS Showcase Layouts

A modern, lightweight, pure CSS slide-up drawer designed for SaaS applications and dashboard layouts. This pattern uses the "checkbox hack" for state management, eliminating the need for JavaScript while maintaining smooth, performant animations.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required for state management or animations.
- **Performant Animations:** Uses CSS `transform` and `opacity` with cubic-bezier easing for buttery-smooth transitions.
- **SaaS-Ready Design:** Clean typography, subtle shadows, and a modern aesthetic suited for dashboards.
- **Staggered Entrance Animations:** The drawer content (e.g., chart bars) animates in sequentially when opened.
- **Accessible & Responsive:** Supports `prefers-reduced-motion` and adapts seamlessly to mobile viewports.

## 📁 Files Included

- `demo.html` — The showcase layout featuring a dummy SaaS dashboard and the slide-up drawer.
- `style.css` — The pure CSS stylesheet containing all layout, styling, and animation logic.

## 🛠️ Usage

1. Include the `style.css` in your project.
2. Structure your HTML using the hidden checkbox pattern:
   ```html
   <input type="checkbox" id="drawer-toggle" class="drawer-toggle" aria-label="Toggle drawer">
   <label for="drawer-toggle" class="drawer-btn">Open Drawer</label>
   
   <div class="slide-up-drawer">
       <!-- Drawer Content -->
   </div>
   <label for="drawer-toggle" class="drawer-overlay"></label>
   ```

## 🎨 CSS Custom Properties

Easily theme the drawer by modifying these CSS variables in `:root`:

```css
:root {
    --primary-color: #4f46e5;
    --primary-hover: #4338ca;
    --bg-color: #f9fafb;
    --card-bg: #ffffff;
    --drawer-bg: #ffffff;
    --text-main: #111827;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --transition-speed: 0.4s;
    --easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 📝 Notes

This component relies on sibling selectors (`~`), so the checkbox input (`#drawer-toggle`) must precede the `.slide-up-drawer` and `.drawer-overlay` in the DOM structure for the CSS state changes to work correctly.
