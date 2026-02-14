# Export Artifact Documentation

## Overview

The export scripts (`export-source-code.sh` for Unix/macOS and `export-source-code.ps1` for Windows) produce a complete source code archive of the DarkPattern Shield application, ready for local development.

## Archive Contents

The generated archive includes all files necessary to run the application locally:

### Backend
- `backend/` - Motoko smart contract source code
  - `backend/main.mo` - Main canister logic for scam reporting and statistics
  - `backend/migration.mo` - Migration logic (if present)

### Frontend
- `frontend/` - React + TypeScript application
  - `frontend/src/` - Application source code
    - `components/` - Reusable UI components (AppLayout, AppNav, Branding, ReportsDashboard)
    - `pages/` - Page components (Home, Detector, Risk Test, Reporting, Extension)
    - `hooks/` - React hooks (useActor, useInternetIdentity, useQueries)
    - `lib/` - Utility functions (riskDetector, riskQuiz)
    - `App.tsx`, `main.tsx`, `index.css` - Core application files
  - `frontend/public/` - Static assets
    - `frontend/public/assets/` - Application assets (logos, images)
    - `frontend/public/assets/generated/` - Generated assets (logos, mockups, backgrounds)
  - `frontend/scripts/` - Export scripts and documentation
  - `frontend/package.json` - Dependencies and scripts
  - `frontend/vite.config.js` - Build configuration
  - `frontend/tailwind.config.js` - Styling configuration
  - `frontend/tsconfig.json` - TypeScript configuration
  - `frontend/SOURCE_CODE_EXPORT.md` - Comprehensive setup guide

### Root Configuration
- `dfx.json` - Internet Computer project configuration
- `.gitignore` - Git ignore rules
- `README.md` - Main project documentation (if present at root)
- `LICENSE` - License information (if present)
- `README_EXPORT.md` - **Copy of `frontend/SOURCE_CODE_EXPORT.md` placed at archive root for easy access**

## Archive Format

The export scripts create different archive formats depending on your operating system:

- **Unix/Linux/macOS**: `.tar.gz` (gzip-compressed tarball)
  - Created by: `frontend/scripts/export-source-code.sh`
  - Extraction: `tar -xzf <filename>.tar.gz`

- **Windows**: `.zip` (ZIP archive)
  - Created by: `frontend/scripts/export-source-code.ps1`
  - Extraction: `Expand-Archive -Path <filename>.zip -DestinationPath .`

## Archive Location

The archive is created in the `export/` directory (at the project root) with a timestamp:

**Naming Format:**
- `darkpattern-shield-source-YYYYMMDD_HHMMSS.tar.gz` (Unix/macOS)
- `darkpattern-shield-source-YYYYMMDD_HHMMSS.zip` (Windows)

**Example:**
