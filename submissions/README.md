# Submissions

**This is the only place where community contributions belong.**

All PRs that modify `core/` or `components/` will be **closed without review**. Not negotiable.

---

## 📦 Submission Structure

Create a folder inside `submissions/examples/` named after your feature:

```
submissions/examples/your-feature-name/
├── demo.html       ← self-contained working demo (required)
├── style.css       ← your raw CSS (required)
└── README.md       ← description: what, how, why (required)
```

All three files are required. Missing any one of them will result in the PR being asked to revise.

---

## 📢 Contribution Policy Update

All contributions are welcome and eligible for merge when submitted inside the `submissions/examples/` folder following the repository structure and guidelines.

To avoid naming conflicts and overlapping components, contributors must append a short unique identifier or abbreviation to their feature/component name.

**Example:**
*   `ease-hover-sap`
*   `ease-tabs-ak`
*   `ease-card-pr`

This ensures:
*   Unambiguous component naming,
*   Preservation of every contributor’s work,
*   Conflict-free merges,
*   Easier maintenance and review workflow,
*   Support for parallel implementations of similar ideas.

The project encourages creative variations and parallel implementations rather than overwriting existing contributor work.

---

## Step-by-Step Workflow

1. Pick one approved issue or one small effect idea.
2. Create a kebab-case folder name that describes the idea clearly.
3. Add only these three files inside that folder: `demo.html`, `style.css`, and `README.md`.
4. Open `demo.html` directly in your browser and make sure the effect works without a local server.
5. Check that your demo uses local `style.css` only. Do not add CDN links, framework imports, remote fonts, or build-tool output.
6. Keep the PR focused on the new submission folder. Do not edit `core/`, `components/`, `docs/`, or unrelated examples.
7. In the PR body, link the issue and briefly explain how the demo should be reviewed.

Example path:

```text
submissions/examples/focus-ring-button/
├── demo.html
├── style.css
└── README.md
```

---

## What Each File Should Contain

### `demo.html`

- Must be **self-contained** — open it directly in a browser, no server needed
- No CDN links, no external JS frameworks
- Show the effect clearly on at least one element

### `style.css`

- Write your raw CSS however feels natural
- **Do NOT use the `ease-` prefix** — the maintainer handles all naming standardization
- Use any class names that communicate intent clearly to you
- Comments are optional but appreciated

### `README.md`

Answer exactly three questions:

```
1. What does this do?     (one sentence)
2. How is it used?        (show the HTML class applied to an element)
3. Why is it useful?      (how does it fit EaseMotion CSS's philosophy?)
```

---

## What Makes a Good Submission

- The effect is easy to understand within a few seconds.
- The HTML is small, semantic, and readable.
- The CSS is scoped to the demo and does not rely on global framework files.
- Class names describe behavior clearly, even if the maintainer later renames them.
- The demo shows default, hover, focus, or reduced-motion behavior when relevant.
- The README explains the value of the idea instead of repeating the code line by line.

## What Gets Rejected

- Missing one of the three required files.
- Editing framework source such as `core/`, `components/`, or existing examples.
- Submitting generated build output, minified code, screenshots, or large binary files.
- Using external libraries, CDN scripts, remote fonts, or framework-specific markup.
- Combining multiple unrelated effects in one PR.
- Copying another contributor's pending submission.
- Using `ease-` class names as if the utility is already part of the framework.

---

## Naming Rules

| Who | Rule |
|-----|------|
| **You (contributor)** | Use any class name that feels readable |
| **Maintainer** | Renames everything to `ease-kebab-case` before merging |

**You do not need to use `ease-` naming.** Write `.hover-glow`, `.card-lift`, `.shimmer-btn` — whatever communicates the behavior. The maintainer will standardize it.

---

## The Pipeline

Here is exactly what happens after you open a PR:

```
You                                  Maintainer
─────────────────────────────────    ─────────────────────────────────────
Add folder to submissions/examples/  Reviews your demo.html in a browser
Submit PR                            Evaluates fit with EaseMotion CSS philosophy
                                     If accepted:
                                       ↳ Renames classes to ease-*
                                       ↳ Replaces hard-coded values with
                                         CSS variables (--ease-color-*, etc.)
                                       ↳ Adds to core/ or components/
                                       ↳ Merges the PR + credits in commit
```

Your submission folder **stays in submissions/examples/** permanently as a record of the original idea.

---

## Real Integration Example

The submission in `submissions/examples/hover-grow/` was reviewed and integrated:

| Original (your CSS) | Standardized (EaseMotion CSS) |
|---------------------|------------------------|
| `.hover-grow-card` | `.ease-hover-grow` |
| `transform: scale(1.06)` | Same value, unchanged |
| Hard-coded `300ms` | `var(--ease-speed-medium)` |
| Hard-coded `cubic-bezier(...)` | `var(--ease-ease-bounce)` |

The class now lives in `core/animations.css` tagged `[INTEGRATED]`.

---

## Well-Structured Submission Example

```html
<!-- submissions/examples/focus-ring-button/demo.html -->
<link rel="stylesheet" href="./style.css">

<button class="focus-ring-button">
  Save changes
</button>
```

```css
/* submissions/examples/focus-ring-button/style.css */
.focus-ring-button {
  border: 0;
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  background: #6c63ff;
  color: white;
}

.focus-ring-button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 4px;
}
```

```markdown
# Focus Ring Button

1. What does this do? Adds a clear keyboard focus ring to a button.
2. How is it used? Apply `.focus-ring-button` to a button element.
3. Why is it useful? It improves keyboard navigation while staying readable.
```

This is enough for review: one small behavior, one local stylesheet, and one short explanation.

---

## Rules Summary

| Rule | Detail |
|------|--------|
| ✅ Add folder to `submissions/examples/` | One folder per feature |
| ✅ Include all three required files | `demo.html`, `style.css`, `README.md` |
| ✅ One feature per PR | Focused, reviewable |
| ❌ Do NOT use `ease-` prefix in your CSS | Maintainer handles naming |
| ❌ Do NOT edit `core/` | PR will be closed |
| ❌ Do NOT edit `components/` | PR will be closed |
| ❌ Do NOT merge your own PR | Maintainer-only |

---

## Before You Code

Open a **Feature Request** issue first to confirm the idea fits EaseMotion CSS. This saves you from building something that gets rejected. Small additions (a new animation, a hover effect) rarely need pre-approval. New component systems should be discussed first.

→ [Open a Feature Request](../../issues/new?template=feature_request.md)

## Getting Started

This library provides simple CSS-based animations that can be applied using utility classes.

---

### Installation

```bash
npm install ease-motion-css
```