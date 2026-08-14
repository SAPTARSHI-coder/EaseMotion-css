/**
 * A sample ESM module to test named and default export compatibility.
 */

// Named Export 1
export const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a + b;
};

// Named Export 2
export const subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a - b;
};

// Default Export Object
const defaultCalculator = {
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a * b;
  },
  version: '1.0.0'
};

export default defaultCalculator;
