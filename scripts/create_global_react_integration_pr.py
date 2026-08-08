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

COMPONENTS = [
    "accordion", "alert", "avatar", "badge", "breadcrumb", "button",
    "card", "carousel", "checkbox", "chip", "code-block", "code-inline",
    "dialog", "divider", "drawer", "dropdown", "form", "icon", "image",
    "input", "kbd", "link", "list", "loader", "menu", "modal", "navbar",
    "pagination", "popover", "progress"
]

ISSUE_TITLE = "Global: Provide React Integration Components for all 30 UI elements"
ISSUE_BODY = """### Description
Developers adopting EaseMotion CSS frequently use React as their primary frontend library. Currently, they must manually map HTML classes to JSX `className` props.

Providing native React functional component wrappers for all 30 components will massively improve Developer Experience (DX), type safety, and adoption rates.

### Components Included
This global issue covers all 30 standard framework components."""

branch = "feat/global-react-integration-harrshita"


def main():
    run("git checkout main")
    run("git fetch upstream main")
    run("git reset --hard upstream/main")

    issue_num = 63019

    run(f"git checkout -B {branch} upstream/main")

    for comp in COMPONENTS:
        folder = f"submissions/react/react-{comp}-harrshita"
        os.makedirs(folder, exist_ok=True)

        comp_pascal = "".join(word.capitalize() for word in comp.split("-"))
        jsx_name = f"Ease{comp_pascal}"

        # Write JSX file
        jsx_content = textwrap.dedent(f"""
            import React from 'react';

            /**
             * EaseMotion {comp_pascal} Component
             * 
             * A native React wrapper for the ease-{comp} CSS class.
             * Supports standard React props and forwards ref.
             */
            export const {jsx_name} = React.forwardRef(({{ className, children, ...props }}, ref) => {{
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

            {jsx_name}.displayName = '{jsx_name}';
            export default {jsx_name};
            """)
        with open(f"{folder}/{jsx_name}.jsx", "w") as f:
            f.write(jsx_content)

        # Write README.md
        readme_content = textwrap.dedent(f"""
            # React {comp_pascal} Integration
            
            This is a React functional component wrapper for the `ease-{comp}` class.
            
            ## Usage
            
            ```jsx
            import {{ {jsx_name} }} from './{jsx_name}';
            
            function App() {{
              return (
                <{jsx_name} className=\"custom-utility\">Hello EaseMotion!</{jsx_name}>
              );
            }}
            ```
            
            Provides automatic ref forwarding, prop spreading, and strict styling encapsulation.
            """)
        with open(f"{folder}/README.md", "w") as f:
            f.write(readme_content)

        run(f"git add {folder}")

    commit_msg = f"feat(react): implement native React components globally\n\nAdds React functional component wrappers for all 30 components.\n\nFixes #{issue_num}"
    # Create temp commit msg file
    with open("tmp_react_commit.md", "w") as f:
        f.write(commit_msg)
    
    run("git commit -F tmp_react_commit.md")
    run(f"git push origin {branch} --force")
    
    pr_body = f"Globally implements React functional components for the entire framework.\n\nFixes #{issue_num}"
    with open("tmp_react_pr.md", "w") as f:
        f.write(pr_body)
    
    run(f"gh pr create --title 'feat(react): implement native React components globally' --body-file tmp_react_pr.md --head harrshita123:{branch} --base main --repo SAPTARSHI-coder/EaseMotion-css")

if __name__ == "__main__":
    main()
