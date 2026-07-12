# SCSS Motion Mixin Recipe Book

Resolves beginner utility extension issue ticket #43355. Delivers a centralized compilation of 8 ready-to-use structural animation recipes driven directly by standard EaseMotion SCSS mixin orchestration variables.

## 📦 Copy-Ready Snippet Ledger

### 1. Standard Fluid Fade-In
```scss
@import "ease-motion-mixin-cookbook-sp";

.hero-graphic {
  @include recipe-fade-in($duration:$ease-speed-medium);
}
