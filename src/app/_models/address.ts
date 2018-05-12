import {City} from './city';

export class Address {
    id: number;
    name: string = '';
    city: City;
    postalCode: string = '';
    latitude: number;
    longitude: number;
    addressCount: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}