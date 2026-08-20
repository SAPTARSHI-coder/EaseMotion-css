# Cyberpunk Code Terminal Block

A retro-futuristic cyberpunk code terminal component featuring neon scanlines, custom scrollbars, and IDE syntax highlighting.

## 1. What does this do?
This component renders an interactive retro code terminal window with realistic window header buttons, neon green console prompt output, code snippet syntax coloring, and a blinking terminal cursor.

## 2. How is it used?
Link `style.css` and use the `.terminal-window` structure:

```html
<link rel="stylesheet" href="style.css">

<div class="terminal-window" tabindex="0">
  <div class="scanlines"></div>
  <div class="terminal-body">
    <div class="line"><span class="prompt">$</span> <span class="cmd">deploy</span></div>
  </div>
</div>
```

## 3. Why is it useful?
It gives developer portfolios, technical documentation, and CLI tool showcases a high-impact cyberpunk IDE aesthetic while remaining 100% accessible and dependency-free.
