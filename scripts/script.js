// // sphere follows mouse
// document.addEventListener('mousemove', (e) => {
//
//     const mouseFollow = document.getElementById('mouse-follow');
//     const x = e.clientX - 50; //-50 to center div over mouse
//     const y = e.clientY - 50;
//     console.log(x);
//
//     mouseFollow.style.top = `${y}px`;
//     mouseFollow.style.left = `${x}px`;
//  })


function toggleReview(element) {
    element.classList.toggle("active");
}


// Voeg een klikgebeurtenis toe aan de cirkels (containers)
const containers = document.querySelectorAll('.container');
containers.forEach(container => {
    container.addEventListener('click', () => {
        // Verander de zichtbaarheid van de bijbehorende content
        const content = container.querySelector('.content');
        if (content.style.visibility === 'hidden' || content.style.visibility === '') {
            content.style.visibility = 'visible';
        } else {
            content.style.visibility = 'hidden';
        }
    });
});

// dark them function
function themechange() {
    var body = document.body;
    // var section = document.querySelector('.algemeen');
    var header = document.querySelector('.theheader');
    var article = document.querySelector('.thearticle');
    body.classList.toggle("dark-mode-body");
    //section.classList.toggle("dark-mode-body");//
    header.classList.toggle("dark-mode-head");
    article.classList.toggle("dark-mode-head");
 }



