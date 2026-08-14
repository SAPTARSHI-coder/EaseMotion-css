// Old shallow equality helper that fails on Map/Set objects
function oldShallowEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!Object.prototype.hasOwnProperty.call(objB, key) || !Object.is(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}

// New shallow equality helper that handles Map and Set correctly
function newShallowEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  // Handle Set objects
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (let item of objA) {
      if (!objB.has(item)) return false;
    }
    return true;
  }

  // Handle Map objects
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (let [key, val] of objA) {
      if (!objB.has(key) || !Object.is(val, objB.get(key))) return false;
    }
    return true;
  }

  // One is Map/Set and the other is not
  if (objA instanceof Set || objB instanceof Set || objA instanceof Map || objB instanceof Map) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!Object.prototype.hasOwnProperty.call(objB, key) || !Object.is(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}

// State stores for the demonstration
let stateA = {
  theme: 'dark',
  activeTab: 'overview',
  tags: new Set(['react', 'css', 'animation']),
  settings: new Map([['notifications', true], ['sidebarOpen', false]])
};

let stateB = {
  theme: 'dark',
  activeTab: 'overview',
  tags: new Set(['react', 'css', 'animation']),
  settings: new Map([['notifications', true], ['sidebarOpen', false]])
};

function stateToString(state) {
  const tagsArr = Array.from(state.tags);
  const settingsArr = Array.from(state.settings.entries()).map(([k, v]) => `"${k}" => ${v}`);
  return `{\n  theme: "${state.theme}",\n  activeTab: "${state.activeTab}",\n  tags: Set { ${tagsArr.map(t => `"${t}"`).join(', ')} },\n  settings: Map { ${settingsArr.join(', ')} }\n}`;
}

function updateUI() {
  document.getElementById('state-a-display').textContent = stateToString(stateA);
  document.getElementById('state-b-display').textContent = stateToString(stateB);

  // Compare using Old Helper
  const oldResult = oldShallowEqual(stateA, stateB);
  const oldBadge = document.getElementById('old-helper-badge');
  if (oldResult) {
    oldBadge.textContent = 'EQUAL (Misses Mutation)';
    oldBadge.className = 'badge badge-success';
  } else {
    // Old helper returns false positives on identical Set/Map properties
    oldBadge.textContent = 'NOT EQUAL (False Positive)';
    oldBadge.className = 'badge badge-error';
  }

  // Compare using New Helper
  const newResult = newShallowEqual(stateA, stateB);
  const newBadge = document.getElementById('new-helper-badge');
  if (newResult) {
    newBadge.textContent = 'EQUAL';
    newBadge.className = 'badge badge-success';
  } else {
    newBadge.textContent = 'NOT EQUAL';
    newBadge.className = 'badge badge-error';
  }
}

// Mutators and Helper Interactions
window.resetStates = function() {
  stateA = {
    theme: 'dark',
    activeTab: 'overview',
    tags: new Set(['react', 'css', 'animation']),
    settings: new Map([['notifications', true], ['sidebarOpen', false]])
  };
  stateB = {
    theme: 'dark',
    activeTab: 'overview',
    tags: new Set(['react', 'css', 'animation']),
    settings: new Map([['notifications', true], ['sidebarOpen', false]])
  };
  showToast('States reset to be identical.');
  updateUI();
};

window.modifyPrimitive = function() {
  stateB.activeTab = stateB.activeTab === 'overview' ? 'settings' : 'overview';
  showToast(`State B primitive activeTab changed to "${stateB.activeTab}"`);
  updateUI();
};

window.modifySet = function() {
  // Add or remove a tag
  if (stateB.tags.has('javascript')) {
    stateB.tags.delete('javascript');
    showToast('Removed "javascript" from State B tags Set');
  } else {
    stateB.tags.add('javascript');
    showToast('Added "javascript" to State B tags Set');
  }
  updateUI();
};

window.modifyMap = function() {
  const currentVal = stateB.settings.get('notifications');
  stateB.settings.set('notifications', !currentVal);
  showToast(`State B settings Map "notifications" changed to ${!currentVal}`);
  updateUI();
};

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🔔</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

// Initial update
window.addEventListener('DOMContentLoaded', () => {
  updateUI();
});
