var comentarios = document.getElementById("comentarios");
var btnComentar = document.getElementById("btnComentar");
var usuario = document.getElementById("usuario");
var comentario = document.getElementById("comentario");


usuario.addEventListener("mousemove", function () {
    var nombreUsuario = document.getElementById("usuario").value;
    if (nombreUsuario.length < 3) {
        document.getElementById("verificadorLargou").innerHTML = "El largo del nombre del usuario debe ser mayor a 3 caracteres";
        btnComentar.hidden = "hidden";
    } else {
        document.getElementById("verificadorLargou").innerHTML = "";
        btnComentar.hidden = "";
    }
})
usuario.addEventListener("mouseout", function () {
    var nombreUsuario = document.getElementById("usuario").value;
    if (nombreUsuario.length < 3) {
        document.getElementById("verificadorLargou").innerHTML = "El largo del nombre del usuario debe ser mayor a 3 caracteres";
        btnComentar.hidden = "hidden";
    } else {
        document.getElementById("verificadorLargou").innerHTML = "";
        btnComentar.hidden = "";
    }
})
comentario.addEventListener("mousemove", function () {
    var Comentariolargo = document.getElementById("comentario").value.length;
    if (Comentariolargo < 1) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede estar vacio";
        btnComentar.hidden = "hidden";
    } else if (Comentariolargo >= 200) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede exceder los 200 caracteres";
        btnComentar.hidden = "hidden";
    } else {
        document.getElementById("verificadorLargoc").innerHTML = "";
        btnComentar.hidden = "";
    }
})
comentario.addEventListener("mouseout", function () {
    var Comentariolargo = document.getElementById("comentario").value.length;
    if (Comentariolargo < 1) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede estar vacio";
        btnComentar.hidden = "hidden";
    } else if (Comentariolargo >= 200) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede exceder los 200 caracteres";
        btnComentar.hidden = "hidden";
    } else {
        document.getElementById("verificadorLargoc").innerHTML = "";
        btnComentar.hidden = "";
    }
})
comentario.addEventListener("keydown", function () {
    var Comentariolargo = document.getElementById("comentario").value.length;
    if (Comentariolargo < 1) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede estar vacio";
        btnComentar.hidden = "hidden";
    } else if (Comentariolargo >= 200) {
        document.getElementById("verificadorLargoc").innerHTML = "El Comentario no puede exceder los 200 caracteres";
        btnComentar.hidden = "hidden";
    } else {
        document.getElementById("verificadorLargoc").innerHTML = "";
        btnComentar.hidden = "";
    }
})
btnComentar.addEventListener("click", function () {

    console.log(document.getElementById("usuario").value.length);
    var nombreUsuario = document.getElementById("usuario").value;

    if (comentarios.getElementsByTagName("algo") < 4) {
        agregarComentarios();
    } else {
        eliminarComentario();
        agregarComentarios();
    }
    usuario.value='';
    comentario.value='';
});

function agregarComentarios() {
    var listaComentarios = comentarios.getElementsByClassName("col-md-6");
    console.log(listaComentarios);
    var newComent = document.createElement("algo");
    newComent.innerHTML = `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static" style="background-color: aquamarine;">
                    <h3 class="mb-0 text-primary">`+ document.getElementById("usuario").value + `</h3>
                    <div class="mb-1 text-muted">`+ new Date().toLocaleString() + `</div>
                    <p class="card-text mb-auto">`+ document.getElementById("comentario").value + `.</p>
                </div>
            </div>` ;
    comentarios.appendChild(newComent);


}

function eliminarComentario(params) {
    var coments = document.getElementById("comentarios");
    var comentsLargo = coments.getElementsByClassName("col-md-6").length;
    if (comentsLargo >= 4) {
        coments.getElementsByTagName("algo")[0].remove();
    }

}