# Class usage statistics generator for EaseMotion CSS
# Scans all demo.html files in submissions/examples/ and counts class names

$submissionsDir = Resolve-Path "$PSScriptRoot\..\"
$outputFile = Join-Path $submissionsDir "class-usage-report.txt"

Write-Host "?? Scanning demo.html files in $submissionsDir ..." -ForegroundColor Cyan

$classCounts = @{}
Get-ChildItem -Path $submissionsDir -Filter demo.html -Recurse -Depth 1 | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Extract class="..." values
    $matches = [regex]::Matches($content, 'class\s*=\s*"([^"]*)"')
    foreach ($match in $matches) {
        $classes = $match.Groups[1].Value -split '\s+'
        foreach ($cls in $classes | Where-Object { $_ -ne '' }) {
            $classCounts[$cls]++
        }
    }
}

# Sort and output
$report = @()
$report += "?? Class Usage Report"
$report += "======================"
$report += ""

$sorted = $classCounts.GetEnumerator() | Sort-Object Value -Descending
foreach ($entry in $sorted) {
    $report += ("{0,-8} {1}" -f $entry.Value, $entry.Key)
}

$report += ""
$report += "Total unique classes: $($classCounts.Count)"

$report | Out-File -FilePath $outputFile -Encoding utf8
Write-Host "Report saved to $outputFile" -ForegroundColor Green
