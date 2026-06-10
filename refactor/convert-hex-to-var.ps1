param(
    [Parameter(Mandatory = $true)]
    [string]$TargetDir
)

$ErrorActionPreference = "Stop"

$colorMap = @(
    @{ hex = '#1e293b'; var = 'var(--ease-color-neutral-800)' }
    @{ hex = '#0f172a'; var = 'var(--ease-color-neutral-900)' }
    @{ hex = '#f8fafc'; var = 'var(--ease-color-neutral-50)' }
    @{ hex = '#f1f5f9'; var = 'var(--ease-color-neutral-100)' }
    @{ hex = '#e2e8f0'; var = 'var(--ease-color-neutral-200)' }
    @{ hex = '#cbd5e1'; var = 'var(--ease-color-neutral-300)' }
    @{ hex = '#94a3b8'; var = 'var(--ease-color-neutral-400)' }
    @{ hex = '#64748b'; var = 'var(--ease-color-neutral-500)' }
    @{ hex = '#475569'; var = 'var(--ease-color-neutral-600)' }
    @{ hex = '#334155'; var = 'var(--ease-color-neutral-700)' }
    @{ hex = '#6c63ff'; var = 'var(--ease-color-primary)' }
    @{ hex = '#8b5cf6'; var = 'var(--ease-color-secondary)' }
    @{ hex = '#22c55e'; var = 'var(--ease-color-success)' }
    @{ hex = '#ef4444'; var = 'var(--ease-color-danger)' }
    @{ hex = '#f59e0b'; var = 'var(--ease-color-warning)' }
    @{ hex = '#3b82f6'; var = 'var(--ease-color-info)' }
)

function Convert-Content {
    param([string]$content)

    $state = @{ counter = 0; protected = @{} }

    # Protect var() fallback hexes — entire var(--name, #HEX) expression
    $content = [regex]::Replace($content, 'var\([^)]+?,\s*#[0-9a-fA-F]{3,8}\)', {
        param($m)
        $key = "___HV_$($state.counter)___"
        $state.protected[$key] = $m.Value
        $state.counter++
        return $key
    })

    # Replace standalone hex colors (longest first to avoid partial matches)
    $colorMapSorted = $colorMap | Sort-Object { $_.hex.Length } -Descending
    foreach ($m in $colorMapSorted) {
        $content = $content -replace [regex]::Escape($m.hex), $m.var
    }

    # Restore protected var() expressions
    foreach ($key in $state.protected.Keys) {
        $content = $content -replace [regex]::Escape($key), $state.protected[$key]
    }

    return $content
}

$files = Get-ChildItem -Path $TargetDir -Recurse -Filter "*.css" | Where-Object {
    $_.Name -notmatch '^easemotion\.(css|min\.css)$' -and
    $_.Name -notmatch '^variables\.css$' -and
    $_.DirectoryName -notmatch '\\node_modules\\' -and
    $_.DirectoryName -notmatch '\\.git\\' -and
    $_.DirectoryName -notmatch '\\assets\\' -and
    $_.DirectoryName -notmatch '\\submissions\\submissions\\.+\\examples\\' -and
    $_.FullName -notmatch '[/\\]scss[/\\]' -and
    $_.FullName -notmatch '[/\\]core[/\\]variables\.css$'
}

$totalFiles = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    if ($content -notmatch '#[0-9a-fA-F]{3,8}') { continue }

    $original = $content
    $content = Convert-Content -content $content

    if ($content -ne $original) {
        [IO.File]::WriteAllText($file.FullName, $content, [Text.UTF8Encoding]::new($false))
        $totalFiles++
    }
}

Write-Host "Done. Files modified: $totalFiles" -ForegroundColor Cyan
return $totalFiles
