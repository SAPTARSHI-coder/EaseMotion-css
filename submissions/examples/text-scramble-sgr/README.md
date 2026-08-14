# Text Scramble / Matrix Decode Animation

### 1. What does this do?
This component creates a hacker-terminal decode visual where text scrambles random letters/symbols/numbers before progressively resolving to the final message.

### 2. How is it used?
Apply the `.scramble-text` class to any text element and configure the `data-text` attribute:

```html
<h2 class="scramble-text" data-text="DECRYPT_KEY">DECRYPT_KEY</h2>
```

**Variants:**
- **Themes & Colors**:
  - `.scramble-blue`: Glowing cyan/blue colors.
  - `.scramble-gold`: Glowing warning amber colors.
  - `.scramble-red`: Glowing alert red colors.
- **Triggers**:
  - `.scramble-hover`: Retriggers scramble when the cursor enters the element.
  - `.scramble-loop`: Endless loops of scramble and decode cycles.
- **Character Pools**:
  - `.scramble-numbers`: Scrambles using only digits (0-9).
  - `.scramble-symbols`: Scrambles using only complex symbols.

**Required Coordinate JavaScript (Vanilla):**
Include the character cycling class and attach it to your text nodes:

```javascript
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    if (el.classList.contains('scramble-numbers')) {
      this.chars = '0123456789';
    } else if (el.classList.contains('scramble-symbols')) {
      this.chars = '!@#$%^&*()_+{}:"<>?[];\',./~`|\\-—=';
    }
    this.update = this.update.bind(this);
  }

  setText(newText) {
    this.oldText = this.el.innerText;
    this.newText = newText;
    this.promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < this.newText.length; i++) {
      const from = this.oldText[i] || '';
      const to = this.newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end, char: '' });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return this.promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.3) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span style="opacity: 0.8">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
```

### 3. Why is it useful?
It provides a visually dramatic text entry transition that fits perfectly into developer tools, dashboards, and futuristic designs. The Javascript character cycler runs on high-performance requestAnimationFrames to prevent layout thrashing, handing styling off directly to CSS (using custom properties like `--scramble-text-color` and `--scramble-glow-color`). It also features seamless accessibility integration, using a `prefers-reduced-motion` media check to bypass the animation loop and instantly load the correct text.
