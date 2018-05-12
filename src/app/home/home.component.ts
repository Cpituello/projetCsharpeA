import { Component, OnInit } from '@angular/core';

import { MouseEvent } from '@agm/core';

import { DatePipe } from '@angular/common';
import { google } from '@agm/core/services/google-maps-types';

import { ApiService } from '../_services/api.service';
import { InterestPoint } from '../_models/interestPoint';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interestPoints: InterestPoint[] = [];

  latitude: number;
  longitude: number;
  iconurl: string = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
  iconurl2: string = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  filter: any = {
    city: "all",
    department: "all",
    category: "all"
  }

  constructor(private apiService: ApiService) {}

  public getAllInterestPoints(): void{
    this.apiService.getAllInterestPoints().subscribe(
      (interestPoints) => {
        this.interestPoints = interestPoints;
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


  public ngOnInit(): void {
    this.getAllInterestPoints();
  }

  public onChooseLocation(event: MouseEvent): void {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    console.log(this.latitude);
    console.log(this.longitude);
  }



}
