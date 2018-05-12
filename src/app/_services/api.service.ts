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

  public getAllInterestPoints(): Observable<InterestPoint[]> {
    let result: Observable<InterestPoint[]> = this.http.get<InterestPoint[]>(this.url);
    result.catch(this.handleError);
    return result;
  }

  public getInterestPoints(city : string, department : string, category: string): Observable<InterestPoint[]>{
    var complete_url : string = this.url + "City/" + city + "/Department/" + department + "/Category/" + category;
    let result: Observable<InterestPoint[]> = this.http.get<InterestPoint[]>(complete_url);
    result.catch(this.handleError);
    return result;
  }

  private handleError(error: Response | any): Observable<any> {
    let errMsg: string;
    console.debug('My handleError');
    if (error instanceof Response) {
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
   }

}
