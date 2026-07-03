const steps = document.querySelectorAll('.step');
const panels = document.querySelectorAll('.step-panel');
const progressFill = document.querySelector('.progress-fill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 1;

function updateUI() {
  steps.forEach(function (step, index) {
    const num = parseInt(step.dataset.step);
    step.classList.toggle('active', num === currentStep);
    step.classList.toggle('completed', num < currentStep);
  });

  panels.forEach(function (panel) {
    panel.classList.toggle('active', parseInt(panel.dataset.panel) === currentStep);
  });

  const totalSteps = steps.length;
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progressFill.style.width = progress + '%';

  prevBtn.disabled = currentStep === 1;
  nextBtn.textContent = currentStep === totalSteps ? 'Finish' : 'Next';
}

nextBtn.addEventListener('click', function () {
  if (currentStep < steps.length) {
    currentStep++;
    updateUI();
  } else {
    alert('Form completed!');
  }
});

prevBtn.addEventListener('click', function () {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
});

updateUI();
