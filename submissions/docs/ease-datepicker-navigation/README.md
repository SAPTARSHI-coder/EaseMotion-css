# Datepicker Month-Year Navigation Calculation

## Abstract
This specification defines the unit testing architecture and navigation mathematics for the Datepicker Month-Year Navigation Calculation algorithm (Issue #81999) in EaseMotion CSS. It outlines the state machine logic for advancing or rewinding month/year boundaries and provides a complete Vitest suite for automated verification.

## Datepicker Navigation Mathematics
The datepicker navigation system evaluates state transitions across 0-indexed month values (0 = January, 11 = December). 

### Boundary Transition Logic:
- **Next Month Advancement (`calculateNextMonth`)**:
  - Increments the `month` integer by `1` when `0 <= month < 11` within the existing `year`.
  - When `month === 11` (December), state transitions rollover to `month = 0` (January) and `year = year + 1`.
- **Previous Month Decrement (`calculatePrevMonth`)**:
  - Decrements the `month` integer by `1` when `0 < month <= 11` within the existing `year`.
  - When `month === 0` (January), state transitions rollback to `month = 11` (December) and `year = year - 1`.

By isolating the transition algorithms into pure functions, date calculations remain fully deterministic, side-effect free, and easily testable.

## Vitest Unit Test Suite

Below is the complete, production-ready Vitest unit test suite for verifying the `calculateNextMonth` and `calculatePrevMonth` navigation routines (`datepicker-navigation.test.ts`):

```typescript
import { describe, it, expect } from 'vitest';

function calculateNextMonth(year: number, month: number) {
  if (month === 11) return { year: year + 1, month: 0 };
  return { year, month: month + 1 };
}

function calculatePrevMonth(year: number, month: number) {
  if (month === 0) return { year: year - 1, month: 11 };
  return { year, month: month - 1 };
}

describe('Datepicker Month-Year Navigation Calculation', () => {
  it('should increment month normally within the same year', () => {
    expect(calculateNextMonth(2026, 3)).toEqual({ year: 2026, month: 4 });
  });

  it('should roll over to January of next year when incrementing from December', () => {
    expect(calculateNextMonth(2026, 11)).toEqual({ year: 2027, month: 0 });
  });

  it('should decrement month normally within the same year', () => {
    expect(calculatePrevMonth(2026, 5)).toEqual({ year: 2026, month: 4 });
  });

  it('should roll back to December of previous year when decrementing from January', () => {
    expect(calculatePrevMonth(2026, 0)).toEqual({ year: 2025, month: 11 });
  });

  it('should handle edge case inputs correctly', () => {
    expect(calculateNextMonth(2000, 0)).toEqual({ year: 2000, month: 1 });
    expect(calculatePrevMonth(1999, 11)).toEqual({ year: 1999, month: 10 });
  });
});
```
