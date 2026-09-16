import { describe, expect, it } from "vitest";

function calculateTooltipPosition(target, tooltip, viewport) {
  if (
    !target ||
    !tooltip ||
    !viewport ||
    typeof target.x !== "number" ||
    typeof target.y !== "number"
  ) {
    return null;
  }

  let x = target.x;
  let y = target.y - tooltip.height;

  if (x < 0) x = 0;
  if (y < 0) y = target.y + target.height;

  if (x + tooltip.width > viewport.width) {
    x = viewport.width - tooltip.width;
  }

  if (y + tooltip.height > viewport.height) {
    y = viewport.height - tooltip.height;
  }

  return { x, y };
}

describe("Tooltip Positioning Boundary Collision", () => {
  it("positions tooltip above the target", () => {
    const result = calculateTooltipPosition(
      { x: 100, y: 120, height: 30 },
      { width: 80, height: 40 },
      { width: 400, height: 300 }
    );

    expect(result).toEqual({ x: 100, y: 80 });
  });

  it("moves below when there is no space above", () => {
    const result = calculateTooltipPosition(
      { x: 80, y: 10, height: 30 },
      { width: 80, height: 40 },
      { width: 400, height: 300 }
    );

    expect(result).toEqual({ x: 80, y: 40 });
  });

  it("prevents left overflow", () => {
    const result = calculateTooltipPosition(
      { x: -20, y: 100, height: 20 },
      { width: 70, height: 30 },
      { width: 300, height: 200 }
    );

    expect(result.x).toBe(0);
  });

  it("prevents right overflow", () => {
    const result = calculateTooltipPosition(
      { x: 290, y: 100, height: 20 },
      { width: 80, height: 30 },
      { width: 320, height: 200 }
    );

    expect(result.x).toBe(240);
  });

  it("prevents bottom overflow", () => {
    const result = calculateTooltipPosition(
      { x: 150, y: 250, height: 30 },
      { width: 90, height: 60 },
      { width: 400, height: 280 }
    );

    expect(result.y).toBe(220);
  });

  it("handles exact viewport fit", () => {
    const result = calculateTooltipPosition(
      { x: 0, y: 40, height: 20 },
      { width: 100, height: 40 },
      { width: 100, height: 100 }
    );

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("returns null for invalid target", () => {
    expect(
      calculateTooltipPosition(
        null,
        { width: 10, height: 10 },
        { width: 100, height: 100 }
      )
    ).toBeNull();
  });

  it("returns null for invalid tooltip", () => {
    expect(
      calculateTooltipPosition(
        { x: 10, y: 10, height: 10 },
        null,
        { width: 100, height: 100 }
      )
    ).toBeNull();
  });

  it("returns null for invalid viewport", () => {
    expect(
      calculateTooltipPosition(
        { x: 10, y: 10, height: 10 },
        { width: 20, height: 20 },
        null
      )
    ).toBeNull();
  });

  it("keeps tooltip inside viewport", () => {
    const result = calculateTooltipPosition(
      { x: 500, y: 500, height: 20 },
      { width: 120, height: 60 },
      { width: 600, height: 550 }
    );

    expect(result.x).toBeLessThanOrEqual(480);
    expect(result.y).toBeLessThanOrEqual(490);
  });

  it("supports very small tooltips", () => {
    const result = calculateTooltipPosition(
      { x: 30, y: 30, height: 10 },
      { width: 1, height: 1 },
      { width: 100, height: 100 }
    );

    expect(result).toEqual({ x: 30, y: 29 });
  });

  it("supports large viewport values", () => {
    const result = calculateTooltipPosition(
      { x: 800, y: 600, height: 40 },
      { width: 200, height: 100 },
      { width: 1920, height: 1080 }
    );

    expect(result).toEqual({ x: 800, y: 500 });
  });
});