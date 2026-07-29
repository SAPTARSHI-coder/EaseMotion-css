# CSS-Only Animated Gradient Text

Animated gradient text effects using `background-clip: text` and CSS keyframe animations.

## What does this do?

Applies animated gradient backgrounds to text elements, creating flowing color effects. Includes 6 color variants, 3 direction variants, and 3 speed variants — all pure CSS.

## How is it used?

```html
<span class="gradient-text gradient-text--rainbow">Animated Text</span>
```

### Color variants

```html
<span class="gradient-text gradient-text--purple">Purple Flow</span>
<span class="gradient-text gradient-text--rainbow">Rainbow</span>
<span class="gradient-text gradient-text--ocean">Ocean</span>
<span class="gradient-text gradient-text--sunset">Sunset</span>
<span class="gradient-text gradient-text--neon">Neon</span>
<span class="gradient-text gradient-text--fire">Fire</span>
```

### Direction variants

```html
<span class="gradient-text gradient-text--purple gradient-text--vertical">Vertical</span>
<span class="gradient-text gradient-text--purple gradient-text--diagonal">Diagonal</span>
```

### Speed variants

```html
<span class="gradient-text gradient-text--neon gradient-text--fast">Fast</span>
<span class="gradient-text gradient-text--neon gradient-text--slow">Slow</span>
```

## Why is it useful?

- **Zero JavaScript** — pure CSS gradient animation
- **Eye-catching** — draws attention to headings, CTAs, and hero text
- **Accessible** — respects `prefers-reduced-motion` by pausing animation
- **Customizable** — 6 color themes, 3 directions, 3 speeds
- **Lightweight** — minimal CSS overhead, no font or image dependencies
- **Production-ready** — suitable for landing pages, marketing sites, and portfolios
