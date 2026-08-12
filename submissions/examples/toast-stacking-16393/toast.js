/**
 * EaseMotion CSS — Toast Notification Manager
 * Submission for Issue #16393
 *
 * Usage:
 *   showToast({ message, title, type, duration, position })
 */

;(function (global) {
  'use strict';

  const ICONS = {
    success: '✓',
    error:   '✕',
    warning: '⚠',
    info:    'ℹ',
  };

  const containers = {};

  function getContainer(position) {
    if (containers[position]) return containers[position];
    const el = document.createElement('div');
    el.className = 'ease-toast-container ease-toast-container--' + position;
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'false');
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Notifications');
    document.body.appendChild(el);
    containers[position] = el;
    return el;
  }

  function dismiss(toastEl) {
    if (toastEl.dataset.dismissed) return;
    toastEl.dataset.dismissed = '1';
    toastEl.classList.add('ease-toast--dismissing');
    const duration = parseFloat(
      getComputedStyle(toastEl)
        .getPropertyValue('--ease-toast-duration') || '300'
    ) || 300;
    setTimeout(function () {
      if (toastEl.parentNode) toastEl.parentNode.removeChild(toastEl);
    }, duration);
  }

  function showToast(options) {
    const opts = Object.assign(
      { type: 'info', duration: 4000, position: 'top-right' },
      options || {}
    );

    if (!opts.message) {
      console.warn('[EaseMotion Toast] "message" is required.');
      return;
    }

    const container = getContainer(opts.position);
    const type = ['success','error','warning','info'].includes(opts.type)
                   ? opts.type : 'info';

    const toast = document.createElement('div');
    toast.className = 'ease-toast ease-toast--' + type;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');

    /* Icon */
    const icon = document.createElement('span');
    icon.className   = 'ease-toast__icon';
    icon.textContent = ICONS[type];
    icon.setAttribute('aria-hidden', 'true');
    toast.appendChild(icon);

    /* Body */
    const body = document.createElement('div');
    body.className = 'ease-toast__body';

    if (opts.title) {
      const title = document.createElement('div');
      title.className   = 'ease-toast__title';
      title.textContent = opts.title;
      body.appendChild(title);
    }

    const msg = document.createElement('div');
    msg.className   = 'ease-toast__message';
    msg.textContent = opts.message;
    body.appendChild(msg);
    toast.appendChild(body);

    /* Close button */
    const closeBtn = document.createElement('button');
    closeBtn.className   = 'ease-toast__close';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.addEventListener('click', function () { dismiss(toast); });
    toast.appendChild(closeBtn);

    /* Progress bar */
    if (opts.duration > 0) {
      const progress = document.createElement('div');
      progress.className = 'ease-toast__progress';
      progress.style.animationDuration = opts.duration + 'ms';
      toast.appendChild(progress);
    }

    container.appendChild(toast);

    if (opts.duration > 0) {
      setTimeout(function () { dismiss(toast); }, opts.duration);
    }

    return toast;
  }

  global.showToast = showToast;

}(typeof window !== 'undefined' ? window : this));
