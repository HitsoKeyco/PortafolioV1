
//Mostrar menu hamburguesa

function handleMain(){
    const bxMenuHTML = document.querySelector('.bx-menu');
    const menuHTML = document.querySelector('.menu')    
    bxMenuHTML.addEventListener('click', () =>{
        menuHTML.classList.add('menuShow');
        console.log('click');
    })
}
handleMain();

//Ocultar menu hamburguesa en clik a enlace

function handdleMainHidden(){
    const linkHTML = document.querySelectorAll('.link')
    const menuHTML = document.querySelector('.menu');    
    linkHTML.forEach(link =>{
        link.addEventListener('click', () => {
            menuHTML.classList.remove('menuShow')
        })    
    })
}
handdleMainHidden()

