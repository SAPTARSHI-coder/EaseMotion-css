# Profile Completion Ring KP

## What does this do?

Profile Completion Ring KP adds an animated account setup card with a conic progress ring, staggered checklist entrance, and interactive lift states.

## How is it used?

Add the `completion-ring`, `setup-list`, and `setup-item` classes to a small profile setup card.

```html
<div
  class="completion-ring"
  role="img"
  aria-label="Profile setup is 78 percent complete"
>
  <span class="completion-ring__value">78%</span>
  <span class="completion-ring__label">complete</span>
</div>

<ul class="setup-list">
  <li class="setup-item setup-item--done">Photo uploaded</li>
  <li class="setup-item">Add availability</li>
</ul>
```

## Why is it useful?

It gives EaseMotion CSS a practical onboarding pattern that combines progress feedback, task motion, hover response, and reduced-motion support without requiring JavaScript.
