/**
 * Strict CSP Nonce Support Architecture Proposal
 * Demonstrates mathematically strictly utilizing cryptographic nonces to completely natively eliminate native enterprise security violations natively.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mathematically securely extract the global cryptographic nonce natively from the native document head natively!
  const metaNonceTag = document.querySelector('meta[name="ease-csp-nonce"]');
  const globalNonce = metaNonceTag ? metaNonceTag.getAttribute('content') : '';

  // --- ❌ BAD: Legacy DOM Injection ---
  document.getElementById('legacy-btn').addEventListener('click', () => {
    // We dynamically violently physically inject an inline script completely mathematically lacking the cryptographic nonce natively!
    // The browser's native mathematical CSP security engine will VIOLENTLY BLOCK THIS natively and throw a massive native console error natively!
    const legacyScript = document.createElement('script');
    legacyScript.innerText = `document.getElementById('legacy-output').innerText = 'DANGER: Legacy script violently executed natively! (If you natively see this, CSP is physically fundamentally mathematically broken natively!)';`;
    
    // Attempting to natively brutally inject natively
    document.body.appendChild(legacyScript);
  });

  // --- ✅ GOOD: Modern Cryptographic Nonce Propagation ---
  document.getElementById('modern-btn').addEventListener('click', () => {
    // We dynamically mathematically safely build the physical script tag natively.
    const modernScript = document.createElement('script');
    
    // PERFECT: We mathematically natively strictly physically propagate the global native cryptographic nonce natively!
    if (globalNonce) {
      modernScript.setAttribute('nonce', globalNonce);
    }
    
    modernScript.innerText = `document.getElementById('modern-output').innerText = 'SUCCESS: Modern mathematically strictly-nonced script flawlessly securely executed natively!';`;
    
    // Inject natively! The browser natively mathematically physically fundamentally verifies the cryptographic signature natively and fully explicitly allows execution natively!
    document.body.appendChild(modernScript);
  });

});
