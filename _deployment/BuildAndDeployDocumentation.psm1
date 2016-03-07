$ErrorActionPreference = "Stop"

function Publish-Documentation {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [string]
        $version,
        [Parameter(Mandatory=$true)]
        [string]
        $targetLocation,
        [Parameter(Mandatory=$true)]
        [ValidateSet("Test", "Live")]
        [string]
        $environment,
        [Parameter(Mandatory=$true)]
        [string]
        $repositoryName,
        [Parameter(Mandatory=$true)]
        [string]
        $workspace,
        [Parameter(Mandatory=$true)]
        [string]
        $clientId,
        [Parameter(Mandatory=$true)]
        [string]
        $clientSecret,
        [Parameter(Mandatory=$true)]
        [string]
        $deploymentApiUrl,
        [Parameter(Mandatory=$true)]
        [string]
        $repositoryUrl,
        [Parameter(Mandatory=$true)]
        [string]
        $tokenEndpoint,
        [Parameter(Mandatory=$true)]
        [int]
        $uploadTimeout
    )

    $parentTargetLocation = Split-Path $targetLocation -Parent

    $body = @{
      "Folder" = $parentTargetLocation
      "Version" = $version
      "Environment" = $environment
      "RepositoryName" = $repositoryName
      "Workspace" = $workspace
      "ClientId" = $clientId
      "ClientSecret" = $clientSecret
      "SkipRegisterPackage" = $false
      "OverwritePackage" = $false
      "SkipDeployment" = $false
      "DeploymentApiUrl" = $deploymentApiUrl
      "RepositoryUrl" = $repositoryUrl
      "TokenEndpoint" = $tokenEndpoint
      "PackageNameFormat" = "package-{0}-{1}.zip"
      "SkipDateChange" = $true
      "UseSimpleZip" = $true
    }

    $jsonBody = ConvertTo-Json $body

    Invoke-RestMethod -Method Post -Uri "$deploymentApiUrl/packages" -Body $jsonBody -ContentType "application/json; charset=utf-8" -TimeoutSec $uploadTimeout
}

function New-Documentation {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [int]
        $buildNumber,
        [Parameter(Mandatory=$true)]
        [string]
        $sourceLocation,
        [Parameter(Mandatory=$true)]
        [string]
        $targetLocation,
        [Parameter(Mandatory=$false)]
        [ValidateSet("Test", "Live")]
        [string]
        $environment = "Test",
        [Parameter(Mandatory=$true)]
        [string]
        $repositoryName,
        [Parameter(Mandatory=$true)]
        [string]
        $workspace,
        [Parameter(Mandatory=$true)]
        [string]
        $clientId,
        [Parameter(Mandatory=$true)]
        [string]
        $clientSecret,
        [Parameter(Mandatory=$true)]
        [string]
        $deploymentApiUrl,
        [Parameter(Mandatory=$true)]
        [string]
        $repositoryUrl,
        [Parameter(Mandatory=$true)]
        [string]
        $tokenEndpoint,
        [Parameter(Mandatory=$false)]
        [int]
        $uploadTimeout = 600
    )

    Set-Location $sourceLocation

    try
    {
        bundle install
    }
    catch
    {
        if ($_.Exception.Message -ne "DL is deprecated, please use Fiddle")
        {
            throw
        }
    }

    Assert-LastOperationSuccessfull

    bundle exec jekyll build

    Assert-LastOperationSuccessfull

    if(Test-Path $targetLocation) {
        Remove-Item -Path $targetLocation -Recurse -Force
    }

    Copy-Item "_site" -Destination $targetLocation -Recurse -Force

    $version = Get-VersionString $buildNumber

    Publish-Documentation -version $version -targetLocation $targetLocation -environment $environment -repositoryName $repositoryName -workspace $workspace `
     -clientId $clientId -clientSecret $clientSecret -deploymentApiUrl $deploymentApiUrl -repositoryUrl $repositoryUrl -tokenEndpoint $tokenEndpoint -uploadTimeout $uploadTimeout
}

function Get-VersionString {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [int]
        $buildNumber
    )
    [int]$year = Get-Date -format "yyyy"
    [int]$month = Get-Date -format "%M"
    [int]$q = 1 + ($month - 1)/4
    $day = Get-Date -format "dd"
    
    return "$year.$q.$month$day.$buildNumber"
}

function Assert-LastOperationSuccessfull
{
    if ($LASTEXITCODE -ne 0)
    {
        throw "Documentation generation failed with exit code $LASTEXITCODE"
    }
}

Export-ModuleMember -function New-Documentation