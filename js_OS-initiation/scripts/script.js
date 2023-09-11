//fichier script principale

function afficherResultat (score, nbMotProposé) {
    //l’endroit où le score sera affiché
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotProposé}`
    spanScore.innerText = affichageScore
}

function afficherProposition(Proposition){
    //l’endroit où le mot proposé sera affiché
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = Proposition
}

function validerNom(nom){
    if(nom.length > 2){
        return true
    }
    return false
}

function validerEmail(email){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    //si expression régulière,premiere condition semble etre le cas "true" par dflt.
    if(regex.test(email)){
        return true
    }
    return false

    //return resultat
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function lancerJeux() {
    //initialisation
    let score = 0
    let i = 0
    let listeProposition = listeMots
    
    //l’input dans lequel le joueur va écrire son texte
    let inputEcriture = document.getElementById("inputEcriture")
    //le bouton de validation.
    let btnValider = document.getElementById("btnValiderMot")
    afficherProposition(listeProposition[i])
    btnValider.addEventListener("click", () =>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        //quand =`` faire `` et non ` ` car crée un espace avant de rentrer un mot ou une phrase ;)
        inputEcriture.value = ``
        if(listeProposition[i] === undefined){
            afficherProposition("Le jeu est fini")
            btnValider.disabled = true
        }else{
            afficherProposition(listeProposition[i])
        }

    })

    //les boutons radio de choix
    let choixInput = document.querySelectorAll(".optionSource input")
    for(let index = 0; index < choixInput.length; index++){
        choixInput[index].addEventListener("change", (event) => {
            if(event.target.value === "1"){
                listeProposition = listeMots
                afficherProposition(listeProposition[i])
            }else{
                listeProposition = listePhrases
                afficherProposition(listeProposition[i])
            }
        })
    }

    const form = document.querySelector("form")
    //event input = submit a chaque lettre tapé dans le champ
    //event change = submit quand on finit de taper et qu'on selectionne autre élément de la page
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        //preventDefault() = pas de rechargement auto de la page apres avoir soumis le formulaire
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        if(validerEmail(email) && validerNom(nom)){
            let scoreEmail = `${score} / ${i}`
            afficherEmail(nom, email, scoreEmail)
        }else{
            console.log("error")
        }
    })

    afficherResultat(score, i)
}