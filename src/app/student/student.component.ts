import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  selectedValue: string = "";
  selectedItem: any;
  constructor(
    private route: Router,
    public dataService: DataService
  ) {
  }

  tableData = [
    {
      id: 1,
      fname: 'John',
      lname: 'Doe',
      pfname: 'Jane',
      plname: 'Doe',
      dob: '01/01/1990',
      mn: '123-456-7890',
      al1: '123 Main Street',
      al2: 'Apt 2B',
      city: 'New York',
      country: 'USA',
      zcode: '10001',
      email: 'johndoe@example.com',
      teacher: '2',
      course: '1543',
      fees: '500',
    },
    {
      id: 2,
      fname: 'Emma',
      lname: 'Smith',
      pfname: 'Sarah',
      plname: 'Jones',
      dob: '05/12/1990',
      mn: '123-456-7890',
      al1: '123 Main St',
      al2: 'Apt 2B',
      city: 'New York',
      country: 'USA',
      zcode: '10001',
      email: 'emma.smith@example.com',
      teacher: '4',
      course: '1202',
      fees: '500'
    },
    {
      id: 3,
      fname: 'Michael',
      lname: 'Johnson',
      pfname: 'Angela',
      plname: 'Johnson',
      dob: '08/15/1995',
      mn: '555-555-5555',
      al1: '456 Elm Street',
      al2: '',
      city: 'Chicago',
      country: 'USA',
      zcode: '60611',
      email: 'michael.johnson@example.com',
      teacher: '1',
      course: '3101',
      fees: '700'
    },
    {
      id: 4,
      fname: 'Samantha',
      lname: 'Davis',
      pfname: 'Jason',
      plname: 'Davis',
      dob: '02/28/1998',
      mn: '777-777-7777',
      al1: '789 Oak Avenue',
      al2: '',
      city: 'Los Angeles',
      country: 'USA',
      zcode: '90001',
      email: 'samantha.davis@example.com',
      teacher: '3',
      course: '2345',
      fees: '900'
    },
    {
      id: 5,
      fname: 'David',
      lname: 'Lee',
      pfname: 'Grace',
      plname: 'Lee',
      dob: '11/17/1992',
      mn: '888-888-8888',
      al1: '567 Pine Street',
      al2: 'Apt 3C',
      city: 'San Francisco',
      country: 'USA',
      zcode: '94102',
      email: 'david.lee@example.com',
      teacher: '2',
      course: '1543',
      fees: '500'
    },
    {
      id: 6,
      fname: 'Emily',
      lname: 'Wong',
      pfname: 'Lucas',
      plname: 'Wong',
      dob: '06/20/1994',
      mn: '999-999-9999',
      al1: '345 Maple Street',
      al2: '',
      city: 'Boston',
      country: 'USA',
      zcode: '02108',
      email: 'emily.wong@example.com',
      teacher: '4',
      course: '1202',
      fees: '500'
    },
    {
      id: 7,
      fname: 'Alex',
      lname: 'Kim',
      pfname: 'Jin',
      plname: 'Kim',
      dob: '04/03/1993',
      mn: '111-111-1111',
      al1: '678 Cedar Avenue',
      al2: 'Suite 5D',
      city: 'Seattle',
      country: 'USA',
      zcode: '98101',
      email: 'alex.kim@example.com',
      teacher: '1',
      course: '3101',
      fees: '700'
    }
  ]
  onSelectChange(event: any): void {
    this.selectedValue = event.target.value;
    if (this.selectedValue === "1") {
      this.route.navigateByUrl('/student');
    }
    else if (this.selectedValue === "2") {
      this.route.navigateByUrl('/teacher');
    }
    else if (this.selectedValue === "3") {
      this.route.navigateByUrl('/courses');
    }
  }

  isFormOpen = false;

  openForm() {
    this.isFormOpen = true;
  }

  onFormSubmitted() {
    this.isFormOpen = false;
  }

  deleteEntry(id: number) {
    const index = this.tableData.findIndex(entry => entry.id === id);
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }

  isEditFormOpen = false;

  editEntry(item: any) {
    this.isEditFormOpen = true;
    this.selectedItem = item;
  }
  
  updateEntry() {
    this.isEditFormOpen = false;
    // update the entry in the tableData array
  }
  
}
