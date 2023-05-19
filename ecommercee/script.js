let loginForm = document.querySelector('.login-form');

document.querySelector('#btn3').onclick =()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}