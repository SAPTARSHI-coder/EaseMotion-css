/**
 * EaseMotion CSS: Screen Reader Accessible Live Notification Toast Stack
 * ToastManager JavaScript class managing WCAG 2.1 AA screen reader live region announcements,
 * auto-dismiss timer pause on hover, stack index depth physics, and keyboard accessibility.
 */

class ToastManager {
  constructor() {
    this.stackContainer = document.getElementById('toast-stack');
    this.region = document.getElementById('toast-region');
    this.livePolite = document.getElementById('toast-live-polite');
    this.liveAssertive = document.getElementById('toast-live-assertive');
    this.toasts = [];
    this.idCounter = 0;
  }

  /**
   * Set Stack Placement Position (bottom-right, bottom-left, top-right, top-left)
   */
  setPosition(positionClass) {
    if (!this.region) return;
    this.region.className = `toast-region position-${positionClass}`;
  }

  /**
   * Screen Reader Live Region Announcement
   */
  announceSR(message, isAssertive = false) {
    const targetRegion = isAssertive ? this.liveAssertive : this.livePolite;
    if (!targetRegion) return;

    // Clear and set to trigger screen reader announcement
    targetRegion.textContent = '';
    setTimeout(() => {
      targetRegion.textContent = message;
    }, 50);
  }

  /**
   * Show a new Toast Notification
   * @param {Object} options - { title, message, type, duration, actionLabel, onAction }
   */
  show(options = {}) {
    const {
      title = 'Notification',
      message = '',
      type = 'info', // 'success' | 'info' | 'warning' | 'error'
      duration = 6000,
      actionLabel = null,
      onAction = null
    } = options;

    const id = ++this.idCounter;
    const isAssertive = type === 'error';

    // 1. Announce to Screen Readers
    const srAnnouncement = `${type.toUpperCase()}: ${title}. ${message}`;
    this.announceSR(srAnnouncement, isAssertive);

    // 2. Create Toast Card Element
    const toastCard = document.createElement('div');
    toastCard.className = `toast-card toast-card--${type} entering`;
    toastCard.setAttribute('data-id', id);
    toastCard.setAttribute('role', 'status');

    // Icon SVGs
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'info') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    } else if (type === 'warning') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    }

    // Inner HTML Structure
    let actionsHtml = '';
    if (actionLabel) {
      actionsHtml += `<button type="button" class="btn-toast-action" id="action-${id}">${actionLabel}</button>`;
    }

    toastCard.innerHTML = `
      <div class="toast-content-row">
        <div class="toast-icon-box">${iconSvg}</div>
        <div class="toast-text-body">
          <h3 class="toast-title">${title}</h3>
          <p class="toast-message">${message}</p>
        </div>
        <button type="button" class="btn-toast-dismiss" id="dismiss-${id}" aria-label="Dismiss notification &quot;${title}&quot;">&times;</button>
      </div>
      ${actionsHtml ? `<div class="toast-actions-row">${actionsHtml}</div>` : ''}
      ${duration > 0 ? `
        <div class="toast-progress-track">
          <div class="toast-progress-fill" style="--duration: ${duration}ms;"></div>
        </div>
      ` : ''}
    `;

    // 3. Prepend to Stack (Newest on top)
    this.stackContainer.prepend(toastCard);

    // Toast State Tracking Object
    const toastItem = {
      id,
      element: toastCard,
      duration,
      timer: null,
      startTime: Date.now(),
      remainingTime: duration,
      paused: false
    };

    this.toasts.unshift(toastItem);
    this.updateStackIndexes();

    // Remove entering class after animation finishes
    setTimeout(() => toastCard.classList.remove('entering'), 400);

    // 4. Setup Auto-Dismiss Timer with Pause/Resume logic
    if (duration > 0) {
      this.startTimer(toastItem);

      // Pause timer on hover / focus
      const pauseHandler = () => this.pauseTimer(toastItem);
      const resumeHandler = () => this.resumeTimer(toastItem);

      toastCard.addEventListener('mouseenter', pauseHandler);
      toastCard.addEventListener('mouseleave', resumeHandler);
      toastCard.addEventListener('focusin', pauseHandler);
      toastCard.addEventListener('focusout', resumeHandler);
    }

    // 5. Event Listeners for Dismiss & Action buttons
    const btnDismiss = toastCard.querySelector(`#dismiss-${id}`);
    if (btnDismiss) {
      btnDismiss.addEventListener('click', () => this.dismiss(id));
    }

    if (actionLabel && onAction) {
      const btnAction = toastCard.querySelector(`#action-${id}`);
      if (btnAction) {
        btnAction.addEventListener('click', () => {
          onAction();
          this.dismiss(id);
        });
      }
    }

    // Escape Key Dismiss for active focused toast
    toastCard.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.dismiss(id);
      }
    });

    return id;
  }

  startTimer(toastItem) {
    toastItem.startTime = Date.now();
    toastItem.timer = setTimeout(() => {
      this.dismiss(toastItem.id);
    }, toastItem.remainingTime);
  }

  pauseTimer(toastItem) {
    if (toastItem.paused || toastItem.duration <= 0) return;
    toastItem.paused = true;
    clearTimeout(toastItem.timer);
    toastItem.remainingTime -= Date.now() - toastItem.startTime;
  }

  resumeTimer(toastItem) {
    if (!toastItem.paused || toastItem.duration <= 0) return;
    toastItem.paused = false;
    toastItem.startTime = Date.now();
    toastItem.timer = setTimeout(() => {
      this.dismiss(toastItem.id);
    }, toastItem.remainingTime);
  }

  /**
   * Dismiss Toast by ID
   */
  dismiss(id) {
    const index = this.toasts.findIndex(t => t.id === id);
    if (index === -1) return;

    const toastItem = this.toasts[index];
    clearTimeout(toastItem.timer);
    toastItem.element.classList.add('exiting');

    setTimeout(() => {
      if (toastItem.element.parentNode) {
        toastItem.element.parentNode.removeChild(toastItem.element);
      }
      this.toasts.splice(index, 1);
      this.updateStackIndexes();
    }, 300);
  }

  /**
   * Clear All Toasts
   */
  clearAll() {
    [...this.toasts].forEach(t => this.dismiss(t.id));
  }

  /**
   * Recalculate --stack-index on cards for stacked depth effect
   */
  updateStackIndexes() {
    this.toasts.forEach((item, index) => {
      item.element.style.setProperty('--stack-index', index);
    });
  }
}

