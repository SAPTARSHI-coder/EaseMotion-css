import { describe, it, expect } from "vitest";

function validateFiles(files, options = {}) {
  const {
    maxSize = 1024 * 1024,
    allowedTypes = ["image/png", "image/jpeg"],
  } = options;

  if (!Array.isArray(files)) return false;
  if (files.length === 0) return false;

  return files.every(
    (file) =>
      file &&
      typeof file.size === "number" &&
      file.size <= maxSize &&
      allowedTypes.includes(file.type)
  );
}

describe("File Dropzone Drop File Validation", () => {
  it("accepts a valid PNG file", () => {
    const files = [{ name: "photo.png", size: 500000, type: "image/png" }];
    expect(validateFiles(files)).toBe(true);
  });

  it("accepts multiple valid files", () => {
    const files = [
      { name: "a.png", size: 1000, type: "image/png" },
      { name: "b.jpg", size: 2000, type: "image/jpeg" },
    ];

    expect(validateFiles(files)).toBe(true);
  });

  it("rejects unsupported file type", () => {
    const files = [{ name: "file.pdf", size: 1000, type: "application/pdf" }];

    expect(validateFiles(files)).toBe(false);
  });

  it("rejects oversized file", () => {
    const files = [{ name: "big.png", size: 5000000, type: "image/png" }];

    expect(validateFiles(files)).toBe(false);
  });

  it("rejects empty array", () => {
    expect(validateFiles([])).toBe(false);
  });

  it("rejects null input", () => {
    expect(validateFiles(null)).toBe(false);
  });

  it("rejects undefined input", () => {
    expect(validateFiles(undefined)).toBe(false);
  });

  it("rejects malformed file object", () => {
    const files = [{}];
    expect(validateFiles(files)).toBe(false);
  });

  it("rejects mixture of valid and invalid files", () => {
    const files = [
      { name: "ok.png", size: 2000, type: "image/png" },
      { name: "bad.pdf", size: 1000, type: "application/pdf" },
    ];

    expect(validateFiles(files)).toBe(false);
  });

  it("supports custom validation options", () => {
    const files = [{ name: "doc.txt", size: 200, type: "text/plain" }];

    expect(
      validateFiles(files, {
        maxSize: 500,
        allowedTypes: ["text/plain"],
      })
    ).toBe(true);
  });
});