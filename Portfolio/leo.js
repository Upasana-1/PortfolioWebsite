// query selector function
const select = (element, all = false) => {
    element = element.trim()
    if (all) {
        return [...document.querySelectorAll(element)]
    } else {
        return document.querySelector(element)
    }
}

const navbar = select('.navbar');
const cross = select('.close');
const menu = select('#menu-icon');

document.addEventListener("click", event => {
    const el = event.target;
    if (el.id === "menu-icon" || el === cross) {
        navbar.classList.toggle('mobilenavbar');
        cross.classList.toggle('show');
    }
    // else if (el !== navbar){
    //     navbar.classList.remove("mobilenavbar");
    //     cross.classList.remove('show');
    // }
});

// get skill bars
const bar = select('.bar', true);
// get navbar links
let navbarlinks = select('.navbar a', true);
// get up arrow 
const upArrow = select('.footer-icon');

window.onscroll = () => {
    navbarlinksActive();
    controlSkillsAnimation();
    upArrowDisplay();
    // if (navbar.classList.contains("mobilenavbar")){
    //     navbar.classList.remove("mobilenavbar");
    //     cross.classList.remove('show');
    // }
}

function upArrowDisplay() {
    if (window.scrollY > 100) {
        upArrow.style.display = "flex";
    } else {
        upArrow.style.display = "none";
    }
}

function navbarlinksActive() {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)

        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}

function controlSkillsAnimation() {
    bar.forEach(element => {
        const skill = element.firstElementChild.getAttribute("class");
        const leng = select(`.${skill}`);
        if (window.innerHeight + window.scrollY >= leng.offsetTop) {
            leng.style.animationPlayState = "running";
        }
    });
}