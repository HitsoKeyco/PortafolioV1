
//Mostrar menu hamburguesa

function handleMain() {
    const bxMenuHTML = document.querySelector('.bx-menu');
    const menuHTML = document.querySelector('.menu')
    bxMenuHTML.addEventListener('click', () => {
        menuHTML.classList.add('menuShow');
        console.log('click');
    })
}
handleMain();

//Ocultar menu hamburguesa en clik a enlace

function handdleMainHidden() {
    const linkHTML = document.querySelectorAll('.link')
    const menuHTML = document.querySelector('.menu');
    linkHTML.forEach(link => {
        link.addEventListener('click', () => {
            menuHTML.classList.remove('menuShow')
        })
    })
}
handdleMainHidden()

//Agregar sombra en nav al momento de scroll

function showShadowNav() {
    const navHTML = document.querySelector('.nav');
    const navShowHTML = document.querySelector('.shadows_nav');
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos === 0) {
            navShowHTML.classList.remove('show_shadows_nav');
            navHTML.classList.remove('nav_efect');
            console.log('333');
        } else if (currentScrollPos < prevScrollPos) {
            navHTML.classList.remove('nav_efect');
        } else {
            navShowHTML.classList.add('show_shadows_nav');
            navHTML.classList.add('nav_efect');
        }
        prevScrollPos = currentScrollPos;
    });
}
showShadowNav();

function handleMode() {

    const moonHTML = document.querySelector('.bx');
    const bodyHtml = document.querySelector('.mode')
    const catHTML = document.querySelector('.dec1')
    const catnHTML = document.querySelector('.dec1night')
    const moonSvgHTML = document.querySelector('.moonSvg')
    console.log(bodyHtml);

    moonHTML.addEventListener('click', () => {
        if (moonHTML.classList.contains('bx-moon')) {
            moonHTML.classList.remove('bx-moon')
            moonHTML.classList.add('bx-brightness')
            bodyHtml.classList.add('modeDark')
            catHTML.classList.add('dec1Hidden')
            catnHTML.classList.add('dec1nightShow')
            moonSvgHTML.classList.add('moonSvgShow')

            
        } else {
            moonHTML.classList.add('bx-moon')
            moonHTML.classList.remove('bx-brightness')
            bodyHtml.classList.remove('modeDark')
            catHTML.classList.remove('dec1Hidden')
            catnHTML.classList.remove('dec1nightShow')
            moonSvgHTML.classList.remove('moonSvgShow')
            
            
        }
    })


}
handleMode();

