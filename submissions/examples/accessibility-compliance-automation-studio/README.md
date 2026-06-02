# Accessibility Compliance Automation Studio

An automated compliance auditing workspace and testing sandbox for validating animation system accessibility. It scans transitions for WCAG 2.2 Level AA/AAA compliance, evaluates vestibular risk profiles, identifies flashing seizure hazards, checks keyboard focus states, and auto-generates media-query remediation overrides.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This is a production-grade accessibility auditing workbench designed to identify, log, and fix animation violations in real-time:
- **Vestibular Risk Estimator**: Formulates hazard scores by evaluating travel distance (>30px), scale levels (>1.3), and rotation angles (>180deg) against animation duration.
- **Flashing Hazard Detector**: Scans opacity, colors, or visibility transition cycles to flag high-frequency flashes (>3Hz) that risk photosensitive seizures.
- **Reduced-Motion Fallback Auditor**: Asserts whether elements collapse to safe styling defaults (e.g., opacity-only fades or static layouts) when `prefers-reduced-motion` is simulated.
- **Keyboard Navigation Auditor**: Emulates focus flows to verify outline visibility, contrast ratio borders, and tab-sequence traps during active transition states.
- **Interactive Comfort Simulator**: Previews animations at 100% speed, 25% speed (comfort preview), or fully static (simulating user states).
- **Remediation Exporter**: Compiles copyable CSS media-query overrides to resolve identified violations instantly.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in any modern web browser.
2. Select an animation preset from the sandbox selector (e.g., *High-Travel Slide*, *Rapid Flash*, *Spin Spin*, or *Safe Fade*) and trigger it.
3. Click **"Run Accessibility Audit"** to start the scanner. The live score ring will recalculate, and violations will stream into the **Diagnostics Terminal** and **Telemetry Feed**.
4. Check the **Vestibular Risk Gauge** to see if displacement or rotation exceeds comfort thresholds.
5. Toggle the **"Keyboard Navigation Checker"**, then press `Tab` to navigate the component cards and inspect focus outline states.
6. Click **"Generate Remediation CSS"** to copy the fallback style overrides to your clipboard.

### 3. Why is it useful?
Automated tools (like Lighthouse or axe-core) are excellent for static audits but fail to catch dynamic animation risks like rapid flashing rates, vestibular-triggering translations, and keyboard outlines that disappear mid-transition. The **Accessibility Compliance Automation Studio** provides a dedicated, offline-capable environment to profile and remediate these issues, ensuring developers deliver high-quality, inclusive user experiences that comply with modern accessibility laws.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & Vanilla CSS3**: CSS grid architecture, color-coded safety badges, custom range sliders, code outputs, and custom focus indicators.
- **Compliance Telemetry Engine**: JavaScript scanner inspecting transition properties, calculating flashing Hz cycles, and tracking focus outlines.
- **Remediation Compiler**: Auto-generates clean, isolated CSS media queries enforcing prefers-reduced-motion fallbacks.
- **Theme Support**: Full dark-theme (`data-theme="dark"`) and light-theme (`data-theme="light"`) compatibility.
