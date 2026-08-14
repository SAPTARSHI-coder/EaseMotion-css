# ease-btn-hover vs ease-hover-grow Naming Confusion Lab

A documentation showcase that compares **`ease-btn-hover`** and **`ease-hover-grow`** on the same button, explains API overlap, and provides a “which one when” decision table — teaching API literacy instead of shipping another hover effect.

> Submission track: `submissions/docs/ease-hover-class-confusion-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46181](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46181)

---

## What does this do?

Beginners often treat `ease-btn-hover` and `ease-hover-grow` as synonyms because both sound like “hover the button.” They are not the same:

| Class | Effect | Scope |
|-------|--------|--------|
| `ease-btn-hover` | Lift (~3px) + shadow/glow | Button modifier (`components/buttons.css`) |
| `ease-hover-grow` | Scale (~1.06) | Generic hover utility (`core/animations.css`) |

This lab puts both on identical buttons side by side and adds a decision table for buttons, cards, icons, and CTAs.

---

## How is it used?

1. Open `demo.html` in a browser (needs network for EaseMotion CDN styles).
2. Hover each button in the live A/B panel.
3. Read the API notes and decision table.
4. Copy the usage snippets for the class you need.

Example:

```html
<button class="ease-btn ease-btn-primary ease-btn-pill ease-btn-hover">
  Get Started →
</button>

<button class="ease-btn ease-btn-primary ease-btn-pill ease-hover-grow">
  Get Started →
</button>
```

---

## Why is it useful?

- Prevents confused class stacking (`transform` fights itself)
- Teaches naming literacy — rare compared to “add another hover”
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s readable, education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-hover-class-confusion-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo uses existing framework classes for illustration; local chrome uses `hc-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
