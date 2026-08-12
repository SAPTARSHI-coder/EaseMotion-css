# Customizable `.em-`/`.ease-` Class Prefix via SCSS Variable

## What does this do?
Introduces an SCSS variable, `$ease-prefix`, that lets developers compiling EaseMotion CSS from source override the class prefix (default `ease-`) to avoid collisions with other libraries (e.g. Elementor's `.em-` classes, or EM/CSS units).

## How is it used?
```scss
// Before compiling, override the default in your own SCSS entry file:
$ease-prefix: 'motion-' !default;

@use 'easemotion' with (
  $ease-prefix: 'motion-'
);
```

Or, if not using `@use ... with`, simply set the variable before importing:
```scss
$ease-prefix: 'anim-';
@import 'easemotion/scss/index';
```

This compiles all classes as `.anim-fade-in`, `.anim-bounce`, etc. instead of the default `.ease-fade-in`, `.ease-bounce`.

See `_prefix-mixin.scss` in this folder for the proposed variable declaration and a helper mixin (`ease-class($name)`) that generates prefixed class selectors consistently across the framework's SCSS partials.

## Why is it useful?
Issue #65816 reports that when integrating EaseMotion CSS into large existing codebases, the default `.ease-` prefix can collide with other libraries. The proposed solution uses an SCSS `!default` variable so:
1. Developers pulling the source can override the prefix once before compiling (e.g. to `motion-` or `anim-`), instead of doing a risky manual Find & Replace across the entire library that breaks on every `git pull` of upstream changes.
2. The default behavior (`ease-`) is fully preserved for everyone who doesn't set the variable.
3. A single mixin (`ease-class`) keeps all `core/*.scss` partials referencing the prefix consistently, instead of hardcoding `ease-` as a literal string dozens of times.

Relates to #65816.