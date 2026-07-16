# [SCSS] Refactor hover-effect classes using SCSS each loop

## What does this do?
Refactors repetitive transition and transform classes inside EaseMotion CSS by generating clean utility classes dynamically using a Sass map and an `@each` loop block.

## How is it used?
Assign the generated classes to elements:

```html
<div class="ease-hover-grow">Grow on Hover</div>
<div class="hover-card ease-hover-lift">Lift on Hover</div>
```

### SCSS Source Code
The mixin loop dynamically parses custom maps:

```scss
$hover-effects: (
  'grow': (
    transform: scale(1.08)
  ),
  'shrink': (
    transform: scale(0.92)
  ),
  'lift': (
    transform: translateY(-6px)
  ),
  'glow': (
    box-shadow: 0 0 16px rgba(108, 99, 255, 0.6)
  ),
  'blur': (
    filter: blur(3px)
  )
);

@each $name, $styles in $hover-effects {
  .ease-hover-#{$name} {
    transition: all var(--ease-speed-fast, 150ms) var(--ease-ease);
    
    &:hover {
      @each $prop, $val in $styles {
        #{$prop}: #{$val};
      }
    }
  }
}
```

## Why is it useful?
Using loops enforces DRY code principles, reducing stylesheet size and making it simple to add or update utility styles by modifying a single map entry instead of writing multiple class rule sets.
