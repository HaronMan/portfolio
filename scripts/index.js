const contenu = document.getElementById("contenu")
const current_stylesheet = document.getElementById("current_stylesheet")

function changerContenu(name) {
    fetch("../view/"+name+".html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de chargement du fichier HTML');
        }
        return response.text();
    })
    .then(html => {
        contenu.innerHTML = html;
        current_stylesheet.href = "../assets/pages/"+name+".css"
        console.log(current_stylesheet.href)
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

const nav = [
    document.getElementById("accueil"),
    document.getElementById("qsj"),
    document.getElementById("competences"),
    document.getElementById("projets"),
    document.getElementById("contacter"),
]

nav.forEach(elt => {
    elt.addEventListener("click", () => {
        changerContenu(elt.id)
    })
});

changerContenu(nav[0].id)