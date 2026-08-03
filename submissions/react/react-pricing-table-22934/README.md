# React Animated Pricing Table with Hover Effects (#22934)

This submission fulfills Issue **#22934** by delivering a production-quality animated pricing table with a billing period toggle, staggered card and feature entry, hover interactions, and a pulsing "Popular" badge — all powered by EaseMotion CSS.

## Animation Inventory

| Feature | EaseMotion / CSS Technique | Details |
|---------|---------------------------|---------|
| Card entry | `.ease-slide-up` at `index × 150ms` | 3 cards cascade in on mount |
| Feature rows | `.ease-slide-up .ease-duration-fast` at `200ms + i×60ms` | Rows waterfall in after card enters |
| Billing toggle price swap | `.ease-fade-in .ease-duration-fast` via React `key` change | Price cleanly cross-fades on toggle |
| Toggle switch | CSS `left` transition on thumb + `background` transition | Smooth pill-slide with colour change |
| Popular badge | `.ease-pulse` continuous | Heartbeat attention draw |
| Card hover | `.ease-hover-scale .ease-hover-glow` | Lift + glow on all cards |
| CTA button hover | `.ease-hover-scale .ease-hover-glow` | Featured button also has gradient shimmer |

## Architecture Highlights

### Billing Toggle Price Swap
Each `<PriceDisplay>` uses `key={plan.id + '-' + annual}` on its price wrapper div. When the billing toggle flips, React creates a new DOM node for the price, and `.ease-fade-in .ease-duration-fast` fires on the fresh mount — producing a clean cross-fade between the old and new price values without any manual animation orchestration.

### Feature List Stagger
Every `<FeatureRow>` applies `.ease-slide-up .ease-duration-fast` with `animationDelay: 200 + featureIndex × 60ms`. The 200ms base offset ensures the feature rows wait for the card itself to enter before beginning their cascade.

### Featured Card Elevation
The "Pro" plan card uses a unique elevated glass style with a gradient border, box-shadow glow, and a top-offset `.ease-pulse` badge, visually differentiating it from the flanking cards without requiring a separate component.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.

**Tip:** Toggle the billing switch to watch prices cross-fade. Hover over any card to see the scale + glow interaction.
