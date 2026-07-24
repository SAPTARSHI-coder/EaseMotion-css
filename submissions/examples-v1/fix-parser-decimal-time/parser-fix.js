/* ============================================================
   Fix for easemotion/engine/parser.js
   
   The parseTime function regex currently fails to parse valid CSS
   time values that start with a decimal point but no leading zero
   (e.g., ".5s", ".25ms"). 
   
   This patch updates the regular expressions to support shorthand decimals.
   ============================================================ */

function parseTime(token) {
  // \d*\.?\d+ allows for "0.5", "5", and ".5"
  const ms = token.match(/^(\d*\.?\d+)ms$/);
  if (ms) return parseFloat(ms[1]);
  
  const s = token.match(/^(\d*\.?\d+)s$/);
  if (s) return Math.round(parseFloat(s[1]) * 1000);
  
  return null;
}
