const sass = require('sass');

const scssInput = `
$primary: #3b82f6;
$radius: 0.5rem;

.ease-btn-primary {
  background: $primary;
  border-radius: $radius;
  &:hover {
    background: darken($primary, 10%);
  }
}
`;

const expectedCSS = `\
.ease-btn-primary {
  background: #3b82f6;
  border-radius: 0.5rem;
}
.ease-btn-primary:hover {
  background: rgb(11.1512195122, 99.1219512195, 242.8487804878);
}
`;

const compiled = sass.compileString(scssInput, { style: 'expanded' }).css;

if (compiled.trim() === expectedCSS.trim()) {
  console.log('✅ PASS: SCSS compilation matches expected CSS.');
} else {
  console.log('❌ FAIL: Output differs.');
  console.log('--- EXPECTED ---');
  console.log(expectedCSS);
  console.log('--- ACTUAL ---');
  console.log(compiled);
  process.exit(1);
}