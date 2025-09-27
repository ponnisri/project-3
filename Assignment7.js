// Select all pupil elements inside eyes
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (event) => {
  // Get mouse position
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  // Loop through each pupil
  for (let i = 0; i < pupils.length; i++) {
    let eye = pupils[i].parentElement.getBoundingClientRect();

    // Center of the eye
    let eyeCenterX = eye.left + eye.width / 2;
    let eyeCenterY = eye.top + eye.height / 2;

    // Calculate angle between eye center and mouse
    let angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    // Limit pupil movement within eye
    let pupilX = Math.cos(angle) * 20; 
    let pupilY = Math.sin(angle) * 20;

     pupils[i].style.transform = `translate(${pupilX}px, ${pupilY}px)`;

  }
});