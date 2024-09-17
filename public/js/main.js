

const details = document.querySelectorAll(".details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
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
    // Set the image source, title, and content
    document.getElementById('showImg').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').textContent = content;

    // Show the image modal
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
        console.log("Button ID: " + info.id);
    });
});



// const heroSection = document.getElementById('Hero');
// const floatBtn = document.getElementById('floatBtn');

// // Initial check when the page loads
// updateButtonVisibility();

// // Listen for scroll events to dynamically update button visibility
// window.addEventListener('scroll', updateButtonVisibility);

// function updateButtonVisibility() {
//     const isInsideHeroSection = isInHeroSection(floatBtn, heroSection);

//     if (isInsideHeroSection) {
//         floatBtn.style.visibility = 'hidden';
//     } else {
//         floatBtn.style.visibility = 'visible';
//     }
// }

// function isInHeroSection(element, heroSection) {
//     if (!heroSection) {
//         return false;
//     }

//     const buttonRect = element.getBoundingClientRect();
//     const heroRect = heroSection.getBoundingClientRect();

//     return (
//         buttonRect.top >= heroRect.top &&
//         buttonRect.bottom <= heroRect.bottom &&
//         buttonRect.left >= heroRect.left &&
//         buttonRect.right <= heroRect.right
//     );
// }


function openVideoModal() {
    videoModal.style.display = "block";
}

function closeVideoModal() {
    videoModal.style.display = "none";
}
function getUTM() {
    const queryString = window.location.search;
    // console.log(queryString)
    // const parameters = new URLSearchParams(queryString);
    // console.log(parameters);
    // const value = parameters.get('utm_campaignid');

    return queryString
}
function redirect(url) {
    if (getUTM()) {
        window.location = url + getUTM()
    } else {
        window.location = url
    }
}