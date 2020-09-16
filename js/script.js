const profils = document.getElementById("profils")
const loader = document.getElementById("loader")
const login = document.getElementById("login")
profils.style.display = "none"
loader.style.display = "none"
let cats = ''
let printProfil = []



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
        cats = res
        showProfil()
    })
        
}) 
document.getElementById('like').addEventListener('click', function(){
showProfil()
})
document.getElementById('run').addEventListener('click', function(){
showProfil()
})

function showProfil(){
    let randomNumber = Math.floor(Math.random() * 11 ) // genere un nombre aleatoire entre 0 et 11 ( 12 profiles)
    let include = false
 
if(printProfil.length < cats.length){
    if(!printProfil.includes(randomNumber)){ // si deux profiles similaire ne sont pas présents
        printProfil.push(randomNumber) // stocker les nombres aleatoires dans un tableau
        include = true
    }else{
    
        while(printProfil.includes(randomNumber) && include == false){ // generer systematiquement un profil aleatoire si profile déja vue 
             randomNumber = Math.floor(Math.random() * cats.length )

            if(!printProfil.includes(randomNumber)){// si le profil n'a pas encore été généré ni present dans le tableu alors affiche le
                printProfil.push(randomNumber)
                include = true
            }
        }
    }
}else{

    document.getElementById("card").innerHTML = "<h3>Il n'y a plus de profiles</h3>"
}
if(include === true){


    const div = document.createElement('div') //creation div coté js
        div.classList.add("imgProfil")
        div.style.backgroundImage = `url(${cats[randomNumber].path })`  
        const h2 = document.createElement("h2")
        h2.innerHTML = cats[randomNumber].name 
        document.getElementById("card").innerHTML = ""
        document.getElementById("card").append(div) 
        document.getElementById("card").append(h2) 
}
}

