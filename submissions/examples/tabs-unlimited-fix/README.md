# ease-tabs — Unlimited Tab Count Fix

**Fixes:** Issue #4229

## Root Cause

The original implementation used explicit CSS `:nth-of-type(1)` through
`:nth-of-type(6)` selector chains to wire up the tab-switching logic.
Any tab beyond index 6 produced a completely silent failure — no active
state, no panel shown, no error in the console.

## Solution — Option B (JS data-tab pattern)

The CSS-only `:nth-of-type` approach has a fundamental hard limit: you
must write one selector chain per tab. This submission replaces it with
a `data-tab` attribute pattern driven by a tiny vanilla JS file.

| | CSS-only (before) | data-tab + JS (after) |
|---|---|---|
| Max tabs | 6 | Unlimited |
| Failure mode | Silent, broken UI | N/A |
| Keyboard nav | None | ← → Home End |
| ARIA | None | `role=tablist/tab/tabpanel`, `aria-selected`, `aria-controls` |

## HTML Pattern

```html
<div class="ease-tabs">
  <div class="ease-tab-list">
    <button class="ease-tab-btn" data-tab="panel-id-1">Tab 1</button>
    <button class="ease-tab-btn" data-tab="panel-id-2">Tab 2</button>
    <!-- add as many as needed -->
  </div>

  <div class="ease-tab-panel" id="panel-id-1">Content 1</div>
  <div class="ease-tab-panel" id="panel-id-2">Content 2</div>
</div>

<script src="tabs.js"></script>
```

The `data-tab` value on the button must match the `id` of its panel.

## Acceptance Criteria

- [x] Component works for at least 8 tabs (demo shows 8)
- [x] README documents the pattern and no hard limit
- [x] No silent failure — works for any count
- [x] Keyboard navigation (Arrow keys, Home, End)
- [x] Full ARIA support (role, aria-selected, aria-controls)