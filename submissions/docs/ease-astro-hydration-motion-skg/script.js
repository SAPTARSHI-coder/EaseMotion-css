/* =============================================================
   Astro Island Hydration + EaseMotion Guide — JavaScript
   Handles: directive accordion, pitfall accordion,
            directive chooser, snippet copy buttons
   ============================================================= */

/* ── Directive Accordion ───────────────────────────────────── */
document.querySelectorAll('.directive-item').forEach((item) => {
  item.querySelector('.directive-header').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Close all, then open clicked (unless it was already open)
    document.querySelectorAll('.directive-item').forEach((i) => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Pitfall Accordion ─────────────────────────────────────── */
document.querySelectorAll('.pitfall-card').forEach((card) => {
  card.querySelector('.pitfall-header').addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.pitfall-card').forEach((c) => c.classList.remove('open'));
    if (!isOpen) card.classList.add('open');
  });
});

/* ── Directive Chooser ─────────────────────────────────────── */
function hideAll(selectors) {
  selectors.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function show(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

const ALL_STEPS = ['step-1', 'step-2a', 'step-2b'];
const ALL_RESULTS = ['result-load', 'result-idle', 'result-visible', 'result-none'];

document.querySelectorAll('.chooser-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const step = btn.dataset.step;
    const ans  = btn.dataset.ans;

    if (step === '1') {
      if (ans === 'yes') {
        hideAll(['step-1']);
        show('step-2a');
      } else {
        // CSS-only path — no directive needed
        hideAll(['step-1']);
        show('result-none');
      }
    } else if (step === '2a') {
      hideAll(['step-2a']);
      if (ans === 'yes') {
        show('result-load');
      } else {
        show('step-2b');
      }
    } else if (step === '2b') {
      hideAll(['step-2b']);
      if (ans === 'yes') {
        show('result-idle');
      } else {
        show('result-visible');
      }
    }
  });
});

document.querySelectorAll('.chooser-reset').forEach((btn) => {
  btn.addEventListener('click', () => {
    hideAll([...ALL_STEPS.slice(1), ...ALL_RESULTS]);
    show('step-1');
  });
});

/* ── Snippet Copy Buttons ──────────────────────────────────── */
const toast = document.getElementById('copy-toast');

function showToast() {
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showToast).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { document.execCommand('copy'); showToast(); } catch (_) {}
  document.body.removeChild(ta);
}

document.querySelectorAll('.copy-code-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.snippet-block');
    const code  = block?.querySelector('.snippet-code');
    if (code) copyText(code.textContent);
  });
});
