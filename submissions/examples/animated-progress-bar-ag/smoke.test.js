import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('Animated Progress Bar Component', () => {
  const css = readFileSync(resolve(__dirname, 'style.css'), 'utf8');

  it('should have progress bar component classes defined', () => {
    expect(css).toContain('.ease-progress');
    expect(css).toContain('.ease-progress__bar');
    expect(css).toContain('.ease-progress--striped');
    expect(css).toContain('.ease-progress--indeterminate');
    expect(css).toContain('.ease-progress--thin');
    expect(css).toContain('.ease-progress--thick');
    expect(css).toContain('--ease-progress-value');
  });

  it('should support reduced motion preference', () => {
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
    expect(css).toContain('animation: none');
  });
});
