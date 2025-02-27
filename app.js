document.getElementById("btn").addEventListener("click", function () {
    // Obtener los valores dentro del evento para capturar los datos actualizados
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let lenguaje = document.getElementById('lenguaje').value;

    // Actualizar el contenido con la información del usuario
    document.getElementById("saludo__usuario").innerHTML = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje} !`;
});
