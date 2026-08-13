# Animated Presence & Status Indicator Collection

A lightweight, purely declarative status badge architecture tailored for workspace pipelines, avatar containers, and direct messaging channels within **EaseMotion CSS**.

## ✨ Design Paradigms
* **Zero JS Execution Thread**: Completely offloads animation tasks directly to native system compositor rendering loops, removing layout overhead.
* **Breathing Transform Bounds (`breathingPulse`)**: Simulates continuous connectivity via safe scale variables and gradient box shadows without shifting structural borders.
* **Double-Blink Sync Pattern (`doubleBlink`)**: Employs an explicit `steps(1)` keyframe setup to pulse status metrics sharply without complex interpolation gaps.