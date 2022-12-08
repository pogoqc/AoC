$Data = Get-Content "$( $PSScriptRoot )/input.txt"
$ResultsOrder = [Array](0..25 | Foreach-Object {$_ + [int][char]'a'}) + (0..25 | Foreach-Object {$_ + [int][char]'A'})
$Data | ForEach-Object {
    $_ -match "(\w{$($_.Length / 2)})(\w{$($_.Length / 2)})" | Out-Null
    $Result = Compare-Object -ReferenceObject $Matches[1].ToCharArray() -DifferenceObject $Matches[2].ToCharArray() -PassThru -IncludeEqual -ExcludeDifferent | Get-Unique
    $ResultsOrder.IndexOf([int][char]$Result) + 1
} | Measure-Object -Sum