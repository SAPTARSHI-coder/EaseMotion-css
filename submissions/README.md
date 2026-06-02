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
