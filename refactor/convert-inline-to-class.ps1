param(
    [Parameter(Mandatory = $true)]
    [string]$TargetDir
)

$ErrorActionPreference = "Stop"

# Patterns: exact style string → CSS class to add
$styleMap = @(
    @{ style = 'style="margin-bottom: 3rem;"';         class = 'ease-mb-12' }
    @{ style = 'style="width: 100%"';                   class = 'ease-w-full' }
    @{ style = 'style="text-align:center;"';            class = 'ease-text-center' }
    @{ style = 'style="display:none;"';                 class = 'ease-hidden' }
    @{ style = 'style="font-size: 0.75rem;"';           class = 'ease-text-xs' }
    @{ style = 'style="text-align: center"';            class = 'ease-text-center' }
    @{ style = 'style="margin-top: 1rem;"';             class = 'ease-mt-4' }
    @{ style = 'style="margin: 0;"';                    class = 'ease-m-0' }
    @{ style = 'style="min-height:100px"';              class = 'ease-min-h-100' }
)

# Multi-property patterns that need custom CSS class names
$complexMap = @(
    @{ style = 'style="color: white; margin: 0; font-size: 1.5rem; font-weight: 700;"';        class = 'demo-hero-title' }
    @{ style = 'style="color: #64748b; margin: 4px 0 0 0; font-size: 0.875rem; line-height: 1.5;"'; class = 'demo-meta-text' }
    @{ style = 'style="color: #64748b; margin: 4px 0 0 0; font-size: 0.875rem;"';             class = 'demo-subtitle' }
    @{ style = 'style="max-width: 800px; margin: 0 auto;"';                                   class = 'demo-container' }
    @{ style = 'style="margin-bottom: 2.5rem; text-align: center; max-width: 480px;"';         class = 'demo-section-header' }
    @{ style = 'style="margin:1.5rem 0;border-color:#e2e8f0"';                                class = 'demo-section-divider' }
)

$allPatterns = $styleMap + $complexMap

function Convert-Content {
    param([string]$content)

    foreach ($m in $allPatterns) {
        $escapedStyle = [regex]::Escape($m.style)
        $newClass = $m.class

        # Case 1: element already has class="existing" ... style="PATTERN"
        # Replace entire match keeping existing class and appending new class
        $content = [regex]::Replace($content, "(class=\x22([^\x22]*)\x22)([^>]*?)$escapedStyle", {
            param($match)
            $existingClass = $match.Groups[2].Value
            $betweenAttrs = $match.Groups[3].Value
            return "class=`"$existingClass $newClass`"$betweenAttrs"
        })

        # Case 2: element has only style (no preceding class attribute)
        $content = $content -replace $escapedStyle, "class=`"$newClass`""
    }

    return $content
}

$files = Get-ChildItem -Path $TargetDir -Recurse -Filter "*.html" | Where-Object {
    $_.DirectoryName -notmatch '\\node_modules\\' -and
    $_.DirectoryName -notmatch '\\.git\\'
}

$totalFiles = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue -Encoding UTF8
    if (-not $content) { continue }

    $hasTarget = $false
    foreach ($m in $allPatterns) {
        if ($content -match [regex]::Escape($m.style)) { $hasTarget = $true; break }
    }
    if (-not $hasTarget) { continue }

    $original = $content
    $content = Convert-Content -content $content

    if ($content -ne $original) {
        [IO.File]::WriteAllText($file.FullName, $content, [Text.UTF8Encoding]::new($false))
        $totalFiles++
    }
}

Write-Host "Done. Files modified: $totalFiles" -ForegroundColor Cyan
return $totalFiles
