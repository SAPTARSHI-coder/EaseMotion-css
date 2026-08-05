/**
 * JS DOM Thrashing Architecture Proposal
 * Demonstrates strictly utilizing requestAnimationFrame to completely eliminate CPU rendering bottlenecks.
 */

document.addEventListener('DOMContentLoaded', () => {
  const legacyLog = document.getElementById('legacy-log');
  const legacyCountEl = document.getElementById('legacy-count');
  const modernLog = document.getElementById('modern-log');
  const modernCountEl = document.getElementById('modern-count');
  
  let legacyCount = 0;
  let modernCount = 0;

  // ❌ BAD: Legacy Raw Listener (Causes catastrophic DOM Thrashing and frame drops)
  window.addEventListener('resize', () => {
    // This violently fires dozens of times per second, completely ignoring the monitor's physical refresh rate
    legacyCount++;
    legacyCountEl.innerText = legacyCount;
    
    // In a real app, heavy DOM layout calculations happen here, completely crashing the thread
    const div = document.createElement('div');
    div.innerText = `[Legacy] Heavy Math calculation #${legacyCount} executed!`;
    legacyLog.prepend(div);
  });

  // ✅ GOOD: Modern rAF Throttled Listener (Mathematically perfect 60fps pacing)
  let isTicking = false;
  
  window.addEventListener('resize', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        // The browser engine natively waits until it's mathematically ready to paint the next frame!
        modernCount++;
        modernCountEl.innerText = modernCount;
        
        const div = document.createElement('div');
        div.innerText = `[Modern] Synchronized calculation #${modernCount} executed!`;
        modernLog.prepend(div);
        
        isTicking = false; // Reset the execution lock
      });
      isTicking = true; // Lock the execution tightly until the very next frame
    }
  });
});
