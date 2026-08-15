// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from "vitest";

export class FAQAccordion {
  constructor(container, options = {}) {
    this.container = container;
    this.multiOpen = options.multiOpen ?? true;
    this.items = [];

    this.init();
  }

  init() {
    if (!this.container) return;
    const triggers = Array.from(
      this.container.querySelectorAll(".faq-trigger")
    );

    this.items = triggers.map((trigger) => {
      const panelId = trigger.getAttribute("aria-controls");
      const panel = panelId
        ? this.container.querySelector(`#${panelId}`)
        : null;

      const handleClick = () => this.toggleItem(trigger, panel);
      trigger.addEventListener("click", handleClick);

      return { trigger, panel, handleClick };
    });
  }

  toggleItem(targetTrigger, targetPanel) {
    const isCurrentlyExpanded =
      targetTrigger.getAttribute("aria-expanded") === "true";

    if (!this.multiOpen && !isCurrentlyExpanded) {
      // Single open mode: collapse all items first
      this.collapseAll();
    }

    const nextState = !isCurrentlyExpanded;
    targetTrigger.setAttribute("aria-expanded", String(nextState));

    if (targetPanel) {
      targetPanel.setAttribute("aria-hidden", String(!nextState));
      targetPanel.classList.toggle("is-open", nextState);
    }
  }

  collapseAll() {
    this.items.forEach(({ trigger, panel }) => {
      trigger.setAttribute("aria-expanded", "false");
      if (panel) {
        panel.setAttribute("aria-hidden", "true");
        panel.classList.remove("is-open");
      }
    });
  }

  destroy() {
    this.items.forEach(({ trigger, handleClick }) => {
      trigger.removeEventListener("click", handleClick);
    });
    this.items = [];
  }
}

describe("FAQ Accordion Multi Open State Flag Unit Specs", () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="faqAccordion" class="faq-accordion">
        <div class="faq-item">
          <button id="trig-1" class="faq-trigger" aria-expanded="false" aria-controls="panel-1">Item 1</button>
          <div id="panel-1" class="faq-panel" aria-hidden="true">Content 1</div>
        </div>
        <div class="faq-item">
          <button id="trig-2" class="faq-trigger" aria-expanded="false" aria-controls="panel-2">Item 2</button>
          <div id="panel-2" class="faq-panel" aria-hidden="true">Content 2</div>
        </div>
      </div>
    `;
    container = document.getElementById("faqAccordion");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should allow multiple items to be open when multiOpen flag is true", () => {
    const accordion = new FAQAccordion(container, { multiOpen: true });
    const trig1 = document.getElementById("trig-1");
    const trig2 = document.getElementById("trig-2");
    const panel1 = document.getElementById("panel-1");
    const panel2 = document.getElementById("panel-2");

    trig1.click();
    expect(trig1.getAttribute("aria-expanded")).toBe("true");
    expect(panel1.classList.contains("is-open")).toBe(true);

    trig2.click();
    expect(trig2.getAttribute("aria-expanded")).toBe("true");
    expect(panel2.classList.contains("is-open")).toBe(true);
    // Panel 1 remains open
    expect(trig1.getAttribute("aria-expanded")).toBe("true");
    expect(panel1.classList.contains("is-open")).toBe(true);
  });

  it("should auto-collapse other open items when multiOpen flag is false", () => {
    const accordion = new FAQAccordion(container, { multiOpen: false });
    const trig1 = document.getElementById("trig-1");
    const trig2 = document.getElementById("trig-2");
    const panel1 = document.getElementById("panel-1");
    const panel2 = document.getElementById("panel-2");

    trig1.click();
    expect(trig1.getAttribute("aria-expanded")).toBe("true");
    expect(panel1.classList.contains("is-open")).toBe(true);

    trig2.click();
    expect(trig2.getAttribute("aria-expanded")).toBe("true");
    expect(panel2.classList.contains("is-open")).toBe(true);
    // Panel 1 auto-collapsed
    expect(trig1.getAttribute("aria-expanded")).toBe("false");
    expect(panel1.classList.contains("is-open")).toBe(false);
  });

  it("should toggle an open item closed on re-click", () => {
    const accordion = new FAQAccordion(container, { multiOpen: true });
    const trig1 = document.getElementById("trig-1");
    const panel1 = document.getElementById("panel-1");

    trig1.click();
    expect(trig1.getAttribute("aria-expanded")).toBe("true");

    trig1.click();
    expect(trig1.getAttribute("aria-expanded")).toBe("false");
    expect(panel1.classList.contains("is-open")).toBe(false);
  });

  it("should detach event listeners cleanly on destroy()", () => {
    const accordion = new FAQAccordion(container, { multiOpen: true });
    const trig1 = document.getElementById("trig-1");
    const panel1 = document.getElementById("panel-1");

    accordion.destroy();
    trig1.click();
    expect(trig1.getAttribute("aria-expanded")).toBe("false");
    expect(panel1.classList.contains("is-open")).toBe(false);
  });
});
