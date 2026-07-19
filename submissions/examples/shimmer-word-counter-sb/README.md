# ✨ Shimmer Word Counter

A blog-style word counter with a shimmering progress bar animation.

## Features
- Real-time word, character, and sentence counting
- Shimmering progress bar (animated gradient)
- Target word count (100 words = 100%)
- Clean, dark-themed blog-style design
- Responsive and accessible
- Uses EaseMotion CSS variables

## Usage
```html
<div class="ease-word-counter">
    <div class="ease-counter-header">
        <span class="ease-counter-label">📝 Word Count</span>
        <span class="ease-counter-value" id="wordCount">0</span>
    </div>
    <div class="ease-progress-track">
        <div class="ease-progress-fill" id="progressFill"></div>
    </div>
    <textarea class="ease-text-input" id="textInput" rows="6"></textarea>
    <div class="ease-counter-stats">
        <span>📖 <span id="charCount">0</span> characters</span>
        <span>📊 <span id="sentenceCount">0</span> sentences</span>
    </div>
</div>