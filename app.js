const inpCouleur = document.querySelectorAll('.inp-Couleur');
const inpRange = document.querySelector('.inp-range');
const fond = document.body;
const btns = document.querySelectorAll('button');
const containeCouleur= document.querySelector('.container-couleur')

// initialisation

let valCouleur = ['#BA5370', '#F4E2D8'];
let inclinaison = 45;
let index = 3;

inpCouleur[0].value = valCouleur[0];
inpCouleur[1].value = valCouleur[1];
inpCouleur[0].style.background = valCouleur[0];
inpCouleur[1].style.background = valCouleur[1];

fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur[0]}, ${valCouleur[1]})`

//inclinaison

inpRange.addEventListener('input', (e) => {
    inclinaison = e.target.value * 3.6;
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur[0]}, ${valCouleur[1]})`;
})

// Rajout ou suppression couleur

btns.forEach(btn => {

    btn.addEventListener('click', rajouteEnleve)
}
)

function rajouteEnleve(e) {
    const allInput = document.querySelectorAll('.inp-Couleur');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if (e.target.className === "plus") {
        if (allInput.length > 8) {
            return;
        }

        const nvCouleur = document.createElement('input');
        nvCouleur.setAttribute('class', 'inp-Couleur');
        nvCouleur.setAttribute('data-index', index);
        nvCouleur.setAttribute('maxlength', 7);
        nvCouleur.value = `#${randomColor.toUpperCase()}`;
        nvCouleur.style.background = `#${randomColor}`;
        containeCouleur.appendChild(nvCouleur)
        
        valCouleur.push(`#${randomColor.toUpperCase()}`)


        //MAJ du fond
        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
        index++;
    }
}