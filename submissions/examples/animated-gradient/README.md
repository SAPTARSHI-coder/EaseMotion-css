# Animated Gradient Component (CSS-Only)

An optimized, highly scalable animated backdrop background mesh container using advanced linear color mapping vectors and hardware-isolated positioning loops.

## Features
* **Thread-Isolated Mesh Shifting:** Offloads linear vector calculations to decoupled composition nodes via spatial `background-position` translations, eliminating frame lag.
* **Velocity Interaction Alterations:** Features transition structures that accelerate gradient cycles seamlessly from `12s` down to `4s` when elements gather focus.
* **Reduced Motion Compliance:** Explicitly pauses all background movement logic when user profiles flag preferred motion reductions.

## Custom Property Profiles

| CSS Custom Variable Hook | Default Assignment Token | Role Scope / Target |
| :--- | :--- | :--- |
| `--ease-grad-speed` | `12s` | Baseline cycle timeline pace index. |
| `--ease-grad-hover-speed` | `4s` | Focus transition timeline pace target. |
| `--ease-grad-color-1` | `#06b6d4` | Primary entry point color parameter. |