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

  constructor(private apiService: ApiService) {}

  public getInterestPoints(): void{
    this.apiService.getAllInterestPoint().subscribe(
      (interestPoints) => {
        this.interestPoints = interestPoints;
      }
    );
  }


  public ngOnInit(): void {
    this.getInterestPoints();
  }


  chooseContrat() {

  }



}
