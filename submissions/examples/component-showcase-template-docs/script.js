/**
 * EaseMotion CSS Component Contribution Guide & Showcase Template
 * File: script.js
 * Folder: submissions/examples/component-showcase-template-docs/
 *
 * Zero-dependency Vanilla JS module controlling the Environment Inspector
 * toolbar, interactive showcase component, and benchmark code viewer.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. DOM SELECTORS & STATE ────────────────────────────────────
  const htmlRoot = document.documentElement;

  // Inspector Elements
  const themeSelect = document.getElementById('inspector-theme-select');
  const dirBtn = document.getElementById('inspector-dir-toggle');
  const dirLabel = document.getElementById('dir-state-label');
  const motionBtn = document.getElementById('inspector-motion-toggle');
  const motionLabel = document.getElementById('motion-state-label');
  const viewportBtns = document.querySelectorAll('.inspector-pill-btn');
  const sandboxContainer = document.getElementById('sandbox-container');
  const viewportIndicator = document.getElementById('viewport-width-indicator');
  const inspectBtn = document.getElementById('inspector-inspect-btn');
  const resetBtn = document.getElementById('inspector-reset-btn');

  // Modal Elements
  const modalBackdrop = document.getElementById('inspector-modal-backdrop');
  const modal = document.getElementById('inspector-modal');
  const modalCloseBtn = document.getElementById('inspector-modal-close');
  const modalTabs = document.querySelectorAll('.modal-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const liveTokensGrid = document.getElementById('live-tokens-grid');
  const readmeTextarea = document.getElementById('readme-template-textarea');
  const copyReadmeBtn = document.getElementById('copy-readme-btn');
  const copyReadmeTextareaBtn = document.getElementById('copy-readme-textarea-btn');

  // Showcase Component Elements
  const demoCard = document.querySelector('.em-card');
  const demoGlowToggle = document.getElementById('demo-glow-toggle');
  const demoPulseToggle = document.getElementById('demo-pulse-toggle');
  const demoStatusBadge = document.getElementById('demo-status-badge');
  const accordionTrigger = document.getElementById('demo-accordion-trigger');
  const accordionContent = document.getElementById('demo-accordion-content');
  const primaryActionBtn = document.getElementById('demo-primary-action');
  const secondaryActionBtn = document.getElementById('demo-secondary-action');
  const toastRegion = document.getElementById('em-toast-region');

  // ── 2. TOAST NOTIFICATION SYSTEM ─────────────────────────────────
  function showToast(message, duration = 3000) {
    if (!toastRegion) return;

    const toast = document.createElement('div');
    toast.className = 'em-toast';
    toast.role = 'status';
    toast.innerHTML = `
      <span aria-hidden="true">✨</span>
      <span>${escapeHTML(message)}</span>
    `;

    toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.addEventListener('transitionend', () => toast.remove());
    }, duration);
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // ── 3. MAINTAINER INSPECTOR BAR CONTROLS ─────────────────────────

  // Theme Switcher
  themeSelect?.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    htmlRoot.setAttribute('data-theme', selectedTheme);
    showToast(`Theme switched to: ${selectedTheme}`);
    updateTokensGrid();
  });

  // RTL / LTR Toggle
  dirBtn?.addEventListener('click', () => {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    htmlRoot.setAttribute('dir', newDir);
    dirLabel.textContent = newDir.toUpperCase();
    dirBtn.setAttribute('aria-pressed', newDir === 'rtl');
    
    showToast(`Directionality set to: ${newDir.toUpperCase()}`);
  });

  // Reduced Motion Simulator Toggle
  motionBtn?.addEventListener('click', () => {
    const currentMotion = htmlRoot.getAttribute('data-motion') || 'normal';
    const newMotion = currentMotion === 'normal' ? 'reduced' : 'normal';

    htmlRoot.setAttribute('data-motion', newMotion);
    motionLabel.textContent = newMotion === 'reduced' ? 'Reduced' : 'Normal';
    motionBtn.setAttribute('aria-pressed', newMotion === 'reduced');

    showToast(`Motion preference set to: ${newMotion}`);
  });

  // Viewport Preset Switcher
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const preset = btn.dataset.viewport;
      sandboxContainer.setAttribute('data-viewport-size', preset);

      const labels = {
        full: 'Full Width (100%)',
        desktop: 'Desktop Benchmark (1200px)',
        tablet: 'Tablet Benchmark (768px)',
        mobile: 'Mobile Benchmark (375px)'
      };

      if (viewportIndicator) {
        viewportIndicator.textContent = labels[preset] || preset;
      }

      showToast(`Viewport preset: ${labels[preset]}`);
    });
  });

  // Reset Settings
  resetBtn?.addEventListener('click', () => {
    htmlRoot.setAttribute('data-theme', 'dark');
    htmlRoot.setAttribute('dir', 'ltr');
    htmlRoot.setAttribute('data-motion', 'normal');

    if (themeSelect) themeSelect.value = 'dark';
    if (dirLabel) dirLabel.textContent = 'LTR';
    if (dirBtn) dirBtn.setAttribute('aria-pressed', 'false');
    if (motionLabel) motionLabel.textContent = 'Normal';
    if (motionBtn) motionBtn.setAttribute('aria-pressed', 'false');

    viewportBtns.forEach(b => b.classList.remove('active'));
    const fullBtn = document.querySelector('.inspector-pill-btn[data-viewport="full"]');
    if (fullBtn) fullBtn.classList.add('active');
    if (sandboxContainer) sandboxContainer.setAttribute('data-viewport-size', 'full');
    if (viewportIndicator) viewportIndicator.textContent = 'Full Width (100%)';

    showToast('Reset all inspector options to benchmark defaults');
    updateTokensGrid();
  });

  // ── 4. SHOWCASE COMPONENT INTERACTION LOGIC ──────────────────────

  // Card Glow Aura Switch
  demoGlowToggle?.addEventListener('click', () => {
    const isChecked = demoGlowToggle.getAttribute('aria-checked') === 'true';
    const nextState = !isChecked;

    demoGlowToggle.setAttribute('aria-checked', String(nextState));
    if (demoCard) demoCard.setAttribute('data-glow', String(nextState));

    showToast(`Glow aura ${nextState ? 'enabled' : 'disabled'}`);
  });

  // Card Pulse Animation Switch
  demoPulseToggle?.addEventListener('click', () => {
    const isChecked = demoPulseToggle.getAttribute('aria-checked') === 'true';
    const nextState = !isChecked;

    demoPulseToggle.setAttribute('aria-checked', String(nextState));
    if (demoStatusBadge) demoStatusBadge.setAttribute('data-pulse', String(nextState));

    showToast(`Badge pulse animation ${nextState ? 'active' : 'paused'}`);
  });

  // Accordion Expand/Collapse
  accordionTrigger?.addEventListener('click', () => {
    const isExpanded = accordionTrigger.getAttribute('aria-expanded') === 'true';
    const nextExpanded = !isExpanded;

    accordionTrigger.setAttribute('aria-expanded', String(nextExpanded));
    if (accordionContent) {
      accordionContent.hidden = !nextExpanded;
    }
  });

  // Primary Action Button (Ripple & Toast)
  primaryActionBtn?.addEventListener('click', (e) => {
    createRipple(e, primaryActionBtn);
    showToast('✓ Primary action benchmark executed successfully!');
  });

  function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('em-btn__ripple-circle');

    const rippleContainer = button.querySelector('.em-btn__ripple') || button;
    rippleContainer.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  }

  // Secondary Action Button (Copy Snippet)
  secondaryActionBtn?.addEventListener('click', () => {
    const snippet = `.em-card {
  background: var(--em-bg-surface-elevated);
  border: 1px solid var(--em-border-mid);
  border-radius: var(--em-radius-lg);
  box-shadow: var(--em-shadow-md);
}`;
    navigator.clipboard.writeText(snippet).then(() => {
      showToast('📋 Component CSS snippet copied to clipboard!');
    }).catch(() => {
      showToast('Copied code snippet!');
    });
  });

  // ── 5. CODE & TOKEN INSPECTOR MODAL ──────────────────────────────

  function openModal() {
    if (!modal) return;
    modalBackdrop?.removeAttribute('hidden');
    modal.removeAttribute('hidden');
    inspectBtn?.setAttribute('aria-expanded', 'true');
    updateTokensGrid();
    populateReadmeTemplate();
    modalCloseBtn?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modalBackdrop?.setAttribute('hidden', 'true');
    modal.setAttribute('hidden', 'true');
    inspectBtn?.setAttribute('aria-expanded', 'false');
    inspectBtn?.focus();
  }

  inspectBtn?.addEventListener('click', openModal);
  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal?.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Modal Tab Switching
  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.setAttribute('hidden', 'true'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetId = tab.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);
      targetPanel?.removeAttribute('hidden');
    });
  });

  // Populate Token Swatches dynamically from computed CSS styles
  function updateTokensGrid() {
    if (!liveTokensGrid) return;
    liveTokensGrid.innerHTML = '';

    const computedStyles = getComputedStyle(htmlRoot);
    const tokenNames = [
      '--em-bg-app',
      '--em-bg-surface',
      '--em-bg-surface-elevated',
      '--em-clr-primary',
      '--em-clr-accent',
      '--em-clr-green',
      '--em-clr-gold',
      '--em-text-primary',
      '--em-text-secondary',
      '--em-radius-md',
      '--em-ease-spring'
    ];

    tokenNames.forEach(name => {
      const val = computedStyles.getPropertyValue(name).trim();
      const card = document.createElement('div');
      card.className = 'token-swatch-card';

      const isColor = val.startsWith('#') || val.startsWith('rgb') || val.startsWith('hsl') || val.startsWith('rgba');
      const bgStyle = isColor ? val : 'var(--em-bg-interactive)';

      card.innerHTML = `
        <div class="swatch-box" style="background: ${bgStyle};"></div>
        <div class="token-info">
          <span class="token-name">${name}</span>
          <span class="token-val">${val || 'inherited'}</span>
        </div>
      `;
      liveTokensGrid.appendChild(card);
    });
  }

  // Standard README Template Master Copy
  const MASTER_README_TEMPLATE = `# 📦 Component Name (e.g. EaseMotion Elevation Card)

> A short 1-2 sentence description of what this EaseMotion CSS component does and its target use cases.

---

## 📖 What does this do?
Provide a detailed explanation of the component's interactive behaviors, visual presentation, and design rationale.

---

## 🎯 How is it used?

### HTML Structure
\`\`\`html
<article class="em-card" role="region" aria-labelledby="card-title">
  <header class="em-card__header">
    <h2 id="card-title">Card Title</h2>
  </header>
  <div class="em-card__body">
    <!-- Component Content -->
  </div>
</article>
\`\`\`

---

## ✨ Key Highlights
| Feature | Implementation |
|---------|----------------|
| **HTML5 Semantics** | Built using clean semantic tags and ARIA landmarks |
| **Theme Support** | Supports Light Mode, Dark Mode, and High Contrast via CSS tokens |
| **RTL Ready** | Direction-aware layout using CSS Logical Properties |
| **Reduced Motion** | Handles \`prefers-reduced-motion: reduce\` gracefully |
| **Zero Dependencies** | Pure Vanilla CSS and lightweight JS |

---

## 🎨 CSS Custom Properties
\`\`\`css
:root {
  --em-bg-surface: #171b26;
  --em-clr-primary: #6366f1;
  --em-radius-md: 12px;
}
\`\`\`

---

## ♿ Accessibility Checklist
- [x] Includes proper ARIA tags (\`role\`, \`aria-expanded\`, \`aria-label\`)
- [x] Keyboard focus visible outlines (\`:focus-visible\`)
- [x] High-contrast color compliance (>= 4.5:1 ratio)
- [x] Screen reader visually hidden utility support
`;

  function populateReadmeTemplate() {
    if (readmeTextarea) {
      readmeTextarea.value = MASTER_README_TEMPLATE;
    }
  }

  copyReadmeBtn?.addEventListener('click', copyReadme);
  copyReadmeTextareaBtn?.addEventListener('click', copyReadme);

  function copyReadme() {
    navigator.clipboard.writeText(MASTER_README_TEMPLATE).then(() => {
      showToast('📋 README.md template copied to clipboard!');
    }).catch(() => {
      showToast('Copied README template!');
    });
  }
});
