# 🚀 Demystifying Open Source: Your Step-by-Step Guide to Coding Your First EaseMotion Animation

Hey there, future contributor! 👋 Open source can feel intimidating when you are looking at thousands of lines of code for the first time. But don't worry—EaseMotion-css is designed to be beginner-friendly. 

In this quick blog-style tutorial, we will take you from absolute zero to submitting your very first CSS animation Pull Request (PR) in under 15 minutes. Let's dive in!

---

## 🧭 Step 1: Finding Your Target & Securing the Issue
Every great journey starts with a map. In open source, that map is the **Issues** tab.

1. Navigate to the main `EaseMotion-css` repository on GitHub.
2. Click on the **Issues** tab.
3. Look for labels like `good first issue` or `level:beginner`.
4. Once you find one you like, leave a comment saying `/claim` or `assign me` to lock it down.

![Screenshot Placeholder: Location of the Issues tab and a sample /claim comment thread](assets/screenshot-find-issue.png)

---

## 🍴 Step 2: Forking and Cloning Your Sandbox
You cannot write code directly on the main project website. You need your own playground version first.

1. Look at the top right corner of the GitHub page and click **Fork**. This makes a private copy under your own profile.
2. Click the green **Code** button on *your forked repository* and copy the HTTPS URL.

![Screenshot Placeholder: Highlighting the Fork button and the Code URL copy dropdown](assets/screenshot-fork-clone.png)

3. Open your computer's terminal/command prompt and download it locally:
```bash
git clone https://github.com
cd EaseMotion-css
```

---

## 🌿 Step 3: Branching Out
Before typing a single line of CSS, create a dedicated development branch. This isolates your work and prevents merge disasters later.

```bash
git checkout -b feature/add-ease-bounce-animation
```

---

## 🏗️ Step 4: Copying the Framework Blueprint (TEMPLATE)
We supply a blueprint template so you never have to guess our repository structure.

1. Find the folder named `TEMPLATE/` in the root directory.
2. Copy the entire folder.
3. Paste it directly inside the `submissions/examples/` folder.
4. Rename that newly pasted folder to your specific animation name: `ease-bounce`.

![Screenshot Placeholder: Directory tree structure displaying the TEMPLATE folder moving into submissions/examples/ease-bounce](assets/screenshot-folder-structure.png)

-- 

## 🎨 Step 5: Building the `ease-bounce` Animation
Open your newly pasted `submissions/examples/ease-bounce/` folder in your code editor (like VS Code). Let's write a simple, smooth bouncing animation class.

Add this code structure to your custom stylesheet file:

```css
/* 1. Define the utility class users will call */
.animate-ease-bounce {
    animation: easeBounce 2s infinite;
}

/* 2. Map out the physics of the bounce keyframes */
@keyframes easeBounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0); /* On the ground */
    }
    40% {
        transform: translateY(-30px); /* Peak height */
    }
    60% {
        transform: translateY(-15px); /* Smaller secondary bounce */
    }
}
```

---

## 🏁 Step 6: Shipping Your Changes (The Pull Request)
Your code looks perfect locally. Now it's time to send it back up to the main project for review!

1. Save your files and track your changes in git:
```bash
git add .
git commit -m "docs: create beginner contribution guide for ease-bounce #2568"
git push origin feature/add-ease-bounce-animation
```

2. Go to your GitHub page online. You will see a bright yellow banner saying **Compare & pull request**. Click it!
3. Add a clear title detailing what you did, link your issue number, and click **Create pull request**.

![Screenshot Placeholder: The yellow GitHub compare banner and the final pull request submission screen](assets/screenshot-submit-pr.png)

---

## ⚠️ Common Mistakes to Avoid (Save Yourself the Headache!)

* **The Main Branch Trap:** Editing code directly on your local `main` branch. Always make a feature branch (`git checkout -b`) or updating upstream code later will break your history.
* **Lost Folders:** Placing your work outside of `submissions/examples/your-feature-name/`. The testing suites look strictly at this path; anything outside it will fail.
* **The Ghost Contributor:** Submitting a Pull Request without being officially assigned first. Automated bots will close your PR instantly if you aren't on the participant records!

Congratulations, you have officially cracked the code to open source! 🏆 🎉
