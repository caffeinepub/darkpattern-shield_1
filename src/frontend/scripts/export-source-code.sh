#!/bin/sh
# Export full source code archive for DarkPattern Shield
# This script creates a complete archive of the repository including backend, frontend, and all assets

set -e

# Configuration
EXPORT_DIR="export"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ARCHIVE_NAME="darkpattern-shield-source-${TIMESTAMP}.tar.gz"
TEMP_DIR="${EXPORT_DIR}/temp_${TIMESTAMP}"

echo "🔧 DarkPattern Shield - Source Code Export"
echo "=========================================="

# Create export directory if it doesn't exist
mkdir -p "${EXPORT_DIR}"

# Create temporary directory for staging
mkdir -p "${TEMP_DIR}"

echo "📦 Collecting source files..."

# Copy backend
if [ -d "backend" ]; then
  echo "  ✓ Backend (Motoko)"
  cp -r backend "${TEMP_DIR}/"
fi

# Copy frontend
if [ -d "frontend" ]; then
  echo "  ✓ Frontend (React + TypeScript)"
  cp -r frontend "${TEMP_DIR}/"
fi

# Copy root configuration files
for file in dfx.json .gitignore README.md LICENSE; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
    cp "$file" "${TEMP_DIR}/"
  fi
done

# Copy export documentation to root of archive
if [ -f "frontend/SOURCE_CODE_EXPORT.md" ]; then
  echo "  ✓ Export documentation"
  cp "frontend/SOURCE_CODE_EXPORT.md" "${TEMP_DIR}/README_EXPORT.md"
fi

# Create archive
echo ""
echo "📚 Creating archive..."
cd "${EXPORT_DIR}"
tar -czf "${ARCHIVE_NAME}" -C "temp_${TIMESTAMP}" .
cd ..

# Cleanup temporary directory
rm -rf "${TEMP_DIR}"

# Get archive size
ARCHIVE_SIZE=$(du -h "${EXPORT_DIR}/${ARCHIVE_NAME}" | cut -f1)

echo ""
echo "✅ Export complete!"
echo "=========================================="
echo "Archive: ${EXPORT_DIR}/${ARCHIVE_NAME}"
echo "Size: ${ARCHIVE_SIZE}"
echo ""
echo "📖 To extract and run locally:"
echo "   tar -xzf ${ARCHIVE_NAME}"
echo "   See README_EXPORT.md for setup instructions"
echo ""
