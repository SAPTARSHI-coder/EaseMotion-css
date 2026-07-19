# Timeline Component

A vertical timeline with alternating left/right content, connecting lines, and dot markers. Includes date labels and responsive mobile stacking.

## Demo

Open `demo.html` in your browser to see:
- Default alternating left/right timeline
- Left-aligned timeline
- Green color theme variant

## Usage

### Alternating Timeline (Default)

```html
&lt;div class="timeline"&gt;
  &lt;div class="timeline-item timeline-left"&gt;
    &lt;div class="timeline-content"&gt;
      &lt;span class="timeline-date"&gt;Jan 2024&lt;/span&gt;
      &lt;h3&gt;Project Started&lt;/h3&gt;
      &lt;p&gt;Initial planning and research phase.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="timeline-item timeline-right"&gt;
    &lt;div class="timeline-content"&gt;
      &lt;span class="timeline-date"&gt;Mar 2024&lt;/span&gt;
      &lt;h3&gt;Design Phase&lt;/h3&gt;
      &lt;p&gt;UI/UX design completed.&lt;/p&gt;
    &lt;/div&gt;
  &lt;div class="timeline-item timeline-left"&gt;
    &lt;div class="timeline-content"&gt;
      &lt;span class="timeline-date"&gt;Jun 2024&lt;/span&gt;
      &lt;h3&gt;Development&lt;/h3&gt;
      &lt;p&gt;Core features implemented.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;