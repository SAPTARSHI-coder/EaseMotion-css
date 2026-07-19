# Conventional Commits + Squash Message Builder

A documentation tool that lets contributors pick a commit type (`feat` / `fix` / `docs`) and a submission track, then generate **one** ready-to-use squash commit message — plus tips that discourage pushing many micro-commits.

> Submission track: `submissions/docs/ease-commit-squash-helper-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46193](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46193)

---

## What does this do?

EaseMotion asks contributors to squash commits and use Conventional Commits. Beginners still open PRs with 10–20 noisy micro-commits. This builder turns **type + track + summary** into a single squash-friendly message.

Example output:

```text
docs(submissions/docs, freeze-map): add freeze boundary visual map

Refs #46192
```

---

## How is it used?

1. Open `demo.html` in a browser (no build step).
2. Pick a type and track.
3. Optional: scope slug + issue number.
4. Copy the generated squash message.
5. Read the “don’t push 20 micro-commits” tips.

---

## Why is it useful?

- Targets commit hygiene (README / CONTRIBUTING squash rule)
- Different from a folder-name helper or claim simulator
- Freeze-safe: only new files under `submissions/docs/`
- Helps GSSoC contributors keep PR history reviewable

---

## Folder structure

```text
submissions/docs/ease-commit-squash-helper-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Local chrome uses `ch-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
