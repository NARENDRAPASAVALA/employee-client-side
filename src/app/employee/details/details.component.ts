import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpService } from '../../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { validatDob } from 'src/app/validator';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  empdata;
  data = [];
  message: Boolean = false;
  count = 0;
  imageFiles :File = null;
   inputData = new FormData();
  flag = false;
   HobbiesArr : any= [
    {id: 1, name: 'PlayingCricket', value : false},
    {id: 2, name: 'Singing', value : false},
    {id: 3, name: 'Playingfootball', value : false},
    {id: 4, name: 'Reading', value : false},
    {id: 5, name: 'Music', value : false},
  ];
  hb: any;
  constructor(private router: Router, private fb: FormBuilder, private Service: HttpService , private active: ActivatedRoute) { }


  StateList: Array<any> = [
    { name: 'Andhra Pradesh', cities: ['Anantapur', 'Kurnool', 'kadapa', 'Amravati'] },
    { name: 'Karnataka', cities: ['Bangalore', 'Udipi', 'Chikbalapur'] }
  ];
  cities: Array<any>;
 
  ngOnInit() {
    
    this.operationUp();
  }

  operationUp() {
    let id = this.active.snapshot.paramMap.get('id');
    this.Service.getData(id)
    .subscribe(response => {
      this.empdata = response.EmployeeDetails;
      console.log(this.empdata, "Narendra checking the Data");

    });
  }
    toList(){
    this.router.navigate(['../../display'], {relativeTo : this.active});
    }
    toAdd(){
    this.router.navigate(['../../create'], {relativeTo : this.active});
    }

}
