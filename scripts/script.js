// sphere follows mouse
document.addEventListener('mousemove', (e) => {

    const mouseFollow = document.getElementById('mouse-follow');
    const x = e.clientX - 50; //-50 to center div over mouse
    const y = e.clientY - 50; 
    console.log(x);
     
    mouseFollow.style.top = `${y}px`;
    mouseFollow.style.left = `${x}px`;
 })
 

 function toggleReview(element) {
    element.classList.toggle("active");
}



// Daan: visibility change for timeline cards
function myFunction() {
    var x = document.getElementById("timelineCards");
    var computedStyle = window.getComputedStyle(x);
    if (computedStyle.visibility === "hidden" || computedStyle.visibility === "visible") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "visible";
    }
}

