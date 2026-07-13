import subprocess
import json
import time

def run_gh_command(args):
    result = subprocess.run(args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running command: {' '.join(args)}\n{result.stderr}")
        return None
    return result.stdout

def claim_issues(target_count=21):
    print("Fetching open, unassigned issues...")
    # Fetch open issues without assignees using --search
    output = run_gh_command([
        "gh", "issue", "list",
        "--search", "no:assignee is:open",
        "--limit", "100",
        "--json", "number,title,labels"
    ])
    
    if not output:
        return

    issues = json.loads(output)
    print(f"Found {len(issues)} unassigned issues.")

    claimed = 0
    for issue in issues:
        if claimed >= target_count:
            break
            
        number = issue['number']
        title = issue['title']
        
        print(f"Claiming issue #{number}: {title}...")
        
        # Post the /claim comment
        comment_output = run_gh_command([
            "gh", "issue", "comment", str(number),
            "--body", "/claim"
        ])
        
        if comment_output is not None:
            print(f"Successfully claimed #{number}")
            claimed += 1
            # Sleep briefly to avoid hitting GitHub API rate limits or spam detection
            time.sleep(2.5)
        else:
            print(f"Failed to claim #{number}")
            
    print(f"\nDone! Claimed {claimed} issues.")

if __name__ == "__main__":
    claim_issues(21)
