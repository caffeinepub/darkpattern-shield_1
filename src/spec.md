# Specification

## Summary
**Goal:** Add a top-level `README.md` at the repository root to document the DarkPattern Shield project for end users/developers in English.

**Planned changes:**
- Create `README.md` at the repo root (same level as `backend/` and `frontend/`).
- Document project overview and the existing key features/pages: Home, Subscription Trap Detector, Personal Digital Risk Test, Scam Reporting + Dashboard, and Browser Extension Concept.
- Add sections for Tech Stack and Prerequisites (Node, pnpm, dfx).
- Add Local Development instructions covering installing dependencies, running the frontend, and deploying IC canisters.
- Explain Authentication at a high level using Internet Identity.
- Document Source Code Export by pointing to `frontend/SOURCE_CODE_EXPORT.md` and referencing the scripts in `frontend/scripts/`, aligning with the current export behavior (including `README_EXPORT.md` inside the export archive).

**User-visible outcome:** The repository includes an English `README.md` that explains what the project is, what pages/features exist, how to run it locally (frontend + IC canister), how Internet Identity authentication works, and how to export/download the full source code using the existing export docs/scripts.
