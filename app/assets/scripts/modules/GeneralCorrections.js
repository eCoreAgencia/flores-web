class GeneralCorrections {
    constructor() {
        this.logoBusca = $('.search-box__icon');
        this.inputBusca = $('.busca');
        this.btnBuscaVtex = $('.btn-buscar');
        this.appendPlease();
        this.events();
    }
    events() {
        this.logoBusca.click(this.simulateClick.bind(this));
    }

    appendPlease() {
        this.logoBusca.append(this.inputBusca);
    }

    simulateClick() {
        this.btnBuscaVtex.trigger("click");
        alert('capturado');
    }

}

export default GeneralCorrections;