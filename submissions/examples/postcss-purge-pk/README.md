# EaseMotion — PostCSS Tree-Shaking Plugin

Remove unused `ease-*` animation classes and `@keyframes` from your production bundle.

## The Problem

EaseMotion CSS ships as a ~74 KB monolithic file. If your page only uses `ease-fade-in` and `ease-slide-up`, you still download every keyframe and component.

## The Solution

A PostCSS plugin (`scripts/postcss-easemotion-purge.js`) that:
1. Scans your HTML/JSX/TSX/Vue/Svelte files for `ease-*` class names
2. Removes unused `@keyframes` declarations
3. Removes unused CSS rules
4. Outputs a minimal CSS file (typically ~80% smaller)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after size comparison, how it works, full plugin source, config examples |
| `style.css` | Bundle comparison cards, code block styles |

## Usage

### 1. Install

```bash
npm install --save-dev postcss glob
```

### 2. Configure `postcss.config.js`

```js
module.exports = {
  plugins: [
    require('./scripts/postcss-easemotion-purge')({
      content: ['./src/**/*.{html,jsx,tsx,vue,svelte}'],
    }),
    require('cssnano')({ preset: 'default' }),
  ],
};
```

### 3. Build

```bash
npx postcss easemotion.css -o dist/easemotion.purged.css
```

## Allowlist

For dynamically constructed classes (e.g., `ease-${variant}`):

```js
require('./scripts/postcss-easemotion-purge')({
  content: ['./src/**/*.{html,jsx}'],
  allowlist: ['ease-fade-in', 'ease-slide-up', 'ease-pulse'],
})
```

## Expected Reduction

| Metric | Full Bundle | Purged | Savings |
|--------|-------------|--------|---------|
| Size | 74.2 KB | ~12.8 KB | ~83% |
| @keyframes | 48 | 3 | ~94% |
| CSS rules | ~1200 | ~80 | ~93% |
