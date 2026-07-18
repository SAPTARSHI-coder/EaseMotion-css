import { mapASTToWAAPI } from './astMapper.js';

export class WAAPIRuntime {
  constructor(element, ast) {
    this.element = element;
    this.ast = ast;
    this.animation = null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  init() {
    if (this.prefersReducedMotion) {
      // Apply final state immediately
      const finalKeyframe = this.ast.keyframes[this.ast.keyframes.length - 1];
      if (finalKeyframe) {
        Object.keys(finalKeyframe).forEach(prop => {
          if (prop !== 'offset') {
             this.element.style[prop] = finalKeyframe[prop];
          }
        });
      }
      return;
    }

    const { keyframes, options } = mapASTToWAAPI(this.ast);
    this.animation = this.element.animate(keyframes, options);
    this.animation.pause(); // Start paused to allow control from UI
  }

  play() { if (this.animation) this.animation.play(); }
  pause() { if (this.animation) this.animation.pause(); }
  reverse() { if (this.animation) this.animation.reverse(); }
  cancel() { if (this.animation) this.animation.cancel(); }
  finish() { if (this.animation) this.animation.finish(); }
  restart() {
    if (this.animation) {
      this.animation.currentTime = 0;
      this.animation.play();
    }
  }
  setPlaybackRate(rate) {
    if (this.animation) this.animation.playbackRate = rate;
  }
  seek(progress) {
    if (this.animation) {
      const duration = this.animation.effect.getComputedTiming().activeDuration;
      this.animation.currentTime = (progress / 100) * duration;
    }
  }
  getProgress() {
    if (this.animation) {
      const duration = this.animation.effect.getComputedTiming().activeDuration;
      if (duration === 0) return 0;
      return (this.animation.currentTime / duration) * 100;
    }
    return 0;
  }
}
