$EncryptedStrategyGuide = @{ A = 1; B = 2; C = 3; X = 1; Y = 2; Z = 3; }
$GameStateWins = @{ X = "C"; Y = "A"; Z = "B"; }
$GameStateLoses = @{ X = "B"; Y = "C"; Z = "A"; }
$GameStateDraw = @{ X = "A"; Y = "B"; Z = "C"; }
$GameOutcomes = @{ X = $GameStateLoses; Y = $GameStateDraw; Z = $GameStateWins; }

$Data = Get-Content "$( $PSScriptRoot )/input.txt"

$Data | ForEach-Object {
    $_ -match "(\w) (\w)" | Out-Null
    $Result = 0
    $Matches[2] = $GameOutcomes[$Matches[2]].Keys | Where-Object {$GameOutcomes[$Matches[2]][$_] -eq $Matches[1]}
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
