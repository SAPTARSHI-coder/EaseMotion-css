# EaseMotion — Slide-Up Carousel

A pure CSS carousel with a smooth slide-up transition, styled for dashboard-style
interfaces. No JavaScript is loaded or required — state, transitions, and keyboard
navigation are all handled by native `<input type="radio">` behavior and CSS.

## Files

- `demo.html` — a working example with 5 slides in a dashboard "metrics" layout
- `style.css` — the component styles, fully commented
- `README.md` — this file

Open `demo.html` directly in a browser (or serve the folder) to try it.

## How it works

- Each slide has a hidden radio input (`.em-carousel__state`) sharing one `name`,
  so only one can be checked at a time — that's the whole state machine.
- Slides are absolutely stacked. The checked radio's matching slide (paired by
  DOM order via `:nth-of-type`) gets `opacity: 1` and `transform: translateY(0)`;
  every other slide sits below/behind it, translated down and slightly scaled.
- Dots and prev/next controls are `<label for="...">` elements pointing at the
  radio ids — clicking or tapping them changes the checked input natively.
- Keyboard support comes for free from the radio group itself: `Tab` moves focus
  into the group, `Arrow` keys move between slides, `Space`/`Enter` activates a
  focused label/dot.

Because everything is driven by real form controls, this also works with screen
readers' native radio-group announcements ("2 of 5", etc. depending on browser/AT).

## Using it in your project

1. Copy `style.css` in, or lift the `.em-carousel` rule block into your sheet.
2. Copy the markup structure from `demo.html`:
   - N `.em-carousel__state` radios (same `name`, one `checked`)
   - N `.em-slide` articles inside `.em-carousel__viewport .em-carousel__track`,
     in the **same order** as the radios
   - Dots/nav `<label for="...">` elements inside `.em-carousel__controls`
3. Replace the slide content (`.em-slide__eyebrow`, `__title`, `__body`, `__metric`).

The included pairing CSS supports **5 slides** out of the box. To add more,
duplicate the `:nth-of-type(n):checked ~ ... :nth-of-type(n)` lines (for slides,
dots, and nav pairs) for each additional index — the pattern is mechanical.

## Customization via CSS custom properties

All tunables live on `.em-carousel`, so you can override them globally or scope
overrides to a specific instance:

```css
.em-carousel {
  --em-duration: 620ms;              /* transition length */
  --em-easing: cubic-bezier(.22,1,.36,1); /* easing curve */
  --em-rise: 3.5rem;                 /* distance the incoming slide travels */
  --em-scale-out: .96;               /* how much the outgoing slide shrinks */
  --em-radius: 18px;                 /* viewport corner radius */
  --em-slide-height: clamp(280px, 42vw, 380px);
  --em-gap: 1.25rem;
  --em-autoplay-duration: 6s;        /* progress-rail cycle length */
}
```

Example — a snappier, more dramatic variant for a single instance:

```html
<div class="em-carousel" style="--em-duration: 350ms; --em-rise: 6rem; --em-easing: ease-out;">
  ...
</div>
```

Color and typography are exposed as CSS variables on `:root` (`--em-bg`,
`--em-panel`, `--em-accent`, `--em-text`, `--em-font-ui`, `--em-font-mono`, etc.)
so the component can be re-themed to match any dashboard palette without editing
selectors.

## Autoplay

Add/remove the `em-carousel--autoplay` modifier class to show/hide a slim
progress rail under the controls (`--em-autoplay-duration` controls its cycle
length). This is a **visual indicator only** — pure CSS cannot advance a radio
group's selection on a timer without JavaScript, so pair it with real
JavaScript if timed auto-advance is required. Omitting the class removes the
autoplay UI entirely at zero cost.

## Accessibility notes

- Keyboard: `Tab` into the control, `←/→` or `↑/↓` to switch slides, matching
  native radio-group behavior — no custom key handling needed.
- Focus is always visible (`:focus-visible` outlines on the viewport and dots);
  it is never suppressed.
- `prefers-reduced-motion: reduce` collapses the slide-up motion to an instant
  cross-fade-free swap and freezes the autoplay rail.
- `prefers-contrast: more` boosts border and secondary-text contrast.
- Each dot/arrow has an `aria-label`; give each `.em-slide` real heading text
  so assistive tech has something meaningful to announce per slide.

## Known limitations

- Pure-CSS "prev/next" buttons can't dynamically target "whichever slide is
  next" — each slide's active state instead reveals its own correctly-wired
  prev/next pair (`.em-nav-pair[data-pair]`). This is mechanical to extend but
  does mean N slides need N pairs of nav buttons in the markup.
- True timed auto-advance (looping without user input) needs JavaScript; the
  CSS-only autoplay here is a progress indicator, not a driver.