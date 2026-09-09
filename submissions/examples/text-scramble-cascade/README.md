# Text Scramble/Decryption Effect

A text animation effect that simulates decryption by cycling through random characters before revealing the final text, commonly used in tech portfolios and cybersecurity-themed interfaces.

## What does this do?

This creates a text scramble/decryption effect where text appears to decode itself by rapidly cycling through random characters before settling on the final message, with a blinking cursor animation.

## How is it used?

```html
<span class="text-scramble" data-text="Welcome to the Future">Welcome to the Future</span>

<!-- Size variants -->
<span class="text-scramble text-sm" data-text="Small Text">Small Text</span>
<span class="text-scramble text-md" data-text="Medium Text">Medium Text</span>
<span class="text-scramble text-lg" data-text="Large Text">Large Text</span>

<!-- Color variants -->
<span class="text-scramble color-cyan" data-text="Cyan Text">Cyan Text</span>
<span class="text-scramble color-green" data-text="Green Text">Green Text</span>
<span class="text-scramble color-pink" data-text="Pink Text">Pink Text</span>
```

The effect is triggered by a minimal JavaScript class that cycles through random characters using `requestAnimationFrame` for smooth animation.

## Why is it useful?

This demonstrates a popular text animation technique used in tech-focused interfaces, cybersecurity websites, and creative portfolios. The effect adds visual interest and a futuristic aesthetic that engages users. The CSS-first approach handles styling and cursor animation while JavaScript only manages the character cycling logic, keeping the implementation clean and performant. It showcases how to create dynamic text effects that stand out from standard static content.
