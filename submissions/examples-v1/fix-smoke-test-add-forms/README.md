# Fix: Add forms.css to Smoke Test CSS Bundle

## Problem

`tests/smoke.test.js` read all component CSS files in `beforeAll` but omitted `forms.css` from the concatenated CSS string:

```js
const modals = readFileSync(resolve(componentsDir, "modals.css"), "utf8");
// forms.css never read

css = variables + base + ... + modals; // forms missing
```

This meant `.ease-input`, `.ease-textarea`, `.ease-select`, `.ease-field`, and all validation state classes were never included in smoke tests. Regressions in `forms.css` would go undetected.

## Solution

Add `forms.css` to both the `readFileSync` calls and the `css` concatenation string in `tests/smoke.test.js`:

```js
const forms = readFileSync(resolve(componentsDir, "forms.css"), "utf8");

css = variables + base + ... + modals + forms;
```

## Usage

Run the existing test suite after the fix:

```bash
npm test
```

Form component classes are now covered:

```html
<input class="ease-input" />
<textarea class="ease-textarea"></textarea>
<select class="ease-select"></select>
<input class="ease-input ease-input-success" />
<input class="ease-input ease-input-danger" />
<input class="ease-input ease-input-warning" />
```

## Why it fits EaseMotion CSS

Every component in `components/` should be covered by the smoke test suite. Forms are the most commonly used interactive components in any UI — having zero test coverage for them was a significant gap.

Fixes #10251
