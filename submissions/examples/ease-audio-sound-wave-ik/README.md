# EaseMotion CSS — Soundwave Equalizer Indicator (`ease-audio-sound-wave-ik`)

Animated soundwave equalizer indicator component (`ease-soundwave-bar`) featuring staggered keyframe height scaling (`scaleY`) and audio player integration.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a soundwave equalizer indicator component (`ease-soundwave-bar`) that animates vertical bar scaling (`scaleY`) with staggered keyframe delays to represent active audio playback.

---

## 2. How is it used?

Include the soundwave equalizer bar structure in your audio player layout:

```html
<div class="ease-soundwave-bar">
  <span class="bar bar-1"></span>
  <span class="bar bar-2"></span>
  <span class="bar bar-3"></span>
  <span class="bar bar-4"></span>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports continuous media player animations. The Soundwave Equalizer component delivers 60fps GPU compositor scaleY interpolation while respecting `prefers-reduced-motion` settings.
