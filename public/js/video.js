

const myVideo = document.getElementById("myVideo");

window.addEventListener('load', () => {
    myVideo.play();
});

const ringVideo = document.getElementById("ringVideo");

window.addEventListener('load', () => {
    ringVideo.play();
});

window.addEventListener('click', () => {
    myVideo.play();
    ringVideo.play();

});

