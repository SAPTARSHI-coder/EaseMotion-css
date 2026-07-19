# ease-morph-button

Morphing button state transitions for EaseMotion CSS.

## States

| State | Background | Content |
|---|---|---|
| default | #6c63ff | Text label |
| loading | #334155 (rounded) | Spinner |
| success | #22c55e | Checkmark |
| error | #ef4444 | X mark |

## Usage

```html
<button class="morph-btn" data-state="default">...</button>
```

```js
const states = ['default','loading','success','error'];
btn.addEventListener('click', () => { btn.dataset.state = states[(states.indexOf(btn.dataset.state) + 1) % states.length]; });
```
