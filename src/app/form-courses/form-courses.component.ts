import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.scss']
})
export class FormCoursesComponent {
  id: string = "";
  name: string = "";

  @Output() submitted = new EventEmitter();

  constructor(private dataService: DataService) { }

  submitForm() {
    this.dataService.addEntry({
      id: this.id,
      name: this.name,
    });
    this.submitted.emit();
  }
}
