const MENU = document.getElementById('header-menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})

const GALLERY = document.getElementById('portfolio_tab');
function shuffle(gallery) {
    [...gallery.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => gallery.appendChild(f));
  }

GALLERY.addEventListener('click', (event) => {
    GALLERY.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    shuffle(gallery);
    
})


const HAMBURGER = document.getElementById('hamburger-menu');
HAMBURGER.addEventListener('click', (event) => {
    HAMBURGER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');  
})


document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#main>section');
    const links = document.querySelectorAll('#header-menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    })
}