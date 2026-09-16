# Engine Showcase: Typewriter Effect (`engine-typewriter-viidhii19`)

> **Issue:** [#45781 — Add "Typewriter" text effect token to the v1.2 Motion Engine](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/45781)
> **Contributor:** Viidhii19
> **Track:** Core & Docs Showcase (`submissions/docs/`)

---

## What does this do?

Provides a typewriter text-revealing animation that expands an element's width from zero to full using discrete `steps()` keyframes — producing the classic one-character-at-a-time appearance — paired with an infinitely blinking caret border.

## How is it used?

### Current (standalone CSS class)

```html
<h1 class="ease-typewriter-viidhii19">Motion Engine v1.2 is here.</h1>
```

### Future (engine token — after maintainer integration)

```html
<h1 em="typewriter duration-slow delay-200">Hello World</h1>
```

The engine runtime will parse the `em` attribute, compile the matching CSS, and inject it at runtime — zero manual CSS required.

## Why is it useful?

Typewriter animations are one of the most requested effects for hero sections and landing pages. By adding a first-class engine token, EaseMotion CSS gives developers a one-attribute solution (`em="typewriter"`) that:

- Requires **zero JavaScript** in the compiled output — pure CSS keyframes.
- Automatically respects `prefers-reduced-motion` for accessibility.
- Composes with existing engine modifiers (`duration-*`, `delay-*`, `repeat-*`).
- Follows the `ease-kf-*` naming convention for seamless tree-shaking by `optimizer.js`.

---

## CSS Custom Properties (Theming)

| Variable | Default | Description |
|---|---|---|
| `--ease-typewriter-caret-color` | `#f97316` | Blinking caret color |
| `--ease-typewriter-caret-width` | `0.15em` | Caret border thickness |
| `--ease-typewriter-steps` | `30` | Number of discrete steps (≈ character count) |
| `--ease-typewriter-speed` | `3.5s` | Total typing duration |
| `--ease-typewriter-blink-speed` | `0.72s` | Caret blink cycle |

---

## Engine Integration Plan (For the Maintainer)

Below are the **exact** changes needed to integrate the `typewriter` token into the v1.2 Motion Engine core.

### 1. Add keyframes to `core/animations.css`

```css
/* Typewriter — discrete step reveal */
@keyframes ease-kf-typewriter {
  from { width: 0; }
  to   { width: 100%; }
}

@keyframes ease-kf-blink-caret {
  from, to { border-color: transparent; }
  50%      { border-color: var(--ease-typewriter-caret-color, #f97316); }
}
```

### 2. Register the animation name in `easemotion/engine/parser.js`

Add `'typewriter'` to the `ANIMATION_NAMES` Set:

```js
// easemotion/engine/parser.js  — line ~31
const ANIMATION_NAMES = new Set([
  'fade-in', 'fade-out',
  'slide-up', 'slide-down',
  'slide-in-left', 'slide-in-right',
  'slide-in-from-top', 'slide-in-from-bottom',
  'slide-in-from-left', 'slide-in-from-right',
  'slide-in-from-top-left', 'slide-in-from-top-right',
  'slide-in-from-bottom-left', 'slide-in-from-bottom-right',
  'bounce', 'spin', 'ping', 'pulse', 'shake', 'wobble',
  'zoom-in', 'zoom-out',
  'flip-x', 'flip-y',
  'float', 'heartbeat', 'rubber-band',
+ 'typewriter',                          // ← NEW
]);
```

### 3. Map the keyframe in `easemotion/engine/compiler.js`

Add the `typewriter` → `ease-kf-typewriter` entry to `KEYFRAME_MAP`:

```js
// easemotion/engine/compiler.js  — line ~16
const KEYFRAME_MAP = {
  // ... existing entries ...
  'rubber-band':               'ease-kf-rubber-band',
+ 'typewriter':                'ease-kf-typewriter',   // ← NEW
};
```

> **Note:** Because the typewriter effect uses a secondary animation (`ease-kf-blink-caret`) and layout properties (`overflow: hidden`, `white-space: nowrap`, `border-right`), the compiler's `compile()` function will need a small special-case branch to emit the compound animation shorthand and supporting declarations. A suggested implementation:

```js
// Inside compile() in compiler.js, after resolving `keyframe`:
if (ast.animation === 'typewriter') {
  const steps = ast.steps || 30;
  const caretSpeed = '0.72s';
  return [
    `.${cls} {`,
    `  overflow: hidden;`,
    `  white-space: nowrap;`,
    `  border-right: 0.15em solid var(--ease-typewriter-caret-color, #f97316);`,
    `  width: 0;`,
    `  animation:`,
    `    ${keyframe} ${durationStr} steps(${steps}, end)${delayStr} ${ast.fill},`,
    `    ease-kf-blink-caret ${caretSpeed} step-end infinite;`,
    `}`,
    `@media (prefers-reduced-motion: reduce) {`,
    `  .${cls} {`,
    `    animation: none !important;`,
    `    width: 100% !important;`,
    `    border-right-color: transparent !important;`,
    `  }`,
    `}`,
  ].join('\n');
}
```

### 4. Add a unit test in `tests/engine.test.js`

```js
describe('typewriter animation', () => {
  it('parser recognises the "typewriter" token', () => {
    const ast = parse('typewriter 3500ms');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('typewriter');
    expect(ast.duration).toBe(3500);
  });

  it('compiler emits compound animation with steps()', () => {
    const ast = parse('typewriter 3500ms');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('ease-kf-typewriter');
    expect(css).toContain('steps(');
    expect(css).toContain('ease-kf-blink-caret');
    expect(css).toContain('overflow: hidden');
  });

  it('respects prefers-reduced-motion', () => {
    const ast = parse('typewriter');
    const cls = className(ast);
    const css = compile(ast, cls);
    expect(css).toContain('prefers-reduced-motion');
    expect(css).toContain('animation: none');
  });
});
```

---

## File Manifest

| File | Purpose |
|---|---|
| `style.css` | Complete CSS for `.ease-typewriter-viidhii19` class + keyframes |
| `demo.html` | Dark-mode demo page showing the effect in action |
| `README.md` | This file — documentation + engine integration plan |
