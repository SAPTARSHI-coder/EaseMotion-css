# Contributing to EaseMotion CSS

> [!IMPORTANT]
> **Temporary Contribution Guidelines & Freeze Notice**
>
> Due to the high volume of contributions and multiple merge conflicts affecting framework stability, PRs modifying core files, workflows, configs, or shared framework code are temporarily restricted.
>
> For now, only self-contained submissions inside `submissions/examples/*` will be reviewed and merged.
>
> This is being done to stabilize the repository, reduce breaking changes, and ensure contributor work is preserved without conflicts or accidental overwrites.
>
> Core contribution access may reopen once the framework structure and validation systems are fully stabilized.

Thank you for your interest in improving EaseMotion CSS.

> [!TIP]
> **Join our optional Discord Community!**  
> We have an official Discord server for EaseMotion CSS. Joining is completely optional; feel free to join us to chat with other contributors, seek help with your submissions, discuss design choices, and receive announcements: [Join the EaseMotion CSS Discord](https://discord.gg/hWSdGrccBU)

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

### 📢 Contribution Rate Limit Update

To maintain repository stability, review quality, and fair contribution distribution, EaseMotion CSS enforces a soft daily rate limit:

- Contributors may submit up to **70 PRs per day**
- Focus on quality, originality, accessibility, and proper testing
- Low-effort, repetitive, or mass-generated PRs may be closed without review

#### Why This Change?

EaseMotion CSS has grown rapidly with hundreds of contributors and thousands of merged PRs. This update helps:

- Reduce merge conflicts
- Improve review quality
- Maintain framework consistency
- Encourage meaningful contributions over quantity

### 🧹 Clean Commit History & Squashing

To keep the repository's git history clean and readable, contributors must follow these rules:

- **Squash your commits:** Ensure all commits in your Pull Request are squashed into a single meaningful commit (or a few logical commits) before submitting for review. Do not push dozens of micro-commits (e.g., "fix", "typo", "update style.css", etc.) for a single change.
- **Keep history clean:** PRs containing noisy, repetitive, or excessive commit histories (e.g., dozens of micro-commits) may be closed without review or blocked from merging.
- **Write clear commit messages:** Use descriptive commit messages following the Conventional Commits format (e.g., `feat: add card component` or `fix: resolve hover animation issue`).

---

### 📢 Contribution Policy Update

All contributions are welcome and eligible for merge when submitted inside the `submissions/examples/` folder following the repository structure and guidelines.

To avoid naming conflicts and overlapping components, contributors must append a short unique identifier or abbreviation to their feature/component name.

**Example:**

- `ease-hover-sap`
- `ease-tabs-ak`
- `ease-card-pr`

This ensures:

- Unambiguous component naming,
- Preservation of every contributor’s work,
- Conflict-free merges,
- Easier maintenance and review workflow,
- Support for parallel implementations of similar ideas.

The project encourages creative variations and parallel implementations rather than overwriting existing contributor work.

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

| Who              | Rule                                                      |
| ---------------- | --------------------------------------------------------- |
| **Contributors** | Use any class name that makes sense to you                |
| **Maintainer**   | Renames everything to follow `ease-kebab-case` convention |

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

## 🕑 Issue Cooldown Rule

**Maximum 2 active assigned issues per contributor at any time.**

This rule exists to keep assignments fair and ensure active contributors can always pick up work.

### What this means

```
✅ You have 0–1 active assignments → request a new issue freely
✅ You have 2 active assignments  → finish or unassign one first
❌ You have 2+ active assignments → new assignment requests will be declined
```

### Inactivity

If an assigned issue has **no progress for 24 hours (1 day)**, the maintainer will unassign it and open it for others.

> This rule is enforced by the maintainer. It is not personal — it keeps the project healthy for everyone.

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

## 🔒 Core Protection Philosophy

EaseMotion CSS follows a strict **submission-first** pipeline. No PR should ever modify `core/` or `components/` directly.

```
PR submitted
    ↓
submissions/examples/ (contributor writes raw CSS here)
    ↓
Maintainer tests it
    ↓
Maintainer standardizes to ease-* naming
    ↓
Maintainer promotes to core/ or components/
    ↓
PR merged
```

This ensures:

- **Every class is framework-quality** before it ships
- **Naming stays consistent** across the entire API
- **No regressions** from unreviewed direct edits

PRs that touch `core/` or `components/` will be closed immediately, regardless of quality.

---

## 🏷️ Labels System

The maintainer uses the following labels to communicate submission status:

| Label                 | Meaning                                            |
| --------------------- | -------------------------------------------------- |
| `curated`             | Submission accepted into the framework             |
| `maintainer-approved` | Reviewed and approved, pending integration         |
| `featured`            | Exceptional submission — will be showcased in docs |
| `good first issue`    | Great starting point for new contributors          |
| `animation`           | Hover effects, entrance animations, keyframes      |
| `component`           | New UI components                                  |
| `enhancement`         | Improvements to existing classes                   |
| `documentation`       | README, docs, submission guide updates             |

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
