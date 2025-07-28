// Demander la taille du tableau
let taille = parseInt(prompt("Entrez la taille du tableau :"));

// Vérifier si la taille est valide (positive et non vide)
if (!isNaN(taille) && taille > 0) {
    // Créer un tableau vide
    let tableau = [];

    // Demander à l'utilisateur de saisir chaque valeur
    for (let i = 0; i < taille; i++) {
        let valeur = prompt(`Entrez la valeur ${i + 1} :`);
        tableau.push(valeur); // Ajouter la valeur au tableau
    }

    // Afficher le contenu du tableau
    let resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = "<h2>Contenu du tableau :</h2>";
    resultatDiv.innerHTML += "<ul>";
    for (let i = 0; i < tableau.length; i++) {
        resultatDiv.innerHTML += `<li>Élément ${i + 1} : ${tableau[i]}</li>`;
    }
    resultatDiv.innerHTML += "</ul>";
} else {
    // Afficher un message d'erreur si la taille est invalide
    document.getElementById('resultat').innerHTML = "<p>Veuillez entrer une taille valide (nombre positif).</p>";
}

