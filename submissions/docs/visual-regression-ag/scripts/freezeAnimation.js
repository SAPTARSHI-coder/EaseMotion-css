// Helper to inject into Playwright page evaluation to pause all animations at a deterministic timestamp
module.exports = async function freezeAnimations(page, timestampMs = 500) {
  await page.evaluate((ts) => {
    document.getAnimations().forEach(animation => {
      animation.pause();
      animation.currentTime = ts;
    });
  }, timestampMs);
};
