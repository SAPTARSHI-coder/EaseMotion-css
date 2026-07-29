# CSS Morph-Glow Tabs — Gaming Hub Layout

A pure HTML5 + CSS tab interface for gaming hub dashboards. An animated,
continuously-morphing glow pill glides beneath the active tab, and each
panel eases into view when selected. Tab switching is handled entirely
by the **radio-input checkbox hack** — there is no JavaScript anywhere
in this submission.

---

## Features

- **Morphing glow indicator** — a gradient pill sits behind the tab
  labels and slides to the active tab's position with a snappy easing
  curve, while a separate `glowMorph` keyframe animation continuously
  and subtly reshapes its border-radius and saturation, giving it an
  organic, "breathing" quality rather than a static highlight.
- **Zero JavaScript** — active tab/panel state is driven by hidden
  `<input type="radio">` elements paired with `<label>` triggers, using
  the `:checked` pseudo-class with sibling and descendant combinators.
- **EaseMotion CSS utility classes** — uses `.em-fade-in-down` for the
  header's entrance animation. Defined as a self-contained fallback in
  `style.css` (see the "EaseMotion CSS utilities" section) so the demo
  works standalone; swap in the compiled `dist/ease-motion.css` core
  stylesheet when merging into the main repo and the same class name
  keeps working with the shared utility instead.
- **Layered hover / active-state animation** — tab icons lift and
  scale on hover, active tab text recolors against the glow, and each
  panel fades and slides in fresh every time it's selected (since CSS
  animations restart whenever an element goes from `display: none` to
  visible).
- **Fully responsive** — the tab bar scrolls horizontally without
  layout breakage on narrow viewports, and typography/padding scale
  down at tablet and mobile breakpoints.
- **`prefers-reduced-motion` support** — the glow's continuous morph
  animation, its slide transition, tab hover movement, and panel
  entrance animation are all removed for users who request reduced
  motion; tab switching remains fully functional, just instant.
- **Semantic, accessible markup** — `role="tablist"` / `role="tab"` /
  `role="tabpanel"`, a visible focus ring driven by `:focus-visible` on
  the hidden radio inputs, and labels tied to real form controls so the
  whole widget is keyboard and screen-reader operable without any
  custom scripting.
- **Does not touch existing project files** — this is a fully
  self-contained folder under `submissions/examples/`; nothing outside
  it is modified.

---

## Folder structure

```
submissions/examples/css-morph-glow-tabs-gaming-hub/
├── demo.html     # Semantic markup: 4 tabs, 4 panels, radio-driven state
├── style.css     # All layout, glow/morph animation, and responsive styles
└── README.md     # This file
```

---

## Usage

1. Open `demo.html` directly in any modern browser — no build step,
   server, or JavaScript runtime required.
2. Click (or tab to, then press Space/Enter on) any of the four tabs —
   **Overview**, **Leaderboard**, **Achievements**, **Store** — to see
   the glow indicator glide over and the matching panel fade in.
3. To reuse this component elsewhere, copy the `--tab-count` custom
   property, the `.tab-input` / `.tab-list` / `.tab-glow` /
   `.tab-panels` rule blocks, and the corresponding markup pattern
   (radio inputs → `.tab-list` of labels → `.tab-panels` of sections)
   from `demo.html`.

---

## Customization

| What to change                  | Where                                                                 |
|-----------------------------------|--------------------------------------------------------------------|
| Color palette / glow gradient      | CSS custom properties in `:root`, and the `background` on `.tab-glow` |
| Number of tabs                     | Update `--tab-count` in `:root`, add/remove radio inputs + `.tab-list__item` labels + matching `#tab-X:checked ~ ...` rule sets for the glow position, active label color, and panel visibility |
| Glow morph speed / intensity        | The `glowMorph` `@keyframes` block and its `animation` duration on `.tab-glow` |
| Glow slide speed / easing           | `--em-duration-base` and `--em-ease-snappy` tokens                   |
| Panel entrance animation            | The `panelReveal` `@keyframes` block                                 |
| Default active tab                  | Move the `checked` attribute in `demo.html` to a different `.tab-input` |
| Tab icons                           | The emoji inside each `.tab-list__icon` span in `demo.html`           |

---

## Browser compatibility

Uses only standard, widely supported CSS: custom properties, flexbox,
`transform`/`transition`/`@keyframes`, the `:checked` and
`:focus-visible` pseudo-classes with sibling combinators, and the
`prefers-reduced-motion` media feature. Works in all current versions
of Chrome, Firefox, Safari, and Edge. In browsers without
`:focus-visible` support, keyboard focus still works via each browser's
default focus styling; only the custom glow-ring styling is skipped.

---

## Accessibility

- Tab markup follows the standard ARIA tabs pattern:
  `role="tablist"` on the nav, `role="tab"` on each label, and
  `role="tabpanel"` on each content section.
- Every tab trigger is a real `<label>` bound to a real
  `<input type="radio">`, so the whole widget is operable by keyboard
  (Tab to move focus, arrow keys/Space to change selection depending on
  browser radio-group behavior) and announced correctly by screen
  readers without any custom scripting.
- A visible focus ring (`:focus-visible` on the hidden input, styled via
  its sibling `.tab-list`) ensures keyboard users can always see which
  control is focused.
- `prefers-reduced-motion: reduce` removes the glow's morphing and
  sliding animation, hover movement, and panel entrance animation while
  keeping every tab fully switchable and every panel fully readable.