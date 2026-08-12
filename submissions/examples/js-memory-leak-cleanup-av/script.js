/**
 * JS Memory Leak Cleanup Architecture Proposal
 * Demonstrates strictly removing global event listeners to proactively prevent SPA memory leaks.
 */

// ❌ BAD: Legacy Approach (Causes severe memory leaks in modern SPAs like React/Vue)
/*
function initLegacyComponent() {
  // Developer carelessly uses an anonymous arrow function
  window.addEventListener('scroll', () => {
    console.log('Scrolling...');
  });
  
  // Later, when the component unmounts upon page navigation...
  // It is mathematically IMPOSSIBLE to call removeEventListener on an anonymous function.
  // The global event listener becomes permanently orphaned in the browser's memory!
}
*/

// ✅ GOOD: Modern Approach (Flawless Garbage Collection)
class ModernComponent {
  constructor() {
    this.statusLog = document.getElementById('status-log');
    
    // We strictly bind the method to the class instance so the exact physical memory 
    // reference is permanently saved. This allows us to perfectly detach it later.
    this.handleScroll = this.handleScroll.bind(this);
  }

  mount() {
    // Attach the referenced function to the global window
    window.addEventListener('scroll', this.handleScroll);
    this.statusLog.innerHTML = 'Status: Component Mounted! Scroll to trigger events. <br><br> <strong style="color: #166534;">✅ window.addEventListener successfully attached.</strong>';
    console.log('[Component Mounted] Global scroll listener attached.');
  }

  unmount() {
    // We physically pass the exact memory reference back to removeEventListener.
    // The browser's garbage collector can now flawlessly destroy the listener!
    window.removeEventListener('scroll', this.handleScroll);
    this.statusLog.innerHTML = 'Status: Component Unmounted. <br><br> <strong style="color: #e11d48;">✅ window.removeEventListener flawlessly executed. Zero memory leaks!</strong>';
    console.log('[Component Unmounted] Global scroll listener cleanly eradicated.');
  }

  handleScroll() {
    console.log(`[Component Event] Window mathematically scrolled at ${new Date().toLocaleTimeString()}`);
  }
}

// Demo Wiring Logic
document.addEventListener('DOMContentLoaded', () => {
  const component = new ModernComponent();
  const mountBtn = document.getElementById('mount-btn');
  const unmountBtn = document.getElementById('unmount-btn');

  mountBtn.addEventListener('click', () => {
    component.mount();
    mountBtn.disabled = true;
    unmountBtn.disabled = false;
  });

  unmountBtn.addEventListener('click', () => {
    component.unmount();
    mountBtn.disabled = false;
    unmountBtn.disabled = true;
  });
});
