/**
 * EaseMotion CSS Custom Property Override Runtime
 * Issue #86357
 */

export class CSSPropertyOverrideRuntime {
  private element: HTMLElement;
  private defaultValues: Map<string, string> = new Map();

  constructor(element: HTMLElement) {
    if (!element || !(element instanceof HTMLElement)) {
      throw new Error("Invalid element provided to CSSPropertyOverrideRuntime");
    }
    this.element = element;
  }

  public setProperty(property: string, value: string): void {
    if (!property || typeof property !== "string" || !property.startsWith("--")) {
      throw new Error(`Invalid custom property name: "${property}". Must start with "--".`);
    }
    if (value === undefined || value === null || (typeof value === "string" && value.trim() === "")) {
      throw new Error(`Invalid value for custom property "${property}"`);
    }

    if (!this.defaultValues.has(property)) {
      const current = getComputedStyle(this.element).getPropertyValue(property).trim();
      this.defaultValues.set(property, current);
    }

    this.element.style.setProperty(property, value);
  }

  public getProperty(property: string): string {
    if (!property || !property.startsWith("--")) {
      throw new Error(`Invalid custom property name: "${property}"`);
    }
    return this.element.style.getPropertyValue(property).trim() || getComputedStyle(this.element).getPropertyValue(property).trim();
  }

  public resetProperty(property: string): void {
    if (!property || !property.startsWith("--")) {
      throw new Error(`Invalid custom property name: "${property}"`);
    }
    if (this.defaultValues.has(property)) {
      const defaultVal = this.defaultValues.get(property);
      if (defaultVal) {
        this.element.style.setProperty(property, defaultVal);
      } else {
        this.element.style.removeProperty(property);
      }
    } else {
      this.element.style.removeProperty(property);
    }
  }
}
