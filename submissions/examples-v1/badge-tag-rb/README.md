# Badge, Tag & Chip Component

Pure CSS status indicators, labels, and removable chips. No JavaScript required.

## Files

- `demo.html` — Live preview with badges, tags, chips, glassmorphism, and dark mode
- `style.css` — All styles, animations, and layout helpers

## Badge

Small status counters and dots.

```html
&lt;!-- Number badge --&gt;
&lt;span class="badge"&gt;3&lt;/span&gt;

&lt;!-- Color variants --&gt;
&lt;span class="badge badge-primary"&gt;New&lt;/span&gt;
&lt;span class="badge badge-success"&gt;Pro&lt;/span&gt;

&lt;!-- Pulsing live dot --&gt;
&lt;span class="badge badge-dot badge-success badge-pulse"&gt;&lt;/span&gt;

&lt;!-- Positioned over an icon --&gt;
&lt;div class="badge-wrapper"&gt;
  &lt;button class="icon-btn"&gt;🔔&lt;/button&gt;
  &lt;span class="badge badge-top-right"&gt;5&lt;/span&gt;
&lt;/div&gt;