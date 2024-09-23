
var form = document.getElementById("form");
var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var number = document.getElementById("number");
var state = document?.getElementById("state") || "Andaman and Nicobar";
var city = document?.getElementById("city") || "Hut Bay";
var captcha = document.getElementById("captcha");
var term = document.getElementById("term");
var countrySelect = document.getElementById("countrySelect");
var specialization = document.getElementById("specialization");
var captchaContainer = document.getElementById("genratedCaptcha");

var url = getUrl();

// error id's
var fullNameError = document.getElementById("fullnameError");
var emailError = document.getElementById("emailError");
var numberError = document.getElementById("numberError");
var stateError = document.getElementById("stateError");
var cityError = document.getElementById("cityError");
var captchaError = document.getElementById("captchaError");
var termError = document.getElementById("termError");
var specializationError = document.getElementById("specializationError");


// form modal
const formModal = document.getElementById("formModal");
const formMessageCard = document.getElementById("formMessageCard");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    fullNameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";
    stateError.textContent = "";
    cityError.textContent = "";

    const isFormValid = checkFormInputFields();

    if (isFormValid) {

        var formData = new FormData();

        formData.append("name", fullName.value.trim())
        formData.append("email", email.value.trim())
        formData.append("number", number.value)
        formData.append("countryCode", countrySelect.value)
        formData.append("state", state.value)
        formData.append("city", city.value)
        // Check if the country code is +91
        if (countrySelect.value == "+91") {
            formData.append("state", state?.value || "Andaman and Nicobar")
            formData.append("city", city?.value || "Hut Bay")
        } else {
            // For other country codes, set state and city as null
            formData.append("state", "Andaman and Nicobar")
            formData.append("city", "Hut Bay")
        }

        formData.append("url", url)

        const formDataJsonString = JSON.stringify(Object.fromEntries(formData.entries()));

        localStorage.setItem('formData', formDataJsonString);


        // api code

        // var apiUrl = "https://service.letsupgrade.in/v2/itm/isu/leads";

        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formDataJsonString
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(function (response) {
                // console.log(response);
                window.dataLayer.push({
                    event: "customConversionBTECH",
                    enhanced_conversion_data: {
                        email: email.value.trim().toLowerCase(),
                        phone_number: countrySelect.value + number.value,
                    },
                });
                form.reset();
                // window.location.href = "https://www.itm.edu/thankyou/itm-skills-university-b.tech-cse-thank-you-page"
            })
            .catch(error => {
                console.error("Error:", error);
                formPopup();
            });
    }

});

function formPopup() {
    formModal.style.display = "flex";

    setTimeout(() => {
        formModal.style.display = 'none';
    }, 3000)

}

function checkFormInputFields() {
    // Function to check if a field is empty
    const checkEmptyField = (value, errorElement, errorMessage) => {
        if (value.trim() === "") {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    };

    const checkFullNameValidity = (fullnameValue, errorElement, errorMessage) => {
        if (!isValidFullName(fullnameValue.trim())) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    };

    // Function to check email validity
    const checkEmailValidity = (emailValue, errorElement, errorMessage) => {
        if (!isValidEmail(emailValue.trim())) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    };

    // Function to check phone number validity
    const checkPhoneNumberValidity = (numberValue, errorElement, errorMessage) => {
        if (!isValidPhoneNumber(numberValue.trim())) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    };

    // Function to check captcha validity
    function validateCaptcha(userInputValue, captchaValue, errorElement, errorMessage) {
        if (userInputValue !== captchaValue) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    }

    // Function to check ter, validity
    const checkTermValidity = (termValue, errorElement, errorMessage) => {
        if (!term.checked) {
            termError.textContent = errorMessage;
            return; // Exit the function
        } else {
            errorElement.textContent = "";
            return true;
        }
    };


    // Check each form field
    const isFullNameValid = checkEmptyField(fullName.value, fullNameError, "Full Name is Required") &&
        checkFullNameValidity(fullName.value, fullNameError, "Name Cannot be number, Enter a Valid Name");
    const isEmailValid = checkEmptyField(email.value, emailError, "Email is Required") &&
        checkEmailValidity(email.value, emailError, "Invalid! Enter a proper email id");
    const isNumberValid = checkEmptyField(number.value, numberError, "Number is Required") &&
        checkPhoneNumberValidity(number.value, numberError, "Invalid! Enter a 10-digit Mobile Number");
    const isStateValid = checkEmptyField(state.value, stateError, "State is Required");
    const isCityValid = checkEmptyField(city.value, cityError, "City is Required");
    const isSpecializationValid = checkEmptyField(specialization.value, specializationError, "Specialization is Required");
    const isCaptchaValid = checkEmptyField(captcha.value, captchaError, "Captcha is Required") &&
        validateCaptcha(captcha.value, captchaContainer.dataset.captcha, captchaError, "Invalid! Captcha");
    const isTermValid = checkTermValidity(term.value, termError, "Please Check the Agreement Checkbox to proceed further!");

    // Return true if all fields are valid, otherwise false
    if (countrySelect.value === "+91") {
        const isStateValid = checkEmptyField(state.value, stateError, "State is Required");
        const isCityValid = checkEmptyField(city.value, cityError, "City is Required");

        // Return true if all fields are valid, otherwise false
        return isFullNameValid && isEmailValid && isNumberValid && isStateValid && isCityValid && isCaptchaValid && isTermValid && isSpecializationValid;
    } else {
        // For other countries, no validation is required for state and city
        return isFullNameValid && isEmailValid && isNumberValid && isCaptchaValid && isTermValid && isSpecializationValid;
    }
    // return isFullNameValid && isEmailValid && isNumberValid && isStateValid && isCityValid && isCaptchaValid && isTermValid;
}

function isValidFullName(name) {
    const digitRegex = /\d/;

    if (digitRegex.test(name)) {
        return false;
    }
    return true;
}

function isValidEmail(email) {
    // Basic email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
    // Phone number validation using regular expression
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

document.getElementById("refreshCaptchaBtn").addEventListener("click", () => {
    generateCaptcha(captchaContainer);
});

generateCaptcha(captchaContainer);

function generateCaptcha(captchaInput) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const captchaLength = 6;
    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    captchaInput.innerHTML = captcha;
    captchaInput.dataset.captcha = captcha;
}


function getUrl() {
    let url = window.location.href;
    let urlParams = window.location.search;
    return url + urlParams;

}


