// Accediendo a los elementos del formulario
const form = document.getElementById("studentForm");
const carnet = document.getElementById("carnet");
const fullName = document.getElementById("fullName");
const dui = document.getElementById("dui");
const nit = document.getElementById("nit");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const age = document.getElementById("age");

// Mensajes de error
const carnetError = document.getElementById("carnetError");
const fullNameError = document.getElementById("fullNameError");
const duiError = document.getElementById("duiError");
const nitError = document.getElementById("nitError");
const birthDateError = document.getElementById("birthDateError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");

// Expresiones regulares
const regexCarnet = /^[A-Z]{2}\d{3}$/;
const regexNombre = /^[a-zA-Z\s]+$/;
const regexDUI = /^\d{8}-\d$/;
const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
const regexFechaNacimiento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexEdad = /^\d+$/;

// Función para validar campo
function validateField(regex, field, errorField, errorMessage) {
    if (!regex.test(field.value)) {
        errorField.textContent = errorMessage;
        return false;
    } else {
        errorField.textContent = "";
        return true;
    }
}

// Validación en el envío
form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let isCarnetValid = validateField(regexCarnet, carnet, carnetError, "Formato de carnet inválido (Ejemplo: AB001)");
    let isFullNameValid = validateField(regexNombre, fullName, fullNameError, "El nombre solo debe contener letras y espacios");
    let isDUIValid = validateField(regexDUI, dui, duiError, "Formato de DUI inválido (Ejemplo: 12345678-9)");
    let isNITValid = validateField(regexNIT, nit, nitError, "Formato de NIT inválido (Ejemplo: 1234-123456-123-1)");
    let isBirthDateValid = validateField(regexFechaNacimiento, birthDate, birthDateError, "Formato de fecha inválido (Ejemplo: DD/MM/YYYY)");
    let isEmailValid = validateField(regexCorreo, email, emailError, "Correo electrónico inválido");
    let isAgeValid = validateField(regexEdad, age, ageError, "La edad debe ser un número");

    // Si todos los campos son válidos mostrar mensaje de éxito
    if (isCarnetValid && isFullNameValid && isDUIValid && isNITValid && isBirthDateValid && isEmailValid && isAgeValid) {
        successMessage.textContent = "Formulario enviado con éxito";
        form.reset(); // 
    } else {
        successMessage.textContent = "";
    }
});