// --------------------------------------------------------------------------
// Demo Page Event Listeners
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toastManager = new ToastManager();

  const durationSelect = document.getElementById('duration-select');
  const positionSelect = document.getElementById('position-select');
  const actionLog = document.getElementById('action-log');

  function getDuration() {
    return parseInt(durationSelect.value, 10) || 6000;
  }

  function logAction(msg) {
    if (!actionLog) return;
    actionLog.textContent = `Log: ${msg}`;
  }

  // Spawn Buttons
  document.getElementById('btn-toast-success').addEventListener('click', () => {
    toastManager.show({
      title: 'File Uploaded Successfully',
      message: 'project-design-spec.pdf was saved to cloud storage.',
      type: 'success',
      duration: getDuration(),
      actionLabel: 'View File',
      onAction: () => logAction('User clicked "View File" on Success Toast')
    });
  });

  document.getElementById('btn-toast-info').addEventListener('click', () => {
    toastManager.show({
      title: 'System Update Available',
      message: 'EaseMotion v2.4 includes 12 new CSS animation tokens.',
      type: 'info',
      duration: getDuration(),
      actionLabel: 'Changelog',
      onAction: () => logAction('User clicked "Changelog" on Info Toast')
    });
  });

  document.getElementById('btn-toast-warning').addEventListener('click', () => {
    toastManager.show({
      title: 'Quota Limit Approaching',
      message: 'You have consumed 84% of your monthly API requests.',
      type: 'warning',
      duration: getDuration(),
      actionLabel: 'Upgrade Plan',
      onAction: () => logAction('User clicked "Upgrade Plan" on Warning Toast')
    });
  });

  document.getElementById('btn-toast-error').addEventListener('click', () => {
    toastManager.show({
      title: 'Database Sync Failed',
      message: 'Connection timed out while writing to primary replica.',
      type: 'error',
      duration: getDuration(),
      actionLabel: 'Retry Sync',
      onAction: () => logAction('User clicked "Retry Sync" on Error Toast')
    });
  });

  document.getElementById('btn-clear-all').addEventListener('click', () => {
    toastManager.clearAll();
    logAction('Cleared all active toasts');
  });

  positionSelect.addEventListener('change', (e) => {
    toastManager.setPosition(e.target.value);
  });

  // Spawn initial sample success toast
  setTimeout(() => {
    toastManager.show({
      title: 'Welcome to Accessible Toast Stack',
      message: 'Press Tab to focus action buttons or Escape to dismiss.',
      type: 'info',
      duration: 6000,
      actionLabel: 'Got it',
      onAction: () => logAction('Acknowledged welcome toast')
    });
  }, 400);
});
