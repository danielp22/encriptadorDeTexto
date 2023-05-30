var mensajeA = "Ningún mensaje fue encontrado";
var mensajeB = "Ingresa el texto que desees encriptar o desencriptar";

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mensajeA").textContent = mensajeA;
    document.getElementById("mensajeB").textContent = mensajeB;
});

function encriptarTexto() {
    var textoEntrada = document.getElementById("texto-entrada").value;
    var textoEncriptado = "";

    var matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (var i = 0; i < textoEntrada.length; i++) {
        var caracter = textoEntrada[i].toLowerCase();
        var caracterEncriptado = caracter;

        for (var j = 0; j < matrizCodigo.length; j++) {
            if (caracter === matrizCodigo[j][0]) {
                caracterEncriptado = matrizCodigo[j][1];
                break;
            }
        }

        textoEncriptado += caracterEncriptado;
    }

    document.getElementById("texto-encriptado").value = textoEncriptado;
    document.getElementById("texto-entrada").value = "";
    document.getElementById("texto-entrada").setAttribute("placeholder", "Ingrese el texto aquí");
    actualizarVisibilidadBotonCopiar();
    actualizarVisibilidadImagen();

}

function desencriptarTexto() {
    var textoEncriptado = document.getElementById("texto-entrada").value;
    var textoDesencriptado = "";

    textoDesencriptado = textoEncriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    document.getElementById("texto-encriptado").value = textoDesencriptado;
    document.getElementById("texto-entrada").value = "";
    document.getElementById("texto-entrada").setAttribute("placeholder", "Ingrese el texto aquí");
    actualizarVisibilidadBotonCopiar();
    actualizarVisibilidadImagen();
}

function copiarMensaje() {
    var mensajeEncriptado = document.getElementById("texto-encriptado");
    mensajeEncriptado.select();
    mensajeEncriptado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function actualizarVisibilidadBotonCopiar() {
    var textoEncriptado = document.getElementById("texto-encriptado").value;
    var botonCopiar = document.getElementById("copiar");
    var mensajeA = document.getElementById("mensajeA");
    var mensajeB = document.getElementById("mensajeB");

    if (textoEncriptado.length > 0) {
        botonCopiar.style.display = "block";
        mensajeA.style.display = "none";
        mensajeB.style.display = "none";
    } else {
        botonCopiar.style.display = "none";
        mensajeA.style.display = "block";
        mensajeB.style.display = "block";
    }
}

function actualizarVisibilidadImagen() {
    var textoEncriptado = document.getElementById("texto-encriptado").value;
    var imagenMuñeco = document.getElementById("imagen-muneco");

    if (textoEncriptado.length > 0) {
        imagenMuñeco.style.display = "none";
    } else {
        imagenMuñeco.style.display = "block";
    }
}
