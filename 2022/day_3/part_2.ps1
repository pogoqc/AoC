$Data = Get-Content "$( $PSScriptRoot )/input.txt" -Raw
$ResultsOrder = [Array](0..25 | Foreach-Object {$_ + [int][char]'a'}) + (0..25 | Foreach-Object {$_ + [int][char]'A'})

function Find-Intersections([String]$ReferenceObject, [String]$DifferenceObject)
{
    Compare-Object -ReferenceObject $ReferenceObject.ToCharArray() -DifferenceObject $DifferenceObject.ToCharArray() -PassThru -IncludeEqual -ExcludeDifferent | Get-Unique
}

$Data -split "(.*`n*.*`n*.*`n*)" | ForEach-Object {
    $_ -match "(.*`n*)(.*`n*)(.*`n*)" | Out-Null
    $Result = Find-Intersections -DifferenceObject $Matches[1] -ReferenceObject $Matches[2]
    $Result = Find-Intersections -DifferenceObject $Matches[3] -ReferenceObject $Result
    $Result | ForEach-Object {$ResultsOrder.IndexOf([int][char]$_) + 1}
} | Measure-Object -Sum

