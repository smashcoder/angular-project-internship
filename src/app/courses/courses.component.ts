import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  selectedValue: string = "";
  selectedItem: any;
  constructor(
    private route: Router,
    public dataService: DataService
  ) {
  }

  tableData = [
    { id: 1543,
      name: 'Flutter',
    },
    { id: 1003,
      name: 'Web Development',
    },
    { id: 1202,
      name: 'Cloud Computing',
    },
    { id: 1454,
      name: 'Data Science',
    },
    { id: 1685,
      name: 'DSA',
    },
    { id: 1789,
      name: 'OOP',
    },
    { id: 1930,
      name: 'MS-EXCEL',
    },
    { id: 1307,
      name: 'Tally',
    },
    { id: 1564,
      name: 'Graphic Designing',
    },
    { id: 1009,
      name: 'Video Editing',
    },
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
