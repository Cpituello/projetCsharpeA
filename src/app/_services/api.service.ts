import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { InterestPoint } from '../_models/interestPoint';
import { Category } from '../_models/category';
import { City } from '../_models/city';
import { Department } from '../_models/department';

@Injectable()
export class ApiService {
  url : string = environment.CSHARP_API_URL+'/api';
  constructor(private http: HttpClient) { }

  public getAllInterestPoints(): Observable<InterestPoint[]> {
    let result: Observable<InterestPoint[]> = this.http.get<InterestPoint[]>(this.url + '/InterestPoint/');
    result.catch(this.handleError);
    return result;
  }

  public getAllCategories(): Observable<Category[]> {
    let result: Observable<Category[]> = this.http.get<Category[]>(this.url + '/Category/');
    result.catch(this.handleError);
    return result;
  }

  public getAllCities(): Observable<City[]> {
    let result: Observable<City[]> = this.http.get<City[]>(this.url + '/City/');
    result.catch(this.handleError);
    return result;
  }

  public getAllDepartments(): Observable<Department[]> {
    let result: Observable<Department[]> = this.http.get<Department[]>(this.url + '/Department/');
    result.catch(this.handleError);
    return result;
  }

  public getInterestPoints(city : string, department : string, category: string): Observable<InterestPoint[]>{
    var complete_url : string = this.url + '/InterestPoint/' + "City/" + city + "/Department/" + department + "/Category/" + category;
    let result: Observable<InterestPoint[]> = this.http.get<InterestPoint[]>(complete_url);
    result.catch(this.handleError);
    return result;
  }

  public getCitiesByDepartment(department : string): Observable<City[]>{
    var complete_url : string = this.url + '/City' + "/Department/" + department;
    let result: Observable<City[]> = this.http.get<City[]>(complete_url);
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
