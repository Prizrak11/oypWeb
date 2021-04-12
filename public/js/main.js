/* Scroll Reveal */
ScrollReveal().reveal('.carousel',{delay:"100", distance:"5em", origin:"top"});
ScrollReveal().reveal('.mini-us',{delay:"100", distance:"5em", origin:"left"})
ScrollReveal().reveal('.services-main')
ScrollReveal().reveal('.part-title',{delay:"200", distance:"5em", origin:"right"})
ScrollReveal().reveal('.card',{delay:"200", distance:"5em", origin:"bottom"})
ScrollReveal().reveal('.slider',{delay:"200", distance:"5em", origin:"right"})
ScrollReveal().reveal('.info-card',{delay:"200", distance:"10em", origin:"right"});
ScrollReveal().reveal('.reverse',{delay:"200", distance:"10em", origin:"left"});
ScrollReveal().reveal(`.tab`,{delay:"400", distance:"5em", origin:"bottom"})
ScrollReveal().reveal('.info-description',{delay:"100", distance:"5em", origin:"top"});
ScrollReveal().reveal('.values',{delay:"200", distance:"10em", origin:"right"});
/* Responsive Design */
let menuVar = document.querySelector(`.nav-links`)
let menuActive = false
let bodyToggle = false
document.querySelector(`#nav-menu`).addEventListener(`click`,()=>{
    menuActive = true
    menuVar.classList.toggle(`hide`)
})
$(function() {
    var $body = $(document);
    $body.bind('scroll', function() {
        // "Desactivar" el scroll horizontal
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
}); 
window.onscroll = () => {
    menuVar.classList.remove(`hide`)
}
document.querySelector(`body`).addEventListener(`click`, ()=>{
    bodyToggle = true
})
if(menuActive && bodyToggle){
    menuVar.classList.remove(`hide`)
}
$('.carousel').carousel({
  interval: 2500
})