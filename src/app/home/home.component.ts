import { Component, OnInit } from '@angular/core';

import { MouseEvent } from '@agm/core';

import { DatePipe } from '@angular/common';
import { google } from '@agm/core/services/google-maps-types';

import { ApiService } from '../_services/api.service';
import { InterestPoint } from '../_models/interestPoint';
import { Category } from '../_models/category';
import { Department } from '../_models/department';
import { City } from '../_models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interestPoints: InterestPoint[] = [];
  categories: Category[] = [];
  cities: City[] = [];
  departments: Department[] = [];

  latitude: number;
  longitude: number;
  iconurl: string = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
  iconurl2: string = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  filter: any = {
    city: "all",
    department: "all",
    category: "all"
  }
  activeFilter : boolean = false;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.getAllCategories();
    this.getAllCities();
    this.getAllDepartments();
    this.getInterestPoints();
  }

  public getAllInterestPoints(): void{
    this.apiService.getAllInterestPoints().subscribe(
      (interestPoints) => {
        this.interestPoints = interestPoints;
      }
    );
  }

  public getAllCategories(): void{
    this.apiService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories;
      }
    );
  }

  public getAllCities(): void{
    this.apiService.getAllCities().subscribe(
      (cities) => {
        this.cities = cities;
      }
    );
  }

  public getAllDepartments(): void{
    this.apiService.getAllDepartments().subscribe(
      (departments) => {
        this.departments = departments;
      }
    );
  }


  public getInterestPoints(): void{
    this.apiService.getInterestPoints(this.filter.city, this.filter.department, this.filter.category).subscribe(
      (interestPoints) => {
        this.interestPoints = interestPoints;
      }
    );
  }

  public changeCategory(category:string): void{
    this.filter.category = category;
    this.activeFilter = true;
    console.log(this.filter.category);
    this.getInterestPoints();
  }

  public changeCity(city:string): void{
    this.filter.city = city;
    this.activeFilter = true;
    this.getInterestPoints();
  }

  public changeDepartment(department:string): void{
    this.filter.department = department;
    this.activeFilter = true;
    this.getInterestPoints();
  }




  public onChooseLocation(event: MouseEvent): void {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    console.log(this.latitude);
    console.log(this.longitude);
  }



}
