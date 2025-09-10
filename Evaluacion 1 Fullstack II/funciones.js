const nombres = document.getElementById("nombres");
const errores = document.getElementById("errores");
const mail = document.getElementById("email");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");
const form = document.getElementById("formulario");

nombres.addEventListener('keyup', function (e) {
    if (nombres.value.length < 3) {
        nombres.classList.add("error");
        errores.innerHTML = "Error, ingrese al menos 3 caracteres!.";
    } else {
        nombres.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
})

mail.addEventListener('keyup', function (e) {
    if (!mail.value.includes("@")) {
        mail.classList.add("error");
        errores.innerHTML = "Error, ingrese un signo arroba (@)!.";
    } else {
        mail.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
})

clave2.addEventListener('keyup', (e) => claves());
clave1.addEventListener('keyup', (e) => claves());

function claves() {
    if (clave2.value != clave1.value) {
        clave2.classList.add("error");
        errores.innerHTML = "Error, Las contraseñas no coinciden!.";
    } else {
        clave2.classList.remove("error");
        errores.innerHTML = "&nbsp;";
    }
}

form.addEventListener('submit', function (e) {
    if (nombres.value.length < 3) {
        nombres.classList.add("error");
    }
    if (!mail.value.includes("@")) {
        mail.classList.add("error");
    }
    if (clave2.value != clave1.value || clave2.value == "") {
        clave2.classList.add("error");
    }
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault()
            errores.innerHTML = "Revisa los campos en rojo!.";
            return;
        }
    })
})