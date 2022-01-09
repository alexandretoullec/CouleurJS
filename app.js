const inpCouleur = document.querySelectorAll('.inp-Couleur');
const inpRange = document.querySelector('.inp-range');
const fond = document.body;
const btns = document.querySelectorAll('button');
const containeCouleur = document.querySelector('.container-couleur')
const span = document.querySelector('span');
const btnRandom = document.querySelector('.random')

// initialisation

let valCouleur = ['#BA5370', '#F4E2D8'];
let inclinaison = 45;
let index = 3;

inpCouleur[0].value = valCouleur[0];
inpCouleur[1].value = valCouleur[1];
inpCouleur[0].style.background = valCouleur[0];
inpCouleur[1].style.background = valCouleur[1];

fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;

//inclinaison

inpRange.addEventListener('input', (e) => {
    inclinaison = e.target.value * 3.6;
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
})

// Rajout ou suppression couleur

btns.forEach(btn => {

    btn.addEventListener('click', rajouteEnleve)
}
)

function rajouteEnleve(e) {
    span.innerText = '';
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
    else if (e.target.className === "moins") {
        if (valCouleur.length === 2) {
            span.innerText= 'il faut au moins deux couleurs'
        } else {
            
            valCouleur.pop();
            allInput[allInput.length - 1].remove();
            index--;
            fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
        }
    }
    
//nouvel Input

    inpCouleur.forEach(inp => {
        inp.addEventListener('input', majColors)
    });

    function majColors(e) {
        let indexEnCours = e.target.getAttribute("data-index");
        e.target.value = e.target.value.toUpperCase();
        valCouleur[indexEnCours - 1] = e.target.value.toUpperCase();
        e.target.style.background = valCouleur[indexEnCours - 1];
        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
        
    }   

}


//input de base
inpCouleur.forEach(inp => {
    inp.addEventListener('input', majColors)
});

function majColors(e) {
    let indexEnCours = e.target.getAttribute("data-index");
    e.target.value = e.target.value.toUpperCase();
    valCouleur[indexEnCours - 1] = e.target.value.toUpperCase();
    e.target.style.background = valCouleur[indexEnCours - 1];
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
    
}   

// ajout couelur alétaoir


btnRandom.addEventListener('click', () => {

    const inputs = document.querySelectorAll('.inp-Couleur');

    for (i = 0; i < valCouleur.length; i++) {
        valCouleur[i] = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        inputs[i].value = valCouleur[i].toUpperCase();
        inputs[i].style.background = valCouleur[i].toUpperCase();
        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
    }

})