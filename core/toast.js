/**
 * EaseMotion CSS — Toast Queue Manager
 * ============================================================
 * Opt-in toast queue with per-toast auto-dismiss timer.
 *
 * Markup (the CSS lives in components/toast.css):
 *   <div class="ease-toast-region" data-toast-region></div>
 *
 * API (global, opt-in — the script self-initialises on load):
 *   window.EaseToast.push({ message, title?, type?, duration?, id? })
 *   window.EaseToast.dismiss(id)
 *   window.EaseToast.clear()
 *
 * The queue is capped (default 5). Each toast auto-dismisses after its
 * `duration` (default 4000ms; 0 keeps it until manually dismissed). Invalid
 * inputs (empty message, non-finite/non-positive duration other than 0) are
 * rejected without mutating the queue.
 * ============================================================
 */
(function () {
  'use strict';

  var DEFAULT_DURATION = 4000;
  var MAX_QUEUE = 5;

  var VALID_TYPES = {
    success: 'ease-toast-success',
    danger: 'ease-toast-danger',
    warning: 'ease-toast-warning',
    info: 'ease-toast-info',
  };

  function resolveRegion() {
    var region = document.querySelector('[data-toast-region]');
    if (!region) {
      region = document.createElement('div');
      region.setAttribute('data-toast-region', '');
      region.className = 'ease-toast-region';
      document.body.appendChild(region);
    }
    return region;
  }

  function typeClass(type) {
    return VALID_TYPES[type] || '';
  }

  function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  // Map of id -> timeout handle so timers can be cancelled on manual dismiss.
  var timers = {};

  var EaseToast = {
    _queue: [],

    /**
     * Push a toast onto the queue.
     * @param {object} options
     *   message  string (required)
     *   title    string (optional)
     *   type     'success'|'danger'|'warning'|'info' (optional)
     *   duration number ms, default 4000; 0 = sticky (no auto-dismiss)
     *   id       string/number (optional, dedupes re-pushes of the same id)
     * @returns {string|null} the toast id, or null if rejected.
     */
    push: function (options) {
      if (!options || typeof options !== 'object') return null;
      var message = options.message;
      if (typeof message !== 'string' || message.trim() === '') return null;

      var duration = options.duration;
      if (duration === undefined) {
        duration = DEFAULT_DURATION;
      } else if (!isFiniteNumber(duration) || duration < 0) {
        return null;
      }

      var id = options.id != null ? String(options.id) : 'ease-toast-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);

      // Dedup: a toast with the same id already in the queue is a no-op.
      if (this._queue.indexOf(id) !== -1) return id;

      // Enforce the queue cap by dismissing the oldest entry.
      while (this._queue.length >= MAX_QUEUE) {
        var oldest = this._queue[0];
        this.dismiss(oldest);
      }

      var region = resolveRegion();

      var el = document.createElement('div');
      el.className = 'ease-toast ease-toast-enter ' + typeClass(options.type);
      el.setAttribute('data-toast-id', id);
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');

      var body = document.createElement('div');
      body.className = 'ease-toast-body';
      if (options.title) {
        var strong = document.createElement('strong');
        strong.textContent = String(options.title);
        body.appendChild(strong);
      }
      var p = document.createElement('p');
      p.textContent = message;
      body.appendChild(p);
      el.appendChild(body);

      var self = this;
      el.addEventListener('click', function () {
        self.dismiss(id);
      });

      region.appendChild(el);
      this._queue.push(id);

      if (duration > 0) {
        timers[id] = setTimeout(function () {
          self.dismiss(id);
        }, duration);
      }

      return id;
    },

    /**
     * Dismiss a toast by id, cancelling any pending auto-dismiss timer.
     */
    dismiss: function (id) {
      if (id == null) return false;
      id = String(id);
      var idx = this._queue.indexOf(id);
      if (idx === -1) return false;

      this._queue.splice(idx, 1);

      if (timers[id]) {
        clearTimeout(timers[id]);
        delete timers[id];
      }

      var region = document.querySelector('[data-toast-region]');
      var el = region && region.querySelector('[data-toast-id="' + CSS.escape(id) + '"]');
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      return true;
    },

    /**
     * Clear every toast in the queue.
     */
    clear: function () {
      var ids = this._queue.slice();
      for (var i = 0; i < ids.length; i++) {
        this.dismiss(ids[i]);
      }
    },

    /**
     * Read-only queue length (exposed for tests / debugging).
     */
    size: function () {
      return this._queue.length;
    },
  };

  if (typeof window !== 'undefined') {
    window.EaseToast = EaseToast;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EaseToast;
  }
})();
