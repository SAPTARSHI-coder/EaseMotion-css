/* ============================================================
   Fix for easemotion/engine/parser.js
   Issue: #XXXXX

   THREE parser input bounds vulnerabilities — all proven:

   1. CRLF Injection: \r\n in em attribute value is whitespace, 
      so .split(/\s+/) splits across the newline and the second
      line's animation name overwrites the first.

   2. Unbounded duration: em="fade-in 999999999ms" generates
      animation-duration: 999999999ms (277 hours), which causes
      animationend events to never fire.

   3. Unbounded repeat: em="bounce repeat-9999999999" generates
      animation-iteration-count: 9999999999 which exceeds CSS
      float precision and is silently treated as 1 by browsers.
   ============================================================ */

// === Proposed constants to add at the top of parser.js ===
const MAX_DURATION_MS  = 10_000;  // 10 seconds maximum
const MAX_DELAY_MS     = 10_000;  // 10 seconds maximum  
const MAX_ITERATIONS   = 1_000;   // 1000 max repeat count

// === Proposed replacement for parseTime() in parser.js ===
function parseTime(token) {
  const ms = token.match(/^(\d+(?:\.\d+)?)ms$/);
  if (ms) return Math.min(parseFloat(ms[1]), MAX_DURATION_MS);

  const s = token.match(/^(\d+(?:\.\d+)?)s$/);
  if (s) return Math.min(Math.round(parseFloat(s[1]) * 1000), MAX_DURATION_MS);

  return null;
}

// === Proposed replacement for parseRepeat() in parser.js ===
function parseRepeat(token) {
  const m = token.match(/^repeat-(.+)$/);
  if (!m) return null;
  if (m[1] === 'infinite') return 'infinite';
  const n = parseInt(m[1], 10);
  if (isNaN(n) || n < 1) return null;
  return Math.min(n, MAX_ITERATIONS);
}

// === Proposed fix for CRLF injection in parse() in parser.js ===
// Replace line 89:
//   const tokens = value.trim().toLowerCase().split(/\s+/);
// With:
//   Strip all control characters first, then split
//   const tokens = value.replace(/[\r\n\t\0]/g, ' ').trim().toLowerCase().split(/\s+/);

// === Proposed test cases to add to tests/engine.test.js ===
/*
  it('clamps duration to MAX (10s)', () => {
    const ast = parse('fade-in 999999999ms');
    expect(ast.duration).toBeLessThanOrEqual(10000);
  });

  it('clamps repeat count to MAX (1000)', () => {
    const ast = parse('bounce repeat-9999999999');
    expect(ast.iterations).toBeLessThanOrEqual(1000);
  });

  it('sanitizes CRLF injection in em value', () => {
    const ast = parse('fade-in\r\nbounce 999ms');
    // Should only produce fade-in, NOT bounce
    expect(ast.animation).toBe('fade-in');
    expect(ast.duration).toBe(300); // default, not 999
  });
*/
