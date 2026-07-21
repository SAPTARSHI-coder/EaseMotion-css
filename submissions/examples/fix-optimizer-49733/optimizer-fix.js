/* ============================================================
   Fix for easemotion/engine/optimizer.js
   Issue: #49733
   
   Instead of naively replacing 'ease-' with 'ease-kf-' for ALL classes,
   we should only map classes that correspond to actual animations.
   ============================================================ */

// Proposed replacement for lines 105-109 in optimizeHtml (optimizer.js):
/*
for (const cls of usedClasses) {
  // Only map if it's not a common layout/styling utility class
  // This prevents ease-bg-primary from mapping to ease-kf-bg-primary
  if (!cls.match(/^ease-(bg|text|flex|grid|margin|padding|w-|h-|border|rounded|shadow|opacity|cursor)/)) {
    const kf = cls.replace('ease-', 'ease-kf-');
    usedKeyframes.add(kf);
  }
}
*/
