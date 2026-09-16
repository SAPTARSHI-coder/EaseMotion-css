import { describe, it, expect } from "vitest";

function validateDroppedFiles(files, options = {}) {
  const {
    maxSize = 1024 * 1024,
    allowedTypes = ["image/png", "image/jpeg"],
    maxFiles = 5,
  } = options;

  if (!Array.isArray(files)) return false;
  if (files.length === 0) return false;
  if (files.length > maxFiles) return false;

  return files.every((file) => {
    if (!file) return false;
    if (typeof file.name !== "string") return false;
    if (typeof file.size !== "number") return false;
    if (typeof file.type !== "string") return false;

    return (
      file.size >= 0 &&
      file.size <= maxSize &&
      allowedTypes.includes(file.type)
    );
  });
}

describe("File Dropzone Drop File Validation - Edge Cases", () => {
  it("accepts a valid PNG", () => {
    expect(
      validateDroppedFiles([
        { name: "a.png", size: 500, type: "image/png" },
      ])
    ).toBe(true);
  });

  it("accepts maximum allowed files", () => {
    const files = Array.from({ length: 5 }, (_, i) => ({
      name: `${i}.png`,
      size: 100,
      type: "image/png",
    }));

    expect(validateDroppedFiles(files)).toBe(true);
  });

  it("rejects more than maximum files", () => {
    const files = Array.from({ length: 6 }, (_, i) => ({
      name: `${i}.png`,
      size: 100,
      type: "image/png",
    }));

    expect(validateDroppedFiles(files)).toBe(false);
  });

  it("rejects unsupported MIME type", () => {
    expect(
      validateDroppedFiles([
        { name: "doc.pdf", size: 200, type: "application/pdf" },
      ])
    ).toBe(false);
  });

  it("rejects oversized file", () => {
    expect(
      validateDroppedFiles([
        { name: "large.png", size: 3000000, type: "image/png" },
      ])
    ).toBe(false);
  });

  it("rejects negative file size", () => {
    expect(
      validateDroppedFiles([
        { name: "bad.png", size: -1, type: "image/png" },
      ])
    ).toBe(false);
  });

  it("rejects missing type", () => {
    expect(
      validateDroppedFiles([
        { name: "a.png", size: 100 },
      ])
    ).toBe(false);
  });

  it("rejects null input", () => {
    expect(validateDroppedFiles(null)).toBe(false);
  });

  it("rejects undefined input", () => {
    expect(validateDroppedFiles(undefined)).toBe(false);
  });

  it("rejects empty array", () => {
    expect(validateDroppedFiles([])).toBe(false);
  });

  it("rejects malformed object", () => {
    expect(validateDroppedFiles([{}])).toBe(false);
  });

  it("supports custom configuration", () => {
    expect(
      validateDroppedFiles(
        [
          {
            name: "notes.txt",
            size: 300,
            type: "text/plain",
          },
        ],
        {
          maxSize: 500,
          allowedTypes: ["text/plain"],
          maxFiles: 2,
        }
      )
    ).toBe(true);
  });
});