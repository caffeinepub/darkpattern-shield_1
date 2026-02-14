# Export full source code archive for DarkPattern Shield
# This script creates a complete archive of the repository including backend, frontend, and all assets

$ErrorActionPreference = "Stop"

# Configuration
$ExportDir = "export"
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$ArchiveName = "darkpattern-shield-source-$Timestamp.zip"
$TempDir = Join-Path $ExportDir "temp_$Timestamp"

Write-Host "🔧 DarkPattern Shield - Source Code Export" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Create export directory if it doesn't exist
New-Item -ItemType Directory -Force -Path $ExportDir | Out-Null

# Create temporary directory for staging
New-Item -ItemType Directory -Force -Path $TempDir | Out-Null

Write-Host "📦 Collecting source files..." -ForegroundColor Yellow

# Copy backend
if (Test-Path "backend") {
    Write-Host "  ✓ Backend (Motoko)" -ForegroundColor Green
    Copy-Item -Path "backend" -Destination $TempDir -Recurse
}

# Copy frontend
if (Test-Path "frontend") {
    Write-Host "  ✓ Frontend (React + TypeScript)" -ForegroundColor Green
    Copy-Item -Path "frontend" -Destination $TempDir -Recurse
}

# Copy root configuration files
$RootFiles = @("dfx.json", ".gitignore", "README.md", "LICENSE")
foreach ($file in $RootFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
        Copy-Item -Path $file -Destination $TempDir
    }
}

# Copy export documentation to root of archive
if (Test-Path "frontend/SOURCE_CODE_EXPORT.md") {
    Write-Host "  ✓ Export documentation" -ForegroundColor Green
    Copy-Item -Path "frontend/SOURCE_CODE_EXPORT.md" -Destination (Join-Path $TempDir "README_EXPORT.md")
}

# Create archive
Write-Host ""
Write-Host "📚 Creating archive..." -ForegroundColor Yellow
$ArchivePath = Join-Path $ExportDir $ArchiveName
Compress-Archive -Path (Join-Path $TempDir "*") -DestinationPath $ArchivePath -Force

# Cleanup temporary directory
Remove-Item -Path $TempDir -Recurse -Force

# Get archive size
$ArchiveSize = (Get-Item $ArchivePath).Length
$ArchiveSizeMB = [math]::Round($ArchiveSize / 1MB, 2)

Write-Host ""
Write-Host "✅ Export complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Archive: $ArchivePath" -ForegroundColor White
Write-Host "Size: $ArchiveSizeMB MB" -ForegroundColor White
Write-Host ""
Write-Host "📖 To extract and run locally:" -ForegroundColor Yellow
Write-Host "   Expand-Archive -Path $ArchiveName -DestinationPath .\darkpattern-shield" -ForegroundColor White
Write-Host "   See README_EXPORT.md for setup instructions" -ForegroundColor White
Write-Host ""
