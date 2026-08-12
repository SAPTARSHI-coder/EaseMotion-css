# Contributor Wall — UI Demo

1. **What does this do?**
   A dark-themed contributor wall page showing top contributors in a gold/silver/bronze podium, with a responsive grid of all contributors below. Designed to be auto-populated via GitHub Actions in production.

2. **Structure**
   - Header with live stats (contributors, PRs merged, issues closed)
   - Top 3 podium with rank badges and glow effects
   - Responsive contributor grid with hover lift animations
   - Footer with auto-sync note

3. **How it connects to the GitHub Actions feature**
   In production, the GitHub Actions workflow would:
   - Fetch contributor data from the GitHub API
   - Regenerate `contributors.json` or inject directly into this HTML
   - Commit and push the updated file on every PR merge

   This submission provides the complete UI layer — the maintainer wires up the Actions workflow.

4. **Why it fits EaseMotion CSS?**
   Animation-first — hover lifts, glow borders, gradient text are all CSS-driven. Dark theme with design tokens throughout. Composable card structure matches EaseMotion's philosophy.

5. **Usage**
   Open `demo.html` directly in any browser — no server needed. Contributor data is populated via inline JS array (placeholder for GitHub API response in production).
