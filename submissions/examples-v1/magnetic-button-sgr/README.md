# Magnetic Button Hover Effect

### 1. What does this do?
This component creates a magnetic attraction hover effect on buttons where they snap and bend smoothly towards the user's cursor position.

### 2. How is it used?
Apply the `.magnetic-btn` class to a button element, and wrap the button text inside a `.magnetic-content` span:

```html
<button class="magnetic-btn">
  <span class="magnetic-content">Click Me</span>
</button>
```

**Variants:**
- `.magnetic-strong`: Aggressively pull the button closer to the cursor.
- `.magnetic-text`: Translate only the internal `.magnetic-content` text child while keeping the button background static.
- `.magnetic-glow`: Combine magnetic pull with a glowing shadow trail highlight following the mouse.
- `.magnetic-repel`: Push the button in the opposite direction (away from the cursor).

**Required Vector Calculation JavaScript (Vanilla):**
Apply the mouse tracking coordinate updater:

```javascript
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  const isRepel = btn.classList.contains('magnetic-repel');
  const isStrong = btn.classList.contains('magnetic-strong');
  const isTextOnly = btn.classList.contains('magnetic-text');
  
  let pullFactor = isStrong ? 0.65 : (isRepel ? -0.35 : 0.35);
  
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    
    btn.classList.add('moving');
    
    if (isTextOnly) {
      const text = btn.querySelector('.magnetic-content');
      if (text) text.style.transform = `translate(${dx * pullFactor}px, ${dy * pullFactor}px)`;
    } else {
      btn.style.setProperty('--mx', `${dx * pullFactor}px`);
      btn.style.setProperty('--my', `${dy * pullFactor}px`);
    }
    
    if (btn.classList.contains('magnetic-glow')) {
      btn.style.setProperty('--gx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      btn.style.setProperty('--gy', `${((e.clientY - rect.top) / rect.height) * 100}%`);
      btn.style.setProperty('--glow-opacity', '1');
    }
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('moving');
    btn.style.setProperty('--mx', '0px');
    btn.style.setProperty('--my', '0px');
    btn.style.setProperty('--glow-opacity', '0');
    
    if (isTextOnly) {
      const text = btn.querySelector('.magnetic-content');
      if (text) text.style.transform = 'translate(0px, 0px)';
    }
  });
});
```

### 3. Why is it useful?
It provides a premium boutique interaction feeling with minimal code overhead. By using CSS custom variables to offload all actual vector translation and transition snap-backs to the browser rendering layer, it prevents layout stutter, uses no bulky external JS libraries, and respects users' accessibility preferences (automatically neutralizing all motion in media query rules).
