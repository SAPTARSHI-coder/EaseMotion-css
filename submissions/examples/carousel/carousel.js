/**
 * Carousel Slide Index Bound Checker
 * Closes #82013: Add Vitest unit test for Carousel Slide Index Bound Check
 */
export function getBoundedSlideIndex(currentIndex, totalSlides, direction) {
  if (typeof totalSlides !== 'number' || totalSlides <= 0) {
    throw new Error('Total slides must be a positive number');
  }
  
  if (typeof currentIndex !== 'number' || isNaN(currentIndex)) {
    throw new Error('Current index must be a valid number');
  }

  let newIndex = currentIndex;

  if (direction === 'next') {
    newIndex = currentIndex + 1;
  } else if (direction === 'prev') {
    newIndex = currentIndex - 1;
  } else if (typeof direction === 'number') {
    newIndex = direction;
  }

  // Wrap around / bound checking (circular carousel behavior)
  if (newIndex >= totalSlides) {
    return 0; // Wrap to first slide
  }
  if (newIndex < 0) {
    return totalSlides - 1; // Wrap to last slide
  }

  return newIndex;
}
