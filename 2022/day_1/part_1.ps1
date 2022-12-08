$data = Get-Content "$($PSScriptRoot)/input.txt" -Raw
$data.Split("`n`n") `
    | ForEach-Object {$_.Split("`n") | Measure-Object -Sum} `
    | Sort-Object Sum `
    | Select-Object -last 3 `
    | Measure-Object -Sum -Property Sum