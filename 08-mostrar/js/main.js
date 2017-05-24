window.onload = function() {

    let aParrafos = document.querySelectorAll(".dinamico")

    let oBoton = document.querySelector("#btn1")
    oBoton.innerHTML = "Ver mas"
    oBoton.addEventListener("click", camviarVista)

    function camviarVista() {
        for (var i = 0; i < aParrafos.length; i++) {
            aParrafos[i].classList.toggle("oculto")
        }
        oBoton.innerHTML = oBoton.innerHTML == "Ver mas" ? "Ver menos" : "Ver mas";

        //if (oBoton.innerHTML=="Ver mas") {
        //    oBoton.innerHTML = "Ver menos"
        //} else {
        //    oBoton.innerHTML = "Ver mas";
        //}

    }

}