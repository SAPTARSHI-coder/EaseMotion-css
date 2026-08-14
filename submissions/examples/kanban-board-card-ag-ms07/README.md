# Glassmorphic Kanban Board Card

A glassmorphic task card component for project-management Kanban boards, built with **pure CSS**. Includes hover elevation, priority badges, an animated checklist progress bar, and an overlapping avatar stack. No JavaScript required.

## Preview

- Three task cards inside an "In Progress" column, each showing a different priority state (High, Medium, Low)
- Frosted-glass card surface (`backdrop-filter: blur()`) over a soft radial-gradient background
- Smooth elevation on hover/focus: `translateY(-4px)` plus a color-matched glow shadow
- Left-edge accent bar and pill badge colored per priority, with a soft tinted background
- Checklist progress bar that animates its fill in on load
- Overlapping avatar stack with border-stroke separation and a "+N" overflow chip
- Fully responsive single-column layout
- Full keyboard focus support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                   |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for a Kanban column with three task cards, wired to EaseMotion CDN |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                        | Purpose                                          |
|-----------------------------------|-----------------------------------------------------|
| `--ease-kb-bg`                     | Page background base color                          |
| `--ease-kb-bg-glow-1` / `-2`       | Ambient radial-gradient glow colors + progress bar gradient |
| `--ease-kb-surface`                | Card glass background color (semi-transparent)      |
| `--ease-kb-surface-border`         | Card border color                                    |
| `--ease-kb-text`                   | Primary text color                                   |
| `--ease-kb-muted`                  | Secondary/muted text color                           |
| `--ease-kb-high` / `-medium` / `-low` | Priority accent colors                            |
| `--ease-kb-radius`                 | Card corner radius                                   |
| `--ease-kb-blur`                   | Glass blur amount                                    |
| `--ease-kb-hover-duration`         | Duration of hover elevation transitions               |
| `--ease-kb-progress-duration`      | Duration of the progress bar fill animation           |
| `--ease-kb-easing`                 | Shared easing curve                                   |

Each card also sets its own `--ease-kb-progress` custom property inline on `.ease-kb-card__progress-fill` (e.g. `style="--ease-kb-progress: 70%;"`) to control how far that card's checklist bar fills.

## CSS techniques used

### 1. Glassmorphism
Each `.ease-kb-card` combines a translucent `background`, a light `border`, and `backdrop-filter: blur()` so the page's ambient radial-gradient glow shows through softly behind every card, with a `-webkit-backdrop-filter` fallback for Safari.

### 2. Hover elevation transform
On `:hover`/`:focus-within`, cards lift with `transform: translateY(-4px)` and gain a `box-shadow` tinted to match their priority color, giving each card a distinct colored glow rather than one generic shadow.

### 3. Priority badge tinting via `color-mix()`
Priority pills use `color-mix(in srgb, var(--ease-kb-high) 16%, transparent)` to derive a soft tinted background directly from the same accent variable used for the badge text and the card's left accent bar — one source of truth per priority color. (`color-mix()` is supported in all current evergreen browsers; older browsers will see a transparent badge background as a graceful fallback.)

### 4. Animated checklist progress bar
`.ease-kb-card__progress-fill` starts at `width: 0%` and animates to its target width (read from the inline `--ease-kb-progress` variable) via the `ease-kb-progress-fill` keyframes, so each bar visibly fills in shortly after the page loads.

### 5. Overlapping avatar stack
Each `.ease-kb-card__avatar` uses `margin-left: -8px` (reset to `0` on the first avatar) plus a `border` matching the page background, which creates the classic overlapping-circles look with a clean separation stroke between avatars. A `+N` chip reuses the same sizing/border rules to represent overflow members.

## Accessibility

- Interactive elevation and avatar-shift effects are mirrored on `:focus-within` in addition to `:hover`, so keyboard users navigating into a card (e.g. tabbing to a link inside it) get the same visual feedback.
- Avatar images include descriptive `alt` text (assignee names) rather than generic placeholders.
- All animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query: the hover lift and avatar micro-shift are disabled, and the progress bar renders directly at its final width instead of animating in.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy a `.ease-kb-column` block from `demo.html`, then duplicate `.ease-kb-card` per task, swapping the `--high`/`--medium`/`--low` modifier class, title, tags, `--ease-kb-progress` value, and avatar images.
3. Adjust `--ease-kb-bg-glow-1` / `-2` to re-theme the ambient background and progress bar gradient together.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet (avatar images in the demo are loaded from a public placeholder avatar service and can be swapped for real user photos).

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-kb-*`, `ease-kb-progress-fill`).