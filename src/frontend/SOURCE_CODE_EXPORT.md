# DarkPattern Shield - Source Code Export & Local Setup Guide

Welcome! This guide will help you export, set up, and run the DarkPattern Shield application locally.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Exporting the Source Code](#exporting-the-source-code)
3. [Setting Up Locally](#setting-up-locally)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Development Workflow](#development-workflow)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **pnpm** (v8 or higher)
   - Install: `npm install -g pnpm`
   - Verify: `pnpm --version`

3. **DFX** (Internet Computer SDK)
   - Install: `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"`
   - Verify: `dfx --version`
   - Minimum version: 0.15.0

### System Requirements

- **Operating System**: macOS, Linux, or Windows (with WSL2)
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 2GB free space

---

## Exporting the Source Code

If you're working in the Caffeine.ai workspace and want to export the complete source code:

### On Unix/Linux/macOS

