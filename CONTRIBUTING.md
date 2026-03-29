# Contributing to EaseMotion CSS

Thank you for your interest in improving EaseMotion CSS.

Before writing any code, read this document in full. The contribution model is intentionally different from most open-source projects.

EaseMotion CSS is designed and curated by **Saptarshi Sadhu**. All contributions are reviewed, standardized, and approved by the maintainer before becoming part of the framework.

---

## The Contribution Model

EaseMotion CSS is **curated**. Contributors do not directly modify the framework source. Instead:

```
Contributor                          Maintainer
─────────────────────────────────    ─────────────────────────────────────
Submits a raw HTML + CSS demo        Reviews the submission
inside submissions/examples/         Decides if it fits EaseMotion CSS
                                     Standardizes class naming to ease-*
                                     Optimizes the CSS
                                     Integrates into core/ or components/
                                     Merges the PR
```

This model exists to maintain quality, naming consistency, and design coherence across the framework.

---

## Where to Contribute

**One place only:**

```
submissions/examples/your-feature-name/
```

That is the only directory you should add or modify in your PR.

---

## What to Submit

Your submission folder must contain exactly three files:

### `demo.html` (required)

A self-contained HTML demo. Must work by opening directly in a browser with no server. No CDN links, no external frameworks.

### `style.css` (required)

Your raw CSS. Write it however you like — no need to follow the `ease-` naming convention. The maintainer handles all renaming and standardization.

### `README.md` (required)

Answer these three questions:

1. **What does this do?** — one sentence.
2. **How is it used?** — show the HTML class usage.
3. **Why is it useful?** — explain how it fits EaseMotion CSS's philosophy.

---

## Naming Rules

| Who | Rule |
|-----|------|
| **Contributors** | Use any class name that makes sense to you |
| **Maintainer** | Renames everything to follow `ease-kebab-case` convention |

You do not need to worry about the `ease-` prefix. Do not try to pre-standardize — just write clear, readable CSS.

---

## Strict Rules

These rules are enforced at PR review. Violations result in immediate close without feedback.

### ❌ Never do these

```
- Edit any file in core/
- Edit any file in components/
- Modify docs/
- Modify examples/
- Merge your own pull request
```

### ✅ Always do these

```
- Add your feature inside submissions/examples/your-feature-name/
- Include all three required files (demo.html, style.css, README.md)
- Keep one PR focused on one feature
- Fill out the PR template checklist completely
```

---

## Opening an Issue First

For any non-trivial feature, **open a GitHub issue before coding**. Use the Feature Request template. This lets you confirm the idea fits EaseMotion CSS before investing time in the code.

Small fixes (documentation typos, broken demo links) can go directly to a PR.

---

## Pull Request Process

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Add your files** inside `submissions/examples/your-feature-name/`
4. **Push** your branch and open a PR against `main`
5. **Fill out** the PR template — every checkbox must be addressed
6. **Wait** for maintainer review. Do not ping or bump. Reviews happen on a rolling basis.
7. The maintainer will either:
   - **Request changes** — update your submission accordingly
   - **Accept** — the maintainer integrates the code and merges the PR
   - **Close** — the idea doesn't fit; the issue will explain why

> **Reminder: Only Saptarshi Sadhu merges pull requests.**  
> Do not self-merge, even if you have repository write access.

---

## 🔒 Maintainer Control

EaseMotion CSS follows a curated contribution model. The final authority on all decisions rests with the maintainer.

**All contributions are:**

- **Reviewed** — every submission is evaluated for fit with the EaseMotion CSS philosophy
- **Renamed** — classes are standardized to the `ease-*` naming convention
- **Standardized** — hard-coded values are replaced with CSS custom properties
- **Approved** — nothing enters the framework without explicit maintainer acceptance

**Final authority: Saptarshi Sadhu**

This is not a democratic framework. The maintainer makes the final call on what enters EaseMotion CSS, how it is named, and when it ships. This is by design — consistency and quality require a single, accountable decision-maker.

```
Pull requests modifying core/ or components/ directly
will be closed without review, regardless of quality.
```

If you disagree with a decision, open an issue to discuss it. PRs are not the place for debate.

---

## Reporting Bugs

Open a GitHub issue with:

- The class name(s) involved
- Expected vs. actual behavior
- Browser name and version
- Operating system
- A minimal HTML snippet that reproduces the bug

---

## Code of Conduct

Feedback is technical and direct. Be respectful of other contributors and the maintainer's time. Submissions of all skill levels are welcome.

---

## 🌐 Official Maintainer

**Saptarshi Sadhu**  
GitHub: [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)
