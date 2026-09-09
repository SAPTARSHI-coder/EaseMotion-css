# [SCSS] Create SCSS partial for cascade layer animation ordering

## What does this do?
Configures cascade layers (`@layer`) inside Sass to control styling priority rules. This ensures base styles are overridden by components, components by utilities, and animations hold the highest specificity, regardless of when files are imported.

## How is it used?
Declare the layer ordering configuration partial at the very top of your main SCSS index files:

```scss
@layer base, components, utilities, animations;
```

Then organize your modules inside layer statements:

```scss
@layer base {
  body { background-color: var(--ease-color-bg); }
}

@layer components {
  .ease-layer-card { border: 2px solid var(--ease-color-primary); }
}

@layer utilities {
  .ease-bg-pink-override { background-color: #fce7f3 !important; }
}

@layer animations {
  .ease-animate-pulse-layer { animation: ease-kf-pulse-fade 2s infinite; }
}
```

## Why is it useful?
Using cascade layers prevents "specificity wars" where developers rely on nested selectors or massive amounts of `!important` declarations to override styles. It guarantees a deterministic cascade order, facilitating modular additions during GSSoC-26 contributions.
