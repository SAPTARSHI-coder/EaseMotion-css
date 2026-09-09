# Orbit Date Picker — Nature Design

## 1. What does this do?

An organic, circular sundial-inspired month selector featuring rotating orbit rings, a leafy pointer indicator, and smooth CSS state updates.

## 2. How is it used?

Incorporate month radio targets with label inputs distributed radially to build a pure CSS rotating calendar dial:

```html
<input type="radio" id="m-jan" name="months" checked style="display: none;" />
<div class="picker-card">
  <div class="orbit-ring-months">
    <label for="m-jan" class="month-node node-jan"><span>Jan</span></label>
  </div>
</div>
```

## 3. Why is it useful?

It matches EaseMotion CSS's design rules:

- **Human-readable**: Semantic structure naming configurations like `orbit-ring-months` and `month-node` explain their layout details clearly.
- **Animation-first**: Implements smooth spring-like elastic rotations when selecting months.
- **Composable**: Perfect for gardening hubs, nature portals, seasonal booking sheets, or natural theme reservation forms.
