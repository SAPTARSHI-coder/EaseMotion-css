# [SCSS] Migrate _variables.scss to use Sass @use module syntax

## What does this do?
Documents the modernization of SCSS architecture by migrating global variables from the legacy `@import` directive to Sass's modern `@use` module system namespace syntax.

## How is it used?
In modern Sass, instead of loading variables globally with `@import 'variables'`, you load the file as a module block:

```scss
// Import variables as a namespace module
@use 'variables';

.card {
  background-color: variables.$color-surface;
  transition: transform variables.$speed-medium variables.$ease-ease;
}
```

Or you can use a custom alias:

```scss
@use 'variables' as var;

.card {
  color: var.$color-primary;
}
```

## Why is it useful?
- **Namespace safety**: No risk of variables from different modules overriding each other.
- **Explicit dependencies**: Makes it clear where variables are defined.
- **Sass compatibility**: Modern Sass compilers are deprecating the `@import` rule, making `@use` and `@forward` mandatory.
