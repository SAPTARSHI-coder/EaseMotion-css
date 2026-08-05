# Help Button Component

A lightweight Help (`?`) button for the EaseMotion CSS navbar.

---

## Features

- 🌙 Supports Dark Theme
- ☀️ Supports Light Theme
- 🎨 Uses CSS Variables
- 💬 Tooltip on Hover
- ✨ Smooth Hover Animation
- 📱 Responsive
- ♿ Accessible

---

## Files

```
index.html
style.css
README.md
```

---

## HTML

```html
<div class="help-wrapper">
    <button class="help-btn">?</button>
    <span class="tooltip">Need Help?</span>
</div>
```

---

## CSS Classes

| Class | Description |
|--------|-------------|
| `.help-wrapper` | Tooltip Container |
| `.help-btn` | Circular Help Button |
| `.tooltip` | Hover Tooltip |

---

## Customization

Replace the click event with your own page.

```javascript
window.location.href="help.html";
```

or

```javascript
window.open("https://yourwebsite.com/docs");
```

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

---

## License

MIT License