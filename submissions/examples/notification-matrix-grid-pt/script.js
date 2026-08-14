/**
 * Notification Preference Matrix Grid with Staggered Checkbox Animations
 * EaseMotion-css Component Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const masterSwitches = document.querySelectorAll('.master-switch');
  const cellSwitches = document.querySelectorAll('.cell-switch');
  const saveBar = document.getElementById('save-bar');
  const saveDot = document.getElementById('save-dot');
  const saveStatusText = document.getElementById('save-status-text');
  const btnDiscard = document.getElementById('btn-discard');
  const btnSave = document.getElementById('btn-save');
  const saveSpinner = document.getElementById('save-spinner');
  const saveBtnLabel = document.getElementById('save-btn-label');

  const btnEnableAll = document.getElementById('btn-enable-all');
  const btnDisableAll = document.getElementById('btn-disable-all');
  const btnRecommended = document.getElementById('btn-recommended');

  // Initial State Tracking
  let initialState = {};
  let isSaving = false;

  // Capture current state map
  function getCurrentStateMap() {
    const map = {};
    cellSwitches.forEach(sw => {
      map[sw.id] = sw.checked;
    });
    return map;
  }

  // Save initial state snapshot
  initialState = getCurrentStateMap();

  // Helper: Trigger visual ripple bounce animation on switch
  function animateSwitch(sw) {
    sw.classList.add('is-rippling');
    setTimeout(() => {
      sw.classList.remove('is-rippling');
    }, 350);
  }

  // Update ARIA attributes
  function updateAria(sw) {
    sw.setAttribute('aria-checked', sw.checked ? 'true' : 'false');
  }

  // Check if current state differs from initial state
  function checkForUnsavedChanges() {
    if (isSaving) return;

    const currentState = getCurrentStateMap();
    const isDifferent = Object.keys(initialState).some(id => initialState[id] !== currentState[id]);

    if (isDifferent) {
      showUnsavedStatus();
    } else {
      hideSaveBar();
    }
  }

  // Floating Save Bar UI Triggers
  function showUnsavedStatus() {
    saveBar.classList.add('is-visible');
    saveDot.className = 'status-indicator-dot';
    saveStatusText.textContent = 'Unsaved changes detected';
    saveBtnLabel.textContent = 'Save Changes';
    saveSpinner.classList.add('hidden');
    btnSave.disabled = false;
  }

  function hideSaveBar() {
    saveBar.classList.remove('is-visible');
  }

  // Update Master Column Switches according to child cell states
  function syncMasterSwitches() {
    const channels = ['email', 'push', 'sms', 'slack'];

    channels.forEach(channel => {
      const master = document.querySelector(`.master-switch[data-channel="${channel}"]`);
      if (!master) return;

      const channelCells = Array.from(document.querySelectorAll(`.cell-switch[data-channel="${channel}"]`));
      const allChecked = channelCells.every(sw => sw.checked);
      const someChecked = channelCells.some(sw => sw.checked);

      master.checked = allChecked;
      updateAria(master);
      master.indeterminate = !allChecked && someChecked;
    });
  }

  // Master Column Header Toggle Logic (Staggered Ripple Animation)
  masterSwitches.forEach(master => {
    master.addEventListener('change', (e) => {
      const channel = master.dataset.channel;
      const targetChecked = master.checked;
      updateAria(master);
      animateSwitch(master);

      const targetCells = Array.from(document.querySelectorAll(`.cell-switch[data-channel="${channel}"]`));

      // Staggered ripple activation across rows
      targetCells.forEach((sw, index) => {
        setTimeout(() => {
          if (sw.checked !== targetChecked) {
            sw.checked = targetChecked;
            updateAria(sw);
            animateSwitch(sw);
            syncMasterSwitches();
            checkForUnsavedChanges();
          }
        }, index * 65); // 65ms stagger delay per row
      });
    });
  });

  // Individual Cell Switch Change Listener
  cellSwitches.forEach(sw => {
    sw.addEventListener('change', () => {
      updateAria(sw);
      animateSwitch(sw);
      syncMasterSwitches();
      checkForUnsavedChanges();
    });
  });

  // Global Presets Logic with Staggered Cascading Animation
  function applyPreset(presetMap) {
    const allCells = Array.from(cellSwitches);

    allCells.forEach((sw, index) => {
      const targetChecked = Boolean(presetMap[sw.id]);
      setTimeout(() => {
        if (sw.checked !== targetChecked) {
          sw.checked = targetChecked;
          updateAria(sw);
          animateSwitch(sw);
          syncMasterSwitches();
          checkForUnsavedChanges();
        }
      }, index * 30); // Staggered ripple across matrix
    });
  }

  btnEnableAll.addEventListener('click', () => {
    const fullMap = {};
    cellSwitches.forEach(sw => { fullMap[sw.id] = true; });
    applyPreset(fullMap);
  });

  btnDisableAll.addEventListener('click', () => {
    const emptyMap = {};
    cellSwitches.forEach(sw => { emptyMap[sw.id] = false; });
    applyPreset(emptyMap);
  });

  btnRecommended.addEventListener('click', () => {
    // Standard recommended defaults
    const recMap = {
      'toggle-security-email': true,
      'toggle-security-push': true,
      'toggle-security-sms': true,
      'toggle-security-slack': false,
      
      'toggle-billing-email': true,
      'toggle-billing-push': false,
      'toggle-billing-sms': false,
      'toggle-billing-slack': true,
      
      'toggle-product-email': true,
      'toggle-product-push': true,
      'toggle-product-sms': false,
      'toggle-product-slack': false,
      
      'toggle-team-email': false,
      'toggle-team-push': true,
      'toggle-team-sms': false,
      'toggle-team-slack': true,
      
      'toggle-system-email': true,
      'toggle-system-push': true,
      'toggle-system-sms': false,
      'toggle-system-slack': true
    };
    applyPreset(recMap);
  });

  // Discard Changes Action
  btnDiscard.addEventListener('click', () => {
    cellSwitches.forEach((sw, index) => {
      const origChecked = Boolean(initialState[sw.id]);
      setTimeout(() => {
        if (sw.checked !== origChecked) {
          sw.checked = origChecked;
          updateAria(sw);
          animateSwitch(sw);
          syncMasterSwitches();
        }
      }, index * 25);
    });

    setTimeout(() => {
      hideSaveBar();
    }, cellSwitches.length * 25 + 100);
  });

  // Save Changes Action
  btnSave.addEventListener('click', () => {
    if (isSaving) return;

    isSaving = true;
    btnSave.disabled = true;
    saveSpinner.classList.remove('hidden');
    saveBtnLabel.textContent = 'Saving...';
    saveDot.className = 'status-indicator-dot status-saving';

    setTimeout(() => {
      // Complete saving
      initialState = getCurrentStateMap();
      isSaving = false;

      saveSpinner.classList.add('hidden');
      saveBtnLabel.textContent = 'Saved!';
      saveStatusText.textContent = 'All changes saved successfully';
      saveDot.className = 'status-indicator-dot status-saved';

      setTimeout(() => {
        hideSaveBar();
      }, 2000);
    }, 800);
  });

  // Initial Sync
  syncMasterSwitches();
});
