const contenu = document.getElementById("contenu")
const current_stylesheet = document.getElementById("current_stylesheet")

function changerContenu(nav_elt) {
    fetch("view/"+nav_elt.id+".html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de chargement du fichier HTML');
        }
        return response.text();
    })
    .then(html => {
        console.log
        contenu.innerHTML = html;
        current_stylesheet.href = "assets/pages/"+nav_elt.id+".css"
        replaceNav(nav_elt)
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

function replaceNav(nav_elt) {
    current_nav.className = "button-navigation"
    nav_elt.className = "button-navigation-selected"
    current_nav = nav_elt
    console.log(nav_elt)
}

const nav = [
    document.getElementById("accueil"),
    document.getElementById("qsj"),
    document.getElementById("competences"),
    document.getElementById("projets"),
    document.getElementById("contacter"),
]

current_nav = nav[0]
changerContenu(current_nav)

nav.forEach(elt => {
    elt.addEventListener("click", () => {
        changerContenu(elt)
    })
});

changerContenu(nav[0].id)