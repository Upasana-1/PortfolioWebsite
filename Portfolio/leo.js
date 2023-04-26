Let menuIcon= document.querySelector('#menu-icon');
Let navbar= document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle(' bx-x');
    menuIcon.classList.toggle(' active');
}





let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id'));

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector


