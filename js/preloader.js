const preloader = () => {
    const preloader = document.querySelector('.preloder');
    
    preloader.classList.add('active');
    
    //setTimeout(function() {
    setTimeout(() => {
        preloader.classList.remove('active');
    }, 500);
}
preloader();

