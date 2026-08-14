# Floating Modal (SaaS Modern)

A pure-CSS modal component that floats above the page with a soft backdrop blur and a
smooth scale-and-fade entrance. It opens and closes entirely through hash navigation
(`:target`) — no JavaScript required.

## What does this do?

It renders a responsive, accessible dialog overlay with a SaaS-modern look (clean white
surface, layered shadow, accent gradient, blurred backdrop) that animates into view when
its trigger link is clicked and animates out when the backdrop or close control is used.

## How is it used?

Link the trigger to the overlay's `id`, and link the close/backdrop controls to `#`:

```html
<a class="fsm-trigger" href="#fsm-modal">Open modal</a>

<div class="fsm-overlay" id="fsm-modal" role="presentation">
  <a class="fsm-backdrop" href="#" aria-label="Close modal"></a>
  <section class="fsm-panel" role="dialog" aria-modal="true"
           aria-labelledby="fsm-panel-title" aria-describedby="fsm-panel-desc">
    <header class="fsm-panel-header">
      <div>
        <h2 id="fsm-panel-title">Title</h2>
        <p class="fsm-panel-subtitle">Subtitle</p>
      </div>
      <a class="fsm-close" href="#" aria-label="Close modal">&times;</a>
    </header>
    <div class="fsm-body" id="fsm-panel-desc">Body content</div>
    <footer class="fsm-actions">
      <a class="fsm-btn fsm-btn-secondary" href="#">Cancel</a>
      <a class="fsm-btn fsm-btn-primary" href="#">Confirm</a>
    </footer>
  </section>
</div>
```

### Configurable tokens

Override these on `.floating-saas-modal-demo` (or `:root`) to retune the animation:

```css
.floating-saas-modal-demo {
  --fsm-duration: 240ms;                       /* entrance duration */
  --fsm-easing: cubic-bezier(0.22, 1, 0.36, 1); /* entrance easing */
  --fsm-radius: 1.25rem;                        /* panel corner radius */
  --fsm-accent: #6c63ff;                        /* primary accent */
  --fsm-surface: #ffffff;                       /* panel background */
}
```

## Why is it useful?

It demonstrates EaseMotion's philosophy of declarative, dependency-free motion: the
entrance is driven by the `:target` pseudo-class and CSS transitions, so it works by
opening the HTML file directly with no server, framework, or JavaScript. It is fully
responsive (the plan grid and actions stack on narrow screens), honors
`prefers-reduced-motion`, and exposes visible focus outlines for keyboard users — making
it a clean, reusable pattern for dashboards, onboarding flows, and upgrade prompts.

## Files

- `demo.html` — self-contained standalone preview.
- `style.css` — scoped styles with configurable custom properties.
- `README.md` — usage and rationale.
