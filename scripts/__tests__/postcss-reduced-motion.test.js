const test = require('node:test');
const assert = require('node:assert');
const plugin = require('../postcss-reduced-motion');

// Mock AST nodes for zero-dependency testing
class MockDeclaration {
  constructor({ prop, value }) {
    this.prop = prop;
    this.value = value;
  }
}

class MockRule {
  constructor({ selector }) {
    this.selector = selector;
    this.declarations = [];
  }
  append(...decls) {
    this.declarations.push(...decls);
  }
  walkDecls(pattern, callback) {
    for (const decl of this.declarations) {
      if (pattern.test(decl.prop)) {
        callback(decl);
      }
    }
  }
}

class MockAtRule {
  constructor({ name, params }) {
    this.name = name;
    this.params = params;
    this.rules = [];
  }
  append(rule) {
    this.rules.push(rule);
  }
}

class MockRoot {
  constructor() {
    this.children = [];
  }
  append(child) {
    this.children.push(child);
  }
  walkRules(callback) {
    const traverse = (node) => {
      if (node.selector) callback(node);
      if (node.children) node.children.forEach(traverse);
      if (node.rules) node.rules.forEach(traverse);
    };
    this.children.forEach(traverse);
  }
  walkAtRules(name, callback) {
    const traverse = (node) => {
      if (node.name === name) callback(node);
      if (node.children) node.children.forEach(traverse);
    };
    this.children.forEach(traverse);
  }
}

test('normal CSS without em- rules passes through untouched', () => {
  const root = new MockRoot();
  root.append(new MockRule({ selector: '.box' }));

  const instance = plugin();
  instance.Once(root, { AtRule: MockAtRule, Rule: MockRule, Declaration: MockDeclaration });

  assert.strictEqual(root.children.length, 1);
});

test('appends prefers-reduced-motion media query when em- utility rules exist', () => {
  const root = new MockRoot();
  const emRule = new MockRule({ selector: '.em-fade-in' });
  emRule.append(new MockDeclaration({ prop: 'animation', value: 'fadeIn 0.3s' }));
  root.append(emRule);

  const instance = plugin();
  instance.Once(root, { AtRule: MockAtRule, Rule: MockRule, Declaration: MockDeclaration });

  assert.strictEqual(root.children.length, 2);
  const media = root.children[1];
  assert.strictEqual(media.name, 'media');
  assert.strictEqual(media.params, '(prefers-reduced-motion: reduce)');
  assert.strictEqual(media.rules[0].selector, '[class*="em-"]');
});

test('preserves existing explicit prefers-reduced-motion blocks without duplication', () => {
  const root = new MockRoot();
  root.append(new MockRule({ selector: '.em-slide' }));
  root.append(new MockAtRule({ name: 'media', params: '(prefers-reduced-motion: reduce)' }));

  const instance = plugin();
  instance.Once(root, { AtRule: MockAtRule, Rule: MockRule, Declaration: MockDeclaration });

  assert.strictEqual(root.children.length, 2);
});
