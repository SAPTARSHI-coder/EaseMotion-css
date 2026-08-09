# Freeze Boundary Visual Map (What PRs May Touch)

An interactive documentation map that shows a clickable repo tree where **`core/`**, **`components/`**, and **workflows/configs** are **blocked**, while **`submissions/{examples,react,scss,docs}`** are **OK** — tied to the temporary freeze notice and issue [#13244](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/13244).

> Submission track: `submissions/docs/ease-freeze-boundary-map-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46192](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46192)

---

## What does this do?

During the contribution freeze, many GSSoC beginners still PR against frozen paths and get closed without review. This map is **policy UX** — not a PR checklist generator — so contributors can answer “what may I touch?” in seconds.

| Zone | Paths | Status |
|------|-------|--------|
| Blocked | `core/`, `components/`, `.github/workflows/`, configs, engine, live `docs/` | Do not edit |
| OK | `submissions/examples/`, `react/`, `scss/`, `docs/` | Add your folder here |

---

## How is it used?

1. Open `demo.html` in a browser (no build step, no CDN required).
2. Expand / click folders in the tree.
3. Read the reason panel and the “put your work here” path.
4. Follow the allowed-track cards for required files.

Example safe path:

```text
submissions/docs/your-feature/
├── demo.html
├── style.css
└── README.md
```

---

## Why is it useful?

- Makes the freeze boundary obvious for GSSoC onboarding
- Links to the freeze notice and integrity policy #13244
- Freeze-safe: only new files under `submissions/docs/`
- Different from claim simulators or checklist bots — visual policy map

---

## Folder structure

```text
submissions/docs/ease-freeze-boundary-map-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Local chrome uses `fb-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
