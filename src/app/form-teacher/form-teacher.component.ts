import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent {
  fname:string = "";
  lname:string ="";
  pfname:string = "";
  plname:string = "";
  dob:string = "";
  mn:string = "";
  al1:string = "";
  al2:string = "";
  city:string = "";
  country:string = "";
  zcode:string = "";
  email:string = "";

  @Output() submitted = new EventEmitter();

  constructor(private dataService: DataService) { }

  submitForm() {
    this.dataService.addEntry({ 
  fname:this.fname ,
  lname:this.lname,
  dob:this.dob ,
  mn:this.mn ,
  al1:this.al1 ,
  al2:this.al2 ,
  city:this.city ,
  country:this.country ,
  zcode:this.zcode ,
  email:this.email ,
});
    this.submitted.emit();
  }
}
