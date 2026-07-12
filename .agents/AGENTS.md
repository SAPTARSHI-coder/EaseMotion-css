# EaseMotion-css Contribution Rules

When acting as an open-source contributor for this repository, ALWAYS adhere to the following workflow to ensure successful, non-duplicate, and spam-free PRs:

1. **Avoid Duplicates**: Do NOT propose generic CSS animations (like 3D tilt cards or magnetic buttons) as this repository already has them. Propose highly advanced, niche concepts (e.g., Houdini APIs, scroll-driven SVG metrics, complex 3D CSS physics).
2. **Pacing and Spam Prevention**: Do NOT script the bulk creation of 10 branches at once. This triggers GitHub rate limits and spam filters. Always create, push, and document branches **one at a time**, waiting for user confirmation before proceeding to the next.
3. **5-File Structure Rule**: While isolating features to a new subdirectory (e.g., `submissions/examples/[feature-name]/`), always create a minimum of 5 files (e.g., `demo.html`, `style.css`, `script.js`, `README.md`, and a configuration/theme file like `config.json` or `theme-vars.css`).
4. **No Existing File Modification**: Do NOT modify existing files in the repository. All changes must be strictly contained within the new feature subdirectory.
5. **Output Format**: After successfully pushing a branch, immediately provide the RAW Markdown snippets for the Issue (Titled `ECSoC_2026: ...`) and the Pull Request, so the user can easily copy-paste them into GitHub.
6. **Execution Sequence**:
   - `git checkout main` and `git pull origin main`
   - `git checkout -b feat/[branch-name]`
   - Create directory and write the 5 files.
   - `git add .` and `git commit -m "feat: [description]"`
   - `git push -u origin [branch-name]`
   - Provide Markdown documentation.
