# Engine Showcase: Animation Direction Tokens (`normal`, `reverse`, `alternate`, `alternate-reverse`)

## 1. What does this showcase do?

This documentation submission demonstrates the 4 direction tokens supported by the EaseMotion CSS Motion Engine:
- `normal`: Animation plays forward on every iteration (default).
- `reverse`: Animation plays backward on every iteration.
- `alternate`: Animation plays forward on odd iterations, backward on even iterations.
- `alternate-reverse`: Animation plays backward on odd iterations, forward on even iterations.

These tokens are parsed in `easemotion/engine/parser.js` and compiled in `easemotion/engine/compiler.js`.

## 2. How is it used?

```html
<!-- Motion engine attribute syntax -->
<div em="slide-in 1.5s ease-in-out repeat-infinite normal">Forward loop</div>
<div em="slide-in 1.5s ease-in-out repeat-infinite reverse">Reverse loop</div>
<div em="slide-in 1.5s ease-in-out repeat-infinite alternate">Ping-pong loop</div>
<div em="slide-in 1.5s ease-in-out repeat-infinite alternate-reverse">Reverse ping-pong loop</div>
```

## 3. Why does it fit EaseMotion CSS?

Provides documentation and a visual reference for how direction tokens alter keyframe playback behaviors in declarative engine attribute strings.

## 4. Demo

Open `demo.html` in any web browser to view all 4 direction modes running simultaneously.
