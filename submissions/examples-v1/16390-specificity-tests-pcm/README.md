# CSS Specificity Layer Tests

1. **What does this do?** Provides a visual test suite and JSDOM test specification for verifying CSS cascade layer ordering — confirming that utilities override components, components override base, unlayered user styles override all layers, and `!important` is only used where justified (utility overrides and reduced-motion).

2. **How is it used?** Open `demo.html` to visually verify all specificity tests pass. For automated testing, create `tests/specificity.test.js` using JSDOM to create elements with conflicting classes, load the bundled CSS, and use `getComputedStyle` to verify the winning value:

```js
// tests/specificity.test.js
const { JSDOM } = require("jsdom");
const fs = require("fs");
const css = fs.readFileSync("dist/easemotion.css", "utf8");

test("utilities override components", () => {
  const dom = new JSDOM('<!DOCTYPE html><div class="card bg-override"></div>', {
    runScripts: "dangerously",
  });
  const style = dom.window.document.createElement("style");
  style.textContent = css;
  dom.window.document.head.appendChild(style);
  const el = dom.window.document.querySelector(".card");
  const bg = dom.window.getComputedStyle(el).background;
  expect(bg).toContain("rgb(34, 197, 94)"); // green from utilities layer
});
```

3. **Why is it useful?** EaseMotion uses `@layer` cascade layers for specificity management, but there are **no tests verifying** that utility classes correctly override component styles. Contributors could accidentally break the intended hierarchy by putting CSS in the wrong layer. These tests catch regressions before merge, ensuring the layer contract (reset → base → components → utilities → animations) is preserved.

### Test Cases

| Test                          | Assertion                                           |
| ----------------------------- | --------------------------------------------------- |
| Utilities override components | `.bg-override` beats `.card` background             |
| Components override base      | Component `color` beats base `color`                |
| Unlayered wins over all       | Styles outside `@layer` beat any layered style      |
| `!important` audit            | Only used in reduced-motion and justified utilities |
| Same-specificity tie-break    | Layer order decides when specificity is equal       |
| Justified `!important`        | `.bg-primary` uses `!important` acceptably          |

### Layer Order

`reset` → `base` → `components` → `utilities` → `animations`

### Exceptions

- `.base-text` uses `!important` unnecessarily — flagged for removal
- `.bg-primary` uses `!important` justifiably (utility must always win)
- Reduced-motion queries should use `!important` per best practices

Fixes #16390
