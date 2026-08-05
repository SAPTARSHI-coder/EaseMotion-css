# toggle-switch-pr

A **CSS-only animated toggle switch** using the hidden checkbox + label technique. No JavaScript required.

## Preview

Open `demo.html` in your browser. No build step required.

## How It Works

| Element | Technique | Purpose |
|---------|-----------|---------|
| Checkbox | `opacity: 0; width: 0; height: 0` | Hidden but focusable and form-submittable |
| Track | `span.toggle-track-pr` | Visual switch background |
| Thumb | `::after` pseudo-element on track | Sliding knob |
| Label | `span.toggle-label-pr` | Clickable text |

## Usage

```html
&lt;!-- Basic toggle --&gt;
&lt;label class="toggle-pr"&gt;
  &lt;input type="checkbox" /&gt;
  &lt;span class="toggle-track-pr"&gt;&lt;/span&gt;
  &lt;span class="toggle-label-pr"&gt;Notifications&lt;/span&gt;
&lt;/label&gt;

&lt;!-- Checked by default --&gt;
&lt;label class="toggle-pr"&gt;
  &lt;input type="checkbox" checked /&gt;
  &lt;span class="toggle-track-pr"&gt;&lt;/span&gt;
  &lt;span class="toggle-label-pr"&gt;Dark Mode&lt;/span&gt;
&lt;/label&gt;

&lt;!-- Disabled --&gt;
&lt;label class="toggle-pr"&gt;
  &lt;input type="checkbox" disabled /&gt;
  &lt;span class="toggle-track-pr"&gt;&lt;/span&gt;
  &lt;span class="toggle-label-pr"&gt;Unavailable&lt;/span&gt;
&lt;/label&gt;