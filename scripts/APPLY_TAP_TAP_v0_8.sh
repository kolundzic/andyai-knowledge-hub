#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$HOME/Documents/Projects/andyai-knowledge-hub"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PACK_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "==> AndyAI Knowledge Hub v0.8 TAP-TAP apply"
echo "==> Repo: $REPO_DIR"
echo "==> Pack: $PACK_DIR"

if [ ! -d "$REPO_DIR" ]; then
  echo "Repo not found: $REPO_DIR"
  exit 1
fi

rsync -av "$PACK_DIR/" "$REPO_DIR/" --exclude '.DS_Store' --exclude 'node_modules'

cd "$REPO_DIR"

if [ -f package.json ]; then
  echo "==> npm install"
  npm install
  echo "==> npm run build"
  npm run build
fi

echo "==> git status"
git status --short || true

echo "✅ Overlay applied successfully."
echo "Next suggested commands:"
echo "  cd $REPO_DIR"
echo "  git add ."
echo "  git commit -m 'v0.8 screenshot assets + credibility band + README badges'"
echo "  git push origin main"
echo "  vercel --prod"
