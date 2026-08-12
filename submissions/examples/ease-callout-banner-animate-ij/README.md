# Callout Banner Animate

An animated callout/banner notification component that slides in from the top with a bounce effect. Ideal for alerts, announcements, and update notifications.

## HTML Structure

```html
<div class="ease-callout-banner-animate">
  <div class="banner-content">
    <span class="banner-icon">&#9888;</span>
    <div class="banner-text">
      <strong>Title</strong>
      <p>Description message goes here.</p>
    </div>
    <button class="banner-close">&times;</button>
  </div>
</div>
```

Toggle visibility by adding/removing the `visible` class on `.ease-callout-banner-animate`.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--banner-bg` | `#1e293b` | Background color of the banner |
| `--banner-text` | `#f1f5f9` | Text color inside the banner |
| `--slide-duration` | `0.5s` | Duration of the slide-in bounce animation |
| `--bounce-height` | `20px` | Peak overshoot height for the bounce effect |

## Usage

Add `.ease-callout-banner-animate` to a container and include a `.banner-content` child with `.banner-icon`, `.banner-text`, and `.banner-close` elements. Add `class="visible"` to trigger the slide-in bounce animation; remove it to hide. The component starts collapsed (zero height) and expands on show.
