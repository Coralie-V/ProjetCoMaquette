import "./scss/main.scss";


let personalisation = [
    {
        zone: "lacets",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        zone: "pointe",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        zone: "oeillet",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        zone: "empeigne",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        zone: "semelle",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        zone: "bande",
        couleur : ["blanc", "gris", "noir", "rouge", "orange", "jaune", "vert", "bleu", "violet"]
    },
    {
        taille : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"]
    }
]

console.log(personalisation);

const DOM  ={
    listItems : document.querySelectorAll(".item")
}

DOM.listItems.forEach(function(element){
    console.log(element);
    element.addEventListener("click", maFonctionAuClick)
})

function maFonctionAuClick(event){
    //instructions
    console.log(event.target);

    let target = event.target;
    let siblings = event.target.parentNode.querySelectorAll(".item");

    let zone, element, id;
    // zone = lacet, pointe, empeingne... ; element = couleur; id= bleu, vert, rouge...
    zone = target.dataset.zone;
    element = target.dataset.element;
    id= target.dataset.id;

    console.log(event.target.dataset.zone)

    personalisation[zone][element]= id;
    console.log(personalisation);

    siblings.forEach(function(element){
        element.classList.remove("-active");
    })
    event.target.classList.add("-active");
}

