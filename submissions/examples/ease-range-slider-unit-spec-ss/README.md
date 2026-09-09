# Range Slider Value Change Handler Unit Spec (#86337)

## Abstract
This module provides a robust unit specification architecture and value change handler (`handleRangeChange`) for range slider components within EaseMotion CSS. It features full Vitest assertion coverage for happy paths, boundary value edge cases, and invalid input clamping, accompanied by a visual test runner interface.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements an automated Vitest unit specification and robust value change handler (`handleRangeChange`) for range sliders, thoroughly covering happy paths, boundary edges, and invalid inputs.

### 2. How is it used?
Integrate the `handleRangeChange` utility into custom range inputs to ensure safe, clamped numerical state updates. Use the interactive runner in `demo.html` to execute test assertions.

### 3. Why is it useful?
Guarantees high test coverage, strict CI compliance, and robust input sanitization for UI form controls without relying on heavy external test runners in browser demos.

---

## Vitest Unit Spec Architecture

The test suite validates `handleRangeChange(val, min = 0, max = 100)` against the following test matrices:

* **Happy Path (Mid-range)**: Valid numerical values within `[min, max]` bounds return the expected parsed number (e.g., `50` $\rightarrow$ `50`).
* **Boundary Edge Cases**: Minimum (`0`) and maximum (`100`) boundary values are preserved accurately without truncation.
* **Lower Boundary Clamping**: Inputs lower than the minimum parameter (`-10`) are clamped to `min` (`0`).
* **Upper Boundary Clamping**: Inputs exceeding the maximum parameter (`150`) are clamped to `max` (`100`).
* **NaN & Invalid Input Sanitization**: Non-numeric or missing inputs evaluate to `min` (`0`), preventing runtime exceptions or broken DOM state.

---

## Custom CSS Properties

The component is configured via custom CSS properties on `:root` for seamless theme customization:

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--range-bg` | `#030712` | Main page background color |
| `--range-surface` | `#0f172a` | Container stage surface background |
| `--range-border` | `rgba(56, 189, 248, 0.2)` | Border color for stage and slider elements |
| `--range-primary` | `#38bdf8` | Primary accent color for thumb hover and output value |
| `--range-thumb` | `#ffffff` | Range thumb handle default color |
| `--range-text` | `#f8fafc` | Primary text color |
| `--range-muted` | `#94a3b8` | Subtitle and muted text color |
| `--range-success` | `#10b981` | Test assertion pass state log text color |
