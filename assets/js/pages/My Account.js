	

let edit = document.getElementById("edit");
let updateInformation = document.querySelector(".update-information");
let accountInformation = document.querySelector(".profile");
let updatePassword = document.querySelector(".update-password");




function editAccount(){
    accountInformation.classList.add("disable");
    updateInformation.classList.remove("disable")
}
function back(){
    accountInformation.classList.remove("disable");
    updateInformation.classList.add("disable")
}

function resetPassword(){
    accountInformation.classList.add("disable");
    updatePassword.classList.remove("disable");
}
function backReset(){
    accountInformation.classList.remove("disable");
    updatePassword.classList.add("disable")
}