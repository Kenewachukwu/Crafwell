const scrollOffset = 100;
 
const scrollElement = document.querySelectorAll(".js-scroll");
 
console.log(scrollElement);
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
}
 
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
    scrollElement.forEach((el) => {
      if (elementInView(el, scrollOffset)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  }
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
