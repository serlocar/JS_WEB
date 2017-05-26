class Formulario {
    constructor() {
        this.aCurso = document.querySelectorAll("[name = curso]")
        this.aSalida = []
    }
    getRRadiobuttons() {
        for (let i = 0; i < this.aCurso.length; i++) {
            if (this.aCurso[i].checked) {
                this.aSalida[this.aSalida.length]
            };
        };
    };

}