//Este script responde al envío del formulario por parte del visitante a la página de Contactenos con un mensaje que
//dice Formulario enviado correctamente (si se llenaron todos los campos correctamente) o Por favor, completa todos
//los campos del formulario en caso de no llenarlo correctamente.

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    } else {
        alert("¡Formulario enviado correctamente!");
        return true;
    }
}