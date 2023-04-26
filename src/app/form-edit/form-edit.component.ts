import { Component} from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent {

  isEditFormOpen = false;
  selectedItem: any;
  editEntry(item: any) {
    this.isEditFormOpen = true;
    this.selectedItem = item;
  }
  
  updateEntry() {
    this.isEditFormOpen = false;
    // update the entry in the tableData array
  }
}
