var comentarios = document.getElementById("comentarios");
var btnComentar = document.getElementById("btnComentar");
var usuario = document.getElementById("usuario");
var comentario = document.getElementById("comentario");



btnComentar.addEventListener("click", function () {
    console.log(comentarios.childElementCount);
    if (comentarios.childElementCount < 4) {

    } else {

    }
});

function agregarComentarios(params) {
    comentarios.get
}

function eliminarComentario(params) {

}
const arrayAlerts = ["success", "warning"];
const alerts = document.getElementById("alerts");
drawAlerts();

function drawAlerts() {
    alerts.innerHTML = arrayAlerts.map((alert, index) =>
        `<div class="alert alert-${alert}" role="alert" onclick="${deleteAlert(index)}">
                A simple ${alert} alrt-check it out! ${index}
                </div>`).join('');
}
const addAlert = (type) => {
    arrayAlerts.push(type);
    drawAlerts();
}

function deleteAlert(index) {
    arrayAlerts.splice(index, 1);
    drawAlerts();
}