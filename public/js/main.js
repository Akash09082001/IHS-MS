
const details = document.querySelectorAll(".details");

details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", (event) => {
        event.stopPropagation();

        details.forEach((detail) => {
            if (detail !== targetDetail && detail.contains(event.target) === false) {
                detail.removeAttribute("open");
            }
        });
    });
});


// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");
const modal = document.getElementById("modal");
const videoModal = document.getElementById("popup");

function showImage(imageSrc, title, content) {
    document.getElementById('imgModal').classList.remove('hidden');
    document.getElementById('showImg').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').textContent = content;

}

function closeImage() {
    // Hide the image modal
    document.getElementById('imgModal').classList.add('hidden');
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
        imgModal.style.display = "none";
        videoModal.style.display = "none";
    }
});


const formHeading = document.getElementById("formHeading")

function openModal(headingText) {
    formHeading.innerHTML = headingText;
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function getInfoFromButton(button) {
    var heading = button.getAttribute('aria-heading');
    var id = button.getAttribute('aria-id');
    return { heading: heading, id: id };
}
document.querySelectorAll('.enquireNow').forEach(function (button) {
    button.addEventListener('click', function () {
        var info = getInfoFromButton(this);
        openModal(info.heading);
    });
});


function openVideoModal() {
    videoModal.style.display = "block";
}

function closeVideoModal() {
    videoModal.style.display = "none";
}
function getUTM() {
    const queryString = window.location.search;
    return queryString
}
function redirect(url) {
    if (getUTM()) {
        window.location = url + getUTM()
    } else {
        window.location = url
    }
}

window.addEventListener("load", () => {
    setTimeout(() => {
        openModal("Enquire Now");
    }, 15000);
});