
const formWrapper = document.getElementById('formWrapper');
let animationId = null;
let translateX = 0;
let translateY = 0;

formWrapper.addEventListener('mouseover', function() {
    animationId = requestAnimationFrame(animate);
});

formWrapper.addEventListener('mouseout', function() {
    cancelAnimationFrame(animationId);
    translateX = 0;
    translateY = 0;
    this.style.transform = 'translate(0, 0)';
});

function animate() {
    translateX += Math.random() * 4 - 2;
    translateY += Math.random() * 4 - 2;
    formWrapper.style.transform = `translate(${translateX}px, ${translateY}px)`;
    animationId = requestAnimationFrame(animate);
}