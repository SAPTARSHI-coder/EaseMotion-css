# Engine Spring Physics Token & AST Generator

## What does this do?
Adds dynamic spring physics parsing `em="spring(stiffness, damping)"` to the zero-config EaseMotion CSS motion engine.

## How is it used?
```html
<div em="fade-in spring(180,12) delay-100ms">Spring Animated Element</div>
```

## Why is it useful?
Allows developers to specify parametric stiffness and damping for realistic spring dynamics without external JS animation libraries.
