import { describe, it, expect } from 'vitest';
import defaultCalculator, { add, subtract } from './esmExports.js';
// Note: Testing dynamic imports as well to ensure full ESM compatibility

describe('ESM Module Export Import Compatibility', () => {
  
  describe('Module Resolution & Typings', () => {
    it('should successfully resolve named exports as functions', () => {
      expect(typeof add).toBe('function');
      expect(typeof subtract).toBe('function');
    });

    it('should successfully resolve the default export as an object', () => {
      expect(typeof defaultCalculator).toBe('object');
      expect(typeof defaultCalculator.multiply).toBe('function');
      expect(defaultCalculator.version).toBe('1.0.0');
    });
    
    it('should support dynamic ESM imports', async () => {
      const dynamicModule = await import('./esmExports.js');
      expect(dynamicModule.add).toBeDefined();
      expect(dynamicModule.default).toBeDefined();
      expect(dynamicModule.default.version).toBe('1.0.0');
    });
  });

  describe('Happy Path: Execution', () => {
    it('should execute named export: add', () => {
      expect(add(5, 7)).toBe(12);
    });

    it('should execute named export: subtract', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should execute default export method: multiply', () => {
      expect(defaultCalculator.multiply(3, 4)).toBe(12);
    });
  });

  describe('Edge Cases & Invalid Inputs', () => {
    it('should return NaN when missing arguments in named exports', () => {
      expect(add(5)).toBeNaN();
      expect(subtract()).toBeNaN();
    });

    it('should return NaN when passing invalid types (strings, null, objects)', () => {
      expect(add('5', 5)).toBeNaN();
      expect(subtract(10, null)).toBeNaN();
      expect(defaultCalculator.multiply({}, [])).toBeNaN();
    });
  });
  
});
