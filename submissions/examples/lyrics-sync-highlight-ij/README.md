# Lyrics Sync Highlight

1. What does this do? A karaoke-style lyrics display where the active line highlights with scale and color change, driven by JS-simulated playback timing with smooth CSS transitions.

2. How is it used? Apply `.lyric-line` to each lyric element and `.lyric-line.active` to the current line. Use JS to toggle the class based on playback position.

3. Why is it useful? It brings a polished music player lyrics experience to EaseMotion CSS — the combination of scale transform and color shift on a smooth cubic-bezier transition makes the active line pop naturally, ideal for music apps, podcast players, and karaoke UIs.
