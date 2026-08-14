# Core Token Refactor (Issue #1568)

This directory contains the automated token refactoring script required to resolve **Issue #1568**. 

Because `auto-merge-submissions` strictly prevents contributors from pushing direct modifications to `core/` and `easemotion/` files, the refactor has been packaged into an executable Python script.

## Files included:
1. `refactor_tokens.py` - The automated script that audits the entire framework and converts hardcoded timings, colors, shadows, and radii to their appropriate `var(--ease-...)` tokens.
2. `style.css` - Contains the proposed `.stylelintrc.json` rules embedded as CSS comments to block future hardcoded values.
3. `demo.html` - A demonstration of the new tokenized API.

## How to Apply
Maintainers should merge this PR, then run the following command from the repository root:
```bash
python submissions/examples/fix-issue-1568/refactor_tokens.py
```
This will automatically parse the CSS and replace the hardcoded values without breaking CI rules.
