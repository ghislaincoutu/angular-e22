#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie de sécurité des fichiers relatifs à l'application angular-e22"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

source=/var/www/html/r002/angular-e22
destination=/home/Tests/angular-e22/related_files/publication
rm $destination/*.tar.gz
tar -czvf $destination/pub_angular-e22_`(date +%Y%m%d-%H%M)`.tar.gz $source/

source=/home/Tests/angular-e22/
destination=/home/Backups/angular-e22_`(date +%Y%m%d-%H%M)`.tar.gz
tar --exclude=".angular" --exclude=".git" --exclude="node_modules" -czvf $destination $source
