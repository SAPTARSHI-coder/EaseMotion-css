# Ease Media Control

## What does this do?

Adds a compact media control pattern with play, pause, and stop states.

## How is it used?

Place the control in audio players, video tools, or dashboards and switch the wrapper state class such as `is-play`, `is-pause`, or `is-stop`.

```html
<article class="media-card is-play">
  <button class="media-button" type="button" aria-label="Play media">
    <span class="media-icon" aria-hidden="true"></span>
  </button>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a lightweight playback-control pattern for media interfaces without requiring any external assets or JavaScript.
