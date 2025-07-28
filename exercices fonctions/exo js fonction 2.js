function strtok(str1, str2, n) {
    let mots = str1.split(str2);
    return mots[n - 1];
}

// Demander les entrées à l'utilisateur
let str1 = prompt("Entrez une chaîne de mots (ex. : robert;dupont;amiens;80000) :");
let str2 = prompt("Entrez le délimiteur (ex. : ;) :");
let n = parseInt(prompt("Entrez la position du mot à extraire (ex. : 3) :"));

// Vérifier si les entrées sont valides
if (str1 && str2 && !isNaN(n) && n > 0) {
    let resultat = strtok(str1, str2, n);
    // Vérifier si le mot existe
    if (resultat !== undefined) {
        document.getElementById('resultat').innerHTML = `<p>Le mot à la position ${n} est : ${resultat}</p>`;
    } else {
        document.getElementById('resultat').innerHTML = "<p>Erreur : La position demandée est invalide.</p>";
    }
} else {
    document.getElementById('resultat').innerHTML = "<p>Veuillez entrer des valeurs valides.</p>";
}