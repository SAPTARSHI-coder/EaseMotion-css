import os
import asyncio
import aiohttp
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
REPO_NAME = "SAPTARSHI-coder/EaseMotion-css"
MY_USERNAME = "SAPTARSHI-coder"

# 🎯 CUSTOM RANGE SELECTION
# Set these to control exactly which issues/PRs the bot will check and process.
# Examples:
#   To process everything: START_ISSUE = 1 and END_ISSUE = 99999
#   To process a small test batch: START_ISSUE = 1300 and END_ISSUE = 1320
START_ISSUE = 1670
END_ISSUE = 99999

# Single-worker pacing architecture to eliminate secondary limit bans
NUM_WORKERS = 1         
DELAY_BETWEEN_REQS = 1.5 

HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

async def fetch_with_backoff(session, url, method="GET", json_data=None, max_retries=5):
    """Monitors secondary limit thresholds and executes backoff delay if requested."""
    backoff = 10
    for attempt in range(max_retries):
        try:
            if method == "GET":
                async with session.get(url, headers=HEADERS) as resp:
                    if resp.status in [403, 429]:
                        retry_after = int(resp.headers.get("Retry-After", backoff))
                        print(f"⏳ Rate limited on GET. Cooling down for {retry_after}s...")
                        await asyncio.sleep(retry_after)
                        backoff *= 2
                        continue
                    return resp.status, await resp.json() if resp.status == 200 else None
            elif method == "POST":
                async with session.post(url, headers=HEADERS, json=json_data) as resp:
                    if resp.status in [403, 429]:
                        retry_after = int(resp.headers.get("Retry-After", backoff))
                        print(f"⏳ Rate limited on POST. Cooling down for {retry_after}s...")
                        await asyncio.sleep(retry_after)
                        backoff *= 2
                        continue
                    return resp.status, await resp.json() if resp.status in [200, 201] else None
            elif method == "DELETE":
                async with session.delete(url, headers=HEADERS) as resp:
                    if resp.status in [403, 429]:
                        retry_after = int(resp.headers.get("Retry-After", backoff))
                        print(f"⏳ Rate limited on DELETE. Cooling down for {retry_after}s...")
                        await asyncio.sleep(retry_after)
                        backoff *= 2
                        continue
                    return resp.status, None
        except Exception as e:
            print(f"⚠️ Network glitch on {url}: {e}")
            await asyncio.sleep(backoff)
    return 500, None

async def clean_bad_labels_from_open_item(session, item_url, issue_number, current_labels):
    """Removes 'accepted' and 'integrated' labels from open items to repair the database history."""
    labels_to_strip = ["accepted", "integrated"]
    for label in labels_to_strip:
        if label in current_labels:
            delete_url = f"{item_url}/labels/{label}"
            status, _ = await fetch_with_backoff(session, delete_url, "DELETE")
            if status in [200, 204]:
                print(f"🔥 Stripped misapplied '{label}' label from open thread #{issue_number}")
                current_labels.remove(label)
                await asyncio.sleep(0.5)
    return current_labels

def determine_dynamic_labels(title, body, thread_type, is_open, is_merged):
    """Dynamically resolves exactly which labels apply based on context and state."""
    labels = ["GSSoC-26", "gssoc:approved"] 
    
    text_content = f"{title} {body or ''}".lower()
    
    # 1. Contextual Type Categorization
    if "animation" in text_content or "animate" in text_content:
        labels.append("animation")
    elif "component" in text_content or "element" in text_content:
        labels.append("component")
        
    if "feature" in text_content or "add" in text_content:
        labels.append("type:feature")
    elif "enhance" in text_content or "optimize" in text_content:
        labels.append("enhancement")

    # 2. Difficulty/Entry Defaulting
    if "good first" in text_content or "easy" in text_content:
        labels.append("good first issue")
    else:
        labels.append("level:intermediate")

    # 3. Strict State/Lifecycle Safeguards
    if thread_type == "PullRequest":
        if is_merged:
            labels.extend(["accepted", "integrated"])
        elif not is_open: 
            labels.append("gssoc:invalid") 
    else:
        if not is_open:
            labels.append("accepted") 

    return labels

