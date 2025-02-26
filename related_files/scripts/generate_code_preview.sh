#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie du code HTML et TypeScript dans les fichiers code-preview"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/xd21/angular-e22/src/app
# Destination (de)
de=/home/xd21/angular-e22/src/assets/code-preview/

cp $so/module01.service.ts $de/module01/
mv $de/module01/module01.service.ts $de/module01/typescript.txt

cp $so/liste-sommaire/liste-sommaire.component.html $de/liste-sommaire/
mv $de/liste-sommaire/liste-sommaire.component.html $de/liste-sommaire/html.txt
cp $so/liste-sommaire/liste-sommaire.component.ts $de/liste-sommaire/
mv $de/liste-sommaire/liste-sommaire.component.ts $de/liste-sommaire/typescript.txt

cp $so/liste-detaillee/liste-detaillee.component.html $de/liste-detaillee/
mv $de/liste-detaillee/liste-detaillee.component.html $de/liste-detaillee/html.txt
cp $so/liste-detaillee/liste-detaillee.component.ts $de/liste-detaillee/
mv $de/liste-detaillee/liste-detaillee.component.ts $de/liste-detaillee/typescript.txt
