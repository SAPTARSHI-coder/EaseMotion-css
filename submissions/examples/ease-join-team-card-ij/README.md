# Join Team Card — EaseMotion CSS Component

**Issue:** [#36763](https://github.com/anomalyco/EaseMotion-css/issues/36763)

A dark-themed, interactive join team card with slide-in member photo avatars. Hovering over an avatar reveals a tooltip and triggers a cascade effect where adjacent avatars slide apart.

## CSS Custom Properties

| Variable            | Default   | Description                         |
|---------------------|-----------|-------------------------------------|
| `--card-bg`         | `#1e1e2e` | Card background color               |
| `--avatar-size`     | `56px`    | Diameter of each avatar circle      |
| `--slide-duration`  | `0.4s`    | Duration of the avatar slide animation |
| `--accent-color`    | `#7c5cfc` | Accent color for button and tooltip |

## Usage

```html
<div class="join-card">
  <div class="join-card__header">
    <h2 class="join-card__title">Join the Team</h2>
    <p class="join-card__subtitle">Meet your future colleagues</p>
  </div>
  <div class="join-card__avatars">
    <div class="join-card__avatar" style="--i: 0">
      <img src="..." alt="Name" />
      <span class="join-card__tooltip">Name</span>
    </div>
    <!-- more avatars -->
  </div>
  <div class="join-card__actions">
    <button class="join-card__btn">Join Now</button>
  </div>
</div>
```

Link the `style.css` and include the markup above. Override CSS vars on the `.join-card` element or at the `:root` level to customise.
