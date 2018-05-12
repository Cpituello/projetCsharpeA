import {Department} from './department';

export class City {
    id: number;
    name: string = '';
    latitude: number;
    longitude: number;
    addressCount: number;
    department: Department;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
