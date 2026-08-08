# Voice Message

### What does this do?

It shows a chat voice message bubble with a play button, a waveform of bars, and a duration. The played portion of the waveform is tinted brighter to show progress.

### How is it used?

```html
<div class="voice">
  <button class="vm-play" aria-label="Play voice message"><svg>...</svg></button>
  <div class="vm-wave">
    <span class="played" style="--h: 40%"></span>
    <span style="--h: 80%"></span>
  </div>
  <span class="vm-time">0:14</span>
</div>
```

Set each bar height with the `--h` custom property, and add the `played` class to the bars up to the current position. A host app moves the played boundary as the clip plays.

### Why is it useful?

Messaging apps send voice notes shown as a waveform. This lays out a voice message bubble with a play button, a bar waveform driven by heights, and a played state, using only CSS and inline SVG. The play button hover scale is removed under reduced motion.
