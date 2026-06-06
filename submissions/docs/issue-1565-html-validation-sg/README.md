\# Issue 1565: HTML Validation Note



\## What this addresses

This note documents the HTML validation issue reported in `docs/index.html`.



\## Suggested fix

\- Replace invalid `className` attributes with `class` in static HTML files.

\- Correct malformed tags like `<<section` to `<section`.

\- Validate HTML after documentation changes to avoid lint/build failures.



\## Why this is useful

Valid documentation HTML prevents contributor PRs from failing because of unrelated pre-existing markup errors.

