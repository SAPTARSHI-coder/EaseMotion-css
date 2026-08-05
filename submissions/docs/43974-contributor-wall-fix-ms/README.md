# Contributor Wall Builder Input Validation Fix

Resolves #43974.

### What does this do?
Fixes the missing input validation in the `scripts/build-contributor-wall.py` script and introduces `html.escape()` for contributor usernames to prevent XSS injection in the generated `README.md`.

### How is it used?
The fixed script is provided in this directory. The maintainer can safely copy `build-contributor-wall.py` over the vulnerable script located in `scripts/build-contributor-wall.py`.

### Why is it useful?
If the GitHub API rate limits the contributors endpoint (or if there's a temporary API failure), the previous script would silently truncate the wall to however many results it got, without alerting maintainers. The new validation step emits an explicit warning to STDERR if the count does not match the expected 551 contributors.
