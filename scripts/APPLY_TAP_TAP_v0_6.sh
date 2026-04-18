#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$HOME/Documents/Projects/andyai-knowledge-hub"
PACK_DIR="$HOME/Downloads/andyai-knowledge-hub-pack-v0_6/tmp_v06_pack"

if [[ ! -d "$REPO_DIR" ]]; then
  echo "Repo not found: $REPO_DIR"
  exit 1
fi

if [[ ! -d "$PACK_DIR" ]]; then
  echo "Pack dir not found: $PACK_DIR"
  exit 1
fi

echo "==> AndyAI Knowledge Hub v0.6 TAP-TAP apply"
echo "==> Repo: $REPO_DIR"
echo "==> Pack: $PACK_DIR"

rsync -av "$PACK_DIR/" "$REPO_DIR/"

cd "$REPO_DIR"

echo "==> npm install"
npm install

echo "==> npm run build"
npm run build

echo "==> git status"
git status --short

echo "✅ Overlay applied successfully."
echo "Next suggested commands:"
echo "  cd $REPO_DIR"
echo "  git add ."
echo "  git commit -m 'v0.6 prestige visual pass + homepage showcase strip'"
echo "  git push origin main"
echo "  vercel --prod"
