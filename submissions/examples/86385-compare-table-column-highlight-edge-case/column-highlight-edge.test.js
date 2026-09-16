import { describe, expect, it } from "vitest";

/**
 * Returns the column indices that should receive the highlight.
 * Invalid indices produce an empty result.
 */
function getHighlightedColumns(columnIndex, columnCount) {
  if (
    !Number.isInteger(columnIndex) ||
    columnIndex < 0 ||
    columnIndex >= columnCount ||
    columnCount <= 0
  ) {
    return [];
  }

  return [columnIndex];
}

describe("Compare Table Column Highlight Hover", () => {
  describe("happy path", () => {
    it("highlights the selected column", () => {
      expect(getHighlightedColumns(1, 4)).toEqual([1]);
    });

    it("moves the highlight when another valid column is selected", () => {
      const first = getHighlightedColumns(1, 4);
      const second = getHighlightedColumns(2, 4);

      expect(first).toEqual([1]);
      expect(second).toEqual([2]);
    });
  });

  describe("edge cases", () => {
    it("highlights the first column", () => {
      expect(getHighlightedColumns(0, 4)).toEqual([0]);
    });

    it("highlights the last column", () => {
      expect(getHighlightedColumns(3, 4)).toEqual([3]);
    });

    it("handles a single-column table", () => {
      expect(getHighlightedColumns(0, 1)).toEqual([0]);
    });

    it("returns no highlighted columns for an empty table", () => {
      expect(getHighlightedColumns(0, 0)).toEqual([]);
    });

    it("does not highlight multiple columns accidentally", () => {
      expect(getHighlightedColumns(2, 5)).toHaveLength(1);
    });
  });

  describe("invalid inputs", () => {
    it("rejects a negative column index", () => {
      expect(getHighlightedColumns(-1, 4)).toEqual([]);
    });

    it("rejects an index beyond the final column", () => {
      expect(getHighlightedColumns(4, 4)).toEqual([]);
    });

    it("rejects a significantly oversized column index", () => {
      expect(getHighlightedColumns(999, 4)).toEqual([]);
    });

    it("rejects a decimal column index", () => {
      expect(getHighlightedColumns(1.5, 4)).toEqual([]);
    });

    it("rejects a string column index", () => {
      expect(getHighlightedColumns("1", 4)).toEqual([]);
    });

    it("rejects a null column index", () => {
      expect(getHighlightedColumns(null, 4)).toEqual([]);
    });

    it("rejects an undefined column index", () => {
      expect(getHighlightedColumns(undefined, 4)).toEqual([]);
    });

    it("rejects a negative column count", () => {
      expect(getHighlightedColumns(0, -1)).toEqual([]);
    });
  });
});