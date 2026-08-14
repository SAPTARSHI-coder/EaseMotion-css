# Concentric Status Pulse Dot

## 1. What does this do?
This component provides lightweight, pure CSS status indicators featuring staggered multi-ring concentric ripple animations designed to represent online presence, active tasks, live broadcasts, or system alerts.

## 2. How is it used?

You can choose between two visual modes:

### Solo Mode (Zero-markup / 2 Concentric Rings)
Perfect for inline usage where minimal HTML is preferred. Uses `::before` and `::after` on a single element.
```html
<span class="status-pulse-solo pulse-success pulse-md"></span>
```

### Group Mode (Multi-element / 3 Concentric Rings)
Perfect for larger focus highlights (radar targets, notifications) that benefit from three distinct sequential ring waves.
```html
<span class="status-pulse-group pulse-danger pulse-lg">
  <span class="status-pulse-dot"></span>
  <span class="status-pulse-ring ring-1"></span>
  <span class="status-pulse-ring ring-2"></span>
  <span class="status-pulse-ring ring-3"></span>
</span>
```

### Configuration Options
Apply modifier classes directly to customize colors, sizes, and animation speeds:

- **Colors**: `.pulse-success` (Green), `.pulse-danger` (Red), `.pulse-warning` (Amber), `.pulse-info` (Blue), `.pulse-purple` (Purple), `.pulse-ping` (Pink)
- **Sizes**: `.pulse-sm` (8px), `.pulse-md` (12px), `.pulse-lg` (16px), `.pulse-xl` (24px)
- **Speeds**: `.pulse-fast` (1.2s), `.pulse-normal` (2s), `.pulse-slow` (3s)
- **Enhancements**: Add `.pulse-glow` to apply an ambient glow filter shadow to the center dot.

## 3. Why is it useful?
It provides premium visual feedback with modern concentric animation curves using zero JavaScript dependencies. It fits EaseMotion CSS's core philosophy of creating lightweight, modular, and highly performant motion utilities. It also respects user system accessibility preferences: if a user has configured `prefers-reduced-motion: reduce`, the rings stop expanding and remain static at a semi-transparent scale, ensuring the status indicator is still clear and accessible.
