# Tooltip Positioning Boundary Collision Check Architecture

## Abstract

This documentation details the architecture and mathematical logic behind tooltip positioning boundary collision checks. When tooltips are placed near viewport boundaries, naïve placement calculations often lead to clipping or rendering off-screen. By enforcing boundary collision checks, tooltips automatically flip their alignment axis when colliding with boundary constraints, maintaining optimal usability and visual integrity.

## Collision Detection Mathematics

The tooltip placement logic relies on a pure calculation function `calculateTooltipPosition(targetRect, tooltipRect, viewportRect, placement)`.

1. **Happy-Path Calculation**:
   - For `top`:
     $$\text{top} = \text{target.top} - \text{tooltip.height} - \text{gap}$$
     $$\text{left} = \text{target.left} + \frac{\text{target.width}}{2} - \frac{\text{tooltip.width}}{2}$$
   - For `right`:
     $$\text{top} = \text{target.top} + \frac{\text{target.height}}{2} - \frac{\text{tooltip.height}}{2}$$
     $$\text{left} = \text{target.right} + \text{gap}$$

2. **Boundary Collision Corrections**:
   - **Top Collision**: If $\text{placement} = \text{'top'}$ and $\text{top} < \text{viewport.top}$, the tooltip flips to the bottom:
     $$\text{top} = \text{target.bottom} + \text{gap}$$
   - **Right Collision**: If $\text{placement} = \text{'right'}$ and $\text{left} + \text{tooltip.width} > \text{viewport.right}$, the tooltip flips to the left:
     $$\text{left} = \text{target.left} - \text{tooltip.width} - \text{gap}$$

3. **Boundary Clamping**:
   - X-axis coordinate is clamped between $\text{viewport.left}$ and $\text{viewport.right} - \text{tooltip.width}$.

## Vitest Unit Test Suite

Below is the complete unit test suite validating the positioning logic using Vitest (`tooltip-boundary.test.ts`):

```typescript
import { describe, it, expect } from 'vitest';

function calculateTooltipPosition(targetRect, tooltipRect, viewportRect, placement) {
  // Guard against malformed inputs
  if (!targetRect || !tooltipRect || !viewportRect) return null;

  let top = 0;
  let left = 0;
  const gap = 8;
  
  if (placement === 'top') {
    top = targetRect.top - tooltipRect.height - gap;
    left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
  } else if (placement === 'right') {
    top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
    left = targetRect.right + gap;
  }

  // Boundary Collision Corrections
  if (placement === 'top' && top < viewportRect.top) {
    top = targetRect.bottom + gap; // Flip bottom
  }
  
  if (placement === 'right' && (left + tooltipRect.width) > viewportRect.right) {
    left = targetRect.left - tooltipRect.width - gap; // Flip left
  }

  // Clamp X if overflowing viewport left/right limits entirely
  if (left < viewportRect.left) left = viewportRect.left;
  if (left + tooltipRect.width > viewportRect.right) left = viewportRect.right - tooltipRect.width;

  return { top, left };
}

describe('Tooltip Boundary Collision Logic', () => {
  const viewport = { top: 0, right: 1000, bottom: 1000, left: 0, width: 1000, height: 1000 };
  const tooltip = { width: 100, height: 40 };

  it('should position at top normally (Happy Path)', () => {
    // Target in center of screen
    const target = { top: 500, right: 550, bottom: 540, left: 450, width: 100, height: 40 };
    const result = calculateTooltipPosition(target, tooltip, viewport, 'top');
    
    // Top: 500 - 40 - 8 = 452. Left: 450 + 50 - 50 = 450
    expect(result).toEqual({ top: 452, left: 450 });
  });

  it('should flip to bottom if top boundary collides (Edge Case)', () => {
    // Target at very top of screen
    const target = { top: 10, right: 110, bottom: 50, left: 10, width: 100, height: 40 };
    const result = calculateTooltipPosition(target, tooltip, viewport, 'top');
    
    // Top attempt: 10 - 40 - 8 = -38 (collides with viewport top: 0). Flips to target.bottom (50) + gap (8) = 58
    expect(result.top).toBe(58);
  });

  it('should position at right normally (Happy Path)', () => {
    const target = { top: 500, right: 550, bottom: 540, left: 450, width: 100, height: 40 };
    const result = calculateTooltipPosition(target, tooltip, viewport, 'right');
    
    // Left: target.right (550) + gap (8) = 558
    expect(result.left).toBe(558);
  });

  it('should flip to left if right boundary collides (Edge Case)', () => {
    // Target at very right of screen
    const target = { top: 500, right: 990, bottom: 540, left: 890, width: 100, height: 40 };
    const result = calculateTooltipPosition(target, tooltip, viewport, 'right');
    
    // Left attempt: 990 + 8 = 998 + tooltip width (100) = 1098 (collides with viewport right: 1000).
    // Flips to target.left (890) - tooltip width (100) - gap (8) = 782
    expect(result.left).toBe(782);
  });

  it('should handle malformed inputs gracefully (Invalid Input)', () => {
    expect(calculateTooltipPosition(null, tooltip, viewport, 'top')).toBeNull();
  });
});
```
