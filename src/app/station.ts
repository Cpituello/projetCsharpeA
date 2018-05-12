export class Station {
    number: number;
    contract_name: string = '';
    address: string = '';
    name: string = '';
    status: string = '';
    bike_stands: number;
    available_bikes: number;
    available_bike_stands: number;
    last_update: number;
    position: any;
    distance: number;
    banking: boolean;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}


