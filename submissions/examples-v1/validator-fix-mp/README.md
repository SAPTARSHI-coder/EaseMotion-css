# validator-fix-mp

## 1. What does this do?
Adds a regression test that catches the whitespace-corrupted `README.md` key bug in the submission validator — a bug where an embedded newline and spaces inside the key caused valid three-file submissions to be falsely reported as missing their documentation file.

## 2. How is it used?

This is a CI/workflow regression fixture, not a CSS class. The bug lived in `.github/workflows/submission-validator.yml` (commit before `39577b2c`):

**Broken (before fix):**
```js
const requiredFiles = {
  'demo.html': 'Interactive demo showcasing your feature',
  'style.css': 'CSS styles for the demo',
  'README.md
  
  ': 'Documentation and usage guide'   // ← embedded \n + whitespace in key
};
```

**Fixed (current `main`, commit `39577b2c`):**
```js
const requiredFiles = {
  'demo.html': 'Interactive demo showcasing your feature',
  'style.css': 'CSS styles for the demo',
  'README.md': 'Documentation and usage guide'   // ← clean literal
};
```

The regression test to add in `tests/smoke.test.js`:
```js
it('requiredFiles keys must be exact literals with no whitespace', () => {
  const src = readFileSync(
    resolve(__dirname, '../.github/workflows/submission-validator.yml'),
    'utf8'
  );
  // The README.md key must appear as a clean quoted literal, not a template literal
  // or multiline string with embedded newlines/spaces
  expect(src).toMatch(/'README\.md'\s*:/);
  expect(src).not.toMatch(/`README\.md[\s\S]*?`\s*:/);
});
```

## 3. Why is it useful?
The validator is the automated gate every contributor's PR passes through. When the `README.md` key was corrupted, `path.join(folder, key)` built an unresolvable path and valid submissions failed — unfairly blocking GSSoC contributors who had followed the guidelines correctly. The fix is a one-line change, but without a regression test the same YAML authoring mistake can silently reintroduce itself. This submission documents the bug history and provides the test coverage that prevents recurrence, directly strengthening EaseMotion CSS's CI reliability.
