// script.js

// Grab required elements from the DOM
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');
const noResults = document.getElementById('noResults');
const cards = Array.from(cardsContainer.getElementsByClassName('card'));

// Function to filter cards based on search input
function filterCards() {
  // Get search value, trim spaces, convert to lowercase for case-insensitive match
  const query = searchInput.value.trim().toLowerCase();

  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.getAttribute('data-name');

    // Show card if its name includes the search query
    if (name.includes(query)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Show "No animations found" message if nothing matches
  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

// Listen for typing in the search box
searchInput.addEventListener('input', filterCards);