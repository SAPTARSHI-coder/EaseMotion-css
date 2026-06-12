# ease-timeline-pr

Vertical timeline with connected nodes, alternating content sides, and responsive mobile layout.

## Features

- Central vertical line connecting all nodes
- Alternating left/right content on desktop
- Circular nodes with completed/active/pending states
- Optional icon nodes with background
- Arrow pointers on content cards
- Single column stacked layout on mobile
- Date labels and structured content

## Files

- `style.css` — the timeline styles
- `demo.html` — working demo with project milestones and onboarding steps
- `README.md` — usage documentation

## Usage

```html
&lt;div class="timeline-pr"&gt; &lt;div class="timeline-pr-item
timeline-pr-item-completed"&gt; &lt;div class="timeline-pr-node"&gt;&lt;/div&gt;
&lt;div class="timeline-pr-content"&gt; &lt;div class="timeline-pr-date"&gt;Jan
15, 2026&lt;/div&gt; &lt;h3 class="timeline-pr-title"&gt;Event Title&lt;/h3&gt;
&lt;p class="timeline-pr-description"&gt;Description text here...&lt;/p&gt;
&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
```
