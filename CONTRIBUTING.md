# Contributing to EaseMotion CSS

> [!IMPORTANT]
> **Temporary Contribution Guidelines & Freeze Notice**
>
> Due to the high volume of contributions and multiple merge conflicts affecting framework stability, PRs modifying core files, workflows, configs, or shared framework code are temporarily restricted.
>
> For now, only self-contained submissions inside the `submissions/` directory (e.g. `submissions/examples/*` or `submissions/docs/*`) will be reviewed and merged.
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

## Contributing to the Motion Engine

The `easemotion/engine/` directory is the core of the v1.2 engineering architecture. Engine contributions are **architecture-level** and require maintainer approval — but they are the highest-impact work you can do on this project.

### Engine file map

| File | Responsibility |
|------|---------------|
| `easemotion/engine/parser.js` | Tokenize `em=""` strings into typed AST objects |
| `easemotion/engine/compiler.js` | Convert AST → CSS rule strings; manage `className()` hashing |
| `easemotion/engine/runtime.js` | `MutationObserver` browser runtime; CSS injection |
| `easemotion/engine/optimizer.js` | Build-time tree-shaker for unused `@keyframes` / classes |
| `easemotion/index.js` | Public entry point re-exporting all engine APIs |

### Adding a new animation to the engine

1. Ensure the `@keyframes` rule exists in `core/animations.css` with a `ease-kf-<name>` identifier.
2. Add the animation name to `ANIMATION_NAMES` in `parser.js`.
3. Add the `ease-kf-<name>` mapping to `KEYFRAME_MAP` in `compiler.js`.
4. Write a unit test in `tests/engine.test.js` verifying the parse and compile output.
5. Submit a PR — engine contributions go in `submissions/docs/engine-<name>/` with:
   - `demo.html` (showing `em="<name>"` usage)
   - `README.md` (documenting the animation tokens)

### Running engine tests

```bash
npm test                   # run all 61 tests once
npm run test:watch         # vitest in interactive watch mode
```

All engine tests live in `tests/engine.test.js`. They test the parser, compiler, and optimizer in isolation with no DOM dependency (Node.js only).

---

## Where to Contribute

EaseMotion CSS has four distinct contribution subdirectories depending on your chosen track. Your Pull Request **must only** add files inside one of these subdirectories:

| Track | Directory Path | Required Files | Target Issues | Validator Bot |
|---|---|---|---|---|
| **Standard (HTML/CSS)** | `submissions/examples/your-feature/` | `demo.html`<br>`style.css`<br>`README.md` | General feature requests, animations, utility additions | `PR Submission Validator` |
| **React Integration** | `submissions/react/your-component/` | `YourComponent.jsx`<br>`README.md`<br>*(optional: `style.css`)* | Issues labeled `react` | `React & SCSS Submission Validator` |
| **SCSS Integration** | `submissions/scss/your-mixin/` | `_your-mixin.scss`<br>`README.md` | Issues labeled `scss` | `React & SCSS Submission Validator` |
| **Core & Docs Showcase** | `submissions/docs/your-feature/` | `demo.html`<br>`style.css`<br>`README.md` | Core framework bug fixes & documentation showcases | `PR Submission Validator` |

> [!IMPORTANT]
> **Strict Directory Structure Required**
> The `submissions/` folder strictly contains only **4 subdirectories**: `examples/`, `react/`, `scss/`, and `docs/`. **Never add or create feature folders directly in the root of `submissions/`** (e.g. `submissions/your-feature/`). Any Pull Request adding files directly under `submissions/` root will be automatically closed as invalid by our validation bots.

### 📢 Contribution Rate Limit Update

To maintain repository stability, review quality, and fair contribution distribution, EaseMotion CSS enforces a soft daily rate limit:

- Contributors may submit up to **150 PRs per day**
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

All contributions are welcome and eligible for merge when submitted inside the `submissions/` folder following the repository structure and guidelines.

To avoid naming conflicts and overlapping components, contributors must append a short unique identifier or abbreviation to their feature/component/mixin name.

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

Select your contribution track below to see exactly what files to include:

