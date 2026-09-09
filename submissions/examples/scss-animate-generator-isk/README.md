# [SCSS] Refactor ease-animate-* class generator using SCSS map iteration

## What does this do?
Refactors the generation of framework utility classes (`.ease-animate-*`) inside Sass by iterating over a map configuration linking presets names to their respective keyframe definitions.

## How is it used?
Assign the generated classes directly to elements:

```html
<div class="ease-animate-fade-in">Fades In on load</div>
<div class="ease-animate-slide-up">Slides Up on load</div>
```

### Map Iteration Source
```scss
$animate-config: (
  'fade-in': ease-kf-fade-in,
  'fade-out': ease-kf-fade-out,
  'slide-up': ease-kf-slide-up,
  'slide-down': ease-kf-slide-down,
  'zoom-in': ease-kf-zoom-in,
  'zoom-out': ease-kf-zoom-out
);

@each $name, $keyframe in $animate-config {
  .ease-animate-#{$name} {
    animation-name: $keyframe;
    animation-duration: var(--ease-speed-medium, 300ms);
    animation-timing-function: var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
    animation-fill-mode: both;
  }
}
```

## Why is it useful?
Generating utilities using maps maintains DRY code guidelines. Adding new animations to the entire library only requires appending a key-value row to the `$animate-config` map, and Sass compiles it automatically.
