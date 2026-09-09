## Frequently Asked Questions (FAQ)

### 1. Why was my Pull Request automatically closed?
EaseMotion CSS uses an automated validator to ensure high quality and prevent core framework breakages. If your PR was automatically closed, it usually means:
- You modified a file outside of the `submissions/examples/` directory (such as in `core/`, `components/`, or `scripts/`).
- Your submission folder is missing one of the required files (`demo.html`, `style.css`, or `README.md`).
- Your `demo.html` lacks proper HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).

### 2. Can I directly modify `core/` or `components/` if I'm fixing a bug?
**No.** Direct modifications to core files are temporarily restricted to prevent merge conflicts and regressions. If you need to submit a bug fix for a core file, you should submit the fixed code as a new example folder inside `submissions/examples/` and leave a note for the maintainer to manually integrate it.

### 3. I'm adding a new feature. Do I need to name my classes using the `ease-` prefix?
**No.** Contributors are free to write their raw CSS using any class names they prefer. The maintainer will handle all standardizing and renaming to the `ease-kebab-case` convention when merging your work into the core.

### 4. What exactly must my submission folder contain?
Your folder (e.g., `submissions/examples/my-cool-feature/`) must contain **exactly** these three files:
- `demo.html` (Must open directly in a browser)
- `style.css` (Your custom CSS rules)
- `README.md` (Explaining what it does, how to use it, and why it's useful)

### 5. Why do I need to append my initials to my feature name?
To avoid naming conflicts between the hundreds of contributors, we require you to append a unique identifier (like your initials) to the component name (e.g., `ease-hover-xyz`). This ensures your work is preserved and parallel implementations are possible without overwriting others' work.
