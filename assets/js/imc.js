let input = document.getElementsByTagName("input");
let poids = document.getElementById("poids");
let taille = document.getElementById("taille");
let valeurs = document.getElementById("valeurs");
let triangle = document.getElementById("triangle");
let bonhomme = document.getElementById("bonhomme");

/* s'occupe du calcul de l'imc */

function calculImc(poids, taille) {
    return poids/(taille^2); 
}

/* fonction pour modifier la couleur de fond + la bordure plus simplement */

function setColor(rgbaColor, opacity) {
    valeurs.style.border = "2px solid rgba(" + rgbaColor + ", 1)";
    valeurs.style.background = "rgba(" + rgbaColor + ", " + opacity + ")";
}

/* fonction qui s'occupe du programme en général, est appelée lorsque la page se charge, lorsqu'il y a un click et quand on relache une touche du clavier */

function affichageImc() {

    let imc;

    if(document.getElementsByClassName("fin")[0].value == "cm") {
        imc = calculImc(poids.value, taille.value/100);
        
    } else {
        imc = calculImc(poids.value, taille.value);
    }

    console.log(imc);

    
    

    switch (true) {
        case imc<16.5:
            setColor("252, 111, 111", "0.2");
            valeurs.innerHTML = "IMC: " + imc + " <br> Anorexie.";
            bonhomme.setAttribute("r", 10);
            
            break;
    
        case imc>=16.5 && imc<=18.5:
            setColor("247, 184, 116", "0.2");
            valeurs.innerHTML = "IMC: "+ imc + "<br> Maigreur.";
            bonhomme.setAttribute("r", 20);
            break;
        
        case imc>=18.5 && imc<=25:
            setColor("136, 216, 176", "0.2");
            valeurs.innerHTML = "IMC: "+ imc + " <br> Poids normal.";
            bonhomme.setAttribute("r", 30);
            break;
    
        case imc>=25 && imc<=30:
            setColor("69, 200, 204", "0.2");
            valeurs.innerHTML = "IMC: "+ imc +"<br> Surpoids.";
            bonhomme.setAttribute("r", 40);
            break;
    
        case imc>=30 && imc<=35:
            setColor("69, 134, 204", "0.2");
            valeurs.innerHTML = "IMC: "+ imc + "<br> Obésité sévère.";
            bonhomme.setAttribute("r", 50);
            break;

        case imc>=35 && imc<=40:
            setColor("54, 71, 181", "0.2");
            valeurs.innerHTML = "IMC: "+ imc + "<br> Obésité sévère.";
            bonhomme.setAttribute("r", 60);
            break;
    
        case imc>=40:
            setColor("74, 40, 122", "0.2");
            valeurs.innerHTML = "IMC: "+ imc + "<br> Obésité morbide.";
            bonhomme.setAttribute("r", 70);
            break;
    }

    /* on vérifie si les cases sont bien remplies */


    if(poids.value == 0) {
        valeurs.innerHTML = "vous devez remplir la case poids";
       
    } else {
        poids.style.borderColor = "#2bd887";
    }



    if(taille.value == 0) {
        valeurs.innerHTML = "vous devez remplir la case taille";

    } else {
        taille.style.borderColor = "#2bd887";
    }



    if(poids.value == 0 && taille.value == 0) {
        poids.style.borderColor = "red";
        taille.style.borderColor = "red";
        valeurs.innerHTML = "vous devez remplir la case poids et la case taille";

    }


    if(isNaN(taille.value / 10)) {
        valeurs.innerHTML = "Vous ne pouvez mettre que des chiffres dans les cases";
        taille.style.borderColor = "red";
    }


    if(isNaN(poids.value / 10)) {
        valeurs.innerHTML = "Vous ne pouvez mettre que des chiffres dans les cases";
        poids.style.borderColor = "red";

    }

    

    /* gestion de la position du curseur svg en fonction de l'imc calculé */

    if(imc >= 339/6) {
        triangle.setAttribute("points", [[1, -10], [1, 10], [21, 0]]);

    } else {
        triangle.setAttribute("points", [[1, 339-imc*6-10 ], [1, 339-imc*6+10], [21, 339-imc*6]]);
    }
}



for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", affichageImc);    
}

window.addEventListener("load", affichageImc);
window.addEventListener("click", affichageImc);






