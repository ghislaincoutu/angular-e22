# angular-e22 &mdash; Test de programmation de fiches grammaticales
[README](../README.md) &mdash; Angular

Les fichiers se rapportant à l'application qui doivent être installés sur le serveur Web se trouvent dans le sous-répertoire `/releated_files/publication`.

## Démonstration
https://ghislaincoutu.ca/d002/angular-e22

## Commandes Angular à exécuter pour générer les composants de l'application
```sh
ng generate environments
ng generate component accueil
ng generate component menu
ng generate component liste-sommaire
ng generate component liste-detaillee
ng generate component aide001
ng generate component aide002
ng generate component aide003
ng generate component aide004
ng generate component gram001
ng generate component gram002
ng generate component phon001
ng generate component phon002
ng generate service module01
```

## Ajout d'un fichier JavaScript externe à l'application
Pour ajouter un fichier JavaScript externe à l'application, il faut spécifier le chemin du fichier externe dans le fichier **angular.json**, dans la section _build_ :
```json
{
  "build": {
    "scripts": [
      "src/assets/js/custom.js"
    ]
  }
}
```