$EncryptedStrategyGuide = @{ A = 1; B = 2; C = 3; X = 1; Y = 2; Z = 3; }
$GameStateWins = @{ Z = "B"; X = "C"; Y = "A"; }

$Data = Get-Content "$( $PSScriptRoot )/input.txt"
$Data | ForEach-Object {
    $_ -match "(\w) (\w)" | Out-Null
    $Result = 0
    if ($GameStateWins[$Matches[2]] -eq $Matches[1])
    {
        $Result = 6
    }
    elseif ($EncryptedStrategyGuide[$Matches[1]] -eq $EncryptedStrategyGuide[$Matches[2]])
    {
        $Result = 3
    }
    return $EncryptedStrategyGuide[$Matches[2]] + $Result
} | Measure-Object -Sum