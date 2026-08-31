#!/usr/bin/env bash
# Local dev server for the Astro site (http://localhost:4321).
set -euo pipefail
npm install
npm run dev -- --host
