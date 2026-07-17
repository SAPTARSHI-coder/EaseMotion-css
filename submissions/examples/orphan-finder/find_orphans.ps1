# Orphan Submission Folder Detector (PowerShell)
# Scans submissions/examples/ and flags folders not in tracking.json

param(
    [string]$TrackingFile = "$PSScriptRoot\tracking.json"
)

if (-not (Test-Path $TrackingFile)) {
    Write-Host "? Tracking file not found at $TrackingFile" -ForegroundColor Red
    exit 1
}

$submissionsDir = Resolve-Path "$PSScriptRoot\..\"
$tracking = Get-Content $TrackingFile | ConvertFrom-Json

Write-Host "?? Scanning submissions/examples/ for orphaned folders...`n" -ForegroundColor Cyan

$orphanCount = 0
$total = 0

Get-ChildItem -Path $submissionsDir -Directory | ForEach-Object {
    $folderName = $_.Name
    $total++

    if ($tracking.integrated -contains $folderName) {
        Write-Host "? $folderName ? integrated"
    } else {
        Write-Host "??  $folderName ? ORPHAN (not in tracking list)" -ForegroundColor Yellow
        $orphanCount++
    }
}

Write-Host "`n?? Report: $total total folders, $orphanCount orphan(s) detected."
if ($orphanCount -gt 0) {
    Write-Host "?? Consider removing or integrating the flagged folders."
}
