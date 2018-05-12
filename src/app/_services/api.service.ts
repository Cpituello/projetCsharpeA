import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { InterestPoint } from '../_models/interestPoint';


@Injectable()
export class ApiService {
  url : string = environment.CSHARP_API_URL+'/api/InterestPoint/';
  constructor(private http: HttpClient) { }

  /*
  public getAllStations(contrat: Contrat): Observable<Station[]> {
    let result: Observable<Station[]> = this.http.get<Station[]>(API_URL + '/vls/v1/stations?contract='+ contrat.name + '&apiKey=' + API_KEY);
    result.catch(this.handleError);
    return result;
  }*/

  public getAllInterestPoint(): Observable<InterestPoint[]> {
    let result: Observable<InterestPoint[]> = this.http.get<InterestPoint[]>(this.url);
    result.catch(this.handleError);
    return result;
  }

  /*
  public getAllContrats(): Observable<Contrat[]> {
    let result: Observable<Contrat[]> = this.http.get<Contrat[]>(API_URL + '/vls/v1/contracts?apiKey=' + API_KEY);
    result.catch(this.handleError);
    return result;
  }*/

  private handleError(error: Response | any): Observable<any> {
    let errMsg: string;
    console.debug('My handleError');
    if (error instanceof Response) {
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
   }

}
