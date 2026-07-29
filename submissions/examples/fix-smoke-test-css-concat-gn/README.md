# Fix: Manual CSS Concatenation Lacks Newlines (#2776)

> ⚠️ **For Maintainer:** This fix requires editing `tests/smoke.test.js`, part of the test infrastructure which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** In `tests/smoke.test.js`, 16 CSS files are concatenated using the `+` operator with no separators:
```js
css = variables + base + animations + utilities + buttons + cards + chip + footer + masonry + navbar + scrollProgress + sidebar + tabs + badges + loaders + tooltips + modals;
```
If any file lacks a trailing newline (e.g. ends with `/* end of component */`), the next file's first rule merges onto the same line — potentially landing inside the previous comment and getting silently dropped by the JSDOM CSS parser.
2. **Proposed fix:** Collect all file contents into an array and join with `"\n"`:
```js
css = [
  variables, base, animations, utilities,
  buttons, cards, chip, footer, masonry, navbar,
  scrollProgress, sidebar, tabs, badges, loaders,
  tooltips, modals
].join("\n");
```
3. **How is it tested?** `demo.html` illustrates the failure mode side-by-side: a file ending without a newline causes the next selector to be swallowed by a trailing comment when concatenated directly, vs. staying on its own line when joined with `"\n"`.
4. **Why is this correct?** `Array.prototype.join("\n")` guarantees a newline boundary between every file regardless of each file's own trailing whitespace, making the test setup robust to future formatting changes in any of the 16 source CSS files — exactly the "guaranteed safe parsing between file boundaries" the issue requests.