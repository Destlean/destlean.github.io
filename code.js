
//funcion muestra datos de contacto al clickear el logo mensaje
function clicker() {
    document.getElementById('idcontact').innerHTML = `<div>Leandro Palavecino</div><div>Telefono : 11-65788418</div><div>Mail: lean-1994@outlook.com</div>`
}


// funcion pinta bloques del section
function clicker2(item) {

    let vector = ["estudios","conocimientos","cursos","proyects"];

    for (i = 0 ; i < vector.length; i++){
        document.getElementById(vector[i]).style.backgroundColor = "transparent";
    }

    document.getElementById(item).style.backgroundColor = "rgb(208, 100, 100)";
}