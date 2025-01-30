function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
  }
  document.addEventListener("mousemove", function (event) {
    const parallaxImage = document.querySelector(".parallax img");
    const x = (window.innerWidth - event.pageX) / 50;
    const y = (window.innerHeight - event.pageY) / 50;
    
    parallaxImage.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});
  