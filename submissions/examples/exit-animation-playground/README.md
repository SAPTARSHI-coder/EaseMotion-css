# Exit Animation Playground

An interactive, self-contained reference that previews EaseMotion's family of
**exit** micro-interactions side by side. Existing demos each show a single
exit effect in isolation — this playground brings them together so you can
compare and replay every effect from one page.

## Preview

Open `demo.html` in any browser. Each card runs an exit animation on load;
press **Replay all** to trigger them again without reloading.

## Effects included

| Effect   | Motion                                                        |
| -------- | ------------------------------------------------------------- |
| `fade`   | Opacity `1 → 0`                                               |
| `rotate` | Rotate + scale down + fade (mirrors `ease-rotate-image-exit`) |
| `slide`  | Translate out horizontally + fade                             |
| `scale`  | Shrink to 40% + fade                                          |
| `shake`  | Quick shake, then fade out                                    |
| `bounce` | Squash, lift, then drop away + fade                           |

## Usage

The effects are plain CSS animations driven by a `playing` state class on the
container. Apply an effect class to any element inside a `.playing` parent:

```html
<div class="playing">
  <span class="chip exit-fade">Goodbye</span>
</div>
```

To replay, remove the `playing` class, force a reflow, then add it back:

```js
stage.classList.remove("playing");
void stage.offsetWidth; // force reflow
stage.classList.add("playing");
```

## Files

```
exit-animation-playground/
├── demo.html   ← Interactive grid + replay button
├── style.css   ← Self-contained styles and keyframes
└── README.md   ← This file
```

## Accessibility

The demo honours `prefers-reduced-motion: reduce`: when the user opts out of
motion, the exit animations collapse to a near-instant duration so no movement
plays. All controls are keyboard-focusable.

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅        |
| Firefox | ✅        |
| Safari  | ✅        |
| Edge    | ✅        |

## Why it's useful

Exit animations are the least-demoed category in the framework. A consolidated,
replayable playground makes it easy to pick the right exit effect for a UI
transition and see exactly how each one behaves.

---

**Closes:** #3026
**Status:** Ready for review
