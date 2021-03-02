# Brief2-Front //
// Recherche à réaliser :

- Savoir comment manipuler les médias via JS
- Quel est l'argument qui permet de lier un evenement aux touches du clavier
- Construire un evenement liant une touche du clavier à un média

// Objectifs / Etapes : 

- Lier mon index.html a mon module bundler :

    - Voir la doc de Parcel et suivre les differentes étapes

- Rajouter le HTML manquant avec les classes correspondantes :

    - Ajouter 6 div contenant les mêmes classes que les div précedentes et le bouton avec un id correspondant, avec une lettre differente // après modification de la manière dont j'allais procéder, j'ai créer des <audio> aussi avec l'id correspondant a son .key //

- Ajuster le responsive design en ajoutant une regle aux médias queries : 

    - Observer a partir de quelle largeur le design ne colle plus, obtenir par ce biais le regle du media querie, puis ajuster la largeur des div afin quelles ne soient plus que 2 par colonne

- Créer les fonctions permettant de jouer des fichiers audio : 

    - function play()
    { Permet de jouer un morceau }

- Lier ces fonctions a l'evenement du keypress correspondant : 

    - document.addEventListener('keypress', (event) => {
    const nomTouche = event.key;

- Utiliser un switch/case afin de jouer des morceaux different selon la touche presser :

    - switch (event.key) {
    case "ArrowDown":
      // Faire quelque chose pour la touche "flèche vers le bas" pressée.
      break;
    case "ArrowUp":
      // Faire quelque chose pour la touche "up arrow" pressée.
      break;
    case "ArrowLeft":
      // Faire quelque chose pour la touche "left arrow" pressée.
      break;
    case "ArrowRight":
      // Faire quelque chose pour la touche "right arrow" pressée.
      break;
    case "Enter":
      // Faire quelque chose pour les touches "enter" ou "return" pressées.
      break;
    case "Escape":
      // Faire quelque chose pour la touche "esc" pressée.
      break;
    default:
      return; // Quitter lorsque cela ne gère pas l'événement touche.
    }

    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
    }, true); // Après reflexion j'ai opté pour un if car le code en est beaucoup plus court.