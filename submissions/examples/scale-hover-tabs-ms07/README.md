# Scale-Hover Tabs

A pure CSS tabbed player-profile panel for a gaming hub. Tabs scale up smoothly on hover, the active tab stays visually pinned with a filled accent state, and switching tabs fades/scales the panel content in. Driven entirely by a hidden radio group — **zero JavaScript**.

## Preview

- Four tabs: Overview, Stats, Inventory, Achievements
- Tabs scale up (`transform: scale()`) on hover for tactile feedback
- The active tab is filled with the accent color and stays scaled, independent of hover state
- Switching tabs triggers a fade + scale-in animation on the newly shown panel
- Fully responsive: tab list wraps into a vertical stack on small screens
- Full keyboard support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                   |
|--------------|----------------------------------------------------------------|
| `demo.html`  | Markup for the tab list and panels, wired to EaseMotion CDN      |
| `style.css`  | All component styling and animations                            |
| `README.md`  | This file                                                        |

## How it works (no JS)

Four visually-hidden `<input type="radio" name="ease-sh-tab">` elements (one per tab, sharing a `name` so only one can be checked at a time) sit as siblings of both the tab list and the panel container inside `.ease-sh-tabs`. Each `<label for="...">` in the tab list toggles its matching radio.

Because the radios, the tab list, and the panel container are all siblings, a single general sibling combinator per tab does two jobs at once:

```css
#ease-sh-tab-stats:checked ~ .ease-sh-tabs__list label[for="ease-sh-tab-stats"] { /* active tab style */ }
#ease-sh-tab-stats:checked ~ .ease-sh-tabs__panels #ease-sh-panel-stats { display: block; }
```

No JavaScript is needed to track "which tab is active" — the browser's native radio-button exclusivity handles that.

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                      | Purpose                                       |
|---------------------------------|--------------------------------------------------|
| `--ease-sh-bg`                   | Page background color                             |
| `--ease-sh-surface`              | Tab list / panel background color                 |
| `--ease-sh-border`               | Border/divider color                              |
| `--ease-sh-text`                 | Primary text color                                |
| `--ease-sh-muted`                | Secondary/muted text color                        |
| `--ease-sh-accent`               | Accent color (active tab fill, stat highlights)    |
| `--ease-sh-radius`               | Corner radius for tab list and panel container     |
| `--ease-sh-tab-duration`         | Duration of tab hover/active transitions           |
| `--ease-sh-panel-duration`       | Duration of the panel fade/scale-in animation       |
| `--ease-sh-easing`               | Shared easing curve                                |

## CSS techniques used

### 1. Radio-driven tab state
See "How it works" above — this is the core mechanic that replaces JavaScript tab-switching logic entirely.

### 2. Independent hover vs. active scaling
Hover scaling (`.ease-sh-tabs__tab:hover`) and active-tab scaling (the `:checked ~` rules) both target `transform: scale()`, but since the active rule is more specific and always applies once checked, the active tab stays visibly larger and filled even when the mouse moves away, while still responding to hover on other tabs.

### 3. Panel entrance animation
Only the currently matched panel gets `display: block` (all others stay `display: none`, which is instant and not itself animatable). The visible panel then plays a `ease-sh-panel-in` keyframe animation from `scale(0.96)`/`opacity: 0` to full size/opacity, so each tab switch feels like a soft pop-in rather than an abrupt swap.

## Accessibility

- The tab list uses `role="tablist"` with an `aria-label`, and each interactive tab is a real, focusable `<label>` bound to a native `<input type="radio">`, so the whole component works with keyboard arrow/tab navigation and Space/Enter selection out of the box.
- Focus is visible: each radio's `:focus-visible` state draws an outline on its corresponding label.
- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query, which removes the hover/active scale transforms and the panel entrance animation, showing panels at full opacity immediately.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy the radio group, `.ease-sh-tabs__list`, and `.ease-sh-tabs__panels` blocks from `demo.html`.
3. To add a tab: add a new radio input with a unique `id`, a matching `<label for="...">` in the tab list, a matching `<section id="ease-sh-panel-...">` in the panels container, and a new `:checked ~` rule pair for that id in `style.css`.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-sh-*`, `ease-sh-panel-in`).