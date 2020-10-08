#!/usr/bin/env sh
tsc --init --lib ES2020 \
  --allowJs \
  --noImplicitThis \
  --noImplicitReturns \
  --esModuleInterop --types jest,node \
  --declaration --noUnusedLocals \
  --noUnusedParameters --noImplicitAny \
  --sourceMap --outDir dist