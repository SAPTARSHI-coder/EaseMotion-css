/* =============================================================
   Interactive Stepper Wizard with Pulsing Status Nodes
   EaseMotion — JavaScript Component Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const stepperItems = document.querySelectorAll('.stepper__item');
  const panels = document.querySelectorAll('.wizard__panel');
  const btnBack = document.getElementById('btn-back');
  const btnNext = document.getElementById('btn-next');

  let currentStep = 3; // Initialized to step 3 as shown in initial HTML
  const totalSteps = stepperItems.length;

  function updateWizard(step) {
    currentStep = step;

    // Update stepper nodes and connectors
    stepperItems.forEach((item, index) => {
      const stepNum = index + 1;
      item.classList.remove('is-complete', 'is-active', 'is-pending');
      item.removeAttribute('aria-current');

      if (stepNum < currentStep) {
        item.classList.add('is-complete');
      } else if (stepNum === currentStep) {
        item.classList.add('is-active');
        item.setAttribute('aria-current', 'step');
      } else {
        item.classList.add('is-pending');
      }
    });

    // Update content panels
    panels.forEach((panel) => {
      const panelNum = parseInt(panel.getAttribute('data-panel'), 10);
      if (panelNum === currentStep) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });

    // Update action buttons state & text
    btnBack.disabled = currentStep === 1;

    if (currentStep === totalSteps) {
      btnNext.innerHTML = `
        Complete Order
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      btnNext.classList.add('wizard__btn--done');
    } else {
      btnNext.innerHTML = `
        Next
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      btnNext.classList.remove('wizard__btn--done');
    }
  }

  // Next button click handler
  btnNext.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      updateWizard(currentStep + 1);
    } else {
      // Reached final step
      alert('Wizard Completed Successfully!');
    }
  });

  // Back button click handler
  btnBack.addEventListener('click', () => {
    if (currentStep > 1) {
      updateWizard(currentStep - 1);
    }
  });

  // Allow direct step clicking for completed steps
  stepperItems.forEach((item) => {
    item.addEventListener('click', () => {
      const stepNum = parseInt(item.getAttribute('data-step'), 10);
      // Can navigate to completed steps or current active step
      if (stepNum <= currentStep) {
        updateWizard(stepNum);
      }
    });
  });

  // Initialize
  updateWizard(currentStep);
});
