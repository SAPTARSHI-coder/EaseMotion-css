import { describe, it, expect } from 'vitest';
import { parse }             from '../../../../easemotion/engine/parser.js';
import { compile, className } from '../../../../easemotion/engine/compiler.js';

describe("Slide Up Keyframes", () => {
  it("should parse Slide Up keyframes without syntax errors", () => {
    const ast = parse('slide-up');
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('slide-up');
  });

  it("should generate the expected AST structure", () => {
    const ast = parse('slide-up 800ms ease-in delay-200ms repeat-infinite forwards');
    expect(ast).toEqual({
      animation: 'slide-up',
      duration: 800,
      easing: 'cubic-bezier(0.4, 0, 1, 1)', // ease-in
      delay: 200,
      iterations: 'infinite',
      fill: 'forwards',
      direction: 'normal'
    });
  });

  it("should compile the expected output", () => {
    const ast = parse('slide-up 500ms ease-out');
    const cls = className(ast);
    const css = compile(ast, cls);
    
    expect(css).toContain(`.${cls}`);
    expect(css).toContain('animation:');
    expect(css).toContain('ease-kf-slide-up');
    expect(css).toContain('500ms');
    expect(css).toContain('cubic-bezier(0, 0, 0.2, 1)'); // ease-out
  });

  it("should gracefully handle malformed slide-up keyframes", () => {
    const ast = parse('slide-up invalid-modifier');
    // Assuming parser ignores invalid modifiers or we just verify it doesn't crash
    // and returns default values for those parts.
    expect(ast).not.toBeNull();
    expect(ast.animation).toBe('slide-up');
  });
});
