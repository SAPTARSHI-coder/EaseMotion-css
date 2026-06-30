# timeline-stepper-pr

**Vertical timeline** and **horizontal stepper** components with connecting lines, status indicators, and content panels.

## Preview

Open `demo.html` in your browser. No build step required.

## Types

| Type | Class | Use Case |
|------|-------|----------|
| Vertical Timeline | `.timeline-pr` | Project history, logs, changelogs |
| Horizontal Stepper | `.stepper-pr` | Multi-step forms, wizards, onboarding |
| Checkout Flow | `.checkout-pr` | E-commerce checkout steps |

## Status States

| State | Class | Visual |
|-------|-------|--------|
| Completed | `.timeline-completed-pr` | Green circle with ✓ checkmark |
| Active | `.timeline-active-pr` | Blue circle with ● dot + pulse glow |
| Pending | `.timeline-pending-pr` | Gray circle, empty, bordered |

## Usage

### Vertical Timeline

```html
&lt;ul class="timeline-pr"&gt;
  &lt;li class="timeline-item-pr timeline-completed-pr"&gt;
    &lt;div class="timeline-dot-pr"&gt;&lt;/div&gt;
    &lt;div class="timeline-content-pr"&gt;
      &lt;div class="timeline-time-pr"&gt;Jan 15, 2024&lt;/div&gt;
      &lt;h4 class="timeline-title-pr"&gt;Project Initiated&lt;/h4&gt;
      &lt;p class="timeline-desc-pr"&gt;Kickoff meeting with stakeholders.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="timeline-item-pr timeline-active-pr"&gt;
    &lt;div class="timeline-dot-pr"&gt;&lt;/div&gt;
    &lt;div class="timeline-content-pr"&gt;...&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="timeline-item-pr timeline-pending-pr"&gt;
    &lt;div class="timeline-dot-pr"&gt;&lt;/div&gt;
    &lt;div class="timeline-content-pr"&gt;...&lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;