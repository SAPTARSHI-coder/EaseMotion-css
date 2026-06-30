# badge-tag-pr

Animated **status badges, tags, and notification counters** with pulse animations, hover effects, and multiple color variants.

## Preview

Open `demo.html` in your browser. No build step required.

## Badge Types

| Type         | Class                        | Description                             |
| ------------ | ---------------------------- | --------------------------------------- |
| Status badge | `.badge-pr`                  | Pill-shaped with optional dot and pulse |
| Tag          | `.badge-pr.tag-pr`           | Rounded corners, no uppercase           |
| Outline      | `.badge-pr.badge-outline-pr` | Transparent background, colored border  |
| Solid        | `.badge-pr.badge-solid-pr`   | Filled background, white text           |
| Counter      | `.counter-pr`                | Notification number with bounce         |
| Status dot   | `.status-pr`                 | Standalone dot with label               |

## Color Variants

| Variant | Class               | Default Use            |
| ------- | ------------------- | ---------------------- |
| Primary | `.badge-primary-pr` | New, featured          |
| Success | `.badge-success-pr` | Online, active, live   |
| Danger  | `.badge-danger-pr`  | Blocked, error, urgent |
| Warning | `.badge-warning-pr` | Pending, away, review  |
| Info    | `.badge-info-pr`    | Beta, info, docs       |
| Purple  | `.badge-purple-pr`  | Pro, research, special |

## Usage

```html
&lt;!-- Status badge with pulse --&gt; &lt;span class="badge-pr badge-success-pr
badge-pulse-pr"&gt; &lt;span class="badge-dot-pr"&gt;&lt;/span&gt; Online
&lt;/span&gt; &lt;!-- Tag --&gt; &lt;span class="badge-pr tag-pr
badge-primary-pr"&gt;React&lt;/span&gt; &lt;!-- Outline badge --&gt; &lt;span
class="badge-pr badge-outline-pr badge-danger-pr"&gt;Urgent&lt;/span&gt; &lt;!--
Solid badge --&gt; &lt;span class="badge-pr badge-solid-pr
badge-success-pr"&gt;Done&lt;/span&gt; &lt;!-- Notification counter --&gt;
&lt;span class="counter-pr"&gt;5&lt;/span&gt; &lt;!-- Status indicator --&gt;
&lt;span class="status-pr status-online-pr"&gt; &lt;span
class="status-dot-pr"&gt;&lt;/span&gt; Online &lt;/span&gt;
```
