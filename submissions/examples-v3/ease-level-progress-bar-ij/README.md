# Level Progress Bar

Gamified level progression bar with gradient fill, milestone badges, XP tracking, and a level-up animation.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lpb-duration` | `0.6s` | Duration for fill transition and badge animation |
| `--lpb-bar-color` | `linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)` | Progress fill gradient |
| `--lpb-track-bg` | `#2a2a35` | Track background color |
| `--lpb-milestone-color` | `#3b82f6` | Reached milestone dot color |
| `--lpb-level-color` | `#f0f0f0` | Level label text color |
| `--lpb-radius` | `10px` | Card border radius |

## Usage

```html
<div class="lvl-card">
  <div class="lvl-header">...</div>
  <div class="lvl-track-wrap">
    <div class="lvl-track">
      <div class="lvl-fill" style="width:0%"></div>
      <div class="lvl-milestone" style="left:25%;"></div>
      <div class="lvl-milestone" style="left:50%;"></div>
      <div class="lvl-milestone" style="left:75%;"></div>
      <div class="lvl-milestone lvl-milestone--final" style="left:100%;"></div>
    </div>
  </div>
</div>
```

Toggle `lvl-milestone--reached` on milestones and animate width on `.lvl-fill` for progress updates.
