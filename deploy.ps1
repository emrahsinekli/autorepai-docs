# Deploy the docs to GitHub Pages (gh-pages branch).
#   .\deploy.ps1                → live at https://emrahsinekli.github.io/autorepai-docs/
#   .\deploy.ps1 -CustomDomain  → live at https://doc.autorepai.com (requires the DNS CNAME)
param([switch]$CustomDomain)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if ($CustomDomain) {
    $env:DOCS_CUSTOM_DOMAIN = '1'
    Set-Content -Path 'static\CNAME' -Value 'doc.autorepai.com' -Encoding ascii -NoNewline
} else {
    Remove-Item Env:DOCS_CUSTOM_DOMAIN -ErrorAction SilentlyContinue
    Remove-Item 'static\CNAME' -Force -ErrorAction SilentlyContinue
}

npm run build
if ($LASTEXITCODE -ne 0) { throw 'build failed' }

Push-Location build
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.email="deploy@autorepai.com" -c user.name="docs-deploy" commit -q -m "deploy"
git push -f "https://github.com/emrahsinekli/autorepai-docs.git" gh-pages
Pop-Location
Remove-Item build\.git -Recurse -Force
Write-Host "Deployed." -ForegroundColor Green
