
function capturarDatos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    let comentarios = document.getElementById('inputComentarios').value;
    
    let objeto ={
        nom: nombre,
        apel: apellido,
        tel: telefono,
        dir: direccion,
        com: comentarios
    }

    localStorage.setItem('Reto',JSON.stringify(objeto));
}