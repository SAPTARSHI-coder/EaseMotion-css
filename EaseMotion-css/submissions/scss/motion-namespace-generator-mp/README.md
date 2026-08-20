# Motion Namespace Generator

## What does this do?

A framework-agnostic SCSS utility that automatically generates consistent, collision-safe namespaces for motion selectors and `@keyframes` from a single configurable prefix, so growing motion libraries and design systems don't end up with duplicated or clashing names.

## How is it used?

Optionally set a custom prefix, then use the provided mixins to generate namespaced selectors and keyframes instead of writing raw class/keyframe names by hand.

```scss
@import "motion-namespace-generator";

// Optional: change the prefix (defaults to "ease")
@include set-motion-namespace("ease");

// 1. Generate a namespaced @keyframes block
@include motion-keyframes("fade") {
  from { opacity: 0; }
  to   { opacity: 1; }
}

// 2. Generate a namespaced selector that uses it
@include motion-selector("fade") {
  animation-name: use-motion-keyframe-name("fade");
  animation-duration: 0.3s;
}

// 3. Generate a namespaced modifier/variant selector
@include motion-modifier-selector("fade", "slow") {
  animation-duration: 1s;
}

// 4. Get a raw namespaced string without creating a rule
.my-custom-wrapper {
  --motion-token: #{motion-namespace("fade")};
}
```

Compiles to:

```css
@keyframes ease-fade-kf {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.ease-fade {
  animation-name: ease-fade-kf;
  animation-duration: 0.3s;
}

.ease-fade--slow {
  animation-duration: 1s;
}

.my-custom-wrapper {
  --motion-token: ease-fade;
}
```

If you try to generate the same selector or keyframe namespace twice, compilation fails immediately with a clear error, catching collisions before they ship:

```scss
@include motion-selector("fade") { opacity: 1; }
@include motion-selector("fade") { opacity: 0; }
// Error: Motion namespace collision: `ease-fade` has already been generated.
```

### API Reference

| Mixin / Function | Parameters | Description |
|---|---|---|
| `set-motion-namespace($prefix)` | `$prefix`: new global prefix string | Mixin. Changes the prefix used by every namespace generated afterward |
| `motion-namespace($name, $separator: "-")` | `$name`: base name · `$separator`: joining character | Function. Returns a namespaced string (e.g. `ease-fade`) without registering it |
| `motion-modifier-namespace($name, $modifier, $separator: "-")` | `$name`, `$modifier`, `$separator` | Function. Returns a namespaced modifier string (e.g. `ease-fade--slow`) |
| `motion-keyframe-namespace($name, $separator: "-")` | `$name`, `$separator` | Function. Returns a namespaced keyframe-reserved string (e.g. `ease-fade-kf`) |
| `motion-selector($name, $separator: "-")` | `$name`, `$separator` | Mixin. Generates, registers, and outputs a namespaced class selector with the given content |
| `motion-modifier-selector($name, $modifier, $separator: "-")` | `$name`, `$modifier`, `$separator` | Mixin. Generates, registers, and outputs a namespaced modifier selector |
| `motion-keyframes($name, $separator: "-")` | `$name`, `$separator` | Mixin. Generates, registers, and outputs a namespaced `@keyframes` block |
| `use-motion-keyframe-name($name, $separator: "-")` | `$name`, `$separator` | Function. Returns a previously-registered keyframe's namespaced name, for use in `animation-name`, without re-registering it |

## Why is this useful?

As EaseMotion CSS and consuming design systems grow, developers commonly hand-invent naming conventions to avoid clashing animation and selector names — leading to duplicated prefixes and inconsistent APIs across a codebase. The Motion Namespace Generator:

- Generates every selector and keyframe name from one configurable source of truth, so the prefix only needs to be decided once.
- Catches naming collisions at **compile time** with a clear error, instead of silently overwriting an existing animation.
- Keeps selector and keyframe namespaces distinct (`ease-fade` vs. `ease-fade-kf`) so the same base name can be reused safely across both.
- Is pure SCSS — framework agnostic, no dependency on EaseMotion's core or any other library — and compiles to plain, predictable CSS class names and keyframe names.
