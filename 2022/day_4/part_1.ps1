$Data = Get-Content "$( $PSScriptRoot )/input.txt"

$Data | ForEach-Object {
    $_ -match ("(\d*)-(\d*),(\d*)-(\d*)") | Out-Null
    $Result = (Compare-Object ($Matches[1]..$Matches[2]) ($Matches[3]..$Matches[4]) -PassThru -IncludeEqual -ExcludeDifferent) ?? @()
    return (Compare-Object $Result ($Matches[1]..$Matches[2])).Length -eq 0 -or (Compare-Object $Result ($Matches[3]..$Matches[ 4])).Length -eq 0
} | Where-Object {$_} | Measure-Object