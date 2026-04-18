#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$HOME/Documents/Projects/andyai-knowledge-hub"
PACK_DIR_DEFAULT="$HOME/Downloads/andyai-knowledge-hub-pack-v0_5/tmp_v05_pack"
PACK_DIR="${1:-$PACK_DIR_DEFAULT}"

if [ ! -d "$REPO_DIR" ]; then
  echo "[ERROR] Repo dir not found: $REPO_DIR"
  exit 1
fi

if [ ! -d "$PACK_DIR" ]; then
  echo "[ERROR] Pack dir not found: $PACK_DIR"
  echo "Usage: bash scripts/APPLY_TAP_TAP_v0_5.sh /path/to/tmp_v05_pack"
  exit 1
fi

echo "==> AndyAI Knowledge Hub v0.5 TAP-TAP apply"
echo "==> Repo: $REPO_DIR"
echo "==> Pack: $PACK_DIR"

rsync -av --exclude '.DS_Store' "$PACK_DIR/" "$REPO_DIR/"

cd "$REPO_DIR"

echo "==> npm install"
npm install

echo "==> npm run build"
npm run build

echo "==> git status"
git status --short

echo
echo "✅ Overlay applied successfully."
echo "Next suggested commands:"
echo "  cd $REPO_DIR"
echo "  git add ."
echo "  git commit -m 'v0.5 visual + real content upgrade pack'"
echo "  git push origin main"
echo "  vercel --prod"
