# CSS Variable Detector (`find-unused-css-vars-ksk`)

1. What does this do?  
An interactive browser-based tool that scans pasted CSS and reports which CSS custom properties (`--var-name`) are declared but never referenced via `var(--...)`. Serves as a visual companion to issue #45115.

2. How is it used?  
Open `demo.html`, paste your CSS declarations into the left editor, add any additional reference files into the right editor, then click **Scan** to get an instant report of unused variables highlighted in red.

3. Why is it useful?  
Helps contributors and maintainers keep EaseMotion CSS design tokens clean — finding obsolete variables before they accumulate and confuse future contributors.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #45115.*
