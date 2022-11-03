
cargar = document.getElementById("login");

cargar.addEventListener("submit", mostrar);

function mostrar(){
    var usuario = document.getElementById('name').value;
    let basedatos = JSON.parse(localStorage.getItem('basedatos'));
    let nombre = document.getElementById('nombre');


console.log(usuario);
}