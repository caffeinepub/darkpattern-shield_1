# Specification

## Summary
**Goal:** Add a GitHub-ready root-level `README.md` that documents the DarkPattern Shield project in English.

**Planned changes:**
- Create a new `README.md` at the repository root with a project overview.
- Document the main pages/routes and what each does: Home `/`, Subscription Trap Detector `/detector`, Personal Digital Risk Test `/risk-test`, Scam Reporting `/report`, Browser Extension Concept `/extension`.
- Add prerequisites (Node, pnpm, DFX) and local development steps for running the Internet Computer canisters (`dfx start`, `dfx deploy`) and the React frontend dev server from the `frontend/` directory.
- Include a brief, user-facing explanation of authentication via Internet Identity.
- Add instructions for exporting/downloading the full source code using `frontend/scripts/export-source-code.sh` and `frontend/scripts/export-source-code.ps1`, noting the `export/` output folder and that `frontend/SOURCE_CODE_EXPORT.md` is copied into the archive root as `README_EXPORT.md`.

**User-visible outcome:** The repository can be pushed to GitHub with a clear, complete `README.md` that explains what the app is, its routes, how to run it locally, how Internet Identity login works, and how to export the full source code archive.
