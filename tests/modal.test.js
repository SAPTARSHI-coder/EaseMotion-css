import { describe, it, expect, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("EaseMotion-css Modal Focus Trap Tests", () => {
  let dom;
  let window;
  let document;

  beforeAll(() => {
    dom = new JSDOM(
      `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="modal1" class="ease-modal-overlay is-active">
            <div class="ease-modal">
              <a id="link1" href="#">Link 1</a>
              <button id="disabledBtn" disabled>Disabled Button</button>
              <input id="input1" type="text" />
              <button id="enabledBtn">Enabled Button</button>
            </div>
          </div>
        </body>
      </html>
    `,
      { runScripts: "outside-only" }
    );

    window = dom.window;
    document = window.document;

    // Load and execute modal.js in the JSDOM context
    const modalJsCode = readFileSync(
      resolve(__dirname, "../core/modal.js"),
      "utf8"
    );

    // Polyfill CSS.escape just in case jsdom does not define it globally
    const CSSPolyfill = {
      escape: (val) =>
        val.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "\\$1"),
    };

    // Run script within local scope where window, document, and CSS resolve to jsdom instances
    const scriptFunc = new Function("window", "document", "CSS", modalJsCode);
    scriptFunc(window, document, CSSPolyfill);
  });

  it("should skip disabled elements in focus trap", () => {
    window.location.hash = "#modal1";

    const link1 = document.getElementById("link1");
    const enabledBtn = document.getElementById("enabledBtn");

    // Focus enabledBtn (the last active focusable element)
    enabledBtn.focus();
    expect(document.activeElement).toBe(enabledBtn);

    // Dispatch Tab keydown event
    const tabEvent = new window.KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(tabEvent);

    // Focus should wrap back to link1, skipping disabledBtn
    expect(document.activeElement).toBe(link1);

    // Focus link1 (the first active focusable element)
    link1.focus();
    expect(document.activeElement).toBe(link1);

    // Dispatch Shift+Tab keydown event
    const shiftTabEvent = new window.KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(shiftTabEvent);

    // Focus should wrap backwards to enabledBtn, skipping disabledBtn
    expect(document.activeElement).toBe(enabledBtn);
  });
});
