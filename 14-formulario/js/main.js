class Formulario {
    constructor() {
        this.oMail = document.querySelector("#mail"),
            this.oPass = document.querySelector("#pass"),
            this.oRpass = document.querySelector("#rpass"),
            this.oNombre = document.querySelector("#nombre"),
            this.oPrimerApellido = document.querySelector("#primer_apellido"),
            this.oSegundoApellido = document.querySelector("#segundo_apellido"),
            this.oResultado = document.querySelector("#resultado"),
            this.oOpciones = document.querySelector("#curso2"),
            this.oCurso = document.querySelectorAll("[name = curso]"),
            this.oAfi1 = document.querySelector("#Afi1"),
            this.oAfi2 = document.querySelector("#Afi2"),
            this.oAfi3 = document.querySelector("#Afi3"),
            this.oAfi4 = document.querySelector("#Afi4"),
            this.oAfi5 = document.querySelector("#Afi5"),
            this.oAfi6 = document.querySelector("#Afi6"),
            this.oAfi7 = document.querySelector("#Afi7"),
            this.oAfi8 = document.querySelector("#Afi8"),
            this.oAfi9 = document.querySelector("#Afi9"),
            this.oFechaFinal = document.querySelector("#fecha_final"),
            this.oAlerta = document.querySelector("#alerta"),
            this.aSalida = []
    }

    getTextos() {
        this.aSalida = [{
            etiqueta: "<span class='etiquetas'>Email: </span>",
            valor: this.oMail.value
        }, {
            etiqueta: "<span class='etiquetas'>Contraseña: </span>",
            valor: this.oPass.value
        }, {
            etiqueta: "<span class='etiquetas'>Nombre: </span>",
            valor: this.oNombre.value
        }, {
            etiqueta: "<span class='etiquetas'>Primer Apellido: </span>",
            valor: this.oPrimerApellido.value
        }, {
            etiqueta: "<span class='etiquetas'>Segundo Apellido: </span>",
            valor: this.oSegundoApellido.value
        }, ]
    };
    getRRadiobuttons() {
        for (let i = 0; i < this.oCurso.length; i++) {
            if (this.oCurso[i].checked) {
                this.aSalida[this.aSalida.length] = {
                    etiqueta: "<span class='etiquetas'>Tu curso Elegido es: </span>",
                    valor: this.oCurso[i].value.toUpperCase()
                }
            };
        };
    };
    getSelectOptions() {
        let oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
        var textoSeleccionado = oOpcion.text;
        var valorSeleccionado = oOpcion.value;
        this.aSalida[this.aSalida.length] = {
            etiqueta: "<span class='etiquetas'>Asignatura Eligida: </span>",
            valor: textoSeleccionado
        }
    };
    getCheckbox() {
        if (this.oAfi1.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "<span class='etiquetas'>Aficiones: </span>",
                valor: this.oAfi1.value
            }
        }
        if (this.oAfi2.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi2.value
            }
        }
        if (this.oAfi3.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi3.value
            }
        }
        if (this.oAfi4.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi4.value
            }
        }
        if (this.oAfi5.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi5.value
            }
        }
        if (this.oAfi6.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi6.value
            }
        }
        if (this.oAfi7.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi7.value
            }
        }
        if (this.oAfi8.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi8.value
            }
        }
        if (this.oAfi9.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "",
                valor: this.oAfi9.value
            }
        }
    };
    fecha() {
        var d = new Date();
        this.oDia = (d.getDate());
        this.oMes = (d.getMonth() + 1);
        this.oAno = (d.getFullYear());
        this.oFechaFinal.innerHTML = "<span class='etiquetas'>Fecha de inscripción: </span>" + this.oDia + "/" + this.oMes + "/" + this.oAno;
    }

    recogeDatos() {
        if (this.oMail.value == "") {
            this.oAlerta.innerHTML = "EL CAMPO CORREO TIENE QUE SER RELLENADO"
        } else if (this.oNombre.value == "") {
            this.oAlerta.innerHTML = "EL CAMPO NOMBRE TIENE QUE SER RELLENADO"
        } else if (this.oPrimerApellido.value == "") {
            this.oAlerta.innerHTML = "LOS DOS CAMPOS DE APELLIDO TIENE QUE SER RELLENADO"
        } else if (this.oSegundoApellido.value == "") {
            this.oAlerta.innerHTML = "LOS DOS CAMPOS DE APELLIDO TIENE QUE SER RELLENADO"
        } else if (this.oPass.value == "") {
            this.oAlerta.innerHTML = "EL CAMPO CONTRASEÑA ESTA VACIO TIENE QUE SER RELLENADO"
        } else if (this.oNombre.oRpass == "") {
            this.oAlerta.innerHTML = "EL CAMPO CONTRASEÑA ESTA VACIO TIENE QUE SER RELLENADO"
        } else if (this.oPass.value != this.oRpass.value) {
            this.oAlerta.innerHTML = "LAS CONTRASEÑAS NO COINCIDEN"
        } else {
            this.fecha();
            this.getTextos();
            this.getRRadiobuttons();
            this.getSelectOptions();
            this.getCheckbox();
            this.escribeDatos();
        }
    }

    escribeDatos() {
        document.getElementById("form").className = "oculto";
        document.getElementById("resultado").className = "bloque";
        for (var i = 0; i < this.aSalida.length; i++) {
            this.oResultado.innerHTML += `<strong> ${this.aSalida[i].etiqueta}  </strong>
					${this.aSalida[i].valor}</br>
			`
        };
    }
}


document.addEventListener("DOMContentLoaded", function() {
    oFormulario = new Formulario
    document.getElementById("submit").onclick = oFormulario.recogeDatos.bind(oFormulario)
}, false);