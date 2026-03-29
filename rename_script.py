import os
import re
import glob

def refactor_project():
    root_dir = r"d:\DESKTOP\Flow-css"
    
    # Files to process
    extensions = ["*.css", "*.html", "*.md", "CODEOWNERS"]
    files_to_process = []
    
    for root, dirs, files in os.walk(root_dir):
        if ".git" in root or "node_modules" in root:
            continue
        for file in files:
            if file.endswith((".css", ".html", ".md")) or file == "CODEOWNERS":
                files_to_process.append(os.path.join(root, file))
                
    for filepath in files_to_process:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # 1. Project Names
        new_content = new_content.replace("Flow CSS", "EaseMotion CSS")
        new_content = new_content.replace("Flow css", "EaseMotion CSS")
        
        # 2. Repo names / URL formats
        new_content = new_content.replace("Flow-css", "EaseMotion-css")
        new_content = new_content.replace("flow-css", "easemotion-css")
        
        # 3. Main entry file
        new_content = new_content.replace("flow.css", "easemotion.css")
        
        # 4. Classes, variables, properties
        # \b ensures we match word boundaries (so we don't accidentally match 'overflow-')
        new_content = re.sub(r'\bflow-', 'ease-', new_content)
        
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8', newline="") as f:
                f.write(new_content)
            print(f"Updated: {filepath}")

    # 5. Rename flow.css to easemotion.css
    old_css_path = os.path.join(root_dir, "flow.css")
    new_css_path = os.path.join(root_dir, "easemotion.css")
    if os.path.exists(old_css_path):
        os.rename(old_css_path, new_css_path)
        print(f"Renamed: {old_css_path} -> {new_css_path}")

if __name__ == "__main__":
    refactor_project()
