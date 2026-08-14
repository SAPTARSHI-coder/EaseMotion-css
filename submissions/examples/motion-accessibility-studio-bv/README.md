# Motion Accessibility Compliance Studio

## What does this do?

The Motion Accessibility Compliance Studio is an interactive auditing and testing environment that helps developers identify, simulate, and fix common motion-related accessibility violations (WCAG 2.3.1, 2.3.3, and 2.4.10) in web applications.

## How is it used?

Open the `demo.html` file directly in any modern browser to launch the studio:

- **Select Animation Pattern**: Choose from critical motion hazards like Rapid Rotation Spin (vestibular sensitivity trigger), Rapid Screen Flicker (seizure hazard), or Severe Bouncing (layout shifts).
- **Run Accessibility Audit**: Trigger a mock scanner that runs across standard vs reduced motion viewports, updates compliance scores, and changes audit statuses in the log.
- **Remediation recommendations**: Click on any row in the audit logs table to dynamically load code fixes in the code recommendations panel on the right sidebar.
- **Copy Report**: Use the Compliance Report compiler to copy a pre-formatted Markdown summary of the audit findings.

## Why is it useful?

EaseMotion CSS is dedicated to providing smooth, high-performance web animations. However, excessive motion can cause severe real-world symptoms (dizziness, nausea, seizures) for users with vestibular disorders, epilepsy, or cognitive disabilities.

This studio solves the problem of designing motion-safe interfaces by:

1. Simulating vestibular sensitivity, allowing developers to see how animations behave under forced safe limits.
2. Providing a side-by-side comparison of standard animations and their reduced-motion alternatives.
3. Supplying instant CSS snippets leveraging `@media (prefers-reduced-motion: reduce)` media queries, making it easy to fix violations.

## Tech Stack

- HTML5
- CSS3 (Custom properties, keyframes, transitions, and responsive grid layouts)
- JavaScript (simulation logic, dynamic audit updates, and compliance report compilation)

## Preview

Open [demo.html](file:///submissions/examples/motion-accessibility-studio-bv/demo.html) directly in your browser.
