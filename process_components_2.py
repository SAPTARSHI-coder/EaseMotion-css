import os
import re
import subprocess
import sys
import time

def run_cmd(cmd, cwd=None):
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running {cmd}: {result.stderr}")
    return result

def main():
    if len(sys.argv) < 2:
        print("Usage: python process_components.py <data_file>")
        return

    data_file = sys.argv[1]
    with open(data_file, 'r') as f:
        content = f.read()

    # Regex to find each folder section
    # Matches: NN. Folder: name\n followed by everything until the next NN. Folder: or end of string
    pattern = re.compile(r'(\d+)\.\s+Folder:\s+([a-zA-Z0-9_-]+)\n(.*?)(?=\n\d+\.\s+Folder:|\Z)', re.DOTALL)
    
    matches = pattern.findall(content)
    print(f"Found {len(matches)} components.")

    for match in matches:
        num, folder_name, body = match
        print(f"--- Processing {num}: {folder_name} ---")

        # Parse demo.html, style.css, README.md
        demo_match = re.search(r'demo\.html\n(.*?)(?=style\.css\n|README\.md\n|\Z)', body, re.DOTALL)
        style_match = re.search(r'style\.css\n(.*?)(?=README\.md\n|\Z)', body, re.DOTALL)
        readme_match = re.search(r'README\.md\n(.*)', body, re.DOTALL)

        if not demo_match or not style_match or not readme_match:
            print(f"Skipping {folder_name} because files could not be parsed fully.")
            continue

        demo_content = demo_match.group(1).strip()
        style_content = style_match.group(1).strip()
        readme_content = readme_match.group(1).strip()

        # Git operations
        run_cmd("git checkout main")
        run_cmd("git pull origin main")
        
        branch_name = f"feat/{folder_name}"
        # Check if branch exists locally or remotely and delete if so, to start fresh
        run_cmd(f"git branch -D {branch_name}")
        run_cmd(f"git push origin --delete {branch_name}")
        
        run_cmd(f"git checkout -b {branch_name}")

        # Create files
        os.makedirs(folder_name, exist_ok=True)
        with open(os.path.join(folder_name, "demo.html"), 'w') as f:
            f.write(demo_content + '\n')
        with open(os.path.join(folder_name, "style.css"), 'w') as f:
            f.write(style_content + '\n')
        with open(os.path.join(folder_name, "README.md"), 'w') as f:
            f.write(readme_content + '\n')

        # Add components.json entry if there is one (not strictly requested, but good practice)
        # We will just commit the folder.
        run_cmd("git add .")
        run_cmd(f'git commit -m "feat: add {folder_name} component"')
        run_cmd(f"git push -u origin {branch_name}")

        # Create PR
        pr_cmd = f"gh pr create --title \"feat: Add {folder_name} component\" --body \"Adds the {folder_name} animation component per user request.\""
        run_cmd(pr_cmd)

        print(f"Finished PR for {folder_name}\n")
        time.sleep(2) # brief pause to avoid api limits

    print("All PRs completed for this batch.")

if __name__ == "__main__":
    main()
