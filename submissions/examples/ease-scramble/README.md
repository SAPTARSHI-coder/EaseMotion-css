# ⚡ Ease Text Scramble Decode Effect

Matrix-style text scramble animation component for EaseMotion CSS.

## ✨ What it does
Characters scramble with random letters and symbols before decoding
to reveal the actual text. Triggers automatically on page load and
re-triggers on hover.

## 🚀 How to Use
```html
<h1 class="ease-scramble" data-text="Hello World">
  Hello World
</h1>
```

Add the script to your page:
```html
<script>
  const chars = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function scramble(el) {
    const target = el.dataset.text;
    let iteration = 0;
    const totalFrames = target.length * 6;
    if (el._scrambleInterval) clearInterval(el._scrambleInterval);
    el.classList.add('scrambling');
    el._scrambleInterval = setInterval(() => {
      el.textContent = target.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (i < Math.floor(iteration / 6)) return target[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      iteration++;
      if (iteration > totalFrames) {
        clearInterval(el._scrambleInterval);
        el.textContent = target;
        el.classList.remove('scrambling');
      }
    }, 40);
  }

  document.querySelectorAll('.ease-scramble').forEach(el => {
    setTimeout(() => scramble(el), Math.random() * 600);
    el.addEventListener('mouseenter', () => scramble(el));
  });
</script>
```

## 🎨 Color Variants
| Class | Color |
|-------|-------|
| *(default)* | Indigo |
| `ease-scramble--purple` | Purple |
| `ease-scramble--emerald` | Emerald green |

## 📁 Files
| File | Description |
|------|-------------|
| `demo.html` | Full interactive demo |
| `style.css` | Scramble styles |
| `README.md` | Documentation |

## 🌍 Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |