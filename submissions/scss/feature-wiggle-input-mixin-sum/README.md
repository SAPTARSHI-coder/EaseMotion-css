# Wiggle Input Mixin

## What does this do?

An SCSS mixin that wiggles an input as an exit / error attention cue.

## How is it used?

```scss
@use 'wiggle-input' as *;

.my-element {
  @include wiggle-input-mixin-sum(0.5s);
}

/* Trigger with: */
/* <input class="my-element is-exiting-sum" /> */
```

## Why is it useful?

Wiggle feedback makes validation errors obvious without custom JS animation code — readable and reusable.

## Accessibility

- Under `prefers-reduced-motion: reduce`, wiggle is replaced by a gentle opacity fade

## Files

```
submissions/scss/feature-wiggle-input-mixin-sum/
├── _wiggle-input.scss
└── README.md
```

Related issue: #50754
