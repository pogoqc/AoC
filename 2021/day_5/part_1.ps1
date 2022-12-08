$data = Get-Content "$($PSScriptRoot)/data.txt"
$data | ForEach-Object {
    $_ -match "(\d+),(\d+) -> (\d+),(\d+)" | Out-Null
    [PSCustomObject]@{
        x1 = [int]$Matches[1]
        y1 = [int]$Matches[2]
        x2 = [int]$Matches[3]
        y2 = [int]$Matches[4]
    }
}