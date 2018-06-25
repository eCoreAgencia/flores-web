import $ from 'jquery';

class GeneralCorrections {
    constructor() {
        this.logoBusca = $('.search-box__icon');
        this.btnBusca = $('.busca');
        this.appendPlease();
    }

    appendPlease() {
        this.logoBusca.append(this.btnBusca);
    }

}

export default GeneralCorrections;