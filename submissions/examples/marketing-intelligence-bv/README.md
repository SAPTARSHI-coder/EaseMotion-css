# Marketing Intelligence Command (MKT-INTEL)

An enterprise-grade marketing intelligence dashboard and DSP bidding optimizer showcasing real-time ROAS metrics, target CAC adjustments, and weekly conversion projections powered by **EaseMotion CSS**.

## 1. Problem Statement

Growth marketing teams manage complex multi-channel budgets across Google, Meta, TikTok, and DSPs. Static dashboards fail to represent ad budget depletion, high CAC thresholds, or engagement demographic conversion opportunities.

## 2. Business Objective

To provide a consolidated marketing analytics cockpit that allows real-time bidding adjustment simulations, target CAC mapping, and budget re-allocations. Utilizing **EaseMotion CSS**, the dashboard delivers visual alerts, responsive grid states, and sweep scans to make growth managers context-aware.

## 3. User Personas

- **Wanda Maximoff (CMO)**: Needs unified views of ROAS targets, global Daily Spend pools, and channel CAC.
- **Peter Parker (Growth Specialist)**: Adjusts Google search bids, paid social retargeting, and daily budgets.
- **Tony Stark (Data Analyst)**: Monitors DSP optimizer routines, audience engagement distributions, and SSP bids queues.

## 4. Architecture Plan

- **Markup (`demo.html`)**: Semantic three-column dashboard layout presenting hubs switcher, controller slides, progress metrics, and terminal logs.
- **Styles (`style.css`)**: Dark theme featuring cyberpunk magenta (`#f72585`), purple (`#7209b7`), teal (`#4cc9f0`), yellow (`#fee440`), and green (`#38b000`) tokens.
- **Behavior (Vanilla JS)**: Interactive handler routines for campaign selection, CAC slider updates, terminal logs, and conversion scanning sweeps.

## 5. Folder Structure

```
marketing-intelligence-bv/
├── demo.html    # Main dashboard layout and interactive scripts
├── style.css    # Color variables, pulse keyframes, and layout configurations
└── README.md    # Product documentation and specification manual
```

## 6. UI Layout Plan

- **Header Section**: Spend pool statistics, secure heartbeat status, and branding.
- **Dashboard Grid (`.mkt-grid`)**:
  - **Left Column (Bidding Controls)**: Hubs switcher navigation, Target CAC/daily spend parameters sliders, warning alerts pulsing bar, channel depletion progress meters, and logging terminal.
  - **Middle Column (Omnichannel Health)**: Core growth scorecards, active channels cards grid, weekly conversion projection chart, diagnostic action selectors, and DSP realignment tiles.
  - **Right Column (SSP Exchange)**: SSP bidding queues list, engagement demographics promoter/detractor grid, DSP limit thresholds, and SSP rebalancing selectors.

## 7. Section Breakdown

1.  **System Branding Banner**: Top branding line with glow gradients.
2.  **OPS Security Badging**: Pulse status heartbeat secure badge.
3.  **Marketing Hubs view switcher**: View port navigation items.
4.  **Bidding Optimization Selector**: Bidding model dropdown selection.
5.  **Target CAC Controller**: Cap range slider parameter.
6.  **Daily Channel Spend Limit**: Target daily limit slider control.
7.  **Ad Channel Warning alerts**: Pulsing high CAC notification.
8.  **Channel Budget Depletion status**: Google/Meta/TikTok depletion meters.
9.  **DSP Optimization Terminal**: Monospaced terminal logging box.
10. **Growth Metrics Scorecards**: Core ROAS, CTR, CAC, Conversions metrics.
11. **Acquisition Channels Grid**: Active channel cards with parameters.
12. **Conversion Projections Chart**: 10-week flex bar group with laser overlay.
13. **DSP Bidding Diagnostic Actions**: Conversion scan execution buttons.
14. **DSP Realignment Launchpad**: Realign, export, test and flush actions.
15. **SSP Bidding Allocations List**: Active bids list with status tags.
16. **Engagement Demographics Grid**: Gen-Z, Millennial, Boomer engagement indicators.
17. **DSP Limit Thresholds Sheet**: Limits and base floor targets list.
18. **SSP Bids Rebalancing Optimizer**: Rebalance optimizations dropdown select.
19. **Footer Status Bar**: Stable network latency and connection status.

## 8. Component Design

- **`.mkt-panel`**: Dark indigo container with `backdrop-filter: blur(16px)` and subtle magenta borders.
- **`.pulsing-alert-bar`**: Alert strip showcasing yellow warning pulse keyframe loops.
- **`.terminal-card`**: Monospaced terminal wrapper styling logs contextually.
- **`.chart-card` & `.chart-bar`**: Chart wrapper utilizing absolute overlays.

## 9. Motion Strategy

- **Hover Lift Translations**: Interactive elements translate slightly to focus user intent.
- **CAC Pulse Alert**: Yellow warnings cycle border and glow boundaries.
- **Laser Scan Sweep**: Clicking conversion sweep triggers the `.scanning` class, starting the `sweepProgress` animation loop.

## 10. Accessibility Requirements

- **Semantic Elements**: Structured HTML layout (`<header>`, `<main>`, `<aside>`, `<section>`, `<footer>`).
- **High Contrast Colors**: Bright text contrast against dark backgrounds (`#0b090a`).
- **Keyboard Navigation**: Outlines and keyboard control mapping on sliders and selectors.

## 11. Responsive Design Strategy

- **Responsive Grid**: Multi-column layouts switch to single-column blocks on viewports below `1024px`.
- **Grid Column Auto-wrap**: Metrics stats and DSP realignment tiles wrap to fit mobile breakpoints cleanly.

## 12. Testing Checklist

- [x] Responsive layout validation (Mobile, Tablet, Desktop)
- [x] CAC warning pulse color loop rendering
- [x] Channel selector card metric adjustments
- [x] Target CAC slider data integration
- [x] Conversion scanning laser sweeps
- [x] Monospaced logger scroll boundaries

## 13. Expected Impact

A high-fidelity marketing DSP command center showing rich responsive grids and glowing cyberpunk accents. Maximize points under GSSoC requirements by including 19 UI sections, 30+ card components, full responsiveness, and zero dependencies.
