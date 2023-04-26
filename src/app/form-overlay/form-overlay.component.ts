import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.scss']
})
export class FormOverlayComponent {
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
  teacher:string = "";
  course:string = "";
  fees:string = "";

  @Output() submitted = new EventEmitter();

  constructor(private dataService: DataService) { }

  submitForm() {
    this.dataService.addEntry({ 
  fname:this.fname ,
  lname:this.lname,
  pfname:this.pfname ,
  plname:this.plname ,
  dob:this.dob ,
  mn:this.mn ,
  al1:this.al1 ,
  al2:this.al2 ,
  city:this.city ,
  country:this.country ,
  zcode:this.zcode ,
  email:this.email ,
  teacher:this.teacher ,
  course:this.course ,
  fees:this.fees , });
    this.submitted.emit();
  }
}
