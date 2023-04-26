import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  selectedValue: string = "";
  selectedItem: any;
  constructor(
    private route: Router,
    public dataService: DataService
  ) {
  }
  tableData = [
    { id: 1,
      fname: 'Tarun',
      lname: 'Sharma',
      dob: '2000-02-03',
      mn: '6475839021',
      al1: 'ABC Chowk',
      al2: '',
      city: 'Pune',
      country: 'India',
      zcode: '110489',
      email: 'tsharma@gmail.com',
    },
    { id: 2,
      fname: 'Akshay',
      lname: 'Kumar',
      dob: '1989-03-02',
      mn: '1765432890',
      al1: 'DEF Chowk',
      al2: '',
      city: 'Delhi',
      country: 'India',
      zcode: '309889',
      email: 'akumar@gmail.com',
    },
    { id: 3,
      fname: 'Tarun',
      lname: 'Kumar',
      dob: '1990-05-05',
      mn: '1276352890',
      al1: 'ERT Chowk',
      al2: '',
      city: 'Chandni Circle',
      country: 'India',
      zcode: '4000123',
      email: 'tkumar@gmail.com',
    },
    { id: 4,
      fname: 'Akshay',
      lname: 'Sharma',
      dob: '1997-03-02',
      mn: '8734562190',
      al1: 'IGH Chowk',
      al2: '',
      city: 'Kolaphur',
      country: 'India',
      zcode: '234987',
      email: 'asharma@gmail.com',
    },
    { id: 5,
      fname: 'Priya',
      lname: 'Singh',
      dob: '1995-08-12',
      mn: '9786754321',
      al1: 'XYZ Street',
      al2: '',
      city: 'Mumbai',
      country: 'India',
      zcode: '400065',
      email: 'priyasingh@gmail.com',
    },
    { id: 6,
      fname: 'Rohit',
      lname: 'Patil',
      dob: '1988-07-25',
      mn: '9456781234',
      al1: 'MNO Road',
      al2: '',
      city: 'Pune',
      country: 'India',
      zcode: '411041',
      email: 'rohitpatil@gmail.com',
    },
    { id: 7,
      fname: 'Amit',
      lname: 'Shah',
      dob: '1992-12-01',
      mn: '7890123456',
      al1: 'PQR Colony',
      al2: '',
      city: 'Delhi',
      country: 'India',
      zcode: '110056',
      email: 'amitshah@gmail.com',
    },
    { id: 8,
      fname: 'Riya',
      lname: 'Desai',
      dob: '1998-05-18',
      mn: '9867543210',
      al1: 'LMN Society',
      al2: '',
      city: 'Ahmedabad',
      country: 'India',
      zcode: '380015',
      email: 'riyadesai@gmail.com',
    },
    { id: 9,
      fname: 'Sachin',
      lname: 'Kamble',
      dob: '1985-11-08',
      mn: '9834567890',
      al1: 'QRS Nagar',
      al2: '',
      city: 'Mumbai',
      country: 'India',
      zcode: '400054',
      email: 'sachinkamble@gmail.com',
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
