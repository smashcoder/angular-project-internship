import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {
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
      fname: 'John Doe',
      cid: '1543',
      tc: 5

    },
    {
      id: 2,
      fname: 'Emma Smith',
      cid: '1202',
      tc: 5
    },
    {
      id: 3,
      fname: 'Michael Johnson',
      cid: '3101',
      tc: 7
    },
    {
      id: 4,
      fname: 'Samantha Davis',
      cid: '2345',
      tc: 9
    },
    {
      id: 5,
      fname: 'David Lee',
      cid: '1543',
      tc: 5
    },
    {
      id: 6,
      fname: 'Emily Wong',
      cid: '1202',
      tc: 5
    },
    {
      id: 7,
      fname: 'Alex Kim',
      cid: '3101',
      tc: 7
    }
  ]
  /*updateTableData() {
    if (this.selectedValue === '1') {
      this.tableData = [
               
      ];
    } else if (this.selectedValue === '2') {
      this.tableData = [
      ];
    } else {
      this.tableData = [];
    }
  }*/

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

  add(tc: number) {
    this.isAddFormOpen = true;
    this.selectedItem = this.tableData.find(entry => entry.tc === tc);
  }


  isRemoveFormOpen = false;

  remove(tc: number) {
    this.isRemoveFormOpen = true;
    this.selectedItem = this.tableData.find(entry => entry.tc === tc);
  }



  addCredit(add: NgForm) {
    // Get the previous total credits value
    const previousTotalCredits = Number(this.selectedItem.tc);

    // Get the new credits value from the input field
    const newCredits = Number(add.value.addTC);

    // Add the new credits to the previous total credits
    const updatedTotalCredits = previousTotalCredits + newCredits;

    // Update the selected item's total credits value with the updated value
    this.selectedItem.tc = updatedTotalCredits.toString();

    // Update the tableData array with the updated tc value
    this.tableData = this.tableData.map(entry => {
      if (entry.id === this.selectedItem.id) {
        return { ...entry, tc: parseInt(updatedTotalCredits.toString()) };
      } else {
        return entry;
      }
    });

    add.reset();

    // Close the edit form
    this.isAddFormOpen = false;
  }


  removeCredit(remove: NgForm) {
    // Get the previous total credits value
    const previousTotalCredits = Number(this.selectedItem.tc);

    // Get the new credits value from the input field
    const newCredits = Number(remove.value.removeTC);

    // Add the new credits to the previous total credits
    const updatedTotalCredits = previousTotalCredits - newCredits;

    // Update the selected item's total credits value with the updated value
    this.selectedItem.tc = updatedTotalCredits.toString();

    // Update the tableData array with the updated tc value
    this.tableData = this.tableData.map(entry => {
      if (entry.id === this.selectedItem.id) {
        return { ...entry, tc: parseInt(updatedTotalCredits.toString()) };
      } else {
        return entry;
      }
    });

    remove.reset();

    // Close the edit form
    this.isRemoveFormOpen = false;
  }

}
