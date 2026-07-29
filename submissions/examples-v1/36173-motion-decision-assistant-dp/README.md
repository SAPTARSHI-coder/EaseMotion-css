# Motion Decision Assistant

An interactive decision-support tool that recommends an animation for
a given UI scenario and explains the reasoning, alternatives, and
accessibility considerations behind it — rather than just previewing
effects.

## 1. What does this do?

Walks through four questions — **what** you're building (Modal,
Sidebar, Tooltip, Toast, Hero Section, and 7 more), its **purpose**
(Enter, Exit, Draw Attention, Confirm Action, Loading, Navigation,
Feedback), the desired **motion style** (Minimal, Natural, Energetic,
Dramatic), and the **accessibility** setting (Normal or Reduced
Motion) — and instantly computes a recommended animation, duration,
easing, delay, and direction. The recommendation is previewed live, is
explained in plain language, comes with 2–3 alternative animations and
their trade-offs, and is accompanied by contextual UX best-practice
tips and a compact decision summary.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **component**, **purpose**, **motion style**, and
  **accessibility** setting from the Decision Form; every change
  updates the recommendation instantly.
- Watch the **Live Recommendation** preview play the suggested
  animation, and read the **Why This Recommendation** explanation for
  the reasoning behind it.
- Check the **Alternative Recommendations** for other reasonable
  choices, and the **Motion Design Tips** section for best practices
  relevant to your current selections.
- Use the **Decision Summary** as a quick reference to copy into a
  design spec or PR description.

## 3. Why is it useful?

Choosing an animation is usually guesswork — developers reach for
whatever "feels right" without a framework for the decision. This tool
encodes real motion-design heuristics (overlay components suit
fade+scale, edge-anchored components suit directional slides,
confirmation actions shouldn't bounce erratically, loading states need
continuous rather than one-shot motion) into an explicit, explained
decision process. Selecting Reduced Motion demonstrates concretely how
a recommendation should degrade — not disappear — under accessibility
constraints, reinforcing that `prefers-reduced-motion` support is part
of choosing an animation, not an afterthought bolted on later.
