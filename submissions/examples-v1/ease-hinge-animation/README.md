# ease-hinge — Element Drops and Swings Off Screen

A dramatic exit animation — element swings on its top-left corner like a door hinge breaking, oscillates twice, then falls off screen with gravity and fades out.

## Acceptance Criteria

- ✅ `rotate(80deg)` at top-left origin, oscillating
- ✅ Finally drops off screen with gravity (`translateY(700px)`)
- ✅ `transform-origin: top left`
- ✅ Complex multi-step keyframe (6 steps with mixed timing functions)

## Keyframe Breakdown

| Step | Transform                           | Effect            |
| ---- | ----------------------------------- | ----------------- |
| 0%   | `rotate(0)`                         | Rest position     |
| 20%  | `rotate(80deg)`                     | First swing out   |
| 40%  | `rotate(60deg)`                     | Swing back        |
| 60%  | `rotate(80deg)`                     | Swing out again   |
| 80%  | `rotate(48deg)`                     | Momentum building |
| 100% | `rotate(80deg) + translateY(700px)` | Falls off screen  |

## Classes

| Class              | Duration |
| ------------------ | -------- |
| `.ease-hinge`      | 2s       |
| `.ease-hinge-fast` | 1.2s     |
| `.ease-hinge-slow` | 3s       |

## CSS Custom Properties

| Token                   | Default | Description               |
| ----------------------- | ------- | ------------------------- |
| `--ease-hinge-duration` | `2s`    | Animation duration        |
| `--ease-hinge-angle`    | `80deg` | Peak rotation angle       |
| `--ease-hinge-drop`     | `700px` | Final translateY distance |

## Usage

```html
<!-- Trigger on class add -->
<div id="card" class="my-card">Content</div>
<script>
  const el = document.getElementById("card");
  el.classList.add("ease-hinge");
  el.addEventListener("animationend", () => el.remove(), { once: true });
</script>

<!-- Custom angle -->
<div class="ease-hinge" style="--ease-hinge-angle: 60deg;">Exit</div>
```

## Use cases

- Card/element dramatic removal
- Page exit transitions
- Error state — "breaking" elements
- Game over screens
- Notification dismissal with flair

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set. Element stays visible (`opacity: 1`, `transform: none`).

Closes #11847
