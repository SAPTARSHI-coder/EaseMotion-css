# Motion Recipe Composer

## What does this do?

A framework-agnostic SCSS utility for declaratively defining reusable "motion recipes" — named combinations of animation steps with their own duration, delay, easing, and fill-mode — then composing recipes together and outputting a single resolved `animation` shorthand at compile time.

## How is it used?

Define your `@keyframes` as usual, define recipes referencing them, optionally compose multiple recipes into a new one, then apply a recipe to any selector.

```scss
@import "motion-recipe-composer";

// Your own keyframes — this utility stays framework agnostic
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(12px); }
  to   { transform: translateY(0); }
}

// 1. Define individual recipes
@include define-motion-recipe("fade-in", (
  (name: fade-in, duration: 0.25s, easing: ease-out)
));

@include define-motion-recipe("slide-up", (
  (name: slide-up, duration: 0.3s, delay: 0.05s, easing: ease-out)
));

// 2. Compose them into a single interaction pattern
@include compose-motion-recipe("toast-enter", ("fade-in", "slide-up"));

// 3. Apply the composed recipe
.ease-toast {
  @include use-motion-recipe("toast-enter");
}

// 4. Apply with a global override (e.g. a faster variant)
.ease-toast--fast {
  @include use-motion-recipe("toast-enter", (duration: 0.15s));
}

// 5. Apply with a per-step override (only tweak the 2nd step's delay)
.ease-toast--delayed-slide {
  @include use-motion-recipe("toast-enter", (), (2: (delay: 0.2s)));
}
```

Compiles to:

```css
.ease-toast {
  animation: fade-in 0.25s ease-out 0s both, slide-up 0.3s ease-out 0.05s both;
}

.ease-toast--fast {
  animation: fade-in 0.15s ease-out 0s both, slide-up 0.15s ease-out 0s both;
}

.ease-toast--delayed-slide {
  animation: fade-in 0.25s ease-out 0s both, slide-up 0.3s ease-out 0.2s both;
}
```

### API Reference

| Mixin / Function | Parameters | Description |
|---|---|---|
| `define-motion-recipe($name, $steps)` | `$name`: recipe identifier · `$steps`: list of step maps (`name`, `duration`, `delay`, `easing`, `fill-mode` — only `name` is required, the rest default sensibly) | Registers a named recipe made of one or more animation steps |
| `compose-motion-recipe($new-name, $recipe-names, $overrides: ())` | `$new-name`: identifier for the new recipe · `$recipe-names`: list of existing recipe names to concatenate, in order · `$overrides`: (optional) map applied to every combined step | Builds a new recipe by combining the steps of existing recipes |
| `use-motion-recipe($name, $overrides: (), $step-overrides: ())` | `$name`: recipe to output · `$overrides`: (optional) map applied to all steps at the call site · `$step-overrides`: (optional) map of 1-based step index => override map | Outputs a resolved `animation` shorthand declaration for the recipe |
| `motion-recipe-get($name)` | `$name`: recipe identifier | Function that returns the resolved list of step maps for a recipe |
| `motion-recipe-exists($name)` | `$name`: recipe identifier | Function that returns `true`/`false` |

## Why is this useful?

EaseMotion CSS already provides individual motion utilities, but common UI patterns like toasts, modals, drawers, and notifications are usually built from several coordinated animation steps played together — and developers end up hand-copying the same duration/delay/easing combinations across components. The Motion Recipe Composer:

- Turns a full interaction pattern into a single named, reusable recipe.
- Lets recipes be composed from smaller recipes instead of duplicated (e.g. `toast-enter` built from `fade-in` + `slide-up`).
- Supports both global overrides (fast/slow variants) and per-step overrides (tweak just one part of the sequence) without redefining the whole recipe.
- Is pure SCSS — framework agnostic, no dependency on EaseMotion's core or any other library — and compiles to a plain, reusable `animation` declaration.
