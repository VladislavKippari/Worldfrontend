import { Component, OnInit } from '@angular/core';
import { City } from '../city.model';
import { CityService } from '../services/city.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
