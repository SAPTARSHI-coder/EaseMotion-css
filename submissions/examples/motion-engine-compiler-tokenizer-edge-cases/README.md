# Motion Engine Compiler Tokenizer Edge Case Showcase

A pure CSS test showcase and documentation suite inspecting edge cases, lexer tokenization boundary conditions, and syntax recovery for the Motion Engine Compiler Tokenizer in EaseMotion.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Edge Case Coverage**: Validates tokenization of `calc()` expressions, unclosed CSS string literals, shorthand animation parsing, and inline comment stripping.
- **Lexical Stream Inspection**: Demonstrates token stream splitting across white-space delimiters and escaped unicode characters.
- **60 FPS Hardware Acceleration**: Keyframe box-shadow shifts and glow pulses run smoothly at 60 FPS.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage & Integration

Link `style.css` in your project:

```html
<button class="demo-btn btn-tokenizer ease-anim-tokenizer-shift">
  Tokenize Expression 🔤
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 3s;
  --ease-timing: ease-in-out;
}
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ease-duration` | Shift transition duration | `2.5s` |
| `--ease-timing` | Easing transition timing function | `ease-in-out` |
| `--primary-accent` | Amber compiler theme accent | `#f59e0b` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/motion-engine-compiler-tokenizer-edge-cases/`
- **Issue Reference**: `#81971`
- **Files Included**: `demo.html`, `style.css`, `README.md`
