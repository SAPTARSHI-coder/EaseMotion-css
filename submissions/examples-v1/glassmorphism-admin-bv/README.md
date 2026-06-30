# Glassmorphism Enterprise Admin Panel

An enterprise-grade admin dashboard showcasing **glassmorphism design** with deep indigo backgrounds, purple and cyan accents, and fully responsive layouts — all built with pure HTML and CSS (no JavaScript frameworks, no external dependencies beyond Google Fonts).

> Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) showcase examples collection.

---

## ✨ Features

### 16 UI Sections

| #   | Section                    | Description                                            |
| --- | -------------------------- | ------------------------------------------------------ |
| 1   | **Header**                 | Gradient branding, search, system status indicator     |
| 2   | **Sidebar Navigation**     | Icon nav with active states, sections, user profile    |
| 3   | **Quick Stats Row**        | Total Users, Active Sessions, Revenue, Growth cards    |
| 4   | **User Management Table**  | Avatars, roles, status badges, edit/delete actions     |
| 5   | **Role Administration**    | Permission matrix across 5 roles × 7 permissions       |
| 6   | **Audit Log Timeline**     | Severity indicators (Critical, Warning, Info, Success) |
| 7   | **Analytics Dashboard**    | Chart placeholders + KPI cards with trend data         |
| 8   | **Notification Center**    | Categorized alerts (danger, warning, success, info)    |
| 9   | **Settings Panel**         | Toggle switches, form inputs, select dropdowns         |
| 10  | **Governance Panel**       | SVG circular gauges for GDPR, SOC 2, ISO, HIPAA        |
| 11  | **Operational Monitoring** | Uptime, CPU, Memory, Latency gauges                    |
| 12  | **Executive Summary**      | MRR, CAC, NPS, Churn with shimmer sparklines           |
| 13  | **Activity Feed**          | User action log with avatars and timestamps            |
| 14  | **Security Overview**      | Threat level indicator + security metrics grid         |
| 15  | **System Health Monitor**  | Service status grid with pulse-animated dots           |
| 16  | **Quick Actions Panel**    | Shortcut buttons for common admin operations           |

### Design System

- **Color Palette**: Deep indigo (`#0f0b2a`) background, purple primary (`#8b5cf6`), cyan accent (`#06b6d4`)
- **Glassmorphism**: `backdrop-filter: blur(20px)` with semi-transparent borders and backgrounds
- **Typography**: Inter (UI) + JetBrains Mono (code/timestamps)
- **25+ CSS Custom Properties** for theming consistency

### Animations & Effects

| Animation       | Usage                                |
| --------------- | ------------------------------------ |
| `fadeSlideUp`   | Card entrance animations (staggered) |
| `fadeSlideDown` | Header slide-in                      |
| `pulseGlow`     | Alert/critical item highlighting     |
| `shimmer`       | Loading state sparkline placeholders |
| `barGrow`       | Progress bar fill animations         |
| `gaugeProgress` | SVG circular gauge animations        |
| `dotPulse`      | Service status dot pulsing           |
| `orbFloat`      | Ambient background gradient orbs     |

### Responsive Design

- **≤ 1200px**: 2-column stats, single-column analytics
- **≤ 900px**: Sidebar collapses (toggle), grid adjustments
- **≤ 600px**: Full single-column layout, compact spacing

---

## 📁 File Structure

```
glassmorphism-admin-bv/
├── demo.html    # Full admin panel with 16 sections
├── style.css    # Glassmorphism theme, animations, responsive
└── README.md    # This file
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/SAPTARSHI-coder/EaseMotion-css.git
cd EaseMotion-css/submissions/examples/glassmorphism-admin-bv

# Open in browser
open demo.html        # macOS
start demo.html       # Windows
xdg-open demo.html    # Linux
```

No build tools or dependencies required — just open `demo.html` in any modern browser.

## 🛠️ Technologies

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, `backdrop-filter`, SVG gauges
- **Google Fonts** — Inter, JetBrains Mono

## 📜 License

MIT — see the repository root for full license details.
