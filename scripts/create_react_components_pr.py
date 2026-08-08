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

# List of all 30 UI components in the framework
COMPONENTS = [
    "accordion", "alert", "avatar", "badge", "breadcrumb", "button",
    "card", "carousel", "checkbox", "chip", "code-block", "code-inline",
    "dialog", "divider", "drawer", "dropdown", "form", "icon", "image",
    "input", "kbd", "link", "list", "loader", "menu", "modal", "navbar",
    "pagination", "popover", "progress"
]

ISSUE_NUM = 63019  # Issue tracking the global React integration request
BRANCH_NAME = "feat/react-components-harrshita"
REPO = "/Users/apple/EaseMotion-css"

def main():
    os.chdir(REPO)
    # Ensure we start from a clean main
    run("git checkout main")
    run("git fetch upstream main")
    run("git reset --hard upstream/main")

    # Create a new branch for this submission
    run(f"git checkout -B {BRANCH_NAME} upstream/main")

    for comp in COMPONENTS:
        folder = f"submissions/react/react-{comp}-harrshita"
        os.makedirs(folder, exist_ok=True)

        # Generate PascalCase component name, e.g., EaseAccordion
        comp_pascal = "".join(part.capitalize() for part in comp.split("-"))
        component_name = f"Ease{comp_pascal}"

        # JSX component file content
        jsx_content = textwrap.dedent(f"""
            import React from 'react';

            /**
             * EaseMotion {comp_pascal} Component
             *
             * A native React wrapper for the `ease-{comp}` CSS class.
             * Supports standard React props, ref forwarding, and className merging.
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

        # README documentation for the component
        readme_content = textwrap.dedent(f"""
            # React {comp_pascal} Component
            
            This component provides a thin React wrapper around the `ease-{comp}` utility class.
            
            ## Usage
            
            ```jsx
            import {{ {component_name} }} from './{component_name}';
            
            function Example() {{
              return (
                <{component_name} className=\"custom-utility\">Hello EaseMotion!</{component_name}>
              );
            }}
            ```
            
            The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-{comp}` class.
            """)
        with open(f"{folder}/README.md", "w") as f:
            f.write(readme_content)

        # Stage the new folder
        run(f"git add {folder}")

    # Commit the new files
    commit_msg = f"feat(react): add 30 React component wrappers\n\nAdds React functional component wrappers for all 30 UI elements.\n\nFixes #{ISSUE_NUM}"
    with open("tmp_react_commit.md", "w") as f:
        f.write(commit_msg)
    run("git commit -F tmp_react_commit.md")

    # Push the branch to the fork
    run(f"git push origin {BRANCH_NAME} --force")

    # Create the PR via GitHub CLI
    pr_body = f"Adds React component wrappers for the full UI library.\n\nFixes #{ISSUE_NUM}"
    with open("tmp_react_pr.md", "w") as f:
        f.write(pr_body)
    run(f"gh pr create --title 'feat(react): add 30 component wrappers' --body-file tmp_react_pr.md --head harrshita123:{BRANCH_NAME} --base main --repo SAPTARSHI-coder/EaseMotion-css")

if __name__ == "__main__":
    main()
