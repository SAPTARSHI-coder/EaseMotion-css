# Fix: Parser Has No Input Bounds Validation (3 Vulnerabilities)

## Severity: High (Testing + Security)

The `parse()` function in `easemotion/engine/parser.js` has **no bounds checking** on user-supplied values. Three distinct bugs were identified and proven with Node.js test scripts.

---

## Bug A — CRLF Injection Hijacks Animation Name

### Proof
```js
import { parse } from './easemotion/engine/parser.js';
const ast = parse("fade-in\r\nbounce 999ms");
console.log(ast.animation); // "bounce" — NOT "fade-in"
```

### Root Cause
Line 89: `value.trim().toLowerCase().split(/\s+/)`  
`\r` and `\n` are whitespace characters. A `\r\n` sequence inside an `em` attribute (valid in HTML) causes the parser to split the value across lines. The second token (`bounce`) then **overwrites** `ast.animation`, completely changing which animation runs.

### Fix
Strip control characters before splitting:
```js
const tokens = value.replace(/[\r\n\t\0]/g, ' ').trim().toLowerCase().split(/\s+/);
```

---

## Bug B — Unbounded Duration Causes animationend to Never Fire

### Proof
```js
const ast = parse("fade-in 999999999ms");
console.log(ast.duration); // 999999999 ms = 277.8 hours
```
The compiled CSS: `animation: ease-kf-fade-in 999999999ms ...`  
Any code listening for `animationend` will **never receive the event**, breaking progress bars, sequential animations, and analytics.

### Fix
Add a `MAX_DURATION_MS = 10_000` constant and clamp in `parseTime()`:
```js
return Math.min(parseFloat(ms[1]), MAX_DURATION_MS);
```

---

## Bug C — Iteration Count Exceeds CSS Float Precision → Silent Breakage

### Proof
```js
const ast = parse("bounce repeat-9999999999");
console.log(ast.iterations); // 9999999999
// Compiled: animation-iteration-count: 9999999999
// Browser silently falls back to 1 iteration — not infinite
```

The CSS spec says `animation-iteration-count` must be a valid `<number>`. Values exceeding browser float precision are **silently ignored**, reverting to the initial value of `1`. Developers expecting an infinite or very-long-running animation get a single-play animation with no error.

### Fix
Add a `MAX_ITERATIONS = 1_000` constant and clamp in `parseRepeat()`:
```js
return Math.min(n, MAX_ITERATIONS);
```

---

## Missing Tests
The existing `tests/engine.test.js` has no coverage for:
- Negative/zero iteration counts
- Extremely large duration/delay values  
- Control characters (`\r`, `\n`, `\0`) in em attribute values

Proposed test cases are documented in `parser-fix.js`.

## Files
- `parser-fix.js` — Proposed fixes and test cases.
- `demo.html` / `style.css` — CI validation files.
