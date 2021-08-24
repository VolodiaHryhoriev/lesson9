let scrollDown = document.getElementById('scrollDown');
let scrollUp = document.getElementById('scrollUp');


scrollDown.addEventListener('mouseover', () => {
   scrollDown.style.color = 'red';
   scrollDown.style.transition = 'color 1s ease' 
})
scrollDown.addEventListener('mouseout', () => {
    scrollDown.style.color = 'black';
   scrollDown.style.transition = 'color 1s ease'
})

scrollUp.addEventListener('mouseover', () => {
    scrollUp.style.color = 'red';
    scrollUp.style.transition = 'color 1s ease' 
 })
scrollUp.addEventListener('mouseout', () => {
    scrollUp.style.color = 'black';
    scrollUp.style.transition = 'color 1s ease'
 })


scrollDown.addEventListener('click', () => {
    document.getElementById('slide').scrollIntoView({behavior: "smooth"})
 })

 scrollUp.addEventListener('click', () => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })
 })


 window.addEventListener('scroll', (event) => {
    scrollUp.style.fontSize = `${window.scrollY/10}px`
    if (window.scrollY>=200 || window.scrollY>=700) {scrollDown.style.fontSize = `${window.scrollY/4}px`}  
    document.getElementById('slide').style.marginLeft = `${window.scrollY/4}px`
    document.getElementById('slide').style.paddingRight = `${window.scrollY/10}px`
    document.getElementById('image').style.marginRight = `${window.scrollY/4}px`
 })