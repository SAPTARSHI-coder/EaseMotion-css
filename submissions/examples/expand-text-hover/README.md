# Expand Text Hover

A lightweight and smooth text hover animation built using pure CSS.  
When the user hovers over the text, it slightly enlarges and increases the spacing between letters, creating a clean expand effect.

---

## ✨ Features

- Smooth scaling animation
- Expanding letter-spacing effect
- Pure CSS (No JavaScript)
- Lightweight and beginner-friendly
- Easy to customize

---

## 📂 Files Included

```text
expand-text-hover/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Demo Preview

Hover over the text to see:

- Text scaling effect
- Smooth transition
- Expanding letters

---

## 🛠️ Usage

Add the class to any text element:

```html
<h1 class="expand-text-hover">Hover Me</h1>
```

---

## 🎨 CSS

```css
.expand-text-hover {
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  transition:
    transform 0.3s ease,
    letter-spacing 0.3s ease;
  cursor: pointer;
}

.expand-text-hover:hover {
  transform: scale(1.1);
  letter-spacing: 4px;
}
```

---

## 💡 How It Works

- `transform: scale(1.1)` enlarges the text slightly
- `letter-spacing` creates the expanding effect
- `transition` ensures smooth animation

---

## 🌐 Browser Compatibility

Tested and works on:

- Chrome
- Firefox
- Edge
- Safari

---
