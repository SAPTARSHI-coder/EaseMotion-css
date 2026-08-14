import { describe, it, expect } from 'vitest';
import { getBoundedSlideIndex } from './carousel.js';

describe('Carousel Slide Index Bound Check (#82013)', () => {
  const totalSlides = 5; // Valid indices: 0, 1, 2, 3, 4

  describe('Happy Paths & Navigation Directions', () => {
    it('should increment index correctly when navigating next', () => {
      expect(getBoundedSlideIndex(1, totalSlides, 'next')).toBe(2);
      expect(getBoundedSlideIndex(3, totalSlides, 'next')).toBe(4);
    });

    it('should decrement index correctly when navigating prev', () => {
      expect(getBoundedSlideIndex(3, totalSlides, 'prev')).toBe(2);
      expect(getBoundedSlideIndex(1, totalSlides, 'prev')).toBe(0);
    });

    it('should jump to specific valid target index correctly', () => {
      expect(getBoundedSlideIndex(0, totalSlides, 3)).toBe(3);
      expect(getBoundedSlideIndex(2, totalSlides, 4)).toBe(4);
    });
  });

  describe('Edge Cases & Boundary Wrap-Arounds', () => {
    it('should wrap around to index 0 when navigating next from the last slide', () => {
      expect(getBoundedSlideIndex(4, totalSlides, 'next')).toBe(0);
    });

    it('should wrap around to the last slide index when navigating prev from index 0', () => {
      expect(getBoundedSlideIndex(0, totalSlides, 'prev')).toBe(4);
    });

    it('should handle index overflow when jumping past upper bound', () => {
      expect(getBoundedSlideIndex(2, totalSlides, 7)).toBe(2); // If direct index 7 is passed, wrapped or constrained? Let's check direct index assignment:
      // In our implementation, direct index 7 >= 5 wraps to 0.
    });

    it('should handle index underflow when jumping below 0', () => {
      expect(getBoundedSlideIndex(2, totalSlides, -2)).toBe(3); // -2 >= 0 ? No, -2 < 0 wraps to 5 - 2 = 3.
    });
  });

  describe('Invalid Inputs & Error Handling', () => {
    it('should throw an error if totalSlides is zero or negative', () => {
      expect(() => getBoundedSlideIndex(0, 0, 'next')).toThrowError('Total slides must be a positive number');
      expect(() => getBoundedSlideIndex(0, -3, 'next')).toThrowError('Total slides must be a positive number');
    });

    it('should throw an error if currentIndex is not a valid number', () => {
      expect(() => getBoundedSlideIndex('invalid', totalSlides, 'next')).toThrowError('Current index must be a valid number');
      expect(() => getBoundedSlideIndex(NaN, totalSlides, 'next')).toThrowError('Current index must be a valid number');
    });
  });
});
