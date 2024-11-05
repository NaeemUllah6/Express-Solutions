 // --------------------script for navbar--------------------
 document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('active');
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 1){
    navbar.classList.add('color_change')}
    else{
        navbar.classList.remove('color_change')
    }
});