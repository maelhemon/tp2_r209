
function choix_bot(){
    const choix_bot= Math.random()*3;
    if (choix_bot === 1){
        return "pierre"
    } 
    else if (choix_bot === 2){
        return "feuille"
    }
    else {
        return "ciseaux"
    }
}
function choix_user(){
    const choix_pierre=document.getElementById("pierre");
    const choix_feuille=document.getElementById("feuille")
    const choix_ciseaux=document.getElementById("ciseaux")
    choix_pierre.addEventListener('click', ()=>{
       return "pierre"
   })
   choix_feuille.addEventListener('click',()=>{
            return "feuille"
   })
   choix_ciseaux.addEventListener('click',()=>{
            return "ciseaux"
   })
}
function shifumi(){
    let choix_bot=choix_bot()
    let choix_user=choix_user()
    if (choix_bot === "pierre")
        if( choix_user==="feuille")
            



    
    let reset=document.getElementById("reset");
    reset.addEventListener("click",()=>{
        location.reload()
    })



}




// les fonctions ne sont pas exécutés lorsqu'on les déclare 
// queryselectorall => sélectionne tous les objets du dom =>tableaux d'objets


 
 
    




/* fonction choix_bot => générer un nombre aléatoire
système de points => tests victoires plus incrémentation
focntion shifumi avec eventlistener pour reset les points

*/
