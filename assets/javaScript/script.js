function toggleDropdown(className) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains(className)) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}



// JavaScript to handle carousel functionality
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');


    // Function to move to the previous slide
    function prev() {
        const activeSlide = document.querySelector('.slide[data-active]');
        if (!activeSlide) return;

        const currentIndex = Array.from(slides).indexOf(activeSlide);
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;

        // Update active slide
        activeSlide.removeAttribute('data-active');
        slides[prevIndex].setAttribute('data-active', 'true');
    }

    // Function to move to the next slide
    function next() {
        const activeSlide = document.querySelector('.slide[data-active]');
        if (!activeSlide) return;

        const currentIndex = Array.from(slides).indexOf(activeSlide);
        const nextIndex = (currentIndex + 1) % slides.length;

        // Update active slide
        activeSlide.removeAttribute('data-active');
        slides[nextIndex].setAttribute('data-active', 'true');
    }

    // Attach event listeners to buttons
    prevButton.addEventListener('click', prev);
    nextButton.addEventListener('click', next);
});


// services tab javascript

function home() {
    console.log("yes")
    document.querySelector("#image5").style.display = "block";
    document.querySelector("#image6").style.display = "none";
    document.querySelector("#image7").style.display = "none";
}
function service() {
    document.querySelector("#image6").style.display = "block";
    document.querySelector("#image5").style.display = "none";
    document.querySelector("#image7").style.display = "none";
}
function contact() {
    document.querySelector("#image7").style.display = "block";
    document.querySelector("#image6").style.display = "none";
    document.querySelector("#image5").style.display = "none";
}


// menu section
function coffee() {
    document.querySelector("#box1").style.display = "flex";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box3").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function drink() {
    document.querySelector("#box2").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box3").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function fastfood() {
    document.querySelector("#box3").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function tea() {
    document.querySelector("#box4").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box3").style.display = "none";
}


// form validation
function validateForm() {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var description = document.querySelector("#description").value;

    if (name == "") {
        document.getElementById("error1").innerHTML = "please fill the field";
        return false;
    }

    if (name.length <= "2") {
        document.getElementById("error1").innerHTML = "minimum character length is 2";
        return false;
    }
    if (email == "") {
        document.getElementById("error2").innerHTML = "please fill the field";
        return false;
    }

    if (email <= "2" && email >= "30") {
        document.getElementById("error2").innerHTML = "Length Shoud be beetween 3 and 30 ";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById("error2").innerHTML = "emailid is not Ok ";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById("error2").innerHTML = "email is wrong";
        return false;
    }

    if (pass == "") {
        document.getElementById("error3").innerHTML = "please fill the field";
        return false;
    }

    if (pass.length <= "8" && pass.length >= "15") {
        document.getElementById("error3").innerHTML = "character should be 8 to 15";
        return false;
    }

    if (description == "") {
        document.getElementById("error4").innerHTML = "please fill the field";
        return false;
    }
}


function loginshow() {
    var loginOpen = document.querySelector(".form").style;

    if (loginOpen.display == "block") {
        loginOpen.display = "none";
        loginOpen.width = "0%";
    }
    else {
        loginOpen.display = "block";
        loginOpen.width = "100%";
    }
}


function hide() {
    var loginClose = document.querySelector(".form").style;

    if (loginClose.display == "block") {
        loginClose.display = "none";
        loginClose.width = "0%";
    }
    else {
        loginClose.display = "block";
        loginClose.width = "100%";
    }

}



var patten = /\s/g;
var patten2 = "@";
var alertp = document.getElementById('loginError');
function first() {

    var user = document.getElementById("loginName").value



    if (user.match(patten)) {
        alertp.innerHTML = "**White Space Are not allowed in E-mail"
        return false;
    }
    if (user.length == 0) {
        alertp.innerHTML = "**please fill E-mail id";
        return false;
    }

    if ((user.length < 8) || (user.length > 25)) {
        alertp.innerHTML = "*length should be between 8 and 25";
        return false;
    }

    if (user.indexOf('@') == 0) {
        alertp.innerHTML = "** email id is not Ok";
        return false;
    }
    if ((user.charAt(user.length - 4) !== '.') && (user.charAt(user.length - 3) !== '.')) {
        alertp.innerHTML = "*email Id is not valid";
        return false;
    }

    if (!user.match(patten2)) {
        alertp.innerHTML = "*@ is important";
        return false;
    }



    alertp.innerHTML = "";
    return true;
}

function last() {

    var pass = document.getElementById("loginPassword").value



    if (pass.match(patten)) {
        alertp.innerHTML = "**White Space Are not allowed in Password"
        return false;
    }

    if (pass == "") {
        alertp.innerHTML = "** Please Fill The Password";
        return false;
    }

    if ((pass.length < 8) || (pass.length > 15)) {
        alertp.innerHTML = "*password should have Atleast 8 Character";
        return false;
    }

    alertp.innerHTML = "";
    return true;
}


function vallidate() {
    if (!first() || !last()) {
        alertp.innerHTML = "*please fill all details"
        return false;
    }

}
