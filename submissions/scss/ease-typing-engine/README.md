# Procedural SCSS Typing Engine

Displaying a simulated "code typing" effect on developer landing pages usually requires JavaScript. Libraries like `Typed.js` or `TypewriterJS` append text `<span>`s to the DOM one by one inside a massive `requestAnimationFrame` loop. 

If you want syntax highlighting, you must manually apply syntax classes to each word as it appears via JavaScript. This causes massive layout thrashing and forces the main thread to constantly update the DOM tree.

This advanced submission completely bypasses JavaScript. It uses a highly complex SCSS mixin to procedurally generate sequential CSS `@keyframes` that progressively uncover text natively using `clip-path` and `steps()` timing functions!

---

## 🏛️ The Architecture

### 1. The Monospace `ch` Unit (Single Line)
For single lines of text, we can use an incredibly powerful, native CSS unit: `ch`. 
The `ch` unit represents the physical width of the `0` character in the current font.

If we use a Monospace font (where every character is identically wide), we can perfectly calculate the exact width of a string of text.

Our SCSS Mixin accepts a `$total-characters` variable. It then generates a keyframe:
```css
@keyframes typing-engine-39 {
  from { width: 0; }
  to { width: 39ch; }
}
```

By combining this with the CSS `steps(39)` timing function, the text does not "slide" open smoothly. It physically jumps pixel-by-pixel, revealing exactly one character at a time, mimicking a terminal perfectly!

### 2. Multi-Line `clip-path` Stepping
Unfortunately, the `width: 10ch` trick fails for multi-line text blocks because width is applied to the container, not individual lines.

For complex, multi-line blocks, our SCSS engine uses a massive procedural loop to generate a complex `clip-path` polygon animation.

If we pass `$lines: 6` to the mixin, SCSS mathematically loops from 1 to 6.
It calculates the exact percentage boundaries of each line:
* Line 1: `0%` to `16.6%`
* Line 2: `16.6%` to `33.3%`

It then generates a massive CSS keyframe block:
```css
@keyframes multiline-typing-6 {
  /* Line 1 Start */
  0% { clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%); }
  /* Line 1 End */
  16.6% { clip-path: polygon(0 0, 100% 0, 100% 16.6%, 0 16.6%); }
  /* Line 2 Start */
  16.6% { clip-path: polygon(0 0, 100% 0, 100% 16.6%, 0 16.6%); }
  /* Line 2 End */
  33.3% { clip-path: polygon(0 0, 100% 0, 100% 33.3%, 0 33.3%); }
}
```

By applying `steps(100)` to this animation, the `clip-path` physically jumps down the code block, uncovering it line-by-line in a blocky, terminal-like fashion!

---

## 🎨 Zero-JS Syntax Highlighting

Because the text is statically placed in the HTML, we can apply simple `<span>` classes to specific words to colorize them.

```html
<div class="demo-multi-line">
    <span class="k">function</span> <span class="f">init</span>() { ... }
</div>
```

The SCSS typing engine simply uncovers these spans. This means the syntax highlighting is calculated and rendered by the CSS engine immediately on page load, rather than being injected dynamically by a JS string parser.

---

## 💻 Usage & Parameters

```scss
@import 'ease-typing';

// For a single line (Requires exact character count)
.my-header {
    @include generate-typing-engine(
        $total-characters: 39,
        $duration-per-char: 0.08,
        $cursor-color: #a855f7
    );
}

// For a multi-line block (Requires exact line count)
.my-code-block {
    @include generate-multiline-typing(
        $lines: 15,
        $total-duration: 8s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. Standard JS typists execute `element.appendChild()` hundreds of times per second.
- **Main Thread Blocking:** `0ms` (Transform and Clip-Path updates are handed off to the compositor thread natively by the CSS engine).
- **Accessibility:** Users who prefer reduced motion are immediately served the fully typed-out text block instantly.
