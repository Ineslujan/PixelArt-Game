// CSS
// // body 100vh
// // form 25% et invader calc(100vh - 25%)
// // flex id invader : justify content center et align content center
// // choix des couleurs en position : fixed bottom 0 et right 0
// // mettre body en position relative
////  4 div avec radius de couleurs
// // styliser la div : height, width (vient du form ou 25 PAR DEFAUT), border, background color
// // styles CCS pour le array app.styles
// 


// créer objet UNIQUE "app"
// variable devient propriété (app.propriété)
// fonction devient méthode (app.function())
// // fonction d'application du départ : init
// // appeler "app.init(8,25)" pour chaque rechargement de l'application
// // ajouter styles: [
//   //  'plain',
//  //   'empty',
//  //   'light',
//   //  'highlight',
// // ],
const app = {
    currentColor: 'plain',
    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],
    getForm: document.getElementsByClassName('configuration')[0],
    form() {
        app.getForm.innerHTML += '<input type="number" name="numberGrid" id="numberGrid" placeholder="Taille de la grille">';
        app.getForm.innerHTML += '<input type="number" name="numberPixel" id="numberPixel" placeholder="Taille des pixels">';
        app.getForm.innerHTML += '<input type="submit" value="Valider" name="valid" id="valid">';

        app.getForm.addEventListener('submit', function (event) {
            // evite que la page ne se recharge
            event.preventDefault();
            // récupération de la valeur dans l'event Submit
            app.grid(event.target[0].valueAsNumber, event.target[1].valueAsNumber);
        });
    },
    grid(gridSize, pixelSize) {
        const grid = gridSize * gridSize;
        const widthHeight = gridSize * pixelSize;
        const targetGame = document.getElementById('invader');

        targetGame.innerHTML = '';

        targetGame.style.width = `${widthHeight}px`;
        targetGame.style.height = `${widthHeight}px`;

        for (let i = 0; i < grid; i++) {
            const pixel = document.createElement('div');

            pixel.className = ('pixel');
            // pixel.setAttribute('id', `${i}`);
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
            targetGame.appendChild(pixel);

            // grace au let le Listener est gardé en mémoire lors de la création des cases 
            pixel.addEventListener('click', () => {

                app.styles.forEach((style) => {
                    pixel.classList.remove(style);
                });

                pixel.classList.add(`${this.currentColor}`);

            });
        }
    },
    init() {
        app.form();
        app.grid(8, 25);
    },
};

window.addEventListener('DOMContentLoaded', function () {
    // quand je rentre ici, dans cette fonction, je suis GARANTI
    // d'avoir une page totalement chargée
    // et donc j'aurai pas de bug bizarre sur un getElementById par exemple
    console.log('la page est chargée, en avant on initialise le jeu');
    app.init();
});

// FONCTION avec 2 parametres : taille grille, taille pixel
// créer une grille 8x8 (vient du Form ou 8 PAR DEFAUT) (nommée init)
// dans une boucle (64fois)
// créer une div avec "document.createElement("div") 
// ajouter la div "appendChild" dans l'id Invader
// styliser la div : height, width (vient du form ou 25 PAR DEFAUT)
// +++++++++
// FORM
// ajouter 2 champs <input type="number"> (placeholder = "Taille de la grille", "taille des pixels")
// ajouter bouton pour submit
// récupérer la valeur "taille grille" et "la taille pixel" pour la mettre dans la fonction de la boucle
// NE PAS OUBLIER d'effacer ce qu'il y avait avant

// FORM




// gérer clic pixel :
// "click" qui appelle la fonction pour passer entre blanc et noir
// event.target pour bien cibler le pixel
// fonction pour modifier la couleur avec la classe correspondante avec classList .toggle



// SELECTION DE LA COULEUR
const getSelector = document.querySelector('.selector');
getSelector.addEventListener('click', (event) => {

    app.styles.forEach((style) => {
        // on parcourt les styles du array et si le target correspond au style, changer la couleur courante
        const getActive = document.querySelector('.buttonActive');

        if (event.target.className === (`${style} button`)) {
            app.currentColor = style;
            
            getActive.classList.remove('buttonActive');
            getActive.classList.add('button');

            event.target.classList.add('buttonActive');
            event.target.classList.remove('button');
        }

    });
});



// gérer clik choix couleur