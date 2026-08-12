(function () {
  'use strict';

  const COOKIE_KEY = 'ease-cookie-consent';

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function initCookieConsent(options) {
    const opts = Object.assign({
      position: 'bottom',
      consentDays: 365,
      onAccept: null,
      onDecline: null,
    }, options);

    const existing = getCookie(COOKIE_KEY);
    if (existing === 'accepted' || existing === 'declined') return;

    const banner = document.createElement('div');
    banner.className = 'ease-cookie-consent' + (opts.position === 'top' ? ' ease-cookie-consent--top' : ' ease-cookie-consent--bottom');
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="ease-cookie-consent__text">We use cookies to improve your experience. <a href="/privacy">Learn more</a></div>' +
      '<div class="ease-cookie-consent__actions">' +
        '<button class="ease-cookie-consent__btn ease-cookie-consent__btn--decline" data-action="decline">Decline</button>' +
        '<button class="ease-cookie-consent__btn ease-cookie-consent__btn--accept" data-action="accept">Accept</button>' +
      '</div>';

    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      banner.classList.add('ease-visible');
    });

    function handle(action) {
      setCookie(COOKIE_KEY, action, opts.consentDays);
      banner.classList.remove('ease-visible');
      setTimeout(function () { banner.remove(); }, 400);
      if (action === 'accept' && opts.onAccept) opts.onAccept();
      if (action === 'decline' && opts.onDecline) opts.onDecline();
    }

    banner.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action]');
      if (btn) handle(btn.getAttribute('data-action'));
    });
  }

  if (typeof window !== 'undefined') {
    window.initCookieConsent = initCookieConsent;
  }
})();
