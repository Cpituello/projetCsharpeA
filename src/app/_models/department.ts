export class Department {
    id: number;
    name: string = '';
    number: string = '';
    cityCount: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
