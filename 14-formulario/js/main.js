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
            this.oCurso = document.querySelectorAll("[name = curso]")
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
            this.aSalida = []
    }

    getTextos() {
        this.aSalida = [{
            etiqueta: "Email:",
            valor: this.oMail.value
        }, {
            etiqueta: "Contraseña:",
            valor: this.oPass.value
        }, {
            etiqueta: "Nombre:",
            valor: this.oNombre.value
        }, {
            etiqueta: "Primer Apellido:",
            valor: this.oPrimerApellido.value
        }, {
            etiqueta: "Segundo Apellido:",
            valor: this.oSegundoApellido.value
        }, ]
    };
    getRRadiobuttons() {
        for (let i = 0; i < this.oCurso.length; i++) {
            if (this.oCurso[i].checked) {
                this.aSalida[this.aSalida.length] = {
                    etiqueta: "Tu curso Elegido es:",
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
            etiqueta: "Asignatura Eligida:",
            valor: textoSeleccionado
        }
    };
    getCheckbox() {
        if (this.oAfi1.checked) {
            this.aSalida[this.aSalida.length] = {
                etiqueta: "Aficiones:",
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
        this.oFechaFinal.innerHTML = this.oDia + "/" + this.oMes + "/" + this.oAno;
    }

    recogeDatos() {
        this.fecha();
        this.getTextos();
        this.getRRadiobuttons();
        this.getSelectOptions();
        this.getCheckbox();
        this.escribeDatos();
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