import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  updateItem(selectedItem: any) {
    throw new Error('Method not implemented.');
  }
  entries: any[] = [];

  addEntry(entry: any) {
    this.entries.push(entry);
  }
}
