# Motion Accessibility Audit Engine

A professional frontend engineering dashboard for analyzing UI animation safety, checking prefers-reduced-motion compliance, evaluating vestibular comfort levels, and recommending accessible alternative animation configurations within the EaseMotion CSS ecosystem.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?

This is a professional accessibility testing dashboard that scans animation configurations and flags potential motion safety violations. Features include:

- **Motion Parameter Auditor**: Slide duration, translation distance, scale shifts, looping repetitions, and flashing behaviors to calculate real-time compliance.
- **Vestibular & Seizure Risk Scanner**: Flags rapid loops (< 250ms), infinite loops, aggressive flashes, and oversized translation sweeps.
- **Diagnostic Scorecard**: Computes a numerical accessibility health rating (0% to 100%).
- **Vestibular Disorder Simulator**: Overlays visual blur/shakes during previews to simulate the dizzying effects of high-motion designs.
- **Side-by-Side Easing Comparison**: Plays the configured unsafe animation alongside a recommended accessible fallback.
- **Exportable Markdown Report**: Generates compliance audit notes and code variables.

### 2. How is it used?

1. Open [demo.html](demo.html) directly in a web browser.
2. Tweak animation speeds, loop counts, and translate thresholds.
3. Observe how the score updates dynamically. Check the flagged issues listed in the warnings card.
4. Click **"Trigger Previews"** to see comparative side-by-side renders.
5. Export the audit checklist to your copy clipboard.

### 3. Why is it useful?

Web accessibility standard WCAG 2.2 requires that motion animations can be disabled, don't trigger seizures (flashing < 3 times per second), and don't induce nausea in users with vestibular disorders. This tool acts as an in-browser audit advisor, checking animation values mathematically and showing developers how to transition from high-motion triggers to safe, accessible fade-only equivalents.

---

## 🛠️ Tech Stack & Implementation Details

- **HTML5 & CSS3**: Custom grid layout, glassmorphic card containers, and dynamic status flags.
- **Diagnostic Score Engine**: JS formulas mapping input parameters to risk percentages and severity bands.
- **Overlay Filters**: CSS blur/shake filters simulating vestibular janks.
- **Accessibility**: Full compatibility checks with `prefers-reduced-motion`.
