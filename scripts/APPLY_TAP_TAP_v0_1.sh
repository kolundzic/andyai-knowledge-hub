#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${1:-$HOME/Documents/Projects/andyai-knowledge-hub}"
PACK_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> AndyAI POSITIONING LOCK PACK v0.1"
echo "==> Target: $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"
mkdir -p "$PROJECT_DIR/docs/positioning" "$PROJECT_DIR/meta" "$PROJECT_DIR/scripts"

cp -f "$PACK_DIR/README.md" "$PROJECT_DIR/README.md"
cp -f "$PACK_DIR/docs/positioning/"*.md "$PROJECT_DIR/docs/positioning/"
cp -f "$PACK_DIR/meta/BUILD_LOG.md" "$PROJECT_DIR/meta/BUILD_LOG_POSITIONING_v0_1.md"
cp -f "$PACK_DIR/scripts/APPLY_TAP_TAP_v0_1.sh" "$PROJECT_DIR/scripts/"

chmod +x "$PROJECT_DIR/scripts/APPLY_TAP_TAP_v0_1.sh"

echo "==> POSITIONING LOCK PACK v0.1 applied successfully"
echo "==> Next recommended pack: KNOWLEDGE HUB SITE MAP PACK v0.1"
