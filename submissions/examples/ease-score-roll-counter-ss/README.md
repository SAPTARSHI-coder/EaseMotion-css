# Score Roll Counter Component

## Abstract
The Score Roll Counter component (`.ease-score-display`) provides an arcade-inspired digital display ticker designed for real-time score tracking, reward updates, and high-impact numerical feedback. Built with CSS keyframe animation physics (`easeScoreFlash`), fixed-width tabular figures (`font-variant-numeric: tabular-nums`), and customizable custom properties, it guarantees smooth visual updates without layout shifts.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a game score roll counter component (`.ease-score-display`) featuring tabular numerical alignment, radiant neon text-shadows, and a highlight flash animation on each update.

### 2. How is it used?
Embed the `.ease-score-display` container into game dashboards, leaderboard counters, or reward milestones. Use the provided JavaScript trigger or state change to trigger the flash animation.

### 3. Why is it useful?
Enhances gamified user interfaces by drawing immediate visual attention to score updates without requiring heavy canvas renderers.

## Score Ticker Architecture
- **Tabular Numerals**: Utilizes `font-variant-numeric: tabular-nums` to ensure digit width consistency during value transitions.
- **Micro-Animation Engine**: Applies `easeScoreFlash` keyframes with a spring cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to deliver responsive tactile feedback on point updates.
- **Accessibility & Contrast**: Built-in support for `forced-colors: active` high-contrast system themes, explicit focus indicators, and `aria-live="polite"` screen reader announcements.

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--score-bg` | `#030712` | Deep background tone for the ambient stage |
| `--score-surface` | `#0f172a` | Card enclosure surface color |
| `--score-border` | `rgba(16, 185, 129, 0.2)` | Accent border highlight color |
| `--score-green` | `#10b981` | Core vibrant green theme accent |
| `--score-green-light` | `#34d399` | High-visibility text color for the score ticker |
| `--score-text` | `#f8fafc` | Primary text color |
| `--score-muted` | `#94a3b8` | Subdued label color |
| `--score-shadow` | `rgba(16, 185, 129, 0.4)` | Glow shadow and elevation color |
