// Fonction qui calcule le produit de deux nombres
function produit(x, y) {
    return x * y;
}

// Fonction qui affiche une image en utilisant innerHTML
function afficheImg(image) {
    document.getElementById('resultat').innerHTML += `<img src="${image}" alt="Image affichée">`;
}

// Demander les nombres à l'utilisateur
let nombre = parseFloat(prompt("Entrez un nombre :"));
let multiplicateur = parseFloat(prompt("Entrez un multiplicateur :"));

// Vérifier si les entrées sont valides
if (!isNaN(nombre) && !isNaN(multiplicateur)) {
    // Calculer le produit
    let resultatProduit = produit(nombre, multiplicateur);
    
    // Calculer le cube du multiplicateur
    let cube = multiplicateur * multiplicateur * multiplicateur;

    // Afficher l'image (remplacez l'URL par celle de votre choix)
    afficheImg('https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg'); // Image de test

    // Afficher les résultats
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML += `<p>Le produit de ${nombre} et ${multiplicateur} est : ${resultatProduit}</p>`;
    resultatDiv.innerHTML += `<p>Le cube de ${multiplicateur} est : ${cube}</p>`;
} else {
    // Message d'erreur si les entrées ne sont pas valides
    document.getElementById('resultat').innerHTML = "<p>Veuillez entrer des nombres valides !</p>";
}