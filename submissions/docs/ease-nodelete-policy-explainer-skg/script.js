/* =============================================================
   Delete-Detection Policy Explainer — JavaScript
   Handles: diff tabs, track cards, checklist progress, copy
   ============================================================= */

/* ── Diff Tabs ─────────────────────────────────────────────── */
document.querySelectorAll('.tab-bar').forEach((bar) => {
  bar.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs in this bar
      bar.querySelectorAll('.tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      // Activate clicked tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Find the parent diff-block, hide all panels, show target
      const block = bar.closest('.diff-block');
      block.querySelectorAll('.diff-panel').forEach((p) => p.classList.add('hidden'));
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.remove('hidden');
    });
  });
});

/* ── Track Cards ───────────────────────────────────────────── */
const trackDetail = document.getElementById('track-detail');

document.querySelectorAll('.track-card').forEach((card) => {
  card.addEventListener('click', () => {
    const track = card.dataset.track;

    // Toggle: clicking active card hides the panel
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      trackDetail.classList.add('hidden');
      return;
    }

    // Deactivate all cards, hide all content panes
    document.querySelectorAll('.track-card').forEach((c) => c.classList.remove('active'));
    document.querySelectorAll('.track-content').forEach((c) => c.classList.add('hidden'));

    // Activate selected
    card.classList.add('active');
    const content = document.getElementById('track-' + track);
    if (content) {
      content.classList.remove('hidden');
      trackDetail.classList.remove('hidden');
    }
  });
});

/* ── Checklist Progress ────────────────────────────────────── */
const checklist    = document.getElementById('checklist-items');
const checkedCount = document.getElementById('checked-count');
const totalCount   = document.getElementById('total-count');
const checkboxes   = checklist ? checklist.querySelectorAll('input[type="checkbox"]') : [];

if (totalCount) totalCount.textContent = checkboxes.length;

function updateProgress() {
  let done = 0;
  checkboxes.forEach((cb) => {
    const item = cb.closest('.check-item');
    if (cb.checked) {
      done++;
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  });
  if (checkedCount) checkedCount.textContent = done;
}

checkboxes.forEach((cb) => cb.addEventListener('change', updateProgress));
updateProgress();

/* ── Copy Checklist ────────────────────────────────────────── */
const copyBtn = document.getElementById('copy-checklist-btn');
const toast   = document.getElementById('copy-toast');

const CHECKLIST_TEXT = `## PR Submission Checklist

- [ ] All files are inside submissions/examples/, submissions/docs/, submissions/react/, or submissions/scss/
- [ ] My folder name includes a unique identifier (e.g. ease-bounce-xyz)
- [ ] All three required files are present: demo.html, style.css, README.md
- [ ] Total added lines across all files is ≥ 250
- [ ] demo.html opens directly in a browser — no server, CDN, or external framework required
- [ ] No existing file outside submissions/ was modified or deleted
- [ ] README.md answers: what it does, how to use it, why it's useful
- [ ] Commits are squashed into one (or a few) logical commits with a clear message
- [ ] PR is opened against the main branch
- [ ] PR template checklist is fully filled out`;

function showToast() {
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CHECKLIST_TEXT)
        .then(showToast)
        .catch(() => fallbackCopy(CHECKLIST_TEXT));
    } else {
      fallbackCopy(CHECKLIST_TEXT);
    }
  });
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity  = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast();
  } catch (_) { /* silent fail */ }
  document.body.removeChild(ta);
}
