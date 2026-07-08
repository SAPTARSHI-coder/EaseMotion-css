# Wrap Components in easemotion-components Layer

## What does this do?

It outlines the implementation pattern to wrap unlayered component stylesheets (like `chip.css`, `footer.css`, `scroll-progress.css`, and `sidebar.css`) inside the `@layer easemotion-components` cascade boundary.

## How is it used?

It is used by wrapping the components inside cascade layers:

```css
@layer easemotion-components {
  .ease-chip {
    /* component styles */
  }
}
```

## Why is it useful?

Wrapping components in cascade layers prevents specificity leakage. Since unlayered rules take precedence over layered rules, framework consumers can easily override EaseMotion CSS components in their own custom stylesheets without needing to use highly specific selectors or `!important` declarations.
