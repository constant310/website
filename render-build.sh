#!/usr/bin/env bash
set -euo pipefail
rm -rf public site.tar.xz site.tar.xz.b64
mkdir -p public
cat sitechunks/part-* > site.tar.xz.b64
base64 -d site.tar.xz.b64 > site.tar.xz
tar -xJf site.tar.xz -C public
printf 'Built %s files\n' "$(find public -type f | wc -l)"
