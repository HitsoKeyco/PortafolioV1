
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

            console.log('333');
        } else if (currentScrollPos < prevScrollPos) {

        } else {
            navShowHTML.classList.add('show_shadows_nav');

        }
        prevScrollPos = currentScrollPos;
    });
}
showShadowNav();

// funcion modo obscuro
function handleMode() {
    const moonHTML = document.querySelector('.bx');
    const bodyHtml = document.querySelector('.mode')
    console.log(bodyHtml);

    moonHTML.addEventListener('click', () => {
        if (moonHTML.classList.contains('bx-moon')) {
            moonHTML.classList.remove('bx-moon')
            moonHTML.classList.add('bx-brightness')
            bodyHtml.classList.add('modeDark')
        } else {
            moonHTML.classList.add('bx-moon')
            moonHTML.classList.remove('bx-brightness')
            bodyHtml.classList.remove('modeDark')
        }
    })
}
handleMode();

function openExternalPage1() {
    window.open("https://ecommercesergiolivo.netlify.app", "_blank");
}



function openExternalPage2() {
    window.open("https://entregablen1sergiolivo.netlify.app", "_blank");
}


function openExternalPage3() {
    window.open("https://country-api-rest-olivo.netlify.app", "_blank");
}


function openExternalPage4() {
    window.open("https://country-api-rest-olivo.netlify.app", "_blank");
}


function openExternalPage5() {
    window.open("https://app.netlify.com/sites/weather-app-olivo/", "_blank");
}


function openExternalPage6() {
    window.open("https://rick-and-morty-olivo.netlify.app", "_blank");
}


//efecto fade scroll

window.addEventListener('scroll', function () {
    let hightHTML = window.innerHeight / 1.1;
    const elementsHTML = document.querySelectorAll('.efectFade');

    elementsHTML.forEach(function (element) {
        let spaceToUpElement = element.getBoundingClientRect().top;

        if (spaceToUpElement <= hightHTML) {
            element.classList.add('showFade');
        }
    });
});

