
//Mostrar menu hamburguesa

function handleMain() {
    const bxMenuHTML = document.querySelector('.bx-menu');
    const menuHTML = document.querySelector('.menu')
    bxMenuHTML.addEventListener('click', () => {
        menuHTML.classList.add('menuShow');
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

//Cerrar menu hamburguesa 

function closeMenuHamburg() {
    const closeHTML = document.querySelector('.closeicon')
    const menuHTML = document.querySelector('.menu');

    closeHTML.addEventListener('click', () => {
        menuHTML.classList.remove('menuShow')
    })

}

closeMenuHamburg();

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
    const moonHTMLList = document.querySelectorAll('.bxmoon');
    const bodyHtml = document.querySelector('.mode');
    const menuMoodHtml = document.querySelector('.dec1')
    const menuMood2Html = document.querySelector('.dec2')

    moonHTMLList.forEach((moonHTML) => {
        moonHTML.addEventListener('click', () => {
            if (moonHTML.classList.contains('bxs-moon')) {
                moonHTML.classList.remove('bxs-moon');
                moonHTML.classList.add('bx-brightness');
                bodyHtml.classList.add('modeDark');
                menuMoodHtml.classList.add('dec1-hidden')
                menuMood2Html.classList.add('dec2-show')
                
                
            } else {
                moonHTML.classList.add('bxs-moon');
                moonHTML.classList.remove('bx-brightness');
                bodyHtml.classList.remove('modeDark');
                menuMoodHtml.classList.remove('dec1-hidden')
                menuMood2Html.classList.remove('dec2-show')
                
                
                
            }
        });
    });
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
    window.open("https://weather-app-olivo.netlify.app/", "_blank");
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

