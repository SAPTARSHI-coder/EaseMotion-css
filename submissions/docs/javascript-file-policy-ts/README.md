# JavaScript File Policy

1. What does this do? Clarifies that standard EaseMotion CSS submissions should include only `demo.html`, `style.css`, and `README.md`.
2. How is it used? Review the policy demo and keep JavaScript out of new submission folders unless a maintainer explicitly requests it.
3. Why is it useful? It prevents confusion around extra `script.js` files and keeps submissions aligned with the repository validator.

## Submission Rule

Use this structure for normal CSS examples:

```text
submissions/examples/your-feature-name/
|-- demo.html
|-- style.css
`-- README.md
```

Do not add `script.js`, generated assets, screenshots, nested folders, or build output by default. If an issue specifically asks for JavaScript, mention that exception in the PR notes so the maintainer can review it intentionally.
