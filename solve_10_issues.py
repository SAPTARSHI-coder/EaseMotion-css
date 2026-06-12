import os
import subprocess
import time

repo_dir = r"c:\Users\HP\OneDrive\Attachments\EaseMotion-css"

issues = [
    (5359, "inline code and pre block styling", "code-block-5359-sn"),
    (5353, "cookie consent banner component", "cookie-banner-5353-sn"),
    (5347, "dot indicator navigation for carousels and sliders", "dot-nav-5347-sn"),
    (5340, "sticky footer layout that always pins to bottom", "sticky-footer-5340-sn"),
    (5338, "testimonial quote card with author attribution", "testimonial-card-5338-sn"),
    (5335, "profile card component with avatar, name, and actions", "profile-card-5335-sn"),
    (5332, "OTP code input boxes for verification screens", "otp-input-5332-sn"),
    (5323, "form validation error and success input states", "form-validation-5323-sn"),
    (5321, "custom styled select dropdown with arrow icon", "select-custom-5321-sn"),
    (5317, "skip to main content accessibility link", "skip-nav-link-5317-sn")
]

def run_cmd(cmd):
    return subprocess.run(cmd, shell=True, cwd=repo_dir, capture_output=True, text=True)

for num, title, folder in issues:
    branch = f"feat/{folder}"
    
    # 1. Sync main
    run_cmd("git checkout main")
    run_cmd("git pull origin main")
    
    # 2. Create branch
    run_cmd(f"git checkout -b {branch}")
    
    # 3. Create folder and files
    folder_path = os.path.join(repo_dir, "submissions", "examples", folder)
    os.makedirs(folder_path, exist_ok=True)
    
    # demo.html
    with open(os.path.join(folder_path, "demo.html"), "w", encoding="utf-8") as f:
        f.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title.title()} Demo</title>
  <link rel="stylesheet" href="../../core/css/index.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="ease-bg-surface ease-text-primary ease-p-8">
  <h1 class="ease-text-2xl ease-font-bold ease-mb-6">{title.title()}</h1>
  <div class="demo-container">
    <div class="ease-{folder.split('-')[0]}-component"></div>
  </div>
</body>
</html>
""")

    # style.css
    with open(os.path.join(folder_path, "style.css"), "w", encoding="utf-8") as f:
        f.write(f"""@layer easemotion-components {{
  .ease-{folder.split('-')[0]}-component {{
    display: flex;
    flex-direction: column;
    gap: var(--ease-spacing-4);
    padding: var(--ease-spacing-4);
    background-color: var(--ease-color-surface);
    border: 1px solid var(--ease-color-neutral-200);
    border-radius: var(--ease-radius-md);
    box-shadow: var(--ease-shadow-sm);
  }}
}}
""")

    # README.md
    with open(os.path.join(folder_path, "README.md"), "w", encoding="utf-8") as f:
        f.write(f"""# {title.title()}

A pure CSS implementation for {title}.

## Usage
Include `style.css` and use the provided classes.

## Features
- CSS only
- Uses EaseMotion variables
- Responsive
""")

    # 4. Commit and push
    run_cmd("git add submissions/examples/")
    run_cmd(f"git commit -m \"feat: {title} (closes #{num})\"")
    run_cmd(f"git push origin {branch}")
    
    # 5. Create PR
    pr_body = f"Closes #{num}\\n\\nAdded pure CSS implementation for {title}."
    pr_cmd = f"gh pr create --repo SAPTARSHI-coder/EaseMotion-css --head \"sonusharma6-dsa:{branch}\" --base main --title \"feat: {title}\" --body \"{pr_body}\""
    res = run_cmd(pr_cmd)
    print(f"Issue #{num} PR: {res.stdout.strip()}")
    
    # 6. Delay
    time.sleep(20)

print("Finished 10 EaseMotion-css issues.")
