var competences = document.getElementById("skills")

function afficherCompetence(skill, delay) {
    const article = document.createElement("article")
    article.className = "competence"
    article.style.animationDelay = 0.5 + 0.2 * delay + "s"

    const details = document.createElement("details")
    details.innerHTML = "<summary>"+skill.name+"</summary>"+skill.desc
    details.className = "details"

    const div_barre = document.createElement("div")
    div_barre.className = "div_barre"

    const barre = document.createElement("div")
    barre.className = "barre"
    barre.style.width = "0%"

    div_barre.appendChild(barre)

    article.appendChild(details)
    article.appendChild(div_barre)
    competences.appendChild(article)

    cpt = 0
    setTimeout(() => {
        barre.style.width = skill.value+"%"
        barre.innerText = skill.value+"%"
    }, 1000 + 200 * lst.length)
}

var lst = [
    {"name": "Python", "value": 80, "desc": "Maitrîse de psycopg, matplotlib et random"},
    {"name": "Java", "value": 90, "desc": "Maîtrise de Spring, Hibernate, Cucumber et JUnit"},
    {"name": "SQL", "value": 75, "desc": "Maîtrise de PostgreSQL et connaissance en SQLite"},
    {"name": "HTML/CSS", "value": 70, "desc": "Maîtrise assez important pour effectuer une bonne mise en page aisni qu'une bonne structure HTML"},
    {"name": "PHP", "value": 60, "desc": "Maîtrise de PDO et connaissance en PHPUnit"},
    {"name": "JavaScript", "value": 65, "desc": "Connaissance en Node.js"},
    {"name": "Android", "value": 35, "desc": "Utilisation et connaissance de bases"},
    {"name": "Docker", "value": 25, "desc": "Connaissances de bases"},
    {"name": "Github", "value": 65, "desc": "Maîtrise assez importante pour mener l'avancée d'un projet à bien"}
]

var i = 1
lst.forEach(s => {
    afficherCompetence(s, i)
    i++
});

