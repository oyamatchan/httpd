import { Component, OnInit } from '@angular/core';
import { DbService} from '../services/db.service';
import { IPerson } from '../interfaces/iperson';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  baseURL = 'https://httpdoyamatchan.firebaseio.com';
  rootNode = 'people';
  dataCollection: IPerson[];
  fname: string;
  lname: string;
  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  addNameEntry(dataForm: NgForm) {
    const person = {
      firstName: dataForm.value.fname,
      lastName: dataForm.value.lname,
     
    }

    this.dbService.saveData(`${this.baseURL}/${this.rootNode}.json`, person)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      
  
    )
    
  }
clear():void{
  this.fname=null;
  this.lname=null;

}


}
