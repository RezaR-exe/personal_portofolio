const wrapperAbout = document.querySelector('.wrapper-about');
const wrapperProject = document.querySelector('.wrapper-projects');
const wrapperContact = document.querySelector('.wrapper-contact');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnAboutPopup = document.querySelector('.btnAbout-popup');
const btnProjectPopup = document.querySelector('.btn-projects-popup');
const btnContactPopup = document.querySelector('.btnContact-popup');
const iconAboutClose = document.querySelector('.icon-about-close');
const iconProjectstClose = document.querySelector('.icon-projects-close');
const iconContactClose = document.querySelector('.icon-contact-close');
// const btnAbout = document.querySelector('.about-open')

if (registerLink) {
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
}

if (btnAboutPopup) {
    btnAboutPopup.addEventListener('click', ()=> {
        wrapperAbout.classList.add('active');
    });
}

if (btnProjectPopup) {
    btnProjectPopup.addEventListener('click', ()=> {
        wrapperProject.classList.add('active');
    });
}

if (btnContactPopup) {
    btnContactPopup.addEventListener('click', ()=> {
        wrapperContact.classList.add('active');
    });
}

if (iconAboutClose) {
    iconAboutClose.addEventListener('click', ()=> {
        wrapperAbout.classList.remove('active');
    });
}

if (iconProjectstClose) {
    iconProjectstClose.addEventListener('click', ()=> {
        wrapperProject.classList.remove('active');
    });
}

if (iconContactClose) {
    iconContactClose.addEventListener('click', ()=> {
        wrapperContact.classList.remove('active');
    });
}
