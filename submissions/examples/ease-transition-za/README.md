## What does this do?

Provides property-specific `transition` utility classes. Instead of `transition: all` (which hurts render performance), each class limits transitions to specific properties: colors, opacity, shadow, or transform.

## How is it used?

```html
<div class="ease-transition-colors-za">Only color transitions animate</div>
<div class="ease-transition-transform-za">Only transforms animate</div>
```

## Why is it useful?

EaseMotion has duration and delay utilities but no base transition class. Using `transition: all` is a common performance anti-pattern. These property-specific classes make it easy to write performant transitions. They pair naturally with the existing `ease-duration-*` and `ease-delay-*` utilities.
