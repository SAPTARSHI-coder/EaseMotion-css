// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class SplitButtonHandler {
  constructor(mainButton, dropdownButton, onMainAction) {
    this.mainButton = mainButton;
    this.dropdownButton = dropdownButton;
    this.onMainAction =
      typeof onMainAction === "function" ? onMainAction : () => {};
    this.isDropdownOpen = false;

    this.init();
  }

  init() {
    if (!this.mainButton) return;

    this.handleMainClick = (e) => {
      if (this.mainButton.disabled) return;
      this.triggerRipple();
      this.onMainAction(e);
    };

    this.handleDropdownClick = () => {
      if (this.dropdownButton && this.dropdownButton.disabled) return;
      this.toggleDropdown();
    };

    this.mainButton.addEventListener("click", this.handleMainClick);
    if (this.dropdownButton) {
      this.dropdownButton.addEventListener("click", this.handleDropdownClick);
    }
  }

  triggerRipple() {
    if (this.mainButton) {
      this.mainButton.classList.add("active-ripple");
      setTimeout(() => {
        this.mainButton.classList.remove("active-ripple");
      }, 200);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.dropdownButton) {
      this.dropdownButton.setAttribute(
        "aria-expanded",
        String(this.isDropdownOpen)
      );
    }
  }

  destroy() {
    if (this.mainButton) {
      this.mainButton.removeEventListener("click", this.handleMainClick);
    }
    if (this.dropdownButton) {
      this.dropdownButton.removeEventListener(
        "click",
        this.handleDropdownClick
      );
    }
  }
}

describe("Split Button Main Action Click Handler Unit Specs", () => {
  let mainBtn;
  let dropdownBtn;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="mainBtn" class="split-btn-main">Deploy</button>
      <button id="dropdownBtn" class="split-btn-toggle" aria-expanded="false">▼</button>
    `;
    mainBtn = document.getElementById("mainBtn");
    dropdownBtn = document.getElementById("dropdownBtn");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should trigger main action callback when main button is clicked", () => {
    const callback = vi.fn();
    new SplitButtonHandler(mainBtn, dropdownBtn, callback);

    mainBtn.click();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should NOT toggle dropdown open state when main action is clicked", () => {
    const callback = vi.fn();
    const handler = new SplitButtonHandler(mainBtn, dropdownBtn, callback);

    mainBtn.click();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(handler.isDropdownOpen).toBe(false);
    expect(dropdownBtn.getAttribute("aria-expanded")).toBe("false");
  });

  it("should prevent main action execution when main button is disabled", () => {
    const callback = vi.fn();
    mainBtn.disabled = true;
    new SplitButtonHandler(mainBtn, dropdownBtn, callback);

    mainBtn.click();
    expect(callback).not.toHaveBeenCalled();
  });

  it("should add active-ripple class on main button click", () => {
    const handler = new SplitButtonHandler(mainBtn, dropdownBtn, vi.fn());
    mainBtn.click();

    expect(mainBtn.classList.contains("active-ripple")).toBe(true);
  });

  it("should toggle dropdown independently when dropdown toggle button is clicked", () => {
    const callback = vi.fn();
    const handler = new SplitButtonHandler(mainBtn, dropdownBtn, callback);

    dropdownBtn.click();
    expect(callback).not.toHaveBeenCalled();
    expect(handler.isDropdownOpen).toBe(true);
    expect(dropdownBtn.getAttribute("aria-expanded")).toBe("true");
  });

  it("should detach event listeners on destroy()", () => {
    const callback = vi.fn();
    const handler = new SplitButtonHandler(mainBtn, dropdownBtn, callback);

    handler.destroy();
    mainBtn.click();
    expect(callback).not.toHaveBeenCalled();
  });
});
