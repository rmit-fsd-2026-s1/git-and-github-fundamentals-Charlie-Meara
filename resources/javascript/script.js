function signUp() {
    window.open("/html/signup.html");
}

function validateSignUp(){
    alert("SUBMISSION");
    let email = document.forms["sign-up-form"]["email"].value;
    let pass1 = document.forms["sign-up-form"]["pass"].value;
    let pass2 = document.forms["sign-up-form"]["pass2"].value;

    if (pass1 != pass2){
        alert("Passwords do not match!");
        return false;
    }

    if (email.length() < 4){
        alert("Email's fucked");
        return false;
    }

    return true;
}