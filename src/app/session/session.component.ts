import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {
  selectedValue: string = "";
  selectedItem: any;
  selectedItem2:any;

  constructor(
    private route: Router,
  ){}

  tableData = [
    { id: 1,
      fname: 'Tarun',
      lname: 'Sharma',
      sl: 10,
      tsc:2
    },
    { id: 2,
      fname: 'Akshay',
      lname: 'Kumar',
      sl: 14,
      tsc:12,
    },
    { id: 3,
      fname: 'Tarun',
      lname: 'Kumar',
      sl: 6,
      tsc:11,
    },
    { id: 4,
      fname: 'Akshay',
      lname: 'Sharma',
      sl: 21,
      tsc:9,
    },
    { id: 5,
      fname: 'Priya',
      lname: 'Singh',
      sl: 24,
      tsc:8,
    },
    { id: 6,
      fname: 'Rohit',
      lname: 'Patil',
      sl: 12,
      tsc:7,
    },
    { id: 7,
      fname: 'Amit',
      lname: 'Shah',
      sl: 15,
      tsc:4,
    },
    { id: 8,
      fname: 'Riya',
      lname: 'Desai',
      sl: 9,
      tsc:5,
    },
    { id: 9,
      fname: 'Sachin',
      lname: 'Kamble',
      sl: 11,
      tsc:10,
    }
  ]
  onSelectChange(event:any): void {
    this.selectedValue = event.target.value;
    if(this.selectedValue === "1"){
      this.route.navigateByUrl('/student');
    }
    else if(this.selectedValue === "2"){
      this.route.navigateByUrl('/teacher');
    }
    else if(this.selectedValue === "3"){
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

  isAddFormOpen = false;

  add(sl: number, tsc: number) {
    this.isAddFormOpen = true;
    this.selectedItem = this.tableData.find(entry => entry.sl === sl);
    this.selectedItem2 = this.tableData.find(entry => entry.tsc === tsc);
  }


  isRemoveFormOpen = false;

  remove(sl: number) {
    this.isRemoveFormOpen = true;
    this.selectedItem = this.tableData.find(entry => entry.sl === sl);
  }



  addCredit(add: NgForm) {
    // Get the previous total credits value
  const previousTotalCredits = Number(this.selectedItem.sl);

  // Get the new credits value from the input field
  const newCredits = Number(add.value.addTC);

  // Calculate the new total credits value
  const newTotalCredits = previousTotalCredits + newCredits;

  // Update the total credits value of the selected item
  this.selectedItem.sl = newTotalCredits;

  // Get the previous total sessions value
  const previousTotalSessions = Number(this.selectedItem.tsc);

  // Get the new sessions value from the input field
  const newSessions = Number(add.value.addTC);

  // Calculate the new total sessions value
  const newTotalSessions = previousTotalSessions + newSessions;

  // Update the total sessions value of the selected item
  this.selectedItem.tsc = newTotalSessions;

    // Update the tableData array with the updated tc value
    this.tableData = this.tableData.map(entry => {
      if (entry.id === this.selectedItem.id) {
        return { ...entry, sl: parseInt(newTotalCredits.toString()), tsc: parseInt(newTotalSessions.toString()) };
      } else {
        return entry;
      }
    });

    add.reset();

    // Close the edit form
    this.isAddFormOpen = false;
}



  removeCredit(remove: NgForm) {
    const previousTotalCredits = Number(this.selectedItem.sl);

  // Get the new credits value from the input field
  const newCredits = Number(remove.value.removeTC);

  // Calculate the new total credits value
  const newTotalCredits = previousTotalCredits - newCredits;

  // Update the total credits value of the selected item
  this.selectedItem.sl = newTotalCredits;

  // Get the previous total sessions value
  const previousTotalSessions = Number(this.selectedItem.tsc);

  // Get the new sessions value from the input field
  const newSessions = Number(remove.value.removeTC);

  // Calculate the new total sessions value
  const newTotalSessions = previousTotalSessions - newSessions;

  // Update the total sessions value of the selected item
  this.selectedItem.tsc = newTotalSessions;

    // Update the tableData array with the updated tc value
    this.tableData = this.tableData.map(entry => {
      if (entry.id === this.selectedItem.id) {
        return { ...entry, sl: parseInt(newTotalCredits.toString()), tsc: parseInt(newTotalSessions.toString()) };
      } else {
        return entry;
      }
    });

    remove.reset();

    // Close the edit form
    this.isRemoveFormOpen = false;
  }
}
