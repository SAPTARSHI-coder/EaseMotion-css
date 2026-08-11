/**
 * Blur-Entrance Carousel - Fintech Dashboard
 * EaseMotion CSS - GSSoC 2026
 */

class BlurCarousel {
  constructor() {
    this.track = document.getElementById('carouselTrack');
    this.dotsContainer = document.getElementById('carouselDots');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    
    this.currentIndex = 0;
    this.totalCards = this.track.children.length;
    this.cardWidth = 280 + 24; // card width + gap
    this.autoPlayInterval = null;
    this.isTransitioning = false;
    
    this.init();
  }
  
  init() {
    // Create dots
    this.createDots();
    
    // Set initial position
    this.updateCarousel(0);
    
    // Event listeners
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      this.stopAutoPlay();
    });
    
    this.track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
      this.startAutoPlay();
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
      this.updateCarousel(this.currentIndex);
    });
    
    // Start auto-play
    this.startAutoPlay();
  }
  
  createDots() {
    for (let i = 0; i < this.totalCards; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
    }
  }
  
  updateDots(index) {
    const dots = this.dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  updateCarousel(index) {
    // Responsive card width
    const containerWidth = this.track.parentElement.offsetWidth;
    let cardWidth = 280 + 24; // default
    
    if (containerWidth < 480) {
      cardWidth = 200 + 12;
    } else if (containerWidth < 768) {
      cardWidth = 220 + 16;
    }
    
    // Calculate visible cards
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxIndex = Math.max(0, this.totalCards - visibleCards);
    
    // Clamp index
    const clampedIndex = Math.min(index, maxIndex);
    this.currentIndex = clampedIndex;
    
    // Calculate translate
    const translateX = -clampedIndex * cardWidth;
    this.track.style.transform = `translateX(${translateX}px)`;
    
    // Update dots
    this.updateDots(clampedIndex);
    
    // Update button states
    this.prevBtn.style.opacity = clampedIndex === 0 ? '0.3' : '1';
    this.nextBtn.style.opacity = clampedIndex === maxIndex ? '0.3' : '1';
  }
  
  goTo(index) {
    if (this.isTransitioning || index === this.currentIndex) return;
    this.isTransitioning = true;
    this.updateCarousel(index);
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.goTo(this.currentIndex - 1);
    }
  }
  
  next() {
    const containerWidth = this.track.parentElement.offsetWidth;
    let cardWidth = 280 + 24;
    if (containerWidth < 480) cardWidth = 200 + 12;
    else if (containerWidth < 768) cardWidth = 220 + 16;
    
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxIndex = Math.max(0, this.totalCards - visibleCards);
    
    if (this.currentIndex < maxIndex) {
      this.goTo(this.currentIndex + 1);
    } else {
      // Loop back to start
      this.goTo(0);
    }
  }
  
  handleSwipe(startX, endX) {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  
  startAutoPlay() {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  destroy() {
    this.stopAutoPlay();
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const carousel = new BlurCarousel();
  
  // Pause on hover
  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', () => carousel.stopAutoPlay());
  container.addEventListener('mouseleave', () => carousel.startAutoPlay());
});