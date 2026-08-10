# ⚡ Ease Favicon Fix

A fix for missing favicons across all EaseMotion CSS demo pages.

## 🐛 Problem
All demo HTML files were missing a `<link rel="icon">` tag,
causing browser tabs to show a blank default icon instead of
a branded EaseMotion CSS favicon.

## ✅ Fix
Add the following lines inside the `<head>` tag of every HTML file:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="shortcut icon" href="/favicon.ico" />
```

## 📁 Files
| File | Description |
|------|-------------|
| `demo.html` | Demo page showing before/after favicon fix |
| `style.css` | Styles for the demo page |
| `README.md` | Documentation |

## 🌍 Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |

## 📖 Usage
Copy the favicon link tags into the `<head>` of any HTML file.