document.querySelector(".contact-us-btn").addEventListener("click", showContactUs)
document.querySelector(".send-message").addEventListener("click", message)

function showContactUs(){
    document.querySelector(".contact-us").classList.toggle("hidden")
}

function message(){
    document.querySelector(".message").classList.toggle("hidden")
}