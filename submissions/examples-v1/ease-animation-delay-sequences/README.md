# Animation Delay Sequences (`ease-animation-delay-sequences`)

A scalable pattern for creating dynamic staggered animations and sequences using CSS Custom Properties and `calc()`.

## 🚀 Features & EaseMotion Showcase

- **Math-based Sequencing**: By assigning an `--idx` inline style to HTML elements, the CSS automatically calculates the `animation-delay` using `calc(var(--idx) * 0.1s)`.
- **Zero-JS Choreography**: Eliminates the need for JavaScript timeline libraries (like GSAP) for simple list staggering or loading indicators.
- **Infinite Scalability**: Adding a 6th or 100th element to the list requires zero changes to the CSS; it automatically scales the delay mathematically.
- **Accessibility Friendly**: Fully integrates `prefers-reduced-motion` to instantly show elements rather than animating them if the user prefers reduced motion.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a staggered entrance list:
```html
<!-- 1. Provide the index inline -->
<li class="ease-sequence" style="--idx: 1;">Item 1</li>
<li class="ease-sequence" style="--idx: 2;">Item 2</li>
<li class="ease-sequence" style="--idx: 3;">Item 3</li>
