/* ============================================================
   Fix for easemotion/engine/optimizer.js — pruneClasses()
   Issue: #XXXXX
   
   BUG: The regex in pruneClasses() (line 79) uses:
     /\.(ease-[\w-]+)\s*\{[^{}]*\}/g
   
   This only captures simple single-class rules. It DESTROYS
   any rule whose selector ends with a pseudo-class or 
   contains a descendant/child combinator, because the regex
   only captures the BASE class name, not the full selector.
   
   PROOF:
     Input CSS:
       .ease-bounce .ease-bounce-inner { transform: scale(1.1); }
   
     Regex captures class = "ease-bounce" (from ".ease-bounce")
     but selector ".ease-bounce .ease-bounce-inner { ... }" is
     mangled — the captured block includes ".ease-bounce" part
     up to the space, leaving ".ease-bounce-inner { ... }" as 
     orphaned text that gets corrupted output.
   
   FIX: Use a full-selector-aware regex that captures the 
   entire selector before { and checks if any ease-* class 
   within it is in usedClasses.
   ============================================================ */

// Proposed replacement for pruneClasses() in optimizer.js:
export function pruneClasses(css, usedClasses) {
  // Match any top-level rule block: selector { ... }
  // Selector can contain pseudo-classes, combinators, etc.
  const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
  return css.replace(ruleRe, (block, selector, body) => {
    // Extract all ease-* class names from the full selector
    const classesInSelector = [...selector.matchAll(/\.(ease-[\w-]+)/g)].map(m => m[1]);
    // Keep the rule if ANY ease-* class it references is used
    const isUsed = classesInSelector.some(cls => usedClasses.has(cls));
    // Also keep non-ease rules (e.g. @keyframes inner blocks, :root, etc.)
    if (classesInSelector.length === 0) return block;
    return isUsed ? block : '';
  });
}
