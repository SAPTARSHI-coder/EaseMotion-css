# Terminal Window

### What does this do?

It shows a terminal window with a traffic light title bar and a console session inside: colored shell prompts, typed commands, program output with success and warning colors, and a blinking cursor on the final prompt line.

### How is it used?

```html
<div class="term">
  <div class="term-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></div>
  <div class="term-body">
    <p class="line"><span class="pr">arhan@dev</span><span class="dollar">$</span> npm run build</p>
    <p class="out ok">&#10003; built in 1.82s</p>
    <p class="line">... <span class="cursor"></span></p>
  </div>
</div>
```

The title bar holds three colored dots. Inside, prompt parts (`pr`, `path`, `dollar`) and output classes (`ok`, `warn`, `muted`) color the monospace text, and a `cursor` span blinks with a keyframe.

### Why is it useful?

Docs, landing pages, and tutorials show commands in a terminal for a familiar developer feel. This provides a styled terminal with a prompt and a blinking cursor using only CSS, no highlighting script.
