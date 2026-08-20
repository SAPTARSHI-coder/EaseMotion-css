// Simple JavaScript to toggle header shrink class
const header = document.getElementById('em-sticky-header');
const scrollThreshold = 100; // pixels to scroll before shrinking

function handleScroll() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('is-shrunk');
    } else {
        header.classList.remove('is-shrunk');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
// Run once on load to handle initial state
handleScroll();
