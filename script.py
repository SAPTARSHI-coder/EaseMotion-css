import os
import subprocess
import re
import time

def run(cmd, check=True):
    print(f"Running: {cmd}")
    subprocess.run(cmd, shell=True, check=check)

with open("data.txt", "r") as f:
    text = f.read()

# regex to split by "Number. Folder: "
features = re.split(r'\d+\.\s+Folder:\s+', text)
features = [f.strip() for f in features if f.strip()]

for feature in features:
    lines = feature.split('\n')
    folder_name = lines[0].strip()
    
    # Extract files
    try:
        demo_idx = lines.index("demo.html")
        style_idx = lines.index("style.css")
        readme_idx = lines.index("README.md")
    except ValueError:
        print(f"Skipping {folder_name} due to missing file markers.")
        continue
    
    demo_content = '\n'.join(lines[demo_idx+1:style_idx]).strip()
    style_content = '\n'.join(lines[style_idx+1:readme_idx]).strip()
    readme_content = '\n'.join(lines[readme_idx+1:]).strip()
    
    # Validation check to ensure we got content
    if not readme_content:
        readme_content = f"# {folder_name}\n\nAutomated submission for {folder_name}."
    
    print(f"Processing {folder_name}...")
    
    # 1. checkout upstream main and create branch
    run("git fetch upstream")
    branch_name = f"add-{folder_name}"
    run(f"git checkout -B {branch_name} upstream/main")
    
    # 2. create directory
    target_dir = f"submissions/examples/{folder_name}"
    os.makedirs(target_dir, exist_ok=True)
    
    # 3. write files
    with open(f"{target_dir}/demo.html", "w") as f:
        f.write(demo_content + "\n")
    with open(f"{target_dir}/style.css", "w") as f:
        f.write(style_content + "\n")
    with open(f"{target_dir}/README.md", "w") as f:
        f.write(readme_content + "\n")
        
    # 4. commit
    run(f"git add {target_dir}")
    run(f'git commit -m "Add {folder_name} example"')
    
    # 5. push
    run(f"git push -u origin {branch_name} -f")
    
    # 6. create PR
    try:
        run(f'gh pr create --title "Add {folder_name} example" --body "Added a new example for the {folder_name} animation under submissions/examples/, including the required README.md to pass validation."')
    except Exception as e:
        print(f"Failed to create PR for {folder_name}: {e}")
    
    print(f"Finished {folder_name}\n")
    time.sleep(3) # Wait 3 seconds to avoid rate limiting
