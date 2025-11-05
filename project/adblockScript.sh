#!/bin/bash
FILES=(
  "node_modules/lucide-react/dist/esm/lucide-react.js"
  "node_modules/lucide-react/dist/esm/icons/index.js"
)

for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    grep -v "Fingerprint" "$FILE" > "$FILE.tmp"
    mv "$FILE.tmp" "$FILE"
    echo "Removed Fingerprint lines from $FILE"
  else
    echo "File $FILE not found"
  fi
done