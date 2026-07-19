# Typing Effect with Cursor

A text animation that simulates typing character by character using CSS `steps()` animation with a blinking cursor, creating a human-like typing effect.

## What does this do?

This creates a typing effect where text appears to be typed character by character using CSS `overflow: hidden`, `white-space: nowrap`, and `width` animation with `steps()` timing function, combined with a blinking cursor animation.

## How is it used?

```html
<span class="typing-effect">Your text here</span>

<!-- Size variants -->
<span class="typing-effect typing-sm">Small text</span>
<span class="typing-effect typing-md">Medium text</span>
<span class="typing-effect typing-lg">Large text</span>
<span class="typing-effect typing-xl">Extra large text</span>

<!-- Speed variants -->
<span class="typing-effect typing-fast">Fast typing</span>
<span class="typing-effect typing-slow">Slow typing</span>

<!-- Color variants -->
<span class="typing-effect typing-cyan">Cyan cursor</span>
<span class="typing-effect typing-green">Green cursor</span>
<span class="typing-effect typing-pink">Pink cursor</span>

<!-- Code block variant -->
<div class="typing-code">const code = "here";</div>
```

The typing effect uses CSS `steps()` for character-by-character reveal:

```css
.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #667eea;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
```

## Why is it useful?

This demonstrates an advanced CSS technique using the `steps()` timing function to create discrete, frame-by-frame animations that simulate typing without JavaScript. The effect is widely used for hero headlines, code snippets, and chat interfaces to add dynamic, human-like behavior to static text. The pure CSS approach keeps the implementation lightweight and performant while showcasing how to create sophisticated text animations using only native CSS properties. The blinking cursor adds realism and visual interest, making the typing effect feel natural and engaging.
