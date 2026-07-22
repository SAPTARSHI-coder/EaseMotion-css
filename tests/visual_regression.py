import sys
import os
import cv2
import numpy as np
from skimage.metrics import structural_similarity
from playwright.sync_api import sync_playwright


def capture_screenshot(css_path="submissions/test_animation.css", output_path="current_render.png"):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    harness_path = os.path.join(script_dir, "test_harness.html")
    harness_url = f"file://{harness_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(harness_url)

        if os.path.exists(css_path):
            page.add_style_tag(path=css_path)

        page.wait_for_timeout(500)
        page.screenshot(path=output_path)
        browser.close()


def compare_images(baseline_path, current_path):
    baseline_img = cv2.imread(baseline_path)
    current_img = cv2.imread(current_path)

    baseline_gray = cv2.cvtColor(baseline_img, cv2.COLOR_BGR2GRAY)
    current_gray = cv2.cvtColor(current_img, cv2.COLOR_BGR2GRAY)

    score = structural_similarity(baseline_gray, current_gray)
    return score


if __name__ == "__main__":
    baseline_path = "baseline.png"
    current_path = "current_render.png"
    
    if len(sys.argv) > 1:
        css_path = sys.argv[1]
    elif os.path.exists("submissions/test_animation.css"):
        css_path = "submissions/test_animation.css"
    else:
        css_path = "submissions/docs/visual-regression-pipeline-qa/style.css"

    capture_screenshot(css_path=css_path, output_path=current_path)

    if not os.path.exists(baseline_path):
        import shutil
        shutil.copy(current_path, baseline_path)
        print(f"Baseline image missing. Saved initial render to {baseline_path}.")
        sys.exit(0)

    score = compare_images(baseline_path, current_path)

    if score < 0.98:
        print(f"Visual regression failure! SSIM score ({score:.4f}) is below 0.98 threshold.")
        sys.exit(1)
    else:
        print(f"Visual regression test passed! SSIM score: {score:.4f}")
        sys.exit(0)
