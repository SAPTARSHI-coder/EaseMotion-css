# Floating Orbit Modal — Creative Portfolio

## 1. What does this do?

A pure CSS animated modal with decorative glowing dots and rings that **orbit gently around it** in the background, styled to complement creative portfolio interface aesthetics with **zero JavaScript**.

## 2. How is it used?

Wrap a hidden checkbox, a `<label>` trigger, and an overlay containing the modal with its orbiting decorative elements inside a single container. The checkbox drives the open/close state entirely in CSS.

````html
<div class="trigger-group">
    <input type="checkbox" id="orbit-1" class="orbit-toggle" />
    <label for="orbit-1" class="btn btn--primary">View Project</label>

    <div class="orbit-overlay" role="dialog" aria-modal="true" aria-labelledby="orbit-1-title">
        <div class="orbit-modal">
            <!-- Orbiting decorative elements -->
            <div class="orbit orbit--1" aria-hidden="true"><span class="orbit__dot"></span></div>
            <div class="orbit orbit--2" aria-hidden="true"><span class="orbit__dot orbit__dot--alt"></span></div>
            <div class="orbit orbit--3" aria-hidden="true"><span class="orbit__ring"></span></div>

            <div class="orbit-content">
                <span class="orbit-eyebrow">Case Study</span>
                <h2 id="orbit-1-title" class="orbit-title">Aurora Design System</h2>
                <p class="orbit-text">Your modal message here.</p>
                <div class="orbit-actions">
                    <label for="orbit-1" class="btn btn--ghost">Close</label>
                    <label for="orbit-1" class="btn btn--primary">Explore</label>
                </div>
            </div>

            <label for="orbit-1" class="orbit-close" aria-label="Close modal">×</label>
        </div>
    </div>
</div>
````

### Customization

All animation and layout parameters are exposed via CSS custom properties and can be overridden inline or via a parent selector:

| Property                | Default                                      | Purpose                              |
| ----------------------- | -------------------------------------------- | ------------------------------------ |
| `--fo-orbit-1-duration` | `14s`                                        | Speed of orbit #1                    |
| `--fo-orbit-2-duration` | `22s`                                        | Speed of orbit #2 (counter-rotating) |
| `--fo-orbit-3-duration` | `30s`                                        | Speed of orbit #3                    |
| `--fo-orbit-1-size`     | `520px`                                      | Diameter of orbit #1                 |
| `--fo-orbit-2-size`     | `620px`                                      | Diameter of orbit #2                 |
| `--fo-orbit-3-size`     | `720px`                                      | Diameter of orbit #3                 |
| `--fo-duration`         | `520ms`                                      | Modal entrance duration              |
| `--fo-easing`           | `cubic-bezier(0.22, 1, 0.36, 1)`             | Modal entrance easing                |
| `--fo-accent`           | `#c4b5fd`                                    | Primary orbit color (purple)         |
| `--fo-accent-2`         | `#f9a8d4`                                    | Secondary orbit color (pink)         |
| `--fo-accent-3`         | `#93c5fd`                                    | Tertiary orbit color (blue)          |
| `--fo-modal-bg`         | `linear-gradient(145deg, #1a1530, #221a3d)`  | Modal background                     |
| `--fo-modal-radius`     | `20px`                                       | Modal corner radius                  |
| `--fo-modal-max-width`  | `440px`                                      | Modal maximum width                  |
| `--fo-overlay-color`    | `rgba(8, 6, 18, 0.78)`                       | Overlay backdrop color               |
| `--fo-overlay-blur`     | `8px`                                        | Overlay backdrop blur                |

Example override:

````html
<div class="trigger-group" style="--fo-orbit-1-duration: 8s; --fo-accent: #6ee7b7;">
    ...
</div>
````

## 3. Why does it fit EaseMotion CSS?

- **Zero JavaScript overhead** — perfect fit for EaseMotion's pure-CSS philosophy.
- **Layered choreographed motion** — three counter-rotating dashed orbits with glowing dots create ambient depth without distracting from content.
- **Keyboard accessible** — Tab to focus, Space to toggle; includes `focus-visible` outline on triggers.
- **Fully responsive** — orbits scale down on small screens via CSS custom-property breakpoints.
- **Respects `prefers-reduced-motion`** — freezes orbit rotation and shortens transitions for users who prefer less motion.
- **Highly customizable** — every timing, size, and color parameter is exposed as a CSS custom property.
- **Creative portfolio aesthetic** — gradient buttons, glowing orbital elements, and soft backdrop blur match modern portfolio and showcase interfaces.

This component adds a highly requested, modern aesthetic pattern to the EaseMotion examples library, allowing users to implement complex animation states with zero JavaScript overhead.
