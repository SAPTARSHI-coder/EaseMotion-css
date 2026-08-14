# Core Architecture Refactor: Naming Inconsistencies (Issue #1567)

This directory contains the automated refactoring script and stylelint configuration required to resolve **Issue #1567**. 

Because `auto-merge-submissions` prevents contributors from pushing direct modifications to `core/` and `easemotion/` files, the refactor has been packaged into a Python script.

## Files included:
1. `refactor.py` - The automated script that audits and modifies the entire framework to enforce the `ease-kf-*` naming convention and migrate hardcoded timings to `var(--ease-speed-*)`.
2. `style.css` - Contains the proposed `.stylelintrc.json` rules embedded as CSS comments to enforce the new convention going forward.
3. `demo.html` - A demonstration of the new standard API.

## How to Apply
Maintainers should run the following command from the repository root:
```bash
python submissions/examples/fix-issue-1567/refactor.py
```
This will automatically parse the ~2500 lines of CSS and apply the required structural updates.
