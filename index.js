const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#alterar') 

elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = 'http://images6.fanpop.com/image/photos/39800000/feyre-the-fox-by-charlie-bowater-a-court-of-thorns-and-roses-series-39885466-680-962.jpg' 
        elementoNome.innerText = 'Feyre Archeron' 
        elementoSituacao.innerText = 'Feérica' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = 'https://64.media.tumblr.com/4e85729a0ec914f384726fdaaf15e19b/db78e8f50235dac4-31/s1280x1920/250b0fcdd1d831546dfba437f5d4380ac6502177.jpg'  
        elementoNome.innerText = 'Feyre Archeron'
        elementoSituacao.innerText = 'Grã-Senhora' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = 'https://i.pinimg.com/originals/b2/9a/bc/b29abc0bad049accfb1b2d67f4888819.jpg' 
        elementoNome.innerText = 'Feyre Archeron' 
        elementoSituacao.innerText = 'Humana'
        elementoBtn.value = 'primeiro'
    }
})