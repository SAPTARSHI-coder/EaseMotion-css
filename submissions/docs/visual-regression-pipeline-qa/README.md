# Visual Regression Testing Pipeline Showcase

## 1. What does this do?
Provides a self-contained visual regression testing pipeline and showcase animation for automated QA validation using Python, Playwright, and OpenCV (SSIM).

## 2. How is it used?
Link `style.css` in your HTML and apply the target class to container elements:
```html
<div id="box" class="em-animate"></div>
```
To run the automated visual regression script locally or in CI:
```bash
pip install -r submissions/docs/visual-regression-pipeline-qa/requirements.txt
playwright install --with-deps chromium
python submissions/docs/visual-regression-pipeline-qa/visual_regression.py
```

## 3. Why is it useful?
Ensures submitted CSS animations render deterministically without layout shifts or geometry regressions across automated CI runs.
