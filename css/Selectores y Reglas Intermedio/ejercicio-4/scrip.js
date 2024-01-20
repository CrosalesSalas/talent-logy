function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    return true;
}
