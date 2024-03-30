const contenu = document.getElementById("contenu")
const current_stylesheet = document.getElementById("current_stylesheet")
const current_script = document.getElementById("current_script")

const navigation = document.getElementById('navigation')

function changerContenu(nav_elt, con = false) {
    if(con || nav_elt !== current_nav) {
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
                if(!con){
                    navigation.classList.toggle("active")
                }
                contenu.style.filter = "blur(0px)"
                contenu.style.display = "none"
                contenu.innerHTML = html;
                current_stylesheet.href = "./assets/pages/"+nav_elt.id+".css"
                if(nav_elt === nav[2]){
                    let current_script = document.getElementById(current_nav.id+"_script")
                    if(current_script !== null) {
                        document.head.removeChild(current_script)
                    }
                    let script = document.createElement("script")
                    script.id = nav_elt.id+"_script"
                    script.src = './scripts/pages/'+nav_elt.id+'.js';
                    script.type = 'text/javascript';
                    document.head.appendChild(script)
                }
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

/* Si menu burger actif */
document.getElementById('alt_nav').addEventListener("click", () => {
    navigation.classList.toggle("active")
    if(contenu.style.filter === "blur(5px)") {
        contenu.style.filter = "blur(0px)"
    } else {
        contenu.style.filter = "blur(5px)"
    }
})

/* Si la fenetre redevient supérieur à 1050px en plein dans le menu burger actif */
window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
        if(contenu.style.filter === "blur(5px)") {
            navigation.classList.remove("active")
            contenu.style.filter = "blur(0px)"
        }
    }
})

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