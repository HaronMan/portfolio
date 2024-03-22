const contenu = document.getElementById("contenu")
const current_stylesheet = document.getElementById("current_stylesheet")
const current_script = document.getElementById("current_script")

function changerContenu(nav_elt, con = false) {
    if(con || nav_elt !== current_nav) {
        console.log("view/"+nav_elt.id+".html")
        fetch("view/"+nav_elt.id+".html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier HTML');
            }
            return response.text();
        })
        .then(html => {
            contenu.style.opacity = "0"
            setTimeout(() => {
                contenu.style.display = "none"
                contenu.innerHTML = html;
                current_stylesheet.href = "./assets/pages/"+nav_elt.id+".css"
                let current_script = document.getElementById(current_nav.id+"_script")
                console.log(current_script)
                if(current_script !== null) {
                    document.head.removeChild(current_script)
                }
                let script = document.createElement("script")
                script.id = nav_elt.id+"_script"
                script.src = './scripts/pages/'+nav_elt.id+'.js';
                script.type = 'text/javascript';
                document.head.appendChild(script)
                contenu.style.display = "block"
                contenu.style.opacity = "1"
            }, 500)
            replaceNav(nav_elt)
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }
}

function replaceNav(nav_elt) {
    current_nav.className = "button-navigation"
    nav_elt.className = "button-navigation-selected"
    current_nav = nav_elt
}

const nav = [
    document.getElementById("accueil"),
    document.getElementById("qsj"),
    document.getElementById("competences"),
    document.getElementById("projets"),
    document.getElementById("contacter"),
]

current_nav = nav[0]
changerContenu(current_nav, true)

nav.forEach(elt => {
    elt.addEventListener("click", () => {
        changerContenu(elt)
    })
});

changerContenu(nav[0].id)