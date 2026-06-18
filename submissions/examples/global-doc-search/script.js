const docData = [
  { title: "Fade In", category: "Animations", desc: "Smooth opacity transition utility", tag: "Animation" },
  { title: "Slide Up", category: "Animations", desc: "Translates element upwards smoothly", tag: "Motion" },
  { title: "Hover Scale", category: "Hover Effects", desc: "Slightly enlarges elements on hover", tag: "Interaction" },
  { title: "Staggered Delay", category: "Utilities", desc: "Adds utility delays to consecutive children", tag: "Utility" },
  { title: "Getting Started", category: "Documentation", desc: "Quick setup guide for EaseMotion CSS", tag: "Docs" }
];

const searchModal = document.getElementById('searchModal');
const searchTrigger = document.getElementById('searchTrigger');
const modalSearchInput = document.getElementById('modalSearchInput');
const searchResultsList = document.getElementById('searchResultsList');
const noResultsMessage = document.getElementById('noResultsMessage');
const searchQueryText = document.getElementById('searchQueryText');
const closeModalBtn = document.getElementById('closeModalBtn');

let activeIndex = -1;
let visibleItems = [];

function openModal() {
  searchModal.style.display = 'flex';
  setTimeout(() => {
    searchModal.setAttribute('aria-hidden', 'false');
    modalSearchInput.focus();
  }, 10);
  renderResults("");
}

function closeModal() {
  searchModal.setAttribute('aria-hidden', 'true');
  modalSearchInput.value = "";
  activeIndex = -1;
  
  setTimeout(() => {
    if (searchModal.getAttribute('aria-hidden') === 'true') {
      searchModal.style.display = 'none';
    }
  }, 200);
}

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openModal();
  }
  if (e.key === 'Escape' && searchModal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

searchTrigger.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) closeModal();
});

function renderResults(query) {
  searchResultsList.innerHTML = "";
  const filtered = docData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    noResultsMessage.classList.remove('hidden');
    searchQueryText.textContent = query;
    visibleItems = [];
    return;
  }
  noResultsMessage.classList.add('hidden');

  const groups = {};
  filtered.forEach(item => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });

  let itemIndex = 0;
  visibleItems = [];

  for (const category in groups) {
    const groupTitle = document.createElement('div');
    groupTitle.className = 'results-group-title';
    groupTitle.textContent = category;
    searchResultsList.appendChild(groupTitle);

    groups[category].forEach(item => {
      const currentIdx = itemIndex++;
      visibleItems.push(item);
      
      const itemEl = document.createElement('div');
      itemEl.className = `search-item ${currentIdx === activeIndex ? 'active' : ''}`;
      itemEl.innerHTML = `
        <div class="item-content">
          <span class="item-title">${item.title}</span>
          <span class="item-desc">${item.desc}</span>
        </div>
        <span class="item-badge">${item.tag}</span>
      `;
      
      itemEl.addEventListener('click', () => handleSelect(item));
      searchResultsList.appendChild(itemEl);
    });
  }
}

modalSearchInput.addEventListener('input', (e) => {
  activeIndex = 0;
  renderResults(e.target.value);
});

modalSearchInput.addEventListener('keydown', (e) => {
  const itemsEls = searchResultsList.querySelectorAll('.search-item');

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = visibleItems.length ? (activeIndex + 1) % visibleItems.length : -1;
    updateActiveElement(itemsEls);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = visibleItems.length ? (activeIndex - 1 + visibleItems.length) % visibleItems.length : -1;
    updateActiveElement(itemsEls);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeIndex >= 0 && visibleItems[activeIndex]) {
      handleSelect(visibleItems[activeIndex]);
    }
  }
});

function updateActiveElement(elements) {
  elements.forEach((el, idx) => {
    if (idx === activeIndex) {
      el.classList.add('active');
      el.scrollIntoView({ block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });
}

function handleSelect(item) {
  alert(`Navigating to: ${item.title}`);
  closeModal();
}