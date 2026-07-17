# Animated Incident-Response Timeline

## What does this do?

This submission creates a responsive, pure-CSS incident-response timeline showing detection, triage, containment, recovery, and post-incident review states.

## How is it used?

```html
<ol class="timeline-jp">
  <li class="timeline-stage-jp stage-complete-jp">
    <details open>
      <summary>
        <span class="stage-marker-jp" aria-hidden="true">✓</span>

        <span class="stage-heading-jp">
          <strong>Detection</strong>
          <small>Completed · 10:14</small>
        </span>

        <span class="state-label-jp">Completed</span>
      </summary>

      <div class="stage-details-jp">
        <p>Incident-stage details go here.</p>
      </div>
    </details>
  </li>
</ol>
```

Customize the timeline through CSS variables:

```css
:root {
  --timeline-duration-jp: 900ms;
  --timeline-easing-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --timeline-complete-jp: #29c79f;
  --timeline-active-jp: #6d7cff;
  --timeline-danger-jp: #ff6678;
  --timeline-pending-jp: #8792a8;
  --timeline-line-width-jp: 3px;
}
```

Native `details` and `summary` elements provide expandable stage information without JavaScript. The timeline changes from a horizontal desktop layout to a vertical mobile layout.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Incident timelines are useful for cybersecurity dashboards, service-status pages, DevOps systems, support workflows, and operational reporting interfaces.

This example fits EaseMotion CSS because it:

- animates the relationship between response stages;
- demonstrates completed, active, pending, and failed states;
- includes a pulsing active-stage marker;
- exposes reusable timing and state variables;
- uses native keyboard-accessible expandable controls;
- keeps stage order logical without CSS;
- adapts from horizontal to vertical layouts;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
