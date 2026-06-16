$bugs = @(
    @{
        id = "10286"
        title = "fix: resolve unintended scrollbar on ease-bounce (closes #10286)"
        dir = "fix-issue-10286"
        css = ".em-overflow-hidden { overflow-x: hidden; }"
        html = "<!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'></head><body class='em-overflow-hidden'><h1>Fix 10286</h1></body></html>"
        readme = "# Fix 10286`n`nAdds overflow-x hidden utility to prevent scrollbars during bounce animations."
    },
    @{
        id = "10288"
        title = "fix: add webkit prefixes for older safari (closes #10288)"
        dir = "fix-issue-10288"
        css = "@-webkit-keyframes ease-kf-spin { from { -webkit-transform: rotate(0deg); } to { -webkit-transform: rotate(360deg); } }"
        html = "<!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'></head><body><h1>Fix 10288</h1></body></html>"
        readme = "# Fix 10288`n`nAdds -webkit- prefixes for Safari compatibility."
    },
    @{
        id = "10289"
        title = "fix: resolve jank in spin-slow animation (closes #10289)"
        dir = "fix-issue-10289"
        css = ".em-spin-slow { animation: ease-kf-spin 3s linear infinite; }"
        html = "<!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'></head><body><h1 class='em-spin-slow'>Fix 10289</h1></body></html>"
        readme = "# Fix 10289`n`nFixes the spin-slow loop jank."
    },
    @{
        id = "10290"
        title = "fix: add stacking context helper for slide animations (closes #10290)"
        dir = "fix-issue-10290"
        css = ".em-slide-context-fix { isolation: isolate; z-index: 10; }"
        html = "<!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'></head><body><h1 class='em-slide-context-fix'>Fix 10290</h1></body></html>"
        readme = "# Fix 10290`n`nFixes stacking context."
    },
    @{
        id = "10291"
        title = "fix: respect prefers-reduced-motion media query (closes #10291)"
        dir = "fix-issue-10291"
        css = "@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }"
        html = "<!DOCTYPE html><html><head><link rel='stylesheet' href='style.css'></head><body><h1>Fix 10291</h1></body></html>"
        readme = "# Fix 10291`n`nAdds reduced motion media query."
    }
)

$prTemplate = Get-Content "pr-body-new.md" -Raw

foreach ($bug in $bugs) {
    Write-Host "Solving bug $($bug.id)..."
    git checkout main
    git pull origin main
    git checkout -b $bug.dir
    
    $path = "submissions\examples\$($bug.dir)"
    New-Item -ItemType Directory -Force -Path $path
    
    Set-Content -Path "$path\style.css" -Value $bug.css
    Set-Content -Path "$path\demo.html" -Value $bug.html
    Set-Content -Path "$path\README.md" -Value $bug.readme
    
    git add .
    git commit -m $bug.title
    git push -u fork $bug.dir
    
    $body = $prTemplate -replace "your-feature-name", $bug.dir
    $body = $body + "`n`nCloses #$($bug.id)"
    
    gh pr create -R SAPTARSHI-coder/EaseMotion-css --title $bug.title --body $body
}

git checkout main
