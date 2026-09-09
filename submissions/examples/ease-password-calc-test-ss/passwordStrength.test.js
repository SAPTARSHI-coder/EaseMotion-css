import { describe, it, expect } from 'vitest';
import { calculatePasswordScore } from './passwordStrength.js';

describe('Password Strength Regex Score Calc', () => {
  describe('Invalid Inputs & Edge Cases', () => {
    it('should return 0 for null', () => {
      expect(calculatePasswordScore(null)).toBe(0);
    });

    it('should return 0 for undefined', () => {
      expect(calculatePasswordScore(undefined)).toBe(0);
    });

    it('should return 0 for non-string types (arrays, objects, numbers)', () => {
      expect(calculatePasswordScore(['password'])).toBe(0);
      expect(calculatePasswordScore({ pass: 'word' })).toBe(0);
      expect(calculatePasswordScore(12345678)).toBe(0);
    });

    it('should return 0 for empty strings', () => {
      expect(calculatePasswordScore('')).toBe(0);
    });

    it('should return 0 for whitespace-only strings', () => {
      // Prevents whitespace from triggering length and special character rules
      expect(calculatePasswordScore('        ')).toBe(0);
      expect(calculatePasswordScore(' \n \t ')).toBe(0);
    });
  });

  describe('Happy Path: Score Calculation', () => {
    it('should return 1 for short lowercase strings (only lowercase)', () => {
      expect(calculatePasswordScore('abc')).toBe(1);
    });

    it('should return 2 for 8+ length lowercase strings (length + lowercase)', () => {
      expect(calculatePasswordScore('abcdefgh')).toBe(2);
    });

    it('should return 3 for 8+ length with mixed case (length + lower + upper)', () => {
      expect(calculatePasswordScore('Abcdefgh')).toBe(3);
    });

    it('should return 4 for 8+ length, mixed case, and numbers (length + lower + upper + number)', () => {
      expect(calculatePasswordScore('Abcdefgh1')).toBe(4);
    });

    it('should return 5 for meeting all criteria including special characters', () => {
      expect(calculatePasswordScore('StrongP@ss1')).toBe(5);
      expect(calculatePasswordScore('!Q@W#E$R5t')).toBe(5);
    });
  });

  describe('Isolated Regex Condition Checks', () => {
    it('detects special characters correctly regardless of length', () => {
      // lowercase (1) + special (1) = 2
      expect(calculatePasswordScore('a!')).toBe(2);
    });

    it('detects numbers correctly regardless of length', () => {
      // uppercase (1) + number (1) = 2
      expect(calculatePasswordScore('A1')).toBe(2);
    });
  });
});
