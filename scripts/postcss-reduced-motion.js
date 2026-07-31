/**
 * PostCSS Plugin: postcss-reduced-motion
 * Issue #58383 — Auto-generates prefers-reduced-motion fallbacks for EaseMotion CSS.
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-reduced-motion',

    Once(root, { AtRule, Rule, Declaration }) {
      let hasEmRules = false;
      let hasReducedMotionMedia = false;

      // 1. Traverse AST to detect em- rules or animation/transition declarations
      root.walkRules((rule) => {
        if (
          rule.selector.includes('em-') ||
          rule.selector.includes('[class*="em-"]')
        ) {
          hasEmRules = true;
        } else {
          rule.walkDecls(/(animation|transition)/i, () => {
            hasEmRules = true;
          });
        }
      });

      // 2. Check if a prefers-reduced-motion media query already exists
      root.walkAtRules('media', (atRule) => {
        if (atRule.params.includes('prefers-reduced-motion')) {
          hasReducedMotionMedia = true;
        }
      });

      // 3. Inject fallback media query if em- rules are present and no reduced-motion query exists
      if (hasEmRules && !hasReducedMotionMedia) {
        const mediaRule = new AtRule({
          name: 'media',
          params: '(prefers-reduced-motion: reduce)',
        });

        const emRule = new Rule({
          selector: '[class*="em-"]',
        });

        emRule.append(
          new Declaration({
            prop: 'animation-duration',
            value: '0.01ms !important',
          }),
          new Declaration({
            prop: 'animation-iteration-count',
            value: '1 !important',
          }),
          new Declaration({
            prop: 'transition-duration',
            value: '0.01ms !important',
          }),
          new Declaration({
            prop: 'scroll-behavior',
            value: 'auto !important',
          })
        );

        mediaRule.append(emRule);
        root.append(mediaRule);
      }
    },
  };
};

module.exports.postcss = true;
