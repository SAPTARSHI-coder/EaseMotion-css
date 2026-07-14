# Orbiting Team Availability Card

## What does this do?

This submission creates a responsive, pure-CSS team availability card where member avatars orbit around a central summary and settle into a readable status list when the card is hovered or keyboard focused.

## How is it used?

```html
<section
  class="availability-card-jp"
  tabindex="0"
  aria-labelledby="availability-title"
>
  <div class="orbit-scene-jp" aria-hidden="true">
    <div class="central-panel-jp">
      <strong>3 available</strong>
      <small>Across 4 team members</small>
    </div>

    <div class="orbit-member-jp member-maya-jp">
      <span class="avatar-jp">M</span>
    </div>
  </div>

  <div class="member-list-jp">
    <h2 id="availability-title">Who is available now?</h2>

    <ul>
      <li class="member-row-jp status-online-jp">
        <strong>Maya</strong>
        <span class="status-label-jp">Available</span>
      </li>
    </ul>
  </div>
</section>
```

Customize the orbit through CSS variables:

```css
:root {
  --orbit-duration-jp: 8s;
  --orbit-transition-duration-jp: 760ms;
  --orbit-radius-jp: 8rem;
  --orbit-avatar-size-jp: 3rem;
  --orbit-accent-jp: #5f8cff;
  --orbit-easing-jp: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Hovering the component or focusing it with the keyboard fades the orbit scene and reveals the member list.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Team availability cards are useful for collaboration tools, project dashboards, support systems, scheduling products, and remote-team interfaces.

This example fits EaseMotion CSS because it:

- transitions from a compact visual summary to readable details;
- coordinates multiple orbit positions and staggered list entrances;
- demonstrates online, busy, away, and offline states;
- communicates status through text as well as color;
- supports hover and keyboard focus;
- adapts to smaller screens;
- replaces orbit motion with a stable list under `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
