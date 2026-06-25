import { describe, it, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

describe('build:scss', () => {
  it('should compile a non-empty stylesheet with framework selectors', () => {
    const outDir = new URL('../dist', import.meta.url).pathname;
    const outFile = `${outDir}/easemotion.scss.css`;

    execSync(
      'npx sass scss/_index.scss dist/easemotion.scss.css',
      { encoding: 'utf8', cwd: new URL('..', import.meta.url).pathname },
    );

    expect(existsSync(outFile)).toBe(true);

    const css = readFileSync(outFile, 'utf8');
    expect(css.length).toBeGreaterThan(100);
    expect(css).toContain('.ease-btn');
    expect(css).toContain('.ease-card');
    expect(css).toContain('.ease-fade-in');
  });
});
