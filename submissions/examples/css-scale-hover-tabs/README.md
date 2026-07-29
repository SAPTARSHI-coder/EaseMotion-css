# CSS Scale-Hover Tabs

A pure CSS tabs component styled as an account settings panel, with a scale-up hover on each tab trigger. No JavaScript, no dependencies.

## How it works

Tab switching uses three hidden radio inputs sharing the same `name`, so only one can be checked at a time — this is what makes the tabs mutually exclusive, unlike the checkbox hack used in an accordion where items can open independently.

Each radio is paired with a `<label>` trigger, and `:checked ~` sibling selectors both style the active trigger and reveal the matching panel. On top of that, every trigger gets a `transform: scale()` transition on hover, independent of which tab is active.

## Files

- `demo.html` – a 3-tab settings panel (Profile, Notifications, Billing)
- `style.css` – all styling, custom properties, tab-switching logic, and hover scale
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-tabs-duration` – 0.2s
- `--ease-tabs-easing` – ease
- `--ease-tabs-radius` – 8px
- `--ease-tabs-bg` – panel background
- `--ease-tabs-border` – border color
- `--ease-tabs-text` – inactive tab text color
- `--ease-tabs-active-text` – active tab / panel text color
- `--ease-tabs-accent` – active tab underline color
- `--ease-tabs-hover-scale` – how much a tab scales up on hover (1.06 = 6%)

Example override:

```css
:root {
  --ease-tabs-accent: #f97316;
  --ease-tabs-hover-scale: 1.1;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Radio/label pairing means tabs are keyboard-navigable by default (arrow keys move between radios in the same group, Tab moves in and out)
- Respects `prefers-reduced-motion` — hover scaling and the panel entrance animation are both disabled for users who have that set