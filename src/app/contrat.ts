export class Contrat {
    name: string = '';
    country_code: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
