# Motion Engine Compiler Tokenizer Vitest Showcase

A pure CSS test showcase and documentation suite inspecting Vitest unit test assertion specs for the Motion Engine Compiler Tokenizer in EaseMotion.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Vitest Unit Test Specs**: Validates lexical token stream array specs (`expect(tokenize(css)).toEqual([...tokens])`), token type labeling (`SELECTOR`, `DECLARATION`, `CALC`), line/column numbers, and syntax error throwing.
- **Lexical Performance & AST**: Tests memory footprint and lexing throughput under large CSS animation stylesheets.
- **60 FPS Hardware Acceleration**: Keyframe box-shadow shifts and glow pulses run at 60 FPS.
- **Responsive Layout**: Adapts seamlessly across desktop, tablet, and mobile viewports.
- **Accessibility & Motion Safety**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage & Integration

Link `style.css` in your project:

```html
<button class="demo-btn btn-tokenizer ease-anim-tokenizer-shift">
  Run Tokenizer Spec 🧪
</button>
```

Override animation timing variables dynamically:

```css
.custom-element {
  --ease-duration: 2.5s;
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

- **Submission Directory**: `submissions/examples/motion-engine-compiler-tokenizer-vitest/`
- **Issue Reference**: `#81970`
- **Files Included**: `demo.html`, `style.css`, `README.md`
