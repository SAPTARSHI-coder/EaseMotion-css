/**
 * AI Prompt Template Selector Grid with Hover Elevation & Shimmer Tag
 * EaseMotion-css Component Script
 *
 * Responsibilities:
 *  1. Category Filter — switches active pill and filters prompt cards with fade transition.
 *  2. Template Customizer Modal — parses variable tags ({var_name}), creates input controls,
 *     updates live prompt preview, and handles copy-to-clipboard with toast feedback.
 */

(function () {
  'use strict';

  // ── Template Data Store ──────────────────────────────────────────────────
  const TEMPLATES = {
    'code-reviewer': {
      title: 'Senior Code Reviewer & Security Auditor',
      category: 'code',
      badgeClass: 'badge-code',
      badgeText: 'Coding',
      rawText: `Review the following {language} snippet for performance, security vulnerabilities, memory efficiency, and adherence to clean code patterns:\n\n\`\`\`{language}\n{code_block}\n\`\`\`\n\nProvide:\n1. Top 3 security risks\n2. Refactored code snippet\n3. Explanation of performance improvements`,
      vars: {
        language: 'TypeScript',
        code_block: 'const getData = async () => { return fetch("/api").then(r => r.json()); }'
      }
    },
    'blog-writer': {
      title: 'SEO Longform Article Architect',
      category: 'writing',
      badgeClass: 'badge-writing',
      badgeText: 'Writing',
      rawText: `Write a comprehensive 1500-word blog post on "{topic}" targeting {target_audience} in a {tone} tone.\n\nStructure required:\n- Catchy H1 title\n- H2/H3 outline with bulleted key takeaways\n- Actionable real-world examples\n- Meta title (under 60 chars) & Meta description (under 155 chars)`,
      vars: {
        topic: 'Building AI Web Agents with WebAssembly',
        target_audience: 'Senior Fullstack Engineers',
        tone: 'authoritative yet approachable'
      }
    },
    'saas-copy': {
      title: 'SaaS Hero Section Copywriter',
      category: 'marketing',
      badgeClass: 'badge-marketing',
      badgeText: 'Marketing',
      rawText: `Create 3 compelling Hero H1 headlines, subtext options, and CTA button labels for a SaaS product named "{product_name}".\n\nTarget Persona: {user_persona}\nCore Problem Solved: {pain_point}\n\nFormat each option with:\n- H1 Headline (max 8 words)\n- Subtext (1-2 sentences)\n- Primary CTA button text`,
      vars: {
        product_name: 'FlowMetrics AI',
        user_persona: 'DevOps & Reliability Leads',
        pain_point: 'cloud infrastructure cost overruns'
      }
    },
    'midjourney-ui': {
      title: 'Photorealistic UI Mockup Generator',
      category: 'design',
      badgeClass: 'badge-design',
      badgeText: 'Design',
      rawText: `A sleek futuristic web app interface for {app_type}, dark mode design system, glassmorphism card components, glowing {accent_color} neon accents, clean typography, octane render, 8k resolution, volumetric lighting, photorealistic --ar 16:9 --v 6.0`,
      vars: {
        app_type: 'Crypto Trading & Analytics Platform',
        accent_color: 'cyan and violet'
      }
    },
    'sql-optimizer': {
      title: 'SQL Query Optimizer & Index Advisor',
      category: 'code',
      badgeClass: 'badge-code',
      badgeText: 'Coding',
      rawText: `Optimize the following {db_engine} SQL query for maximum execution performance:\n\n\`\`\`sql\n{sql_query}\n\`\`\`\n\nAnalyze:\n1. Proposed composite index strategy\n2. Join reordering options\n3. Expected EXPLAIN ANALYZE cost reduction`,
      vars: {
        db_engine: 'PostgreSQL 16',
        sql_query: 'SELECT u.id, COUNT(o.id) FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.created_at >= NOW() - INTERVAL \'30 days\' GROUP BY u.id;'
      }
    },
    'newsletter': {
      title: 'Engaging Email Newsletter Writer',
      category: 'writing',
      badgeClass: 'badge-writing',
      badgeText: 'Writing',
      rawText: `Write an engaging tech newsletter issue about {news_subject} tailored for subscribers interested in {niche}.\n\nDeliver:\n- 3 high-open-rate subject line options\n- 2-paragraph main story hook\n- 3 bulleted key takeaways\n- Call to action link text`,
      vars: {
        news_subject: 'The Rise of Local AI Models on Apple Silicon',
        niche: 'AI Software Development'
      }
    },
    'ad-copy': {
      title: 'Social Media Ad Copy Generator',
      category: 'marketing',
      badgeClass: 'badge-marketing',
      badgeText: 'Marketing',
      rawText: `Create 3 high-converting LinkedIn ad copy variations promoting {offer}.\n\nTarget audience: {job_title} decision makers.\nInclude:\n- Primary Text (hook + problem statement)\n- Headline\n- Description\n- CTA button label`,
      vars: {
        offer: '14-Day Free Trial of Automated Security Compliance',
        job_title: 'CISO and VP of Engineering'
      }
    },
    'design-tokens': {
      title: 'Design System Token Architect',
      category: 'design',
      badgeClass: 'badge-design',
      badgeText: 'Design',
      rawText: `Generate a structured JSON design token schema for a {brand_style} UI design system.\n\nPrimary Brand Color: {hex_code}\n\nInclude JSON objects for:\n- Color palette (100 to 900 shades)\n- Semantic surface & text tokens\n- Spacing scale (4px grid)\n- Border radius & shadow tokens`,
      vars: {
        brand_style: 'Modern Cyberpunk Dark Mode',
        hex_code: '#8b5cf6'
      }
    }
  };

  // ── DOM References ────────────────────────────────────────────────────────
  const filterPills     = document.querySelectorAll('.filter-pill');
  const promptCards     = document.querySelectorAll('.prompt-card');
  const countAll        = document.getElementById('count-all');

  const modalBackdrop   = document.getElementById('modal-backdrop');
  const modalCloseBtn   = document.getElementById('modal-close-btn');
  const modalCancelBtn  = document.getElementById('modal-cancel-btn');
  const modalCopyBtn    = document.getElementById('modal-copy-btn');
  const modalTitle      = document.getElementById('modal-title');
  const modalBadge      = document.getElementById('modal-badge');
  const modalFields     = document.getElementById('modal-fields');
  const modalPreviewText = document.getElementById('modal-preview-text');

  const toast           = document.getElementById('toast');
  const toastMsg        = document.getElementById('toast-message');

  let activeTemplateId  = null;
  let activeVarValues   = {};

  // ── 1. Category Filter Logic ─────────────────────────────────────────────
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => {
        p.classList.remove('is-active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('is-active');
      pill.setAttribute('aria-selected', 'true');

      const cat = pill.dataset.category;
      let visibleCount = 0;

      promptCards.forEach((card) => {
        const cardCat = card.dataset.category;
        if (cat === 'all' || cardCat === cat) {
          card.classList.remove('is-hidden');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // ── 2. Open Modal & Use Template ─────────────────────────────────────────
  document.querySelectorAll('.use-template-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (TEMPLATES[id]) {
        openModal(id);
      }
    });
  });

  function openModal(id) {
    const tpl = TEMPLATES[id];
    activeTemplateId = id;
    activeVarValues = { ...tpl.vars };

    modalTitle.textContent = tpl.title;
    modalBadge.className = `badge ${tpl.badgeClass}`;
    modalBadge.textContent = tpl.badgeText;

    // Render input fields for variables
    modalFields.innerHTML = '';
    Object.keys(tpl.vars).forEach((varName) => {
      const group = document.createElement('div');
      group.className = 'input-field-group';

      const label = document.createElement('label');
      label.className = 'field-label-text';
      label.setAttribute('for', `var-input-${varName}`);
      label.textContent = `{${varName}}`;

      const input = document.createElement('input');
      input.type = 'text';
      input.id = `var-input-${varName}`;
      input.className = 'modal-input';
      input.value = activeVarValues[varName];

      input.addEventListener('input', (e) => {
        activeVarValues[varName] = e.target.value;
        updatePreviewText();
      });

      group.appendChild(label);
      group.appendChild(input);
      modalFields.appendChild(group);
    });

    updatePreviewText();
    modalBackdrop.removeAttribute('hidden');
    // Focus first variable input
    const firstInput = modalFields.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function updatePreviewText() {
    if (!activeTemplateId) return;
    const tpl = TEMPLATES[activeTemplateId];
    let text = tpl.rawText;

    Object.keys(activeVarValues).forEach((varName) => {
      const val = activeVarValues[varName] || `{${varName}}`;
      text = text.replaceAll(`{${varName}}`, val);
    });

    modalPreviewText.textContent = text;
  }

  // ── 3. Close Modal Logic ──────────────────────────────────────────────────
  function closeModal() {
    modalBackdrop.setAttribute('hidden', '');
    activeTemplateId = null;
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalCancelBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // ── 4. Copy Prompt & Show Toast ─────────────────────────────────────────
  modalCopyBtn.addEventListener('click', () => {
    const textToCopy = modalPreviewText.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('Customized prompt copied to clipboard!');
      closeModal();
    }).catch(() => {
      showToast('Failed to copy to clipboard.');
    });
  });

  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('is-show');
    setTimeout(() => {
      toast.classList.remove('is-show');
    }, 2800);
  }

})();
