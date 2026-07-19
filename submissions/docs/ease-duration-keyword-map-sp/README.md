# Duration Keyword Mapper

An interactive documentation tool that maps duration keywords (`fast` / `medium` / `slow`) and class helpers (`ease-duration-*`) to the matching CSS tokens (`--ease-speed-*` → **150ms / 300ms / 600ms**), with a live button + fade preview.

> Submission track: `submissions/docs/ease-duration-keyword-map-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46187](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46187)

---

## What does this do?

EaseMotion documents duration in three places — Animate props, utility classes, and design tokens. Beginners often treat them as separate APIs. This bridge tool shows they are one timing system:

| Keyword | Class | Token | ms |
|---------|-------|-------|----|
| `fast` | `ease-duration-fast` | `--ease-speed-fast` | 150 |
| `medium` | `ease-duration-medium` | `--ease-speed-medium` | 300 |
| `slow` | `ease-duration-slow` | `--ease-speed-slow` | 600 |

---

## How is it used?

1. Open `demo.html` in a browser (network needed for EaseMotion CDN).
2. Pick **fast / medium / slow**.
3. Watch the live API bridge, mapping table, and preview update.
4. Click **Replay motion** or **Cycle next keyword**.
5. Copy HTML / CSS / Animate snippets for the selected duration.

Example:

```html
<div class="ease-slide-up ease-duration-fast">Timed entrance</div>
```

```jsx
<Animate type="fade-in" duration="fast">…</Animate>
```

---

## Why is it useful?

- Bridges README sections that document duration APIs separately
- Stops guessing milliseconds for keywords
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s readable, education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-duration-keyword-map-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo uses existing duration utilities for illustration; local chrome uses `dk-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
