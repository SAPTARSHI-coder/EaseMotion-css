# Staggered Entrance Animations

## What does this do?
Provides delay utility classes (`em-delay-0` through `em-delay-1000`) that let you stagger any EaseMotion CSS animation across a sequence of elements.

## How is it used?

Apply an animation class plus a delay class to each element:

```html
<div class="em-fade-in-up em-delay-0">Item 1</div>
<div class="em-fade-in-up em-delay-100">Item 2</div>
<div class="em-fade-in-up em-delay-200">Item 3</div>
<div class="em-fade-in-up em-delay-300">Item 4</div>
```

Works with any animation — `em-fade-in`, `em-fade-in-up`, `em-slide-in-left`, or any custom `ease-*` class from the framework.

Optional duration and easing classes are also included:

```html
<div class="em-fade-in-up em-delay-200 em-duration-700 em-ease-bounce">Bouncy!</div>
```

## Why is it useful?
Simultaneous animations on groups of elements (cards, lists, menus) feel mechanical. Staggering them with incremental delays gives UIs a polished, premium feel — exactly the kind of motion design EaseMotion CSS is built to make effortless.