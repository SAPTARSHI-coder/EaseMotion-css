(function () {
  var currentStep = 1;
  var totalSteps = 4;
  var form = document.querySelector('.msf-form');
  var slides = form.querySelectorAll('.msf-slide');
  var steps = document.querySelectorAll('.msf-step');
  var fill = document.querySelector('.msf-progress-fill');
  var backBtn = document.getElementById('msf-back');
  var nextBtn = document.getElementById('msf-next');
  var actions = document.getElementById('msf-actions');
  var celebration = document.getElementById('msf-celebration');

  function validateStep(step) {
    var slide = document.querySelector('.msf-slide[data-step="' + step + '"]');
    var inputs = slide.querySelectorAll('input[required]');
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim()) {
        inputs[i].style.borderColor = '#ef4444';
        inputs[i].focus();
        return false;
      }
      inputs[i].style.borderColor = '';
    }
    return true;
  }

  function updateReview() {
    document.getElementById('r-name').textContent = document.getElementById('name').value || '—';
    document.getElementById('r-email').textContent = document.getElementById('email').value || '—';
    document.getElementById('r-street').textContent = document.getElementById('street').value || '—';
    document.getElementById('r-city').textContent = document.getElementById('city').value || '—';
    var chk = document.getElementById('newsletter');
    document.getElementById('r-newsletter').textContent = chk.checked ? 'Yes' : 'No';
    document.getElementById('r-theme').textContent = document.getElementById('theme').value || '—';
  }

  function goToStep(next) {
    if (next === currentStep) return;
    var currentSlide = document.querySelector('.msf-slide[data-step="' + currentStep + '"]');
    var nextSlide = document.querySelector('.msf-slide[data-step="' + next + '"]');
    var goingForward = next > currentStep;
    currentSlide.classList.remove('active');
    currentSlide.classList.add(goingForward ? 'slide-out-left' : '');
    currentSlide.style.transition = 'none';
    nextSlide.style.transition = '';
    nextSlide.classList.add('active');
    nextSlide.classList.remove('slide-out-left');
    currentStep = next;
    steps.forEach(function (s) {
      var n = parseInt(s.getAttribute('data-step'));
      s.classList.toggle('active', n === currentStep);
      s.classList.toggle('completed', n < currentStep);
    });
    fill.style.width = ((currentStep - 1) / (totalSteps - 1)) * 100 + '%';
    backBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';
    if (currentStep === totalSteps) {
      nextBtn.textContent = 'Submit';
    } else {
      nextBtn.textContent = 'Next';
    }
    if (currentStep === totalSteps - 1) {
      updateReview();
    }
  }

  nextBtn.addEventListener('click', function () {
    if (currentStep === totalSteps) {
      actions.style.display = 'none';
      form.style.display = 'none';
      celebration.classList.add('show');
      return;
    }
    if (!validateStep(currentStep)) return;
    goToStep(currentStep + 1);
  });

  backBtn.addEventListener('click', function () {
    if (currentStep > 1) goToStep(currentStep - 1);
  });

  document.getElementById('msf-reset').addEventListener('click', function () {
    celebration.classList.remove('show');
    actions.style.display = '';
    form.style.display = '';
    currentStep = 1;
    slides.forEach(function (s) { s.classList.remove('active', 'slide-out-left'); });
    document.querySelector('.msf-slide[data-step="1"]').classList.add('active');
    steps.forEach(function (s, i) {
      s.classList.toggle('active', i === 0);
      s.classList.remove('completed');
    });
    fill.style.width = '0%';
    backBtn.style.display = 'none';
    nextBtn.textContent = 'Next';
    document.querySelectorAll('input').forEach(function (i) { i.style.borderColor = ''; });
  });

  backBtn.style.display = 'none';
})();
