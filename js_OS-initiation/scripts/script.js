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
            //console.log(listeProposition[i])
        }

    })

    //les boutons radio de choix
    let choixInput = document.querySelectorAll(".optionSource input")
    //console.log(choixInput)
    for(let index = 0; index < choixInput.length; index++){
        choixInput[index].addEventListener("change", (event) => {
            //console.log(event.target.value)
            if(event.target.value === "1"){
                listeProposition = listeMots
                afficherProposition(listeProposition[i])
            }else{
                listeProposition = listePhrases
                afficherProposition(listeProposition[i])
            }
        })
    }

    afficherResultat(score, i)
}

/*function choisirPhrasesOuMots () {
    let choix = prompt("Choisissez entre une liste de mots('entrer mots') ou de phrases(entrer 'phrases')")

    while( choix !== "mots" && choix !== "phrases"){
        choix = prompt("Vous devez choisir soit mots, soit phrases")
    }
    return choix
}

function lancerBoucleDeJeu(listeProposition){
    let score = 0

    for(i = 0; i < listeProposition.length; i++){
        let motUtilisateur = prompt("Entrer : " + listeProposition[i]) 
        if(motUtilisateur === listeProposition[i]){
            score++
        }
    }
    return score
}*/