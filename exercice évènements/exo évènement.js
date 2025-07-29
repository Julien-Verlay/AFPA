let nombremagique = Math.round(Math.random() * 100);

console.log("bonjour");
var element = document.getElementById("button1");

element.addEventListener("click", verif);

function verif() {
    let saisie = document.getElementById("textBox1").value;

    document.getElementById("label1").textContent = "";
    if (parseInt(saisie) > nombremagique) {
        document.getElementById("label1").textContent = "Trop grand";
    } else if (parseInt(saisie) < nombremagique) {
        document.getElementById("label1").textContent = "Trop petit";
    } else {
        console.log("Tu as trouvé");
    }
}