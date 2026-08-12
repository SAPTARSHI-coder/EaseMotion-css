const inputGroups = Array.from(document.querySelectorAll('.suffix-input-group'));
const copyButton = document.querySelector('#copyDomainButton');
const copyStatus = document.querySelector('#copyStatus');

function updateSuffixState(group) {
  const input = group.querySelector('input');
  const hasValue = input.value.trim().length > 0;
  group.classList.toggle('has-value', hasValue);
}

function toggleClearButton(group) {
  const input = group.querySelector('input');
  const clearButton = group.querySelector('.clear-button');
  if (!clearButton) {
    return;
  }

  const shouldShow = input.value.trim().length > 0;
  clearButton.style.pointerEvents = shouldShow ? 'auto' : 'none';
}

function clearInput(event) {
  const button = event.currentTarget;
  const group = button.closest('.suffix-input-group');
  const input = group.querySelector('input');
  input.value = '';
  input.focus();
  updateSuffixState(group);
  toggleClearButton(group);
}

function copyDomain() {
  const input = document.querySelector('#domainInput');
  const text = input.value.trim() || input.placeholder;

  if (!text) {
    return;
  }

  const write = navigator.clipboard?.writeText?.(text);

  if (write instanceof Promise) {
    write
      .then(() => {
        copyStatus.textContent = 'Domain copied to clipboard.';
      })
      .catch(() => {
        copyStatus.textContent = 'Unable to copy domain.';
      })
      .finally(() => {
        window.setTimeout(() => {
          copyStatus.textContent = '';
        }, 1600);
      });
  }
}

function bindGroupEvents(group) {
  const input = group.querySelector('input');
  const clearButton = group.querySelector('.clear-button');

  if (!input) {
    return;
  }

  input.addEventListener('input', () => {
    updateSuffixState(group);
    toggleClearButton(group);
  });

  input.addEventListener('focus', () => {
    group.classList.add('focus-visible');
  });

  input.addEventListener('blur', () => {
    group.classList.remove('focus-visible');
  });

  if (clearButton) {
    clearButton.addEventListener('click', clearInput);
  }

  updateSuffixState(group);
  toggleClearButton(group);
}

function init() {
  inputGroups.forEach(bindGroupEvents);

  if (copyButton) {
    copyButton.addEventListener('click', copyDomain);
  }
}

init();
