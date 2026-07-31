# PostCSS Reduced Motion Plugin (`postcss-reduced-motion`)

> **Issue Reference:** #58383  
> **Track:** Core & Docs Showcase

## What does this do?
`postcss-reduced-motion` is a PostCSS 8 plugin that automatically inspects CSS AST rules for EaseMotion utility classes (`em-`) and injects WCAG 2.3 compliant `@media (prefers-reduced-motion: reduce)` fallbacks during build time.

---

## How is it used?

### PostCSS Configuration (`postcss.config.js`)

```javascript
module.exports = {
  plugins: [
    require('./scripts/postcss-reduced-motion')()
  ]
};
```

---

## Why is it useful?
It automates accessibility compliance across all EaseMotion utility classes without requiring manual `@media (prefers-reduced-motion)` maintenance for every single CSS rule, using `0.01ms !important` duration to preserve JS `transitionend`/`animationend` event firing.
