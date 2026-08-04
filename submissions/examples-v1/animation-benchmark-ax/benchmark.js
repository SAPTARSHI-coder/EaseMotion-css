const puppeteer = require('puppeteer');

const ANIMATIONS = [
  'ease-fade-in',
  'ease-slide-up',
  'ease-bounce',
  'ease-pulse',
  'ease-rotate',
  'ease-ping',
  'ease-flip',
  'ease-zoom-in'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://saptarshi-coder.github.io/EaseMotion-css/demo.html');

  console.log('Animation          Avg FPS   Jank %   Jank Frames');
  console.log('-------------------------------------------------');

  for (const anim of ANIMATIONS) {
    // Apply the animation class to a test element via page.evaluate
    const fpsData = await page.evaluate(async (className) => {
      const el = document.createElement('div');
      el.className = className;
      el.textContent = 'Test';
      el.style.position = 'fixed';
      el.style.top = '0';
      el.style.left = '0';
      el.style.pointerEvents = 'none';
      document.body.appendChild(el);

      // Wait for 3 seconds and measure frame rate
      const start = performance.now();
      let frames = 0;
      let jankFrames = 0;
      let lastFrameTime = start;

      return new Promise(resolve => {
        function tick() {
          const now = performance.now();
          const elapsed = now - start;
          if (elapsed >= 3000) {
            el.remove();
            const avgFPS = frames / (elapsed / 1000);
            resolve({ avgFPS, jankFrames, totalFrames: frames });
            return;
          }
          frames++;
          const frameDuration = now - lastFrameTime;
          if (frameDuration > 16.67 * 2) { // frame longer than 33ms = jank
            jankFrames++;
          }
          lastFrameTime = now;
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, anim);

    const jankPercent = fpsData.totalFrames > 0 ? ((fpsData.jankFrames / fpsData.totalFrames) * 100).toFixed(1) : '0.0';
    console.log(${anim.padEnd(20)}    %     );
  }

  await browser.close();
})();
