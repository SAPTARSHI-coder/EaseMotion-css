# EaseTabs Component (Tab Navigation System)

A modern, highly customizable, and WAI-ARIA accessible tabs navigation system for EaseMotion CSS. It provides smooth hardware-accelerated transitions, dynamic sliding indicators, responsive stackable layouts, and elegant keyframe entry animations.

---

## Features

- **Sliding Active Indicator**: Smooth hardware-accelerated sliding bar (or pill background capsule) transitions on active selection for horizontal, underline, pill, vertical, and minimal layouts.
- **Accessible & WAI-ARIA Compliant**: Fully supports keyboard navigation rules (Arrow Left/Right for horizontal lists, Arrow Up/Down for vertical lists, Home/End for bounding jumps) and manages standard ARIA roles (`role="tab"`, `role="tablist"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `hidden`).
- **Responsive Fluid Layout**: Adapts gracefully to all viewports. Horizontal list wraps into horizontal scroll containers on mobile viewports; vertical lists stack horizontally on tablet/mobile screens.
- **SaaS UI Aesthetic**: Designed using premium EaseMotion CSS variables, subtle glassmorphism layers, dark-mode tokens, active glows, and clean margins.
- **No External Libraries**: 100% vanilla CSS and lightweight interaction scripts.

---

## Variants

1. **Basic Tabs** (`.ease-tabs-basic`): Classic clean tab list with container backgrounds on active states.
2. **Underline Tabs** (`.ease-tabs-underline`): Sleek bottom-border design featuring a sliding underline active bar.
3. **Pill Tabs** (`.ease-tabs-pill`): Button-like pills contained in a solid wrapper with a glassmorphic background capsule that slides under active choices.
4. **Vertical Tabs** (`.ease-tabs-vertical`): Side-navigation stacked sidebar layout with a vertical active indicator bar that slides down. Stack scales horizontally on mobile devices.
5. **Icon Tabs** (`.ease-tabs-icon`): Icons (SVGs) combined alongside labels.
6. **Dashboard Tabs** (`.ease-tabs-dashboard`): Premium SaaS mockup cards container hosting grid stats, interactive chart bars, app connection integrations, billing grids, and profile forms.
7. **Legacy Compatibilities**: Standard supports for `Card Tabs` (`.ease-tabs-card`), `Gradient Tabs` (`.ease-tabs-gradient`), `Minimal Tabs` (`.ease-tabs-minimal`), and custom wrapper overrides (`.ease-tabs-dark`).

---

## Usage Example

### HTML Layout Structure

```html
<!-- Base Container -->
<div class="ease-tabs ease-tabs-underline">
  <!-- Tab List (role="tablist") -->
  <div class="ease-tabs-list" role="tablist" aria-label="Settings categories">
    <button class="ease-tab-btn is-active" 
            role="tab" 
            aria-selected="true" 
            aria-controls="panel-profile" 
            id="tab-profile">
      Profile
    </button>
    <button class="ease-tab-btn" 
            role="tab" 
            aria-selected="false" 
            aria-controls="panel-security" 
            id="tab-security" 
            tabindex="-1">
      Security
    </button>

    <!-- Sliding Active Line Indicator -->
    <div class="ease-tabs-indicator"></div>
  </div>

  <!-- Tab Panels Wrapper -->
  <div class="ease-tabs-panels">
    <!-- Panel 1 (role="tabpanel") -->
    <div id="panel-profile" class="ease-tab-panel is-active" role="tabpanel" aria-labelledby="tab-profile">
      <h3>Profile Options</h3>
      <p>Configure details here.</p>
    </div>
    <!-- Panel 2 (role="tabpanel") -->
    <div id="panel-security" class="ease-tab-panel" role="tabpanel" aria-labelledby="tab-security" hidden>
      <h3>Security Policies</h3>
      <p>Configure credentials here.</p>
    </div>
  </div>
</div>
```

### Vanilla JavaScript Helper

The following helper script handles the ARIA state switching, toggles display toggles, coordinates the active indicator's bounding rectangles translation, and coordinates keyboard navigation.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.ease-tabs');

  tabContainers.forEach(container => {
    const tabList = container.querySelector('.ease-tabs-list');
    const tabButtons = Array.from(tabList.querySelectorAll('.ease-tab-btn'));
    const tabPanels = Array.from(container.querySelectorAll('.ease-tab-panel'));
    const indicator = tabList.querySelector('.ease-tabs-indicator');

    const updateIndicator = () => {
      if (!indicator) return;
      const activeBtn = tabList.querySelector('.ease-tab-btn.is-active, .ease-tab-btn.active');
      if (!activeBtn) {
        indicator.style.opacity = '0';
        return;
      }
      
      indicator.style.opacity = '1';
      const listRect = tabList.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const isVertical = container.classList.contains('ease-tabs-vertical');

      if (isVertical && window.innerWidth > 768) {
        indicator.style.width = '';
        indicator.style.left = '';
        indicator.style.height = `${btnRect.height}px`;
        indicator.style.transform = `translateY(${btnRect.top - listRect.top}px)`;
      } else {
        indicator.style.height = '';
        indicator.style.top = '';
        indicator.style.width = `${btnRect.width}px`;
        indicator.style.transform = `translateX(${btnRect.left - listRect.left}px)`;
      }
    };

    const switchTab = (newActiveBtn) => {
      if (!newActiveBtn) return;
      const targetPanelId = newActiveBtn.getAttribute('aria-controls');

      tabButtons.forEach(btn => {
        const isActive = btn === newActiveBtn;
        btn.classList.toggle('is-active', isActive);
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      tabPanels.forEach(panel => {
        const isActive = panel.id === targetPanelId;
        panel.classList.toggle('is-active', isActive);
        panel.classList.toggle('active', isActive);
        if (isActive) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      updateIndicator();
    };

    tabList.addEventListener('click', (e) => {
      const clickedBtn = e.target.closest('.ease-tab-btn');
      if (clickedBtn && tabButtons.includes(clickedBtn)) switchTab(clickedBtn);
    });

    tabList.addEventListener('keydown', (e) => {
      const activeBtn = tabList.querySelector('.ease-tab-btn.is-active');
      if (!activeBtn) return;

      const currentIndex = tabButtons.indexOf(activeBtn);
      let nextIndex = currentIndex;
      const isVertical = container.classList.contains('ease-tabs-vertical') && window.innerWidth > 768;

      if (isVertical) {
        if (e.key === 'ArrowDown') nextIndex = (currentIndex + 1) % tabButtons.length;
        else if (e.key === 'ArrowUp') nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      } else {
        if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabButtons.length;
        else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      }

      if (e.key === 'Home') nextIndex = 0;
      else if (e.key === 'End') nextIndex = tabButtons.length - 1;

      if (nextIndex !== currentIndex) {
        e.preventDefault();
        tabButtons[nextIndex].focus();
        switchTab(tabButtons[nextIndex]);
      }
    });

    // Auto-align indicator on startup & viewport resize
    setTimeout(updateIndicator, 150);
    window.addEventListener('resize', updateIndicator);
  });
});
```

---

## Customization Guide

You can easily override spacing, border-radii, active highlights, and custom indicator transitions via CSS variables in your layout:

```css
:root {
  /* Customize tab padding rules */
  --ease-tab-padding: 12px 20px;
  
  /* Modify the border radius values */
  --ease-tab-radius: 12px;
  
  /* Redefine indicator highlights */
  --ease-tab-indicator-bg: #10b981;
  --ease-tab-text-active: #10b981;
}
```
