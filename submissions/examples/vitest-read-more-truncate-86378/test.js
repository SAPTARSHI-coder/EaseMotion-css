// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from "vitest";

export class ReadMoreComponent {
  constructor(textElement, buttonElement, options = {}) {
    this.textEl = textElement;
    this.buttonEl = buttonElement;
    this.maxChars = options.maxChars || 40;
    this.originalText = this.textEl ? this.textEl.textContent.trim() : "";
    this.isExpanded = false;

    this.handleButtonClick = () => this.toggle();

    this.init();
  }

  init() {
    if (!this.textEl) return;

    if (this.originalText.length <= this.maxChars) {
      if (this.buttonEl) this.buttonEl.style.display = "none";
      return;
    }

    this.render();
    if (this.buttonEl) {
      this.buttonEl.addEventListener("click", this.handleButtonClick);
    }
  }

  getTruncatedText() {
    const sub = this.originalText.slice(0, this.maxChars);
    const lastSpace = sub.lastIndexOf(" ");
    const base = lastSpace > 0 ? sub.slice(0, lastSpace) : sub;
    return `${base}...`;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.render();
  }

  render() {
    if (this.textEl) {
      this.textEl.textContent = this.isExpanded
        ? this.originalText
        : this.getTruncatedText();
    }
    if (this.buttonEl) {
      this.buttonEl.textContent = this.isExpanded ? "Read Less" : "Read More";
      this.buttonEl.setAttribute("aria-expanded", String(this.isExpanded));
    }
  }

  destroy() {
    if (this.buttonEl) {
      this.buttonEl.removeEventListener("click", this.handleButtonClick);
    }
  }
}

describe("Read More Text Truncate State Unit Specs", () => {
  let textEl;
  let buttonEl;

  beforeEach(() => {
    document.body.innerHTML = `
      <p id="readMoreText" class="read-more-text">
        EaseMotion CSS provides lightweight CSS keyframe animations for modern web applications.
      </p>
      <button id="readMoreBtn" class="read-more-btn">Read More</button>
    `;
    textEl = document.getElementById("readMoreText");
    buttonEl = document.getElementById("readMoreBtn");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should truncate long text on initial render", () => {
    const comp = new ReadMoreComponent(textEl, buttonEl, { maxChars: 30 });
    expect(comp.isExpanded).toBe(false);
    expect(textEl.textContent).toContain("...");
    expect(buttonEl.textContent).toBe("Read More");
  });

  it('should expand text and change button label to "Read Less" on click', () => {
    const comp = new ReadMoreComponent(textEl, buttonEl, { maxChars: 30 });

    buttonEl.click();

    expect(comp.isExpanded).toBe(true);
    expect(textEl.textContent).toBe(
      "EaseMotion CSS provides lightweight CSS keyframe animations for modern web applications."
    );
    expect(buttonEl.textContent).toBe("Read Less");
    expect(buttonEl.getAttribute("aria-expanded")).toBe("true");
  });

  it('should collapse back to truncated text when "Read Less" is clicked', () => {
    const comp = new ReadMoreComponent(textEl, buttonEl, { maxChars: 30 });

    buttonEl.click(); // Expand
    expect(comp.isExpanded).toBe(true);

    buttonEl.click(); // Collapse
    expect(comp.isExpanded).toBe(false);
    expect(textEl.textContent).toContain("...");
    expect(buttonEl.textContent).toBe("Read More");
  });

  it("should hide button if text length is less than or equal to maxChars", () => {
    textEl.textContent = "Short text";
    new ReadMoreComponent(textEl, buttonEl, { maxChars: 40 });

    expect(buttonEl.style.display).toBe("none");
    expect(textEl.textContent).toBe("Short text");
  });

  it("should detach click listener on destroy()", () => {
    const comp = new ReadMoreComponent(textEl, buttonEl, { maxChars: 30 });
    comp.destroy();

    buttonEl.click();

    expect(comp.isExpanded).toBe(false);
    expect(buttonEl.textContent).toBe("Read More");
  });
});
