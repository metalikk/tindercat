const profils = document.getElementById("profils")
const loader = document.getElementById("loader")
const login = document.getElementById("login")
profils.style.display = "none"
loader.style.display = "none"

document.getElementById("formLogin").addEventListener('submit', function(event){ // appel à lapi au sbmit du bouton
    event.preventDefault() // bloquer le rechargement de la page à l'evenement
    login.style.display = "none" 
    loader.style.display = " block"
    
    fetch("http://4graphik.com/lab/tincat/api/cats/") // appel api 
    .then(res => res.json()) // renvoi un fichier json
    .then(res => {
        setTimeout(function(){ // declenche les instructions au bout de 2 sec
            loader.style.display = "none" // n'apparait pas
            profils.style.display = "block" // apparait
        }, 2000)
    })
        
}) 
