# ease-infinite-scroll-text

Pure CSS infinite marquee and scrolling text for EaseMotion CSS. No JavaScript, no cloning, no width calculations — just duplicated HTML content and CSS `transform` animation.

## Features

- **Horizontal infinite scroll** — Left-to-right or right-to-left
- **Vertical infinite scroll** — Top-to-bottom or bottom-to-top (news ticker style)
- **Bidirectional** — Two rows scrolling opposite directions
- **Seamless loop** — Content duplication technique, zero JS required
- **Pause on hover** — `animation-play-state: paused` (default)
- **No-pause variant** — For ambient background effects
- **Speed modifiers** — Fast (10s), default (20s), slow (40s)
- **Gradient edge fade** — Soft masks using `::before`/`::after` pseudo-elements
- **Dark fade variant** — Matches dark backgrounds
- **Utility item styles** — Pills, cards, news tags, and text utilities included
- **GPU-accelerated** — Uses `transform: translateX/Y()` only
- **Responsive** — Never overflows page width; contained within parent
- **`prefers-reduced-motion`** — Disables animation, shows static grid layout
- **Zero JavaScript** — Pure CSS keyframe animation

## Usage

### Basic Horizontal Marquee

**Important:** You must duplicate your content inside the track for a seamless loop.

```html
&lt;div class="ease-marquee"&gt; &lt;div class="ease-marquee-track"&gt; &lt;!--
Original Content --&gt; &lt;span class="ease-marquee-item"&gt;Item
1&lt;/span&gt; &lt;span class="ease-marquee-item"&gt;Item 2&lt;/span&gt;
&lt;span class="ease-marquee-item"&gt;Item 3&lt;/span&gt; &lt;!-- Duplicate
Content (Required for seamless loop) --&gt; &lt;span
class="ease-marquee-item"&gt;Item 1&lt;/span&gt; &lt;span
class="ease-marquee-item"&gt;Item 2&lt;/span&gt; &lt;span
class="ease-marquee-item"&gt;Item 3&lt;/span&gt; &lt;/div&gt; &lt;/div&gt;
```
