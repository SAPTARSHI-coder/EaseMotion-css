# 📝 Form Components — EaseMotion CSS

Animated, accessible form components built with the `ease-` naming convention. Designed to bring smooth, human-readable animations to everyday form elements.

---

## ✨ Features

- 🎯 **Floating Labels** — Labels that elegantly animate into place on focus
- 💫 **Glow-on-Focus Inputs** — Soft purple glow when an input is active
- ✅ **Bouncy Checkboxes** — Playful bounce animation on toggle
- 📄 **Smooth Textareas** — Consistent styling with smooth transitions
- 🌙 **Dark Mode Ready** — Built with dark backgrounds in mind
- ♿ **Accessible** — Semantic HTML with proper label associations

---

## 🚀 Usage

### Basic Input with Floating Label
```html
<div class="ease-input-group">
  <input type="text" class="ease-input-soft ease-focus-glow" id="name" required />
  <label for="name" class="ease-label-float">Your Name</label>
</div>
```

### Textarea
```html
<div class="ease-input-group">
  <textarea class="ease-textarea-smooth" id="msg" rows="4" required></textarea>
  <label for="msg" class="ease-label-float">Your Message</label>
</div>
```

### Animated Checkbox
```html
<label class="ease-checkbox-wrap">
  <input type="checkbox" class="ease-checkbox-bounce" />
  <span>Subscribe to newsletter</span>
</label>
```

---

## 🎨 Available Classes

| Class | Description |
|-------|-------------|
| `ease-form-container` | Wrapper for the entire form |
| `ease-input-group` | Wrapper for input + floating label |
| `ease-input-soft` | Base soft-styled input field |
| `ease-focus-glow` | Adds a purple glow on focus |
| `ease-textarea-smooth` | Smooth animated textarea |
| `ease-label-float` | Floating label effect |
| `ease-checkbox-wrap` | Wrapper for checkbox + label text |
| `ease-checkbox-bounce` | Checkbox with bounce animation |
| `ease-btn-primary` | Primary action button |

---

## 🎬 Animations Used

| Animation | Trigger | Duration |
|-----------|---------|----------|
| Label float | Input focus / filled | 0.3s |
| Focus glow | Input focus | 0.35s |
| Checkbox bounce | Checkbox checked | 0.4s |
| Button lift | Button hover | 0.25s |

---

## 🎨 Customization

You can override the CSS variables in your own stylesheet:

```css
:root {
  --ease-primary: #7c3aed;   /* Main accent color */
  --ease-bg: #1a1a2e;        /* Background color */
  --ease-text: #f5f5f5;      /* Text color */
  --ease-border: #3a3a5e;    /* Default border color */
  --ease-glow: rgba(124, 58, 237, 0.4); /* Focus glow color */
}
```

---

## 📂 Files

```
form-components/
├── demo.html      # Live demo of all components
├── style.css      # Component styles & animations
└── README.md      # This file
```

---

## 🖥️ Preview

Open `demo.html` in your browser to see all components in action:

```bash
# On Windows
start demo.html

# On Mac
open demo.html

# On Linux
xdg-open demo.html
```

---

## 🛠️ Browser Support

✅ Chrome / Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Opera (latest)

---

## 👨‍💻 Author

Created with ❤️ by [@aryanmalhotraug25-hash](https://github.com/aryanmalhotraug25-hash)

---

## 📜 License

MIT — Part of the [EaseMotion CSS](https://github.com/saptarshi-coder/EaseMotion-CSS) library.

---

## 🙏 Acknowledgments

Thanks to [@saptarshi-coder](https://github.com/saptarshi-coder) for creating EaseMotion CSS and maintaining a welcoming community for contributors!