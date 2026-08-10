# CSS Letter-by-Letter Decode (`ease-letter-decode`)

## 1. What does this do?
The `ease-letter-decode` component creates a cyberpunk / Matrix-style text decoding animation completely in CSS. Characters visually cycle through random cipher symbols (`X`, `$`, `8`, `#`, `A`, `0`, `&`, `Q`, `+`, `?`) before resolving sequentially to their target letters.

## 2. How is it used?

### HTML Structure
Define a container with `aria-label` for screen reader accessibility, and place individual character `<span>` elements with `data-char` attributes:

```html
<div class="ease-decode-wrapper" aria-label="DECODE">
  <span class="ease-decode-char" data-char="D" aria-hidden="true"></span>
  <span class="ease-decode-char" data-char="E" aria-hidden="true"></span>
  <span class="ease-decode-char" data-char="C" aria-hidden="true"></span>
  <span class="ease-decode-char" data-char="O" aria-hidden="true"></span>
  <span class="ease-decode-char" data-char="D" aria-hidden="true"></span>
  <span class="ease-decode-char" data-char="E" aria-hidden="true"></span>
</div>
```

### CSS Animation Mechanism
The animation leverages keyframe `@keyframes ease-cipher` changing CSS `content` properties and `attr(data-char)` on pseudo-elements with `steps(1)` step timing:

```css
@keyframes ease-cipher {
  0% { content: 'X'; opacity: 0.5; }
  10% { content: '$'; opacity: 0.8; }
  20% { content: '8'; }
  30% { content: '#'; }
  40% { content: 'A'; }
  50% { content: '0'; }
  60% { content: '&'; }
  70% { content: 'Q'; }
  80% { content: '+'; }
  90% { content: '+'; }
  100% { content: attr(data-char); opacity: 1; text-shadow: 0 0 10px rgba(16, 185, 129, 0.8); }
}

.ease-decode-char::before {
  content: attr(data-char);
  animation: ease-cipher 1s steps(1) both;
}
```

Sequential staggering is achieved by adjusting `animation-duration` across `:nth-child(n)` pseudo-selectors.

## 3. Why is it useful?
- **Zero JavaScript Dependency**: Eliminates the need for JavaScript string manipulations, `setInterval` timers, canvas rendering, or external animation libraries.
- **High Performance**: Native CSS keyframes offload animation calculations to the browser's optimized render tree.
- **Accessible Design**: Utilizing `aria-label` on the wrapper and hiding decoding spans with `aria-hidden="true"` ensures screen readers read the full text seamlessly.
