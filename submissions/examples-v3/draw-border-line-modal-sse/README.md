# Draw-Border Line Modal — Minimalist Tech

## 1. What does this do?

A pure CSS animated modal whose border draws itself **line-by-line** on open using an SVG stroke-dashoffset animation, followed by a smooth content fade-in — designed to complement minimalist tech interface aesthetics with **zero JavaScript**.

## 2. How is it used?

Wrap a hidden checkbox, a `<label>` trigger, and a modal overlay containing an SVG border and content inside a single container. The checkbox drives the open/close state entirely in CSS.

````html
<div class="trigger-group">
    <input type="checkbox" id="modal-1" class="modal-toggle" />
    <label for="modal-1" class="btn btn--primary">Open Modal</label>

    <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <div class="modal-box">
            <svg class="modal-border" viewBox="0 0 400 260" preserveAspectRatio="none" aria-hidden="true">
                <rect x="1" y="1" width="398" height="258" rx="12" ry="12" />
            </svg>

            <div class="modal-content">
                <h2 id="modal-1-title" class="modal-title">System Update</h2>
                <p class="modal-text">Your modal message here.</p>
                <div class="modal-actions">
                    <label for="modal-1" class="btn btn--ghost">Cancel</label>
                    <label for="modal-1" class="btn btn--primary">Confirm</label>
                </div>
            </div>

            <label for="modal-1" class="modal-close" aria-label="Close modal">×</label>
        </div>
    </div>
</div>
````

### Customization

All animation parameters are exposed via CSS custom properties and can be overridden inline or via a parent selector:

| Property               | Default                              | Purpose                              |
| ---------------------- | ------------------------------------ | ------------------------------------ |
| `--db-draw-duration`   | `900ms`                              | How long the border takes to draw    |
| `--db-draw-easing`     | `cubic-bezier(0.65, 0, 0.35, 1)`     | Border draw easing                   |
| `--db-content-delay`   | `500ms`                              | Delay before content fades in        |
| `--db-content-duration`| `400ms`                              | Content fade-in duration             |
| `--db-stroke`          | `2px`                                | Border stroke width                  |
| `--db-stroke-color`    | `#6ee7b7`                            | Border color                         |
| `--db-modal-bg`        | `#14171d`                            | Modal background color               |
| `--db-modal-radius`    | `12px`                               | Modal corner radius                  |
| `--db-modal-max-width` | `400px`                              | Modal maximum width                  |
| `--db-overlay-color`   | `rgba(6, 8, 12, 0.72)`               | Overlay backdrop color               |
| `--db-overlay-blur`    | `6px`                                | Overlay backdrop blur                |

Example override:

````html
<div class="trigger-group" style="--db-draw-duration: 1400ms; --db-stroke-color: #f87171;">
    ...
</div>
````

## 3. Why does it fit EaseMotion CSS?

- **Zero JavaScript overhead** — perfect fit for EaseMotion's pure-CSS philosophy.
- **Sophisticated animation choreography** — the border draws itself first, then content fades in, using only `stroke-dashoffset` and `transition-delay`.
- **Keyboard accessible** — Tab to focus, Space to toggle; includes `focus-visible` outline on triggers.
- **Fully responsive** — modal scales down on small screens with adjusted stroke-dasharray.
- **Respects `prefers-reduced-motion`** — instantly finalizes the border and skips transitions for users who prefer less motion.
- **Highly customizable** — every timing, easing, stroke, and color parameter is exposed as a CSS custom property.
- **Modern minimalist aesthetic** — subtle backdrop blur, restrained color palette, and precise line animation match clean tech interfaces.

This component adds a highly requested, modern aesthetic pattern to the EaseMotion examples library, allowing users to implement complex animation states with zero JavaScript overhead.
