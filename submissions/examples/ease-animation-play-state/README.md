# ease-animation-play-state utilities

Utility classes for pausing and resuming CSS animations via hover states or JavaScript class toggles.

## Class reference

| Class                   | Property Set                    | Trigger             | Use Case                                |
| ----------------------- | ------------------------------- | ------------------- | --------------------------------------- |
| `.ease-animate-pause`   | `animation-play-state: paused`  | Class on element    | Pause a looping animation via JS toggle |
| `.ease-animate-running` | `animation-play-state: running` | Class on element    | Explicitly resume a paused animation    |
| `.ease-hover-pause`     | `animation-play-state: paused`  | `:hover` on element | Pause animation while user hovers       |

## Usage

```html
<div class="logo demo-rotate ease-hover-pause" aria-hidden="true"></div>
```

```html
<div class="spinner demo-rotate" id="spinner"></div>
<button
  type="button"
  onclick="document.getElementById('spinner').classList.toggle('ease-animate-pause')"
>
  Toggle pause
</button>
```

## JavaScript toggling

`.ease-animate-pause` and `.ease-animate-running` are designed to be toggled via `element.classList.add()`, `classList.remove()`, or `classList.toggle()` to build play/pause controls in interactive UIs. Add `.ease-animate-pause` to freeze a looping animation; remove it (or add `.ease-animate-running`) to resume playback.
