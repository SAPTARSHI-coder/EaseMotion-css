# Interactive Spinner — SaaS Modern

Closes #78864

A clean, SaaS-modern loading ring that is genuinely **interactive** — it has
three states (Running, Paused, Complete) the user can switch between, driven
entirely by CSS and form controls with **no JavaScript**.

## What does this do?

It renders a smooth spinning gradient ring with a status label, and lets the
user run, pause, or mark it complete through an accessible control group.
The "Complete" state morphs the arc into a full success ring with a check
indicator, giving real feedback rather than an ever-spinning loader.

## How is it used?

Open `demo.html` directly in a browser (no server, no CDNs, no build step).

Markup pattern:

```html
<!-- Stateful spinner: pick a state class -->
<section class="spinner is-running" role="status" aria-live="polite">
  <div class="spinner__track"></div>
  <div class="spinner__arc"></div>
  <span class="spinner__label">Working…</span>
</section>

<!-- CSS-driven controls swap the state (no JS) -->
<div class="controls" role="group" aria-label="Spinner state">
  <input type="radio" name="ss-state" id="ss-run" checked />
  <label class="controls__btn" for="ss-run">Run</label>

  <input type="radio" name="ss-state" id="ss-pause" />
  <label class="controls__btn" for="ss-pause">Pause</label>

  <input type="radio" name="ss-state" id="ss-done" />
  <label class="controls__btn" for="ss-done">Complete</label>
</div>
```

State classes available on `.spinner`:

| Class          | Behavior                                            |
| -------------- | --------------------------------------------------- |
| `is-running`   | Arc spins continuously (default).                   |
| `is-paused`    | Arc freezes in place and dims; label goes muted.   |
| `is-complete`  | Arc fills as a green success ring with a ✓ check.  |

Modifiers:

| Class                | Effect                                  |
| -------------------- | --------------------------------------- |
| `spinner--sm`        | Small size (56px) for inline/buttons.   |
| `spinner--lg`        | Large size (128px) for hero/overlay.    |
| `spinner--secondary`| Purple secondary color variant.         |

## Why is this useful?

Most "spinner" demos only ever spin. Real SaaS UIs need a loader that reflects
the lifecycle of an async action — **in progress, held, and finished** — so
the user gets truthful feedback instead of an animation that lies. This
component models that lifecycle with three states, an accessible control
group, keyboard support, reduced-motion handling, and size/color variants
that fit modern dashboard chrome. It is fully responsive and works as a
self-contained file, in keeping with EaseMotion's curated submission model.
