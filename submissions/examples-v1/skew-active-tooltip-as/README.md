# Skew-Active Tooltip (Dashboard Analytics)

## What does this do?
This component provides a compact, pure CSS animated tooltip featuring a smooth, hardware-accelerated Skew-Active transition with a clean Dashboard Analytics interface design, requiring zero JavaScript overhead.

---

## How is it used?
Wrap your interactive metric card and its associated fallback descriptive panel within a relative container, utilizing the functional placement modifiers:

```html
<div class="tooltip-wrapper">
    <button class="metric-card" aria-describedby="tooltip-revenue">
        <div class="card-meta">
            <span class="card-title">Net Revenue</span>
        </div>
        <div class="card-data">
            <span class="card-value">$48.25K</span>
            <span class="card-trend positive">+18%</span>
        </div>
    </button>
    
    <span id="tooltip-revenue" class="tooltip tooltip-top" role="tooltip">
        Revenue increased by <strong>18%</strong> driven by renewal expansions.
    </span>
</div>