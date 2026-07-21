import { optimizeHtml, optimizeHtmlBroken } from './optimizer.js';

const fullCss = `
.ease-fade-in {
  animation-name: ease-kf-fade-in;
}

@keyframes ease-kf-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

const html = '<div em="fade-in 500ms"></div>';

const broken = await optimizeHtmlBroken(html, fullCss);
const fixed = await optimizeHtml(html, fullCss);

const brokenHasRule = /animation:[^;]*ease-kf-fade-in/.test(broken.css);
const brokenHasKeyframe = /@keyframes\s+ease-kf-fade-in/.test(broken.css);
const fixedHasRule = /animation:[^;]*ease-kf-fade-in/.test(fixed.css);
const fixedHasKeyframe = /@keyframes\s+ease-kf-fade-in/.test(fixed.css);

console.log('Broken behavior');
console.log(`  rule kept: ${brokenHasRule}`);
console.log(`  keyframe kept: ${brokenHasKeyframe}`);
console.log('Expected behavior');
console.log(`  rule kept: ${fixedHasRule}`);
console.log(`  keyframe kept: ${fixedHasKeyframe}`);
console.log('');
console.log('Broken output:');
console.log(broken.css);
console.log('');
console.log('Expected output:');
console.log(fixed.css);
