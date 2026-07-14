/**
 * EaseMotion CSS — Bug Fix Demonstration: #40061
 * submissions/scripts/optimizer-regex-fix-ksk/optimizer-regex-fix.js
 *
 * Problem:
 *   extractEaseClasses() and extractEmAttributes() in
 *   easemotion/engine/optimizer.js use regexes that require the `=`
 *   sign to have no surrounding whitespace. HTML allows spaces around `=`,
 *   so valid markup like:
 *     <div class = "ease-fade-in">
 *     <div em = "fade-in">
 *   is silently missed by the optimizer.
 *
 * Root Cause (from optimizer.js):
 *   Line 24:  /\bem=(['"])([^"']+)\1/g          ← no \s* around =
 *   Line 40:  /class=(['"])([^"']+)\1/g          ← no \s* around =
 *
 * Fix:
 *   Add \s* before and after = in both patterns.
 *
 * Run this file to see a before/after demonstration:
 *   node optimizer-regex-fix.js
 */

'use strict';

// ── BUGGY implementations (current in optimizer.js) ─────────────────────────

function extractEmAttributes_BUGGY(html) {
  const values = [];
  const re = /\bem=(['"])([^"']+)\1/g;
  let m;
  while ((m = re.exec(html)) !== null) values.push(m[2]);
  return values;
}

function extractEaseClasses_BUGGY(html) {
  const found = new Set();
  const classRe = /class=(['"])([^"']+)\1/g;
  let m;
  while ((m = classRe.exec(html)) !== null) {
    m[2].split(/\s+/).forEach(cls => { if (cls.startsWith('ease-')) found.add(cls); });
  }
  return found;
}

// ── FIXED implementations ────────────────────────────────────────────────────
// Change: add \s* around the = in both patterns

function extractEmAttributes_FIXED(html) {
  const values = [];
  const re = /\bem\s*=\s*(['"])([^"']+)\1/g;   // ← \s* added
  let m;
  while ((m = re.exec(html)) !== null) values.push(m[2]);
  return values;
}

function extractEaseClasses_FIXED(html) {
  const found = new Set();
  const classRe = /class\s*=\s*(['"])([^"']+)\1/g;  // ← \s* added
  let m;
  while ((m = classRe.exec(html)) !== null) {
    m[2].split(/\s+/).forEach(cls => { if (cls.startsWith('ease-')) found.add(cls); });
  }
  return found;
}

// ── Test Cases ───────────────────────────────────────────────────────────────
const TEST_HTML_CLASS_STANDARD = '<div class="ease-fade-in ease-hover-grow"></div>';
const TEST_HTML_CLASS_SPACED   = '<div class = "ease-fade-in ease-hover-grow"></div>';
const TEST_HTML_EM_STANDARD    = '<div em="fade-in"></div>';
const TEST_HTML_EM_SPACED      = '<div em = "fade-in"></div>';

// ── Runner ───────────────────────────────────────────────────────────────────
function run() {
  const pass = (label, got, expected) => {
    const ok = JSON.stringify([...got]) === JSON.stringify(expected);
    console.log(`  [${ok ? '✅ PASS' : '❌ FAIL'}] ${label}`);
    if (!ok) {
      console.log(`         Expected: ${JSON.stringify(expected)}`);
      console.log(`         Got     : ${JSON.stringify([...got])}`);
    }
  };

  console.log('\n══════════════════════════════════════════════════');
  console.log('  Bug Fix Demo — Issue #40061');
  console.log('  Spaced = in HTML attributes not matched');
  console.log('══════════════════════════════════════════════════\n');

  console.log('── BUGGY (current optimizer.js) ──────────────────');
  pass('class standard (no space)', extractEaseClasses_BUGGY(TEST_HTML_CLASS_STANDARD), ['ease-fade-in', 'ease-hover-grow']);
  pass('class spaced   (space around =)', extractEaseClasses_BUGGY(TEST_HTML_CLASS_SPACED),   ['ease-fade-in', 'ease-hover-grow']); // ← fails
  pass('em    standard (no space)', extractEmAttributes_BUGGY(TEST_HTML_EM_STANDARD), ['fade-in']);
  pass('em    spaced   (space around =)', extractEmAttributes_BUGGY(TEST_HTML_EM_SPACED),   ['fade-in']); // ← fails

  console.log('\n── FIXED (\\s* added around =) ────────────────────');
  pass('class standard (no space)', extractEaseClasses_FIXED(TEST_HTML_CLASS_STANDARD), ['ease-fade-in', 'ease-hover-grow']);
  pass('class spaced   (space around =)', extractEaseClasses_FIXED(TEST_HTML_CLASS_SPACED),   ['ease-fade-in', 'ease-hover-grow']); // ← now passes
  pass('em    standard (no space)', extractEmAttributes_FIXED(TEST_HTML_EM_STANDARD), ['fade-in']);
  pass('em    spaced   (space around =)', extractEmAttributes_FIXED(TEST_HTML_EM_SPACED),   ['fade-in']); // ← now passes

  console.log('\n── Minimal Diff to apply to optimizer.js ─────────');
  console.log(`
  Line 24  (extractEmAttributes):
  - const re = /\\bem=(['"])([^"']+)\\1/g;
  + const re = /\\bem\\s*=\\s*(['"])([^"']+)\\1/g;

  Line 40  (extractEaseClasses):
  - const classRe = /class=(['"])([^"']+)\\1/g;
  + const classRe = /class\\s*=\\s*(['"])([^"']+)\\1/g;
  `);
}

run();
