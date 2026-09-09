// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from "vitest";

export class AnnounceBar {
  constructor(
    barElement,
    closeBtnElement,
    storageKey = "easemotion_announce_dismissed"
  ) {
    this.bar = barElement;
    this.closeBtn = closeBtnElement;
    this.storageKey = storageKey;
    this.handleCloseClick = () => this.dismiss();

    this.init();
  }

  init() {
    if (this.isDismissed()) {
      this.hide();
    } else {
      this.show();
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", this.handleCloseClick);
    }
  }

  isDismissed() {
    try {
      return localStorage.getItem(this.storageKey) === "true";
    } catch {
      return false;
    }
  }

  dismiss() {
    try {
      localStorage.setItem(this.storageKey, "true");
    } catch {}
    this.hide();
  }

  show() {
    if (this.bar) {
      this.bar.style.display = "";
    }
  }

  hide() {
    if (this.bar) {
      this.bar.style.display = "none";
    }
  }

  resetStorage() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch {}
    this.show();
  }

  destroy() {
    if (this.closeBtn) {
      this.closeBtn.removeEventListener("click", this.handleCloseClick);
    }
  }
}

describe("Announce Bar Dismiss Storage Flag Unit Specs", () => {
  let bar;
  let closeBtn;

  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = `
      <div id="announceBar" class="announce-bar">
        <span>Banner text</span>
        <button id="announceClose" class="announce-close">&times;</button>
      </div>
    `;
    bar = document.getElementById("announceBar");
    closeBtn = document.getElementById("announceClose");
  });

  afterEach(() => {
    localStorage.clear();
    document.body.innerHTML = "";
  });

  it("should display banner initially when storage flag is not set", () => {
    const announceBar = new AnnounceBar(bar, closeBtn);
    expect(announceBar.isDismissed()).toBe(false);
    expect(bar.style.display).toBe("");
  });

  it("should dismiss banner and set localStorage flag when close button is clicked", () => {
    const announceBar = new AnnounceBar(bar, closeBtn);

    closeBtn.click();

    expect(announceBar.isDismissed()).toBe(true);
    expect(localStorage.getItem("easemotion_announce_dismissed")).toBe("true");
    expect(bar.style.display).toBe("none");
  });

  it("should auto-hide banner on init if flag was previously stored", () => {
    localStorage.setItem("easemotion_announce_dismissed", "true");

    const announceBar = new AnnounceBar(bar, closeBtn);

    expect(announceBar.isDismissed()).toBe(true);
    expect(bar.style.display).toBe("none");
  });

  it("should restore banner visibility and clear flag when resetStorage() is called", () => {
    const announceBar = new AnnounceBar(bar, closeBtn);
    announceBar.dismiss();

    expect(bar.style.display).toBe("none");

    announceBar.resetStorage();

    expect(announceBar.isDismissed()).toBe(false);
    expect(localStorage.getItem("easemotion_announce_dismissed")).toBeNull();
    expect(bar.style.display).toBe("");
  });

  it("should detach click listener on destroy()", () => {
    const announceBar = new AnnounceBar(bar, closeBtn);
    announceBar.destroy();

    closeBtn.click();

    expect(announceBar.isDismissed()).toBe(false);
    expect(bar.style.display).toBe("");
  });
});
