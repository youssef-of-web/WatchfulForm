document.addEventListener("mousemove", (event) => {
  const leftPupil = document.getElementById("left-pupil");
  const rightPupil = document.getElementById("right-pupil");

  const eyeCenterX = leftPupil.parentElement.offsetWidth / 2;
  const eyeCenterY = leftPupil.parentElement.offsetHeight / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const leftEyeRect = leftPupil.parentElement.getBoundingClientRect();
  const rightEyeRect = rightPupil.parentElement.getBoundingClientRect();

  const leftPupilX = Math.min(
    Math.max((mouseX - leftEyeRect.left - eyeCenterX) / 10, -10),
    10
  );
  const leftPupilY = Math.min(
    Math.max((mouseY - leftEyeRect.top - eyeCenterY) / 10, -10),
    10
  );

  const rightPupilX = Math.min(
    Math.max((mouseX - rightEyeRect.left - eyeCenterX) / 10, -10),
    10
  );
  const rightPupilY = Math.min(
    Math.max((mouseY - rightEyeRect.top - eyeCenterY) / 10, -10),
    10
  );

  leftPupil.style.transform = `translate(${leftPupilX}px, ${leftPupilY}px)`;
  rightPupil.style.transform = `translate(${rightPupilX}px, ${rightPupilY}px)`;
});
