/**
 * EaseMotion CSS — Accessible Multi-Step Form Wizard
 * File: script.js
 * Folder: submissions/examples/form-wizard-stepper-ca/
 *
 * Zero-dependency Vanilla JS module managing multi-step progression,
 * direction-aware slide transitions, field validation, and ARIA focus.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. STATE & DOM SELECTORS ────────────────────────────────────
  let currentStep = 1;
  const maxStep = 3;
  let isAnimating = false;

  const wizardForm = document.getElementById('wizard-form');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const nextBtnText = document.getElementById('next-btn-text');
  const progressBar = document.getElementById('stepper-progress-bar');
  const stepAnnouncer = document.getElementById('aria-step-announcer');
  const successCard = document.getElementById('wizard-success-card');
  const resetWizardBtn = document.getElementById('reset-wizard-btn');

  // Input Fields
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const termsCheckbox = document.getElementById('terms-agree');
  const billingSwitch = document.getElementById('billing-cycle-switch');

  // Summary Elements
  const summaryName = document.getElementById('summary-name');
  const summaryEmail = document.getElementById('summary-email');
  const summaryPlan = document.getElementById('summary-plan');
  const summaryBilling = document.getElementById('summary-billing');

  const stepTitles = {
    1: 'Account Details',
    2: 'Plan Selection',
    3: 'Confirmation'
  };

  // ── 2. INITIALIZATION & EVENT LISTENERS ─────────────────────────

  // Clear errors dynamically on input change
  [fullNameInput, emailInput, passwordInput, termsCheckbox].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => clearFieldError(input));
    input.addEventListener('change', () => clearFieldError(input));
  });

  // Next / Submit Button Handler
  nextBtn?.addEventListener('click', () => {
    if (isAnimating) return;

    if (currentStep < maxStep) {
      if (validateStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    } else if (currentStep === maxStep) {
      if (validateStep(currentStep)) {
        submitForm();
      }
    }
  });

  // Previous Button Handler
  prevBtn?.addEventListener('click', () => {
    if (isAnimating || currentStep <= 1) return;
    goToStep(currentStep - 1);
  });

  // Stepper Header Direct Button Clicks
  const stepButtons = document.querySelectorAll('.step-button');
  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = parseInt(btn.dataset.step, 10);
      if (isNaN(targetStep) || targetStep === currentStep || isAnimating) return;

      // Only allow navigating back or to visited completed steps
      if (targetStep < currentStep) {
        goToStep(targetStep);
      } else {
        // Must validate all intervening steps to move forward
        let valid = true;
        for (let s = currentStep; s < targetStep; s++) {
          if (!validateStep(s)) {
            valid = false;
            break;
          }
        }
        if (valid) {
          goToStep(targetStep);
        }
      }
    });
  });

  // Billing Cycle Switch
  billingSwitch?.addEventListener('click', () => {
    const isChecked = billingSwitch.getAttribute('aria-checked') === 'true';
    const nextState = !isChecked;

    billingSwitch.setAttribute('aria-checked', String(nextState));
    
    document.getElementById('billing-monthly-label')?.classList.toggle('active', !nextState);
    document.getElementById('billing-annual-label')?.classList.toggle('active', nextState);

    if (summaryBilling) {
      summaryBilling.textContent = nextState ? 'Annual (20% Off)' : 'Monthly';
    }
  });

  // Reset Wizard Handler
  resetWizardBtn?.addEventListener('click', resetWizard);

  // ── 3. FIELD VALIDATION ─────────────────────────────────────────

  function validateStep(stepIndex) {
    let isValid = true;
    let firstInvalidInput = null;

    if (stepIndex === 1) {
      // Validate Name
      if (!fullNameInput.value.trim()) {
        showFieldError(fullNameInput, 'full-name-error', 'Full name is required');
        isValid = false;
        firstInvalidInput = firstInvalidInput || fullNameInput;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        showFieldError(emailInput, 'email-error', 'Email address is required');
        isValid = false;
        firstInvalidInput = firstInvalidInput || emailInput;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'email-error', 'Please enter a valid email address');
        isValid = false;
        firstInvalidInput = firstInvalidInput || emailInput;
      }

      // Validate Password
      if (!passwordInput.value) {
        showFieldError(passwordInput, 'password-error', 'Password is required');
        isValid = false;
        firstInvalidInput = firstInvalidInput || passwordInput;
      } else if (passwordInput.value.length < 8) {
        showFieldError(passwordInput, 'password-error', 'Password must be at least 8 characters long');
        isValid = false;
        firstInvalidInput = firstInvalidInput || passwordInput;
      }
    }

    if (stepIndex === 3) {
      // Validate Terms Checkbox
      if (!termsCheckbox.checked) {
        showFieldError(termsCheckbox, 'terms-error', 'You must accept the terms of service');
        isValid = false;
        firstInvalidInput = firstInvalidInput || termsCheckbox;
      }
    }

    if (!isValid && firstInvalidInput) {
      firstInvalidInput.focus();
    }

    return isValid;
  }

  function showFieldError(inputEl, errorId, message) {
    inputEl.classList.add('invalid');
    inputEl.setAttribute('aria-invalid', 'true');
    const errorSpan = document.getElementById(errorId);
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  function clearFieldError(inputEl) {
    inputEl.classList.remove('invalid');
    inputEl.removeAttribute('aria-invalid');
    const errorId = inputEl.getAttribute('aria-describedby')?.split(' ').find(id => id.endsWith('-error'));
    if (errorId) {
      const errorSpan = document.getElementById(errorId);
      if (errorSpan) errorSpan.textContent = '';
    }
  }

  // ── 4. STEP TRANSITION & DIRECTION-AWARE ANIMATION ──────────────

  function goToStep(targetStep) {
    if (targetStep < 1 || targetStep > maxStep) return;

    const direction = targetStep > currentStep ? 'next' : 'prev';
    const currentPanel = document.getElementById(`step-panel-${currentStep}`);
    const nextPanel = document.getElementById(`step-panel-${targetStep}`);

    if (!currentPanel || !nextPanel) return;

    isAnimating = true;

    // Remove old animation classes
    currentPanel.classList.remove('slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
    nextPanel.classList.remove('slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');

    if (direction === 'next') {
      currentPanel.classList.add('slide-out-left');
      nextPanel.classList.add('slide-in-right');
    } else {
      currentPanel.classList.add('slide-out-right');
      nextPanel.classList.add('slide-in-left');
    }

    // Make next panel visible
    nextPanel.removeAttribute('hidden');
    nextPanel.classList.add('active');

    // Update state & UI
    currentStep = targetStep;
    updateStepperHeader();
    updateFooterButtons();

    if (currentStep === 3) {
      populateSummary();
    }

    setTimeout(() => {
      currentPanel.setAttribute('hidden', 'true');
      currentPanel.classList.remove('active', 'slide-out-left', 'slide-out-right');
      nextPanel.classList.remove('slide-in-right', 'slide-in-left');
      isAnimating = false;

      // Focus management: Shift focus to the new step legend
      const nextLegend = document.getElementById(`legend-step-${currentStep}`);
      if (nextLegend) {
        nextLegend.focus();
      }
    }, 320);
  }

  // ── 5. STEPPER HEADER & FOOTER UPDATES ────────────────────────────

  function updateStepperHeader() {
    // Update progress bar length
    const progressPercent = ((currentStep - 1) / (maxStep - 1)) * 100;
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update Step Nav Badges & ARIA attributes
    for (let s = 1; s <= maxStep; s++) {
      const navItem = document.getElementById(`step-nav-${s}`);
      const navBtn = navItem?.querySelector('.step-button');

      if (!navItem || !navBtn) continue;

      navItem.classList.remove('active', 'completed');
      navBtn.removeAttribute('aria-current');

      if (s === currentStep) {
        navItem.classList.add('active');
        navBtn.setAttribute('aria-current', 'step');
      } else if (s < currentStep) {
        navItem.classList.add('completed');
      }
    }

    // Screen reader announcement
    if (stepAnnouncer) {
      stepAnnouncer.textContent = `Step ${currentStep} of ${maxStep}: ${stepTitles[currentStep]}`;
    }
  }

  function updateFooterButtons() {
    if (prevBtn) {
      prevBtn.disabled = currentStep === 1;
    }

    if (nextBtnText) {
      if (currentStep === maxStep) {
        nextBtnText.textContent = 'Complete Registration';
      } else {
        nextBtnText.textContent = 'Next Step';
      }
    }
  }

  function populateSummary() {
    if (summaryName) summaryName.textContent = fullNameInput.value.trim() || '—';
    if (summaryEmail) summaryEmail.textContent = emailInput.value.trim() || '—';

    const selectedPlan = document.querySelector('input[name="plan"]:checked')?.value || 'starter';
    const planNames = {
      starter: 'Starter Tier ($9/mo)',
      pro: 'Pro Developer Tier ($29/mo)',
      enterprise: 'Enterprise Tier ($99/mo)'
    };
    if (summaryPlan) summaryPlan.textContent = planNames[selectedPlan] || selectedPlan;
  }

  // ── 6. FORM SUBMISSION & RESET ───────────────────────────────────

  function submitForm() {
    // Hide active step panel and footer
    const currentPanel = document.getElementById(`step-panel-${currentStep}`);
    if (currentPanel) currentPanel.setAttribute('hidden', 'true');

    const wizardFooter = document.querySelector('.wizard-footer');
    if (wizardFooter) wizardFooter.style.display = 'none';

    // Show success card
    if (successCard) {
      successCard.removeAttribute('hidden');
      successCard.focus();
    }

    if (stepAnnouncer) {
      stepAnnouncer.textContent = 'Registration submitted successfully!';
    }
  }

  function resetWizard() {
    currentStep = 1;
    wizardForm.reset();

    // Reset error messages
    document.querySelectorAll('.field-error-msg').forEach(span => span.textContent = '');
    document.querySelectorAll('.field-input').forEach(input => input.classList.remove('invalid'));

    // Hide success card, restore footer
    if (successCard) successCard.setAttribute('hidden', 'true');
    const wizardFooter = document.querySelector('.wizard-footer');
    if (wizardFooter) wizardFooter.style.display = 'flex';

    // Hide panels 2 & 3, show panel 1
    for (let s = 1; s <= maxStep; s++) {
      const panel = document.getElementById(`step-panel-${s}`);
      if (!panel) continue;
      panel.classList.remove('active', 'slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
      if (s === 1) {
        panel.removeAttribute('hidden');
        panel.classList.add('active');
      } else {
        panel.setAttribute('hidden', 'true');
      }
    }

    updateStepperHeader();
    updateFooterButtons();

    fullNameInput?.focus();
  }
});
