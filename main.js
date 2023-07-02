function getTotalWeight(){
    let weight = document.getElementById("weight").value;
    let reps = document.getElementById("reps").value;
    if((weight == "")||(reps == "")){
        alert("Veuillez rentrer toutes les informations")
    }
    else{
        let repsInt = parseInt(reps);
        let poidsInt = parseInt(weight);
        var oneRm = poidsInt / (1.0278 - (0.0278 * repsInt));
    }
    if ((reps > 10)||(reps < 1)){
        alert("Le nombre de répétitions doit être compris entre 1 et 10")
        
    }
    else if(weight <= 0){
        alert('Le poids ne peut pas être inférieur ou égal à 0')
    }
    else{      
        let res = Math.round(oneRm * 100) / 100;
        let phrase = $('#phrase').html('La charge maximum approximative que tu peux soulever est de '+res+' KG');       
    }

}
    

function clearAllCases(){
    let element = $('#phrase').text("");
    weight.value = "";
    reps.value = "";
    };

    
