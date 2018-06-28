class GeneralCorrections {
    constructor() {
        this.logoBusca = $('.search-box__icon');
        this.btnBuscaVtex = $('.btn-buscar');
        this.events();
    }
    events() {
        this.logoBusca.click(this.simulateClick.bind(this));

    }

    simulateClick() {
        this.btnBuscaVtex.trigger("click");
    }
}
export default GeneralCorrections;