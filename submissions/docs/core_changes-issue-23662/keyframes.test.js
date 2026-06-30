import { describe, it, expect, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("EaseMotion-css Keyframes Unit Tests", () => {
  let dom;
  let document;
  let css;
  let styleSheet;

  beforeAll(() => {
    const projectRoot = resolve(
      __dirname,
      __dirname.includes("submissions") ? "../.." : ".."
    );
    const coreDir = resolve(projectRoot, "core");
    const variables = readFileSync(resolve(coreDir, "variables.css"), "utf8");
    const animations = readFileSync(resolve(coreDir, "animations.css"), "utf8");
    const utilities = readFileSync(resolve(coreDir, "utilities.css"), "utf8");

    css = variables + animations + utilities;
    dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");
    document = dom.window.document;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    styleSheet = document.styleSheets[0];
  });

  const getKeyframeRules = () => {
    const rules = [];
    const findKeyframes = (cssRules) => {
      for (const rule of cssRules) {
        // CSSKeyframesRule type is 7 (or check constructor name)
        if (rule.type === 7 || rule.constructor.name === "CSSKeyframesRule") {
          rules.push(rule);
        } else if (rule.cssRules) {
          findKeyframes(rule.cssRules);
        }
      }
    };
    findKeyframes(styleSheet.cssRules);
    return rules;
  };

  it("should find all core keyframe rules in the stylesheet", () => {
    const keyframes = getKeyframeRules();
    const names = keyframes.map((kf) => kf.name);

    // Expect keyframes for essential animations to exist
    expect(names).toContain("ease-kf-fade-in");
    expect(names).toContain("ease-kf-fade-out");
    expect(names).toContain("ease-kf-slide-up");
    expect(names).toContain("ease-kf-slide-down");
    expect(names).toContain("ease-kf-bounce");
    expect(names).toContain("ease-kf-pulse");
    expect(names).toContain("ease-kf-rotate");
    expect(names).toContain("ease-kf-ping");
    expect(names).toContain("ease-kf-shake");
    expect(names).toContain("ease-kf-zoom-in");
    expect(names).toContain("ease-kf-zoom-out");
    expect(names).toContain("ease-kf-bounce-in");
    expect(names).toContain("ease-kf-bounce-button-exit");
  });

  it("should verify the correct structure of ease-kf-fade-in keyframe rule", () => {
    const keyframes = getKeyframeRules();
    const fadeIn = keyframes.find((kf) => kf.name === "ease-kf-fade-in");

    expect(fadeIn).toBeDefined();

    // Check that there are starting and ending keyframe blocks
    const keyframeList = Array.from(fadeIn.cssRules);
    expect(keyframeList.length).toBeGreaterThanOrEqual(2);

    const fromKey = keyframeList.find(
      (r) => r.keyText === "from" || r.keyText === "0%"
    );
    const toKey = keyframeList.find(
      (r) => r.keyText === "to" || r.keyText === "100%"
    );

    expect(fromKey).toBeDefined();
    expect(toKey).toBeDefined();

    expect(fromKey.style.opacity).toBe("0");
    expect(toKey.style.opacity).toBe("1");
  });

  it("should verify structure of ease-kf-bounce keyframe rule", () => {
    const keyframes = getKeyframeRules();
    const bounce = keyframes.find((kf) => kf.name === "ease-kf-bounce");

    expect(bounce).toBeDefined();
    const keyframeList = Array.from(bounce.cssRules);

    // Bounce has 0%, 50%, 100%
    const keysText = keyframeList.map((r) => r.keyText);
    expect(keysText).toContain("0%, 100%");
    expect(keysText).toContain("50%");

    const halfWay = keyframeList.find((r) => r.keyText === "50%");
    expect(halfWay.style.transform).toContain("translate3d(0, -20px, 0)");
  });

  it("should verify ease-kf-bounce-in entry structure", () => {
    const keyframes = getKeyframeRules();
    const bounceIn = keyframes.find((kf) => kf.name === "ease-kf-bounce-in");

    expect(bounceIn).toBeDefined();
    const keyframeList = Array.from(bounceIn.cssRules);

    const startKey = keyframeList.find((r) => r.keyText === "0%");
    const endKey = keyframeList.find((r) => r.keyText === "100%");

    expect(startKey.style.opacity).toBe("0");
    expect(startKey.style.transform).toContain("scale(0)");
    expect(endKey.style.opacity).toBe("1");
    expect(endKey.style.transform).toContain("scale(1)");
  });

  it("should check if element animated classes trigger the keyframe animations", () => {
    // Check .ease-bounce-in configuration in CSS
    const rules = Array.from(styleSheet.cssRules);

    let bounceInClassRule = null;
    const findClassRule = (cssRules) => {
      for (const rule of cssRules) {
        if (rule.selectorText === ".ease-bounce-in") {
          bounceInClassRule = rule;
        } else if (rule.cssRules) {
          findClassRule(rule.cssRules);
        }
      }
    };
    findClassRule(rules);

    expect(bounceInClassRule).toBeDefined();
    expect(bounceInClassRule.style.animation).toContain("ease-kf-bounce-in");
  });
});
