import { WAAPIRuntime } from './runtime.js';
import { sampleAST } from './mock/sampleAST.js';

export function setupAnimations() {
  const box = document.getElementById('animatedBox');
  const runtime = new WAAPIRuntime(box, sampleAST);
  runtime.init();
  return runtime;
}
