# SCSS Typewriter Reveal (Hardware Accelerated)

A classic hacker/typewriter text reveal where lines of text appear to type themselves out character by character.

Historically, this effect required importing heavy JavaScript libraries like `Typed.js` that run expensive loops, appending strings character by character and thrashing the DOM. This submission demonstrates how to achieve a flawless, hardware-accelerated typewriter effect natively using the CSS `ch` unit and the `steps()` timing function!

---

## 🏛️ The Architecture

### 1. The `ch` Unit
The `ch` CSS unit represents the width of the "0" character in the element's current font.
**The secret:** If you use a monospaced font (like `Courier New`), *every single character* is the exact same width as the "0". Therefore, `1ch` perfectly equals the width of one character!
By setting our text container to `width: 31ch;` (where 31 is the length of our string) and `overflow: hidden`, we create a precise box around our text.

### 2. The `steps()` Timing Function (The Magic)
Normally, CSS `@keyframes` interpolate smoothly between values. If we animated the `max-width` from `0` to `100%`, the text would slide open smoothly, revealing half-cut letters.
We bypass this by applying the `steps()` timing function to our animation!
```css
animation: type 2s steps(31, end);
```
Instead of sliding smoothly, `steps(31)` mathematically forces the CSS animation to jump exactly 31 times. Because our container is exactly 31 characters wide, each jump perfectly reveals exactly one character, creating a flawless typewriter stutter!

### 3. Staggered Delays
To simulate a computer booting up or a hacker typing lines sequentially, we apply the mixin to multiple `<p>` tags, and mathematically stagger their `animation-delay`!
```scss
.line-1 { @include ease-typewriter($chars: 31, $delay: 0.5s); }
.line-2 { @include ease-typewriter($chars: 24, $delay: 2.5s); }
```

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to any block of text! You *must* pass the exact character count of your string into the mixin for the `steps()` math to work!

```scss
@import 'typewriter';

.my-terminal-text {
    /* String: "Hello World!" -> 12 characters */
    @include ease-typewriter(
        $chars: 12,
        $duration: 1.5s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Typed.js or DOM manipulation libraries!
- **DOM Manipulations:** `0`. We don't append spans or strings dynamically. The text is fully rendered in the DOM immediately (great for SEO!), just hidden visually via CSS.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the typewriter animation and the blinking cursor, immediately revealing the full text string to ensure immediate readability without eye strain.
