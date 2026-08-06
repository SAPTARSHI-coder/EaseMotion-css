const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('test.js', 'utf8');
const wrapped = `async function main() { ${code} }`;

try {
  new vm.Script(wrapped);
  console.log('Syntax is valid');
} catch (e) {
  console.error(e.toString());
}
