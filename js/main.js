
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


// window.addEventListener('scroll', function () {
//     var row2 = document.querySelector('.dashboard');
//     var scrollPos = window.pageYOffset;

//     if (scrollPos > 400) {
//         row2.style.height = '100vh';
//     } else {
//         row2.style.height = '100vh';
//     }
// });
