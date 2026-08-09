# Fix: Script Directory Execution Portability

Resolves path resolution errors in python scripts (`build-contributor-wall.py`, `validate-masonry.py`) when executed from directories other than the workspace root (e.g. executing from the `scripts/` directory itself).

## What does this do?
- **Dynamic Directory Resolution:** Updates scripts to resolve files relative to the script's own path using `os.path.dirname(os.path.abspath(__file__))` rather than hardcoding static relative paths.