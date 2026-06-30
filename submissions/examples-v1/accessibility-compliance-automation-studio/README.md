# Accessibility Compliance Automation Studio

A developer-utility auditing tool for testing and validating animation accessibility. It checks layout transitions against WCAG 2.2 accessibility guidelines, calculates strobe flashing frequencies, tracks tab-focus visible rings, benchmarks layout reflow delays, and compiles compliant media-query fallback overrides.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?

An offline accessibility auditing utility for inspecting and validating dynamic UI transitions:

- **prefers-reduced-motion Auditor**: Inspects system-level media query configurations and tests animation fallbacks under _Normal_, _Reduced_, and _Low Stimulation_ motion comfort profiles.
- **Strobe Frequency Analyzer**: Evaluates flashing animation speeds (cycles per second) to flag epilepsy seizure risks exceeding the WCAG 2.3.1 limit (3Hz).
- **Keyboard navigation Auditor**: Tracks page tabbing flow. Verifies focused element outlines, visibility parameters, and contrast parameters conforming to WCAG 2.4.7 (Focus Visible).
- **Performance Pipeline Auditor**: Simulates and logs the execution delays of layout thrashing (`top`/`left` updates forcing synchronous reflows) compared to GPU-composited layers (`transform`).
- **Contrast & Visibility Inspector**: Evaluates non-text contrast levels (WCAG 1.4.11) on active focus states.
- **Remediation Exporter**: Compiles copyable CSS media queries to patch violations immediately.

### 2. How is it used?

1. Open [demo.html](demo.html) directly in any modern web browser.
2. Select an animation preset (e.g. _Safe Pulse_, _High-Travel Slide_, _Dizzying Spin_, or _Strobe Stagger_) and hover or tab-focus the preview element.
3. Click **"Run Accessibility Audit"** to run the scan.
4. Review the compliance scores and logs in the monospace **Diagnostics Terminal**.
5. Toggle the **"Keyboard Outline Support"** and tab through elements to audit focus outlines.
6. Toggle **"Override Motion Profile"** to _Reduced_ or _Low Stimulation_ to check motion dampening behaviors.
7. Click **"Copy Remediation CSS"** to copy the generated compliance overrides.

### 3. Why is it useful?

Automated tools (like Lighthouse or axe-core) are excellent for static audits but cannot detect dynamic transition risks like flashing strobe speeds, vestibular comfort boundaries, and focus states that disappear mid-transition. The **Accessibility Compliance Automation Studio** provides a dedicated testing environment to validate these dynamic conditions, ensuring animation systems comply with WCAG 2.2 accessibility standards.

---

## 🛠️ Implementation & WCAG References

- **WCAG 2.3.1 (Three Flashes Limit)**: Audits flashing rates to prevent seizures.
- **WCAG 2.4.7 (Focus Visible)**: Audits outline presence and styling during keyboard transitions.
- **WCAG 1.4.11 (Non-Text Contrast)**: Audits visual contrast ratios of focused borders.
- **Forced Synchronous Layout (Layout Thrashing)**: Measures layout reflow delays vs GPU compositing to audit rendering safety.