### 1. Standard Track (HTML/CSS)
Your submission folder under `submissions/examples/` or `submissions/docs/` must contain exactly three files:
*   **`demo.html`**: A self-contained HTML demo. Must work by opening directly in a browser with no server, CDNs, or external frameworks.
*   **`style.css`**: Your raw CSS. Write it however you like (no need to use `ease-` naming; the maintainer standardizes it).
*   **`README.md`**: Must answer three questions:
    1. What does this do? (one sentence)
    2. How is it used? (show the HTML class usage)
    3. Why is it useful? (explain how it fits EaseMotion's philosophy)

### 2. React Track
Your submission folder under `submissions/react/` must contain:
*   **React component file (`.jsx` or `.tsx`)**: A real, working React component file containing your UI component. The component **must use EaseMotion CSS utility classes** (e.g. `className="ease-fade-in ease-hover-lift"`).
*   **`README.md`**: Documentation containing a description of the component, a properties table (props reference), and a clear usage example block.
*   **`style.css`** (optional): Any supplementary CSS styles scoped to this component.

### 3. SCSS Track
Your submission folder under `submissions/scss/` must contain:
*   **SCSS partial file (`_your-mixin.scss`)**: A stylesheet partial containing your reusable mixin, variables, or functions. The SCSS should build upon EaseMotion's token variables or animation keyframes.
*   **`README.md`**: Documentation explaining what the mixin does, listing its parameters, and providing an example of how to use it with `@include`.

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
- Create feature folders directly under submissions/ (e.g. submissions/your-feature/)
- Edit any existing file in core/ or components/
- Modify existing root docs/ or examples/
- Merge your own pull request
```

### ✅ Always do these

```
- Place your feature inside one of the 4 allowed subdirectories: submissions/examples/, submissions/react/, submissions/scss/, or submissions/docs/
- Include all required files for your chosen track (e.g. demo.html, style.css, README.md)
- Keep one PR focused on one feature/component/mixin
- Fill out the PR template checklist completely
```

---

## Opening an Issue First

For any non-trivial feature, **open a GitHub issue before coding**. Use the Feature Request template. This lets you confirm the idea fits EaseMotion CSS before investing time in the code.

→ [Open a Feature Request](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=feature_request.md)

Small fixes (documentation typos, broken demo links) can go directly to a PR.

---

## 🕑 Issue Cooldown Rule

**Maximum 25 active assigned issues per contributor at any time.**

This rule exists to keep assignments fair and ensure active contributors can always pick up work.

### What this means

```
✅ You have 0–24 active assignments → request a new issue freely
✅ You have 25 active assignments  → finish or unassign one first
❌ You have 25+ active assignments → new assignment requests will be declined
```

### Inactivity

If an assigned issue has **no progress for 24 hours (1 day)**, the maintainer will unassign it and open it for others.

> This rule is enforced by the maintainer. It is not personal — it keeps the project healthy for everyone.

---

## Pull Request Process

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Add your files** inside the `submissions/` directory (e.g., `submissions/examples/your-feature-name/` or `submissions/docs/your-feature-name/`)
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

## Local Build & Verification

If you are a maintainer or are contributing core framework modifications/documentation showcases, you must ensure that the minified build file (\`easemotion.min.css\`) is kept in sync with the source styles.

We provide several local scripts to build and verify your changes:

*   **Build the CSS bundle:**
    \`\`\`bash
    npm run build
    \`\`\`
    This bundles all imports in \`easemotion.css\` into a single minified \`easemotion.min.css\` file.
*   **Watch and build automatically:**
    \`\`\`bash
    npm run build:watch
    \`\`\`
    This watches core framework files and directories for modifications and automatically rebuilds the minified CSS on every change.
*   **Lint CSS files:**
    \`\`\`bash
    npm run lint:css
    \`\`\`
    This runs Stylelint on the stylesheet directory to verify compliance with naming and styling rules.

### CI Verification Check

Our continuous integration pipeline validates that the committed \`easemotion.min.css\` file matches the generated bundle exactly. If you modify any core files, remember to run \`npm run build\` and commit the updated \`easemotion.min.css\` file in your pull request, otherwise the CI build will fail.

---

## 🔒 Core Protection Philosophy

EaseMotion CSS follows a strict **submission-first** pipeline. No PR should ever modify `core/` or `components/` directly.

```
PR submitted
    ↓
submissions/ (contributor writes raw CSS here)
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