async def process_item(session, item_url, thread_type):
    """Main task processing context logic, cleanups, and participant updates."""
    status, item_data = await fetch_with_backoff(session, item_url, "GET")
    if status != 200 or not item_data:
        return

    issue_number = item_data["number"]
    current_labels = [label["name"] for label in item_data.get("labels", [])]

    if "gssoc:invalid" in current_labels:
        print(f"🔒 #{issue_number}: Marked invalid. Skipping to protect history.")
        return

    is_open = item_data.get("state") == "open"
    is_merged = item_data.get("pull_request", {}).get("merged_at") is not None or item_data.get("merged", False)

    # CRITICAL CLEANUP PASS: Fix the messy data dump on open items
    if is_open:
        current_labels = await clean_bad_labels_from_open_item(session, item_url, issue_number, current_labels)

    title = item_data.get("title", "")
    body = item_data.get("body", "")

    computed_targets = determine_dynamic_labels(title, body, thread_type, is_open, is_merged)
    missing_labels = [l for l in computed_targets if l not in current_labels]

    current_assignees = {user["login"] for user in item_data.get("assignees", [])}
    item_author = item_data.get("user", {}).get("login") if item_data.get("user", {}).get("type") == "User" else None

    if thread_type == "PullRequest":
        needs_assignment = MY_USERNAME not in current_assignees or (item_author and item_author not in current_assignees)
    else:
        needs_assignment = MY_USERNAME not in current_assignees

    replied_users = set()
    if needs_assignment or missing_labels:
        comments_url = f"{item_url}/comments"
        status, comments = await fetch_with_backoff(session, comments_url, "GET")
        if status == 200 and comments:
            replied_users = {c["user"]["login"] for c in comments if c.get("user") and c["user"]["type"] == "User"}
        
        if item_author:
            replied_users.add(item_author)
            
        if thread_type != "PullRequest":
            needs_assignment = MY_USERNAME not in current_assignees or not replied_users.issubset(current_assignees)

    # 1. Update Assignments Safely
    if needs_assignment:
        if thread_type == "PullRequest":
            all_target_assignees = list({MY_USERNAME} | ({item_author} if item_author else set()))
        else:
            all_target_assignees = list(replied_users | current_assignees | {MY_USERNAME})

        assign_url = f"{item_url}/assignees"
        status, _ = await fetch_with_backoff(session, assign_url, "POST", {"assignees": all_target_assignees})
        if status in [200, 201]:
            print(f"👥 #{issue_number} ({thread_type}): Sync'd assignments for participants.")
    else:
        print(f"✅ #{issue_number} ({thread_type}): Assignments up to date.")

    # 2. Append only contextually valid missing labels
    if missing_labels:
        labels_url = f"{item_url}/labels"
        status, _ = await fetch_with_backoff(session, labels_url, "POST", {"labels": missing_labels})
        if status in [200, 201]:
            print(f"🏷️  #{issue_number} ({thread_type}): Contextually added: {missing_labels}")
    else:
        print(f"✨ #{issue_number} ({thread_type}): Label architecture accurate.")

async def worker(session, queue):
    while True:
        item = await queue.get()
        if item is None:
            queue.task_done()
            break
        
        url, thread_type = item
        try:
            await process_item(session, url, thread_type)
        except Exception as e:
            print(f"⚠️ Worker error on tracking item {url}: {e}")
        
        await asyncio.sleep(DELAY_BETWEEN_REQS)
        queue.task_done()

async def fetch_all_paginated_items(session, base_url):
    items_list = []
    current_url = base_url
    
    while current_url:
        status, data = await fetch_with_backoff(session, current_url, "GET")
        if status != 200 or not data:
            break
        items_list.extend(data)
        
        async with session.get(current_url, headers=HEADERS) as resp:
            if "Link" in resp.headers and 'rel="next"' in resp.headers["Link"]:
                links = resp.headers["Link"].split(",")
                current_url = [link for link in links if 'rel="next"' in link][0].split(";")[0].strip("<> ")
            else:
                current_url = None
        await asyncio.sleep(0.5)
                
    return items_list

async def main():
    if not GITHUB_TOKEN:
        print("❌ Error: GITHUB_TOKEN missing from your .env file.")
        return

    async with aiohttp.ClientSession() as session:
        queue = asyncio.Queue()
        processed_urls = set()

        print(f"🔍 Scanning history for items numbered between #{START_ISSUE} and #{END_ISSUE}...")

        # 1. Fetch Pull Requests
        print("📥 Indexing all Pull Requests...")
        all_prs_url = f"https://api.github.com/repos/{REPO_NAME}/pulls?state=all&per_page=100"
        prs_data = await fetch_all_paginated_items(session, all_prs_url)
        for pr in prs_data:
            url = pr["issue_url"]
            num = pr["number"]
            # Apply Range Rule Filter
            if START_ISSUE <= num <= END_ISSUE and url not in processed_urls:
                processed_urls.add(url)
                await queue.put((url, "PullRequest"))

        # 2. Fetch Issues
        print("📥 Indexing all Issues...")
        all_issues_url = f"https://api.github.com/repos/{REPO_NAME}/issues?state=all&per_page=100"
        issues_data = await fetch_all_paginated_items(session, all_issues_url)
        for issue in issues_data:
            if "pull_request" not in issue:
                url = issue["url"]
                num = issue["number"]
                # Apply Range Rule Filter
                if START_ISSUE <= num <= END_ISSUE and url not in processed_urls:
                    processed_urls.add(url)
                    await queue.put((url, "Issue"))

        total_items = queue.qsize()
        if total_items == 0:
            print("✨ No repository elements found within the specified range configuration.")
            return

        print(f"\n⚡ Executing Cleanup Pass + Dynamic Matrix Processing across {total_items} range items...")
        print("-" * 70)

        workers = []
        for _ in range(NUM_WORKERS):
            workers.append(asyncio.create_task(worker(session, queue)))

        await queue.join()

        for _ in range(NUM_WORKERS):
            await queue.put(None)
        await asyncio.gather(*workers)

        print("-" * 70)
        print("🏁 Database cleanup and dynamic label optimization completed successfully.")

if __name__ == "__main__":
    asyncio.run(main())
