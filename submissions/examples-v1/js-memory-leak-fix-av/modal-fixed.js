/*
  JS Memory Leak Fix Proposal
  Demonstrates an init/destroy pattern for global event listeners.
*/

const EaseModal = (function () {
  'use strict';

  let initialized = false;

  // Named handler functions are REQUIRED so they can be explicitly removed later
  function handleHashChange() {
    console.log("[EaseModal] Hash changed - verifying modal state...");
    // Modal logic here...
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      console.log("[EaseModal] Escape pressed - closing active modals...");
    }
  }

  return {
    /**
     * Mounts the global event listeners.
     * Safe to call multiple times in React/Vue (idempotent).
     */
    init: function () {
      if (initialized) return;
      
      window.addEventListener('hashchange', handleHashChange);
      document.addEventListener('keydown', handleKeyDown);
      
      initialized = true;
      console.log("✅ EaseModal listeners MOUNTED.");
    },

    /**
     * Completely removes all global event listeners.
     * CRITICAL for SPAs (React, Vue, Next.js) when a component unmounts.
     */
    destroy: function () {
      if (!initialized) return;

      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('keydown', handleKeyDown);
      
      initialized = false;
      console.log("🛑 EaseModal listeners DESTROYED (Memory Leak Prevented).");
    }
  };
})();
