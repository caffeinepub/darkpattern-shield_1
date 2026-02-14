# Export Artifact Documentation

## Overview

The export script produces a complete source code archive of the DarkPattern Shield application.

## Archive Contents

The generated archive includes:

### Backend
- `backend/` - Motoko smart contract source code
  - `backend/main.mo` - Main canister logic for scam reporting and statistics
  - `backend/migration.mo` - Migration logic (if present)

### Frontend
- `frontend/` - React + TypeScript application
  - `frontend/src/` - Application source code
    - Components, pages, hooks, utilities
  - `frontend/public/` - Static assets
    - `frontend/public/assets/` - Application assets (logos, images)
    - `frontend/public/assets/generated/` - Generated assets (if present)
  - `frontend/package.json` - Dependencies and scripts
  - `frontend/vite.config.js` - Build configuration
  - `frontend/tailwind.config.js` - Styling configuration
  - `frontend/tsconfig.json` - TypeScript configuration

### Root Configuration
- `dfx.json` - Internet Computer project configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation (if present)
- `LICENSE` - License information (if present)
- `README_EXPORT.md` - Setup and run instructions

## Archive Format

- **Unix/Linux/macOS**: `.tar.gz` (gzip-compressed tarball)
- **Windows**: `.zip` (ZIP archive)

## Archive Location

The archive is created in the `export/` directory with a timestamp:
- Format: `darkpattern-shield-source-YYYYMMDD_HHMMSS.tar.gz` (or `.zip` on Windows)
- Example: `export/darkpattern-shield-source-20260214_143022.tar.gz`

## Verification

To verify the archive contains all necessary files:

### Unix/Linux/macOS
