# Engine Bezier Curve Interpolation Parser Prototype

> **Issue #77175 Solution**

> **Note**: To comply with repository contribution guidelines, this submission is built as a standalone isolated prototype. The regex and AST logic demonstrated in `demo.html` are designed to be drop-in ready for `easemotion/engine/parser.js` by the core maintainers.

---

## Abstract

This prototype introduces the parsing and validation engine for custom `cubic-bezier()` interpolation syntax within EaseMotion CSS utility attribute declarations. It tokenizes user-defined control point parameters from input strings, performs strict bounding validations on time dimensions, and compiles a clean Abstract Syntax Tree (AST) node alongside valid utility CSS class rules.

---

## AST Tokenization Logic

The parsing routine employs a case-insensitive regular expression designed to match standard CSS cubic Bezier definitions with support for optional spaces and signed floating-point numbers:

```regex
/cubic-bezier\(\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*,\s*([+-]?\d*\.?\d+)\s*\)/i
```

### Match Capture Groups & Token Mapping:
1. `([+-]?\d*\.?\d+)`: Capture group 1 mapping to control point coordinate $P_1(x_1)$.
2. `([+-]?\d*\.?\d+)`: Capture group 2 mapping to control point coordinate $P_1(y_1)$.
3. `([+-]?\d*\.?\d+)`: Capture group 3 mapping to control point coordinate $P_2(x_2)$.
4. `([+-]?\d*\.?\d+)`: Capture group 4 mapping to control point coordinate $P_2(y_2)$.

Upon extracting these string matches, values are converted to standard IEEE floating-point numbers via `parseFloat()`. The parser produces an AST node of type `easing-custom`:

```json
{
  "type": "easing-custom",
  "bezier": {
    "x1": 0.68,
    "y1": -0.55,
    "x2": 0.27,
    "y2": 1.55
  },
  "generatedCSS": ".em-ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] { transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); }"
}
```

---

## Coordinate Bounds Validation

Cubic Bezier curve timing functions map normalized time $t \in [0, 1]$ on the X-axis to animation progress on the Y-axis:

$$B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3$$

Where fixed anchor points are $P_0 = (0, 0)$ and $P_3 = (1, 1)$.

### Time Axis Constraint ($x_1, x_2$)
- **Rule**: $x_1$ and $x_2$ **MUST** satisfy $0 \le x \le 1$.
- **Mathematical Rationale**: The X-axis represents normalized time monotonic progression from duration start ($0.0$) to completion ($1.0$). If $x_1 < 0$ or $x_1 > 1$ (or similarly for $x_2$), the function would cease to be a single-valued function of time (it would create time loops or reverse time travel), causing non-deterministic animation behavior in CSS transition engines.

### Progress Axis Flexibility ($y_1, y_2$)
- **Rule**: $y_1$ and $y_2$ are unconstrained and may extend into negative values ($y < 0$) or values greater than one ($y > 1$).
- **Mathematical Rationale**: The Y-axis represents animation progression / displacement distance. Permitting $y < 0$ or $y > 1$ enables essential physical effects such as anticipatory back-ins, elastic overshoots, and spring dynamics (e.g., `cubic-bezier(0.68, -0.55, 0.27, 1.55)`).
