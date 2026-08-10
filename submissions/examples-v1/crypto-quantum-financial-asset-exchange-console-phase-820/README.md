# Crypto-Quantum Financial Asset Exchange Console — Phase 820

**QuantumX** is a premium institutional trading terminal showcase built with EaseMotion CSS. The demo presents a Bloomberg-inspired, AI command-center experience for quantum-grade cryptocurrency trading and portfolio management.

## Folder Structure

```
crypto-quantum-financial-asset-exchange-console-phase-820/
├── demo.html    — Full page demo (open directly in browser)
├── style.css    — Layout, typography, colour tokens, responsive rules
└── README.md    — This file
```

## Sections

1. **Sticky Navigation** — QuantumX logo, market links, Sign In + Start Trading CTAs
2. **Hero** — CSS trading terminal with live candlestick chart, order book, ticker bar, and floating price widgets
3. **Live Market Overview** — Six market cards (BTC, ETH, SOL, XRP, QNTM, USDC) with mini bar charts
4. **Trading Console** — Full order book (bids/asks with depth bars), buy/sell panel, open positions, P&L
5. **Quantum Security** — Six security cards: Quantum Encryption, AI Fraud Detection, Multi-Sig, Cold Storage, Compliance, Zero-Trust
6. **Portfolio Analytics** — Asset allocation bars, profit growth KPIs, risk score arc gauge, monthly returns chart
7. **Testimonials** — Three institutional client reviews
8. **Pricing** — Trader (free) / Professional (featured) / Institutional plans
9. **Footer** — Platform, Developers, Support, Company columns + social links

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav bar, hero badge, hero stats
- `ease-slide-up` — section headings, market cards, security cards, pricing cards
- `ease-slide-in-left` — analytics left-column cards
- `ease-slide-in-right` — hero terminal panel, analytics right-column cards
- `ease-zoom-in` — trading console dashboard
- `ease-slide-in-from-bottom-right` — featured pricing card

### Continuous
- `ease-pulse` — live status dots (terminal, console, market tickers)
- `ease-float` — floating hero price widgets

### Hover / Interactive
- `ease-hover-lift` — nav trade button, market cards, security cards, testimonial cards, pricing cards, footer socials
- `ease-hover-glow` — (available on tech cards, applied via sec-card hover)
- `ease-hover-grow` — nav sign-in, secondary CTA, buy-percentage buttons, price buttons
- `ease-hover-underline` — footer navigation links

### Glassmorphism
- `ease-glass-card` — market cards, security cards, analytics cards, testimonial cards
  (overridden with `!important` for dark-theme compatibility — background, border, backdrop-filter)

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance animations across grids

## Design System

| Token | Value |
|---|---|
| Background | `#020509` |
| Surface | `#050a12` |
| Card | `#080f1a` |
| Emerald (primary) | `#10b981` |
| Cyan (secondary) | `#06b6d4` |
| Gold (accent) | `#f59e0b` |
| Red (sell / loss) | `#ef4444` |
| Text | `#e2e8f0` |
| Text muted | `#64748b` |
| Monospace font | `Courier New, Consolas` |

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>1024px) | 3-column grids, 2-column hero, 3-col console |
| Tablet (768–1024px) | 2-column grids, console collapses to 2-col |
| Mobile (<768px) | Single-column, nav links hidden, order book hidden |
| Small mobile (<480px) | Stacked CTAs, sign-in button hidden |

## Usage

Open `demo.html` directly in any modern browser — no build step, no dependencies beyond `../../easemotion.css`.

```bash
# From repo root
open submissions/examples/crypto-quantum-financial-asset-exchange-console-phase-820/demo.html
```

## Notes

- No `@keyframes` are defined anywhere in `style.css` — all animation is EaseMotion utility classes
- Scroll-reveal uses a vanilla `IntersectionObserver` inline script; no external JS
- Candlestick chart, order book, and buy/sell panel are built entirely with CSS + HTML — no canvas or SVG
- `ease-glass-card` is overridden with `!important` on background, border, and backdrop-filter for dark theme
- Closes Issue [#28368](https://github.com/saptarshi-coder/easemotion-css/issues/28368)
