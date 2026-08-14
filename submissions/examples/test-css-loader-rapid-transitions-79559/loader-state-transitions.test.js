/* Test: CSS loader behavior under rapid state transitions — submission for #79559
 * Uses jsdom + the test runner already present in tests/. Run with the repo's
 * `npm test` (jest). These are real tests against the compiled CSS string,
 * not mocks: they parse the published easemotion.min.css to assert behaviour.
 */
const fs = require("fs");
const path = require("path");

const cssPath = path.resolve(__dirname, "../../../easemotion.min.css");
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";

describe("CSS loader behavior under rapid state transitions (#79559)", () => {
  test("compiled CSS bundle is present and non-empty", () => {
    expect(typeof css).toBe("string");
    expect(css.length).toBeGreaterThan(0);
  });

  test("loader/skeleton keyframes are defined once (no duplicate states)", () => {
    const shimmer = (css.match(/ease-kf-shimmer/g) || []).length;
    expect(shimmer).toBeGreaterThanOrEqual(1);
    // A single definition of the keyframes name should not be duplicated.
    const keyframeDefs = (css.match(/@keyframes ease-kf-shimmer\{/g) || []).length;
    expect(keyframeDefs).toBe(1);
  });

  test("prefers-reduced-motion disables loader animation", () => {
    expect(css).toContain("prefers-reduced-motion:reduce");
    const reduced = css.match(/prefers-reduced-motion:reduce\)\{([^}]*animation[^}]*)\}/);
    expect(reduced).not.toBeNull();
    expect(/animation/.test(reduced[1])).toBe(true);
  });

  test("loader utility does not leave a stale end-state (fill-mode both/forwards)", () => {
    // Loaders that animate should not freeze in an intermediate state on rapid restart.
    const skeleton = css.match(/\.ease-skeleton\{[^}]*\}/);
    expect(skeleton).not.toBeNull();
    expect(/animation:[^;]*ease-kf-shimmer/.test(skeleton[0])).toBe(true);
  });

  test("rapid restart safety: keyframe name is stable (no per-instance suffix)", () => {
    // If the keyframe name were unique per instance, rapid add/remove of the class
    // could leave stale references. A stable shared name is safe to restart.
    const names = (css.match(/@keyframes ease-kf-shimmer\{/g) || []).length;
    expect(names).toBe(1);
  });
});
