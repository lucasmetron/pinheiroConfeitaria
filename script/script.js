$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    })
});

function limpaCampos() {

    setTimeout(function () {
        document.querySelector("#DESCRICAO").value = "";
        document.querySelector("#FNAME").value = "";
        document.querySelector("#EMAIL").value = "";
        document.querySelector("#PHONE").value = "";
    }, 500)

}