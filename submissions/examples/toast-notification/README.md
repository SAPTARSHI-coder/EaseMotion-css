# Toast Notification Component

### What does this do?
This submission adds a stackable, auto-dismissing toast notification component (`.ease-toast`) that slides in from the screen edge and collapses vertically upon exit.

---

### How is it used?

Place `.ease-toast` elements inside a fixed `.ease-toast-container` wrapper (usually positioned top-right or bottom-right):

```html
<div class="ease-toast-container">
  <!-- Success Toast -->
  <div class="ease-toast ease-toast-success">
    <span>Database sync complete!</span>
  </div>
</div>
```

#### Theme Modifiers
- **Success Accent**: `.ease-toast-success`
- **Danger Accent**: `.ease-toast-danger`
- **Warning Accent**: `.ease-toast-warning`
- **Info Accent**: `.ease-toast-info`

#### Custom CSS Variables Configuration
You can customize the toast appearance dynamically:

```css
.my-custom-toast {
  --toast-bg: #090c14;
  --toast-color: #f8fafc;
  --toast-accent: #a855f7; /* Custom purple accent border */
}
```

---

### Why does it fit EaseMotion CSS?

A dynamic toast notification is a key UI pattern missing from the components library. 

This implementation provides both the entry slide-in transition and the auto-dismiss exit collapse sequence in **pure CSS** (using a delayed exit animation with `animation-fill-mode: forwards`). It requires zero JavaScript runtime for animation logic, supporting EaseMotion's philosophy of highly performant, lightweight, and human-readable styling.
