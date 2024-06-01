const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})
// const btnPopup = document.querySelector('.btnLogin-popup')
// btnPopup.addEventListener('click',()=>{
//     wrapper.classList.add('active-popup')
// })
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})

const btnPopup = document.querySelector('.btnLogin');
if (btnPopup) {
    btnPopup.addEventListener('click', () => {
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
            wrapper.classList.add('active-popup');
        }
    });
} else {
    console.error("Element with class 'btnLogin' not found");
}


