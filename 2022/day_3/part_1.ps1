$Data = Get-Content "$( $PSScriptRoot )/input.txt"
$ResultsOrder = [Array](0..25 | Foreach-Object {$_ + [int][char]'a'}) + (0..25 | Foreach-Object {$_ + [int][char]'A'})

function Find-Intersections([String]$ReferenceObject, [String]$DifferenceObject)
{
    Compare-Object -ReferenceObject $ReferenceObject.ToCharArray() -DifferenceObject $DifferenceObject.ToCharArray() -PassThru -IncludeEqual -ExcludeDifferent | Get-Unique
}

$Data | ForEach-Object {
    $_ -match "(\w{$($_.Length / 2)})(\w{$($_.Length / 2)})" | Out-Null
    $Result = Find-Intersections -ReferenceObject $Matches[1] -DifferenceObject $Matches[2]
    $ResultsOrder.IndexOf([int][char]$Result) + 1
} | Measure-Object -Sum