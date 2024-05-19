let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('abrir-menu')
})
menu.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})

let imagens=['img/img/gaming-msi-header.png','img/img/exclusive.png'];
//POSIÇÃO QUE VAI INICIAR 
let index =0;
//TEMPO DAS IMAGENS TROCAR
let time=3000;

//FUNÇÃO SLIDWSHOW
function slideShow(){
    //DOM - PEGANDO O ID E PASSSANDO CAMINHO DAS IMAGENS
    document.getElementById('img-topo-site').src=imagens[index];
    //INCREMENTANDO
    index++;
//CONDICONAL if
    if(index == imagens.length){
        index=0;
    }
    //metodo setTimout para executar a função e chamar o tempo
    setTimeout('slideShow()',time);
    
}

//executando a função
slideShow();