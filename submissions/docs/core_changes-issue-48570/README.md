\# Fix: Navbar text unreadable under manual dark theme (#48570)



Navbar text color didn't update when `\[data-theme="dark"]` was set manually — only responded to `prefers-color-scheme: dark`. Added a matching `\[data-theme="dark"]` selector so both trigger paths update the navbar text/background/border color.

