# [SCSS] SCSS Function for Converting Design Tokens to CSS Variables

## What does this do?
A helper SCSS function (`ease-var()`) that formats standard token key names into their respective CSS custom property wrap definitions (`var(--ease-#{$token})`).

## How is it used?
Import the utility function module and reference tokens:

```scss
@use 'token-function' as *;

.my-card {
  border: 1px solid ease-var('color-primary');
  transition: transform ease-var('speed-medium') ease-var('ease');
}
```

### Function Definition
```scss
@function ease-var($token) {
  @return var(--ease-#{$token});
}
```

## Why is it useful?
Writing raw `var(--ease-*)` property names repeatedly is verbose and prone to typo errors. Utilizing a wrapper Sass function offers auto-completion options, wraps references safely, and ensures consistent namespaces.
