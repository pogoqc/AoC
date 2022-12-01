$data = Get-Content "$($PSScriptRoot)/input.txt" -Raw
$data.Split("`n`n") `
    | ForEach-Object {$_.Split("`n") | Measure-Object -Sum} `
    | Measure-Object -Maximum -Property Sum