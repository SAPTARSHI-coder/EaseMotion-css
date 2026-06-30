# CSS Marquee Animation Examples

Real-world usage examples for the `ease-marquee` component from EaseMotion CSS.

## Patterns Demonstrated

### Announcement Bar

A full-width top banner with continuous scrolling text. Uses `--marquee-pause-on-hover: running` so it never pauses.

### Logo / Brand Strip

Horizontal logo carousel with hover-to-pause. Uses `.ease-marquee-slow` for a relaxed scroll speed.

### Stats Scroller

Scrolling stat cards with value and label. Custom `--marquee-speed: 35s` for slower movement.

### Tag / Skill Scroller

Pill-shaped tags scrolling at fast speed using `.ease-marquee-fast`.

### Dual Stacked Marquee

Two marquee rows running in opposite directions — the second uses `--marquee-direction: reverse`.

## Customisation

All examples use the `--marquee-*` tokens exposed by `ease-marquee.css`:

```css
.ease-marquee {
  --marquee-speed: 20s; /* animation duration */
  --marquee-gap: 2rem; /* gap between items */
  --marquee-pause-on-hover: paused; /* pauses on hover */
  --marquee-direction: normal; /* or reverse */
}
```

## Key Pattern: Content Duplication

For a seamless infinite loop, duplicate the track content:

```html
<div class="ease-marquee-track">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- duplicate below -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Accessibility

Add `aria-label` and `role="marquee"` to the container:

```html
<div
  class="ease-marquee"
  role="marquee"
  aria-label="Scrolling announcements"
></div>
```

Closes #11465
