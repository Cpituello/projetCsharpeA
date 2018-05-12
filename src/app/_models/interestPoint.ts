import {Category} from './category';
import {Address} from './address';

export class InterestPoint {
    id: number;
    description: string = '';
    category: Category;
    address: Address;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}


