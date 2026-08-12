# Magic 8 Ball

### What does this do?

It shows a Magic 8 Ball: a glossy black sphere with the white number 8 near the top and a blue answer die floating in a round window, reading a fortune. The ball gently bobs and the answer fades out and back as if a new one surfaced. Under reduced motion it holds still.

### How is it used?

```html
<div class="eight-ball">
  <span class="eight">8</span>
  <div class="window"><div class="die"><span class="answer">IT IS<br />CERTAIN</span></div></div>
  <span class="shine"></span>
</div>
```

The ball is a radial gradient sphere with an inset shadow. The `window` is a dark inset circle, and the triangular `die` is clipped with `clip-path` and holds the answer text. A `float` animation bobs the ball while `eb-answer` fades the die.

### Why is it useful?

Fun widgets, decision helpers, and playful empty states use a Magic 8 Ball. This builds one with a glossy sphere and a floating answer die using pure CSS, no images, with a reduced motion fallback.
