import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '../services/admin-data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  /*tableData = [
    { id: 1,
      fname: 'Item 1',
      lname: 'Item 1',
      pfname: 'Item 1',
      plname: 'Item 1',
      dob: 'Item 1',
      mn: 'Item 1',
      al1: 'Item 1',
      al2: 'Item 1',
      city: 'Item 1',
      country: 'Item 1',
      zcode: 'Item 1',
      email: 'Item 1',
      teacher: 'Item 1',
      course: 'Item 1',
      fees: 'Item 1',
    },
    { id: 2,
      fname: 'Item 1',
      lname: 'Item 1',
      dob: 'Item 1',
      mn: 'Item 1',
      al1: 'Item 1',
      al2: 'Item 1',
      city: 'Item 1',
      country: 'Item 1',
      zcode: 'Item 1',
      email: 'Item 1',
      fees: 'Item 1',
    },
  ];*/

  selectedValue: string = "";

  admindata1:any;
  router: any;
  constructor(
    private admindata : AdminDataService,
    private route: Router,
  ){}

  isCollapsed: boolean = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void{
    this.admindata1 = this.admindata.getAdmin();
    console.log(this.admindata1);

    this.showApiData();
  }

  showApiData(){
    this.admindata.getDataFormApi().subscribe(res => {
      console.log(res);
    });
  }

  /*updateTableData() {
    if (this.selectedValue === '1') {
      this.tableData = [
        { id: 1,
          fname: 'Item 1',
          lname: 'Item 1',
          pfname: 'Item 1',
          plname: 'Item 1',
          dob: 'Item 1',
          mn: 'Item 1',
          al1: 'Item 1',
          al2: 'Item 1',
          city: 'Item 1',
          country: 'Item 1',
          zcode: 'Item 1',
          email: 'Item 1',
          teacher: 'Item 1',
          course: 'Item 1',
          fees: 'Item 1',
        },
      ];
    } else if (this.selectedValue === '2') {
      this.tableData = [
        { id: 1,
          fname: 'Item 1',
          lname: 'Item 1',
          dob: 'Item 1',
          mn: 'Item 1',
          al1: 'Item 1',
          al2: 'Item 1',
          city: 'Item 1',
          country: 'Item 1',
          zcode: 'Item 1',
          email: 'Item 1',
          fees: 'Item 1',
        },
      ];
    } else {
      this.tableData = [];
    }
  }*/

  onSelectChange(event:any): void {
    this.selectedValue = event.target.value;
    if(this.selectedValue === "1"){
      this.route.navigateByUrl('/student');
    }
  }
  
}
