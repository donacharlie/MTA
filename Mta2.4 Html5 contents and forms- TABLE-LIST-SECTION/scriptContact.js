//Validating forms using Javascript and contraint validation API

var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById("lastName");
var errorMail = document.querySelector('.errorMail');
var errorFirstName = document.querySelector('.errorName');
var errorLastName = document.querySelector('.errorName');



email.addEventListener("keyup", function(event) {
    if (email.validity.valid) {
        errorMail.innerHTML = "";
        errorMail.className = "errorMail";

    }
}, false);

firstName.addEventListener("keyup", function(event){
    if (firstName.validity.valid) {
        errorName.innerHTML = "";
        errorName.className = "errorName";
    }
}, false);

lastName.addEventListener("keyup", function(event){
    if(lastName.validity.valid){
        errorName.innerHTML = "";
        errorName.className = "errorName";
    }
}, false);

form.addEventListener("submit", function(event){
    if(!firstName.validity.valid){
        errorName.innerHTML = "Please provide a valid Name";
        errorName.className = "error active";
        event.preventDefault();
    }

    if(!lastName.validity.valid){
        errorName.innerHTML = "Please provide a valid name";
        errorName.className = "error active";
        event.preventDefault();
    }
    
    if(!email.validity.valid){
        errorMail.innerHTML = "Please provide a valid email";
        errorMail.className = "error active";
        event.preventDefault(); //prevent form from being sent by cancelling the event
    }
}, false);


