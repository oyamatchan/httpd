import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';
import { IPerson } from '../interfaces/iperson';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {
  @Output() modifyClicked = new EventEmitter<any>();
constructor(private dbservice: DbService) { }
  baseURL = 'https://httpdoyamatchan.firebaseio.com';
  remove:boolean = true;
  rootNode = 'people';
  peopleCollection: Array<IPerson> = [];
  ngOnInit() {
    this.loadData();
    this.modifyClicked.emit(true);
  }

  loadData() { 
     this.dbservice.getAllData(`${this.baseURL}/${this.rootNode}.json`)
     .subscribe(
       (response) => {
         this.peopleCollection = response;
        } ,
       (error) => console.log(error)
     );
  }

  
}
