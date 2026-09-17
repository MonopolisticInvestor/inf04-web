document.getElementById("btnSend").addEventListener("click", sendForm)

function sendForm(e) {
    document.getElementById("nameError").textContent = ""
    document.getElementById("emailError").textContent = ""
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email) {
        document.getElementById("formSection").textContent = "Dziękuję za kontakt."
    } 
    if (!name) {
        document.getElementById("nameError").textContent = "Wprowadź imię"
    }
    if (!email) {
        document.getElementById("emailError").textContent = "Wprowadź email"
    }
    console.log(name, email, message)
}