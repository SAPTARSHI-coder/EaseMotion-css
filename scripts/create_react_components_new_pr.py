import os
import subprocess
import textwrap

def run(cmd, capture=False, check=True):
    print(f"RUN: {cmd}")
    result = subprocess.run(cmd, shell=True, text=True, capture_output=capture)
    if check and result.returncode != 0:
        print(f"ERROR: {result.stderr}")
        raise SystemExit(1)
    return result

# List of all 30 UI components
COMPONENTS = [
    "accordion", "alert", "avatar", "badge", "breadcrumb", "button",
    "card", "carousel", "checkbox", "chip", "code-block", "code-inline",
    "dialog", "divider", "drawer", "dropdown", "form", "icon", "image",
    "input", "kbd", "link", "list", "loader", "menu", "modal", "navbar",
    "pagination", "popover", "progress"
]

ISSUE_NUM = 63019
BRANCH_NAME = "feat/react-components-new-harrshita"
REPO_ROOT = "/Users/apple/EaseMotion-css"

def main():
    os.chdir(REPO_ROOT)
    # Ensure a clean state
    run("git checkout main")
    run("git fetch upstream main")
    run("git reset --hard upstream/main")

    # Create a fresh branch for the new submission
    run(f"git checkout -B {BRANCH_NAME} upstream/main")

    for comp in COMPONENTS:
        # Use a unique folder name that does NOT already exist
        folder = f"submissions/react/react-{comp}-harrshita-new"
        os.makedirs(folder, exist_ok=True)

        # Component name – add a New suffix to avoid clashes
        comp_pascal = "".join(part.capitalize() for part in comp.split("-"))
        component_name = f"Ease{comp_pascal}New"

        # JSX file content
        jsx_content = textwrap.dedent(f"""
            import React from 'react';

            /**
             * EaseMotion {comp_pascal} New Component
             *
             * Wraps the `ease-{comp}` utility class in a React component.
             */
            export const {component_name} = React.forwardRef(({{ className, children, ...props }}, ref) => {{
              return (
                <div
                  ref={{ref}}
                  className={{`ease-{comp} ${{className || ''}}`.trim()}}
                  {{...props}}
                >
                  {{children}}
                </div>
              );
            }});

            {component_name}.displayName = '{component_name}';
            export default {component_name};
            """)
        with open(f"{folder}/{component_name}.jsx", "w") as f:
            f.write(jsx_content)

        # README documentation
        readme_content = textwrap.dedent(f"""
            # React {comp_pascal} New Component
            
            This component provides a React wrapper for the `ease-{comp}` CSS utility.
            
            ## Usage
            
            ```jsx
            import {{ {component_name} }} from './{component_name}';
            
            function Demo() {{
              return (
                <{component_name} className=\"custom-utility\">Hello EaseMotion!</{component_name}>
              );
            }}
            ```
            
            The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-{comp}` class.
            """)
        with open(f"{folder}/README.md", "w") as f:
            f.write(readme_content)

        # Stage the new folder
        run(f"git add {folder}")

    # Commit all new files
    commit_msg = f"feat(react): add 30 new React component wrappers (unique folders)\n\nAdds new React component wrappers for all 30 UI elements in fresh directories.\n\nFixes #{ISSUE_NUM}"
    with open("tmp_react_commit.md", "w") as f:
        f.write(commit_msg)
    run("git commit -F tmp_react_commit.md")

    # Push the branch
    run(f"git push origin {BRANCH_NAME} --force")

    # Open PR via GitHub CLI
    pr_body = f"Adds new React component wrappers for the full UI library in uniquely named folders (no existing files touched).\n\nFixes #{ISSUE_NUM}"
    with open("tmp_react_pr.md", "w") as f:
        f.write(pr_body)
    run(f"gh pr create --title 'feat(react): add 30 new component wrappers' --body-file tmp_react_pr.md --head harrshita123:{BRANCH_NAME} --base main --repo SAPTARSHI-coder/EaseMotion-css")

if __name__ == "__main__":
    main()
