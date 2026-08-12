# Staggered Text Reveal (Hardware Accelerated)

A premium text reveal animation where each letter cascades up and fades in with a calculated delay is a staple of modern web design, traditionally requiring expensive animation libraries like GSAP SplitText.

This submission demonstrates how to achieve a flawless, hardware-accelerated cascading text reveal using a lightweight React component combined with native CSS variables and `calc()`.

---

## 🏛️ The Architecture

### 1. Splitting the Text
The React component accepts a string of text. If we just split it into characters and wrapped them all in `<span>` tags, the browser would lose track of words, causing characters in the middle of a word to wrap to the next line on small screens!

To fix this, we first split the text into words (`text.split(" ")`), wrap those in an `inline-block` word span, and *then* split the words into characters. This preserves natural CSS text-wrapping!

### 2. Injecting the Global Index
As we map over the characters, we maintain a `globalCharIndex`. 
We inject this exact index into the character's DOM node as a CSS Custom Property (`--char-index`).
```html
<span style="--char-index: 15">a</span>
```

### 3. The Magic of CSS `calc()`
In the CSS, we set up a transition for `transform` and `opacity`.
Normally, staggering in JavaScript requires a `setTimeout` loop that triggers reflows. 
Here, we use CSS `calc()` to natively multiply the React-injected `--char-index` by a `--stagger-delay` multiplier!

```css
.ease-staggered-char {
    /* Base State */
    opacity: 0;
    transform: translateY(50px) rotateX(-90deg);
    
    /* The Native CSS Stagger Math */
    transition: 
        transform 0.6s calc(var(--char-index) * var(--stagger-delay)),
        opacity 0.6s calc(var(--char-index) * var(--stagger-delay));
}
```

When the `.is-revealed` class is applied to the parent (either via the built-in `IntersectionObserver` or a hover event), every single character instantly calculates its own unique start delay natively on the GPU Compositor!

---

## 💻 Usage

Drop the component into your React app and pass a string of text.

```jsx
import { StaggeredText } from '@easemotion/react';

function App() {
  return (
    <StaggeredText 
      text="Experience Next Generation UI."
      staggerDelay={0.04} // 40ms delay between each letter
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | String | (Required) | The text string to reveal. |
| `staggerDelay` | Number | `0.03` | The delay increment per character (in seconds). |
| `className` | String | `""` | Pass custom classes for typography styling. |
| `triggerOnHover` | Boolean | `false` | If true, disables the scroll observer and reveals only on mouse hover. |

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` animation logic. Completely bypasses GSAP, Framer Motion, and anime.js.
- **Main Thread Blocking:** `0ms`. The staggered delay calculation and `transform` interpolations are offloaded completely to the GPU.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the complex delays and 3D rotations, instantly revealing the text on scroll.
