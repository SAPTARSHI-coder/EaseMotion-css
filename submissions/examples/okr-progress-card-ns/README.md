# CSS OKR Progress Card (#71037)

An Objective and Key Results (OKR) progress tracking card with animated progress bars and interactive details toggles built using pure CSS.

## Features
- Animated gradient progress fills powered by CSS `@keyframes` and transitions.
- Displays overall objective metrics alongside granular Key Results (KRs).
- Expandable milestone notes using semantic pure CSS `<details>` and `<summary>`.
- Fully responsive card layout with custom design variables (`--accent-primary`, `--accent-success`, etc.).
- BEM compliant structure (`ease-okr-card`, `ease-okr-progress`, `ease-okr-kr-item`).
- Accessible design with proper ARIA progressbar roles (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) and `prefers-reduced-motion` handling.
