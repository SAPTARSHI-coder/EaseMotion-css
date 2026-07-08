document.addEventListener('DOMContentLoaded', () => {
  const faqSearch = document.getElementById('faqSearch');
  const catButtons = document.querySelectorAll('.ease-faq-ak__cat');
  const faqItems = document.querySelectorAll('.ease-faq-ak__item');
  const faqEmpty = document.getElementById('faqEmpty');

  let activeCategory = 'all';
  let searchQuery = '';

  // ─── Part 1: Grid Accordion Toggle Sub-System ───
  faqItems.forEach(item => {
    const questionButton = item.querySelector('.ease-faq-ak__question');
    
    questionButton.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Collapse all sibling items to preserve viewport real estate
      faqItems.forEach(sibling => {
        if (sibling !== item) sibling.classList.remove('open');
      });
      
      // Toggle targeted item node
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });

  // ─── Part 2: Filtering Optimization Pipeline ───
  function filterFAQMatrix() {
    let visibleCount = 0;

    faqItems.forEach(item => {
      const itemCategory = item.getAttribute('data-cat');
      const questionText = item.querySelector('.ease-faq-ak__question').textContent.toLowerCase();
      const answerText = item.querySelector('.ease-faq-ak__inner p').textContent.toLowerCase();
      
      const matchesCategory = (activeCategory === 'all' || itemCategory === activeCategory);
      const matchesSearch = (questionText.includes(searchQuery) || answerText.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
        item.classList.remove('open'); // Ensure hidden rows release expanded heights
      }
    });

    // Toggle Empty Feedback View State
    if (visibleCount === 0) {
      faqEmpty.classList.add('visible');
    } else {
      faqEmpty.classList.remove('visible');
    }
  }

  // ─── Part 3: Event Bindings and Inputs ───
  faqSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    filterFAQMatrix();
  });

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear legacy active selections
      catButtons.forEach(b => b.classList.remove('active'));
      
      // Commit targeted active selection
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      filterFAQMatrix();
    });
  });
});