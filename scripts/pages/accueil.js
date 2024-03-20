const nom_html = document.getElementById("name")
const nom = "Haron KOCHBATI"
console.log(nom)

for(var i = 0; i < nom.length; i++) {
    
    setTimeout(() => {
        console.log(nom.charAt(i))
        nom_html.innerHTML += nom.charAt(i)
    }, 500)
}