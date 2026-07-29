# Strict File Naming & Linting Architecture

## What does this do?
Proposes a massive structural normalization of the entire repository by aggressively enforcing strict `kebab-case` naming conventions across all `submissions/examples/`, `docs/`, and `components/` folders using an automated CI linting pipeline.

## How is it used?
Maintainers and core contributors must urgently implement an automated pre-commit hook (like Husky) combined with a highly strict linter (like `eslint-plugin-unicorn` or `ls-lint`) that explicitly rejects any pull request containing incorrectly named files or folders.

Currently, the framework suffers from wild architectural inconsistencies:
```text
❌ BAD NAMES (Wild West)
submissions/examples/Button_Styles_V2/
components/EaseMarquee.css
docs/installationGuide.html
```

The GitHub Actions CI pipeline must be configured to physically reject these PRs and force all contributors to strictly use lowercase `kebab-case`:
```text
✅ GOOD NAMES (Strictly Enforced)
submissions/examples/button-styles-v2/
components/ease-marquee.css
docs/installation-guide.html
```

## Why is it useful?
Currently, the `submissions/examples/` and `docs/` folders (spanning 20+ files and directories) mix CamelCase, PascalCase, snake_case, and generic spaces wildly. This massive inconsistency completely destroys the repository's professional open-source structure. When developers clone the repository on different operating systems (like macOS vs Linux), case-sensitive file systems frequently crash when trying to resolve imports for files like `EaseMarquee.css`. 

By aggressively enforcing a strict `kebab-case` naming standard via an automated GitHub Actions CI pipeline or a Husky pre-commit hook, we instantly stabilize the repository's core architecture, permanently prevent cross-OS build crashes, and guarantee that the open-source directory tree remains flawlessly organized and professional no matter how many external contributors submit code.
