import { describe, it, expect, beforeEach } from "vitest";
import { CSSPropertyOverrideRuntime } from "../src/css-property-override";

describe("CSSPropertyOverrideRuntime", () => {
  let container: HTMLElement;
  let runtime: CSSPropertyOverrideRuntime;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    runtime = new CSSPropertyOverrideRuntime(container);
  });

  describe("Happy Path", () => {
    it("should successfully set and get a custom CSS property", () => {
      runtime.setProperty("--em-speed", "0.5s");
      expect(runtime.getProperty("--em-speed")).toBe("0.5s");
    });

    it("should allow overriding multiple properties", () => {
      runtime.setProperty("--em-color", "#8b5cf6");
      runtime.setProperty("--em-radius", "16px");
      expect(runtime.getProperty("--em-color")).toBe("#8b5cf6");
      expect(runtime.getProperty("--em-radius")).toBe("16px");
    });

    it("should reset custom properties correctly", () => {
      runtime.setProperty("--em-speed", "0.4s");
      expect(runtime.getProperty("--em-speed")).toBe("0.4s");
      runtime.resetProperty("--em-speed");
      expect(runtime.getProperty("--em-speed")).toBe("");
    });
  });

  describe("Edge Cases", () => {
    it("should handle property names with multiple hyphens", () => {
      runtime.setProperty("--em-card-bg-opacity", "0.9");
      expect(runtime.getProperty("--em-card-bg-opacity")).toBe("0.9");
    });

    it("should handle numerical string values correctly", () => {
      runtime.setProperty("--em-zIndex", "1050");
      expect(runtime.getProperty("--em-zIndex")).toBe("1050");
    });
  });

  describe("Invalid Inputs & Error Handling", () => {
    it("should throw an error when initialized with an invalid element", () => {
      expect(() => new CSSPropertyOverrideRuntime(null as any)).toThrowError(
        /Invalid element provided/
      );
    });

    it("should throw an error for property names not starting with '--'", () => {
      expect(() => runtime.setProperty("color", "red")).toThrowError(
        /Invalid custom property name/
      );
      expect(() => runtime.getProperty("background")).toThrowError(
        /Invalid custom property name/
      );
      expect(() => runtime.resetProperty("padding")).toThrowError(
        /Invalid custom property name/
      );
    });

    it("should throw an error when assigning empty or null values", () => {
      expect(() => runtime.setProperty("--em-speed", "")).toThrowError(
        /Invalid value for custom property/
      );
      expect(() => runtime.setProperty("--em-speed", null as any)).toThrowError(
        /Invalid value for custom property/
      );
    });
  });
});
