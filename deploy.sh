#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist
git commit -m 'Nuevo despliegue'

git subtree push --prefix dist origin gh-pages

git push
