# Modern Spring Physics Presets via CSS `linear()`

## 1. What does this do?
Provides native iOS-grade spring dynamics presets (`bouncy`, `snappy`, `gentle`, `stiff`, `wobbly`) using CSS `linear()` custom properties without requiring JavaScript physics calculations or external libraries.

## 2. How is it used?
Apply the spring custom property directly to your CSS `transition` or `animation-timing-function`:

```css
.card {
  transition: transform 0.6s var(--spring-bouncy);
}

.button:active {
  transition: transform 0.4s var(--spring-snappy);
}
```

```html
<button class="spring-bouncy-btn">
  Click Me
</button>
```

## 3. Why is it useful?
It aligns with EaseMotion CSS's philosophy of zero-dependency, human-readable, animation-first utilities by enabling fluid, natural spring motion in pure CSS keyframes and transitions with zero JavaScript runtime overhead.
