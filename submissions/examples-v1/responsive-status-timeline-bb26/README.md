# Responsive Status Timeline

## What does this do?

This submission adds a responsive status timeline for showing completed, current, and pending project steps.

## How is it used?

Use `.timeline-card` as the container and apply state classes such as `.is-complete` or `.is-current` to each `.timeline-item`.

```html
<section class="timeline-card">
  <article class="timeline-item is-current" aria-current="step">
    <span class="timeline-marker" aria-hidden="true"></span>
    <div>Motion states being verified</div>
  </article>
</section>
```

## Why is it useful?

It gives EaseMotion a clear status communication pattern for releases, onboarding, support flows, and review handoffs while respecting reduced-motion preferences.
