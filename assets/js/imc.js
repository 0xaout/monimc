let input = document.getElementsByTagName("input");
let poid = document.getElementById("poid");
let taille = document.getElementById("taille");
let valeur = document.getElementById("valeur");
let triangle = document.getElementById("triangle");
let bonhomme = document.getElementById("bonhomme");

function calculImc(poid, taille) {
    return poid/(taille^2); 
}

let valeurTaille;

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", function() {

        if(document.getElementsByClassName("fin")[0].value == "cm") {
            console.log("cm");
            valeurTaille = taille.value/100;
            console.log(valeurTaille);
            
            
        } else {
            valeurTaille = taille.value;
            
        }

       

        let imc = calculImc(poid.value, valeurTaille);

        switch (true) {
            case imc<16.5:
                valeur.innerHTML = "IMC: " + imc + " <br> Anorexie.";
                bonhomme.setAttribute("r", 10);
                break;
        
            case imc>=16.5 && imc<=18.5:
                valeur.innerHTML = "IMC: "+ imc + "<br> Maigreur.";
                bonhomme.setAttribute("r", 20);
                break;
            
            case imc>=18.5 && imc<=25:
                valeur.innerHTML = "IMC: "+ imc + " <br> Poids normal.";
                bonhomme.setAttribute("r", 30);
                break;
        
            case imc>=25 && imc<=30:
                valeur.innerHTML = "IMC: "+ imc +"<br> Surpoids.";
                bonhomme.setAttribute("r", 40);
                break;
        
            case imc>=30 && imc<=35:
                valeur.innerHTML = "IMC: "+ imc + "<br> Obésité sévère.";
                bonhomme.setAttribute("r", 50);
                break;

            case imc>=35 && imc<=40:
                valeur.innerHTML = "IMC: "+ imc + "<br> Obésité sévère.";
                bonhomme.setAttribute("r", 60);
                break;
        
            case imc>=40:
                valeur.innerHTML = "IMC: "+ imc + "<br> Obésité morbite.";
                bonhomme.setAttribute("r", 70);
                break;
        }

        /* */

        if(poid.value == 0) {
            poid.style.borderColor = "red";
            valeur.innerHTML = "vous devez remplir la case poid";
        } else {
            poid.style.borderColor = "#2bd887";
        }

        if(taille.value == 0) {
            taille.style.borderColor = "red";
            valeur.innerHTML = "vous devez remplir la case taille";
        } else {
            taille.style.borderColor = "#2bd887";
        }

        if(poid.value == 0 && taille.value == 0) {
            poid.style.borderColor = "red";
            taille.style.borderColor = "red";
            valeur.innerHTML = "vous devez remplir la case poid et la case taille";
        }

        /*    */

   
        

        if(imc >= 339/6) {
            triangle.setAttribute("points", [[1, -10], [1, 10], [21, 0]]);

        } else {
            triangle.setAttribute("points", [[1, 339-imc*6-10 ], [1, 339-imc*6+10], [21, 339-imc*6]]);
        }
        
    })
}

if(poid.value == 0 && taille.value == 0) {
    poid.style.borderColor = "red";
    taille.style.borderColor = "red";
    valeur.innerHTML = "vous devez remplir la case poid et la case taille";
}





