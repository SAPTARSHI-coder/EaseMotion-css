# Spring Physics Modal — Minimalist Tech

## 1. What does this do?

A pure CSS animated modal with a **bouncy spring-physics entrance** — the modal overshoots slightly and settles into place, mimicking a real spring — designed to complement minimalist tech interface aesthetics with **zero JavaScript**.

## 2. How is it used?

Wrap a hidden checkbox, a `<label>` trigger, and an overlay containing the modal inside a single container. The checkbox drives the open/close state entirely in CSS.

````html
<div class="trigger-group">
    <input type="checkbox" id="spring-1" class="spring-toggle" />
    <label for="spring-1" class="btn btn--primary">Open Modal</label>

    <div class="spring-overlay" role="dialog" aria-modal="true" aria-labelledby="spring-1-title">
        <div class="spring-modal">
            <div class="spring-content">
                <h2 id="spring-1-title" class="spring-title">Bouncy Arrival</h2>
                <p class="spring-text">Your modal message here.</p>
                <div class="spring-actions">
                    <label for="spring-1" class="btn btn--ghost">Cancel</label>
                    <label for="spring-1" class="btn btn--primary">Confirm</label>
                </div>
            </div>
            <label for="spring-1" class="spring-close" aria-label="Close modal">×</label>
        </div>
    </div>
</div>
````

### Customization

| Property                | Default                                | Purpose                              |
| ----------------------- | -------------------------------------- | ------------------------------------ |
| `--sp-enter-duration`   | `720ms`                                | Spring entrance duration             |
| `--sp-enter-easing`     | `cubic-bezier(0.34, 1.56, 0.64, 1)`    | Spring overshoot curve               |
| `--sp-exit-duration`    | `260ms`                                | Exit duration                        |
| `--sp-exit-easing`      | `cubic-bezier(0.4, 0, 1, 1)`           | Exit easing                          |
| `--sp-scale-from`       | `0.7`                                  | Initial scale                        |
| `--sp-translate-from`   | `40px`                                 | Initial vertical offset              |
| `--sp-accent`           | `#60a5fa`                              | Primary accent color                 |
| `--sp-modal-bg`         | `#14171d`                              | Modal background                     |
| `--sp-modal-radius`     | `14px`                                 | Modal corner radius                  |
| `--sp-modal-max-width`  | `420px`                                | Modal max width                      |
| `--sp-overlay-color`    | `rgba(6, 8, 12, 0.72)`                 | Overlay backdrop color               |
| `--sp-overlay-blur`     | `6px`                                  | Overlay backdrop blur                |

Example override:

````html
<div class="trigger-group" style="--sp-enter-duration: 1000ms; --sp-scale-from: 0.5;">
    ...
</div>
````

## 3. Why does it fit EaseMotion CSS?

- **Zero JavaScript overhead** — pure-CSS spring-physics using tuned `cubic-bezier` overshoot curves.
- **Realistic physical feel** — the modal compresses, springs forward past its target, and settles.
- **Keyboard accessible** — Tab to focus, Space to toggle; includes `focus-visible` outline.
- **Fully responsive** — modal max-width adapts on small screens.
- **Respects `prefers-reduced-motion`** — instantly finalizes without bounce for users who prefer less motion.
- **Highly customizable** — every timing, easing, scale, and offset parameter is exposed as a CSS custom property.
- **Modern minimalist aesthetic** — restrained palette, soft shadow, precise spring motion.

This component adds a highly requested, modern aesthetic pattern to the EaseMotion examples library, allowing users to implement complex animation states with zero JavaScript overhead.
