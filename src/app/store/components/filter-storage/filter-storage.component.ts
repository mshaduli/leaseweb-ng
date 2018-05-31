import { Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'filter-by-storage',
  templateUrl: './filter-storage.component.html',
  styleUrls: ['./filter-storage.component.css']
})
export class FilterStorageComponent implements OnInit, OnChanges {

  @Output() filterEvent = new EventEmitter();
  @Input() clear = false;
  value = [0, 11];
  constructor(private apiService : ApiService) {}
  storageTypes = [
    { value: 100, label: '100GB' },
    { value: 250, label: '250GB' },
    { value: 500, label: '500GB' },
    { value: 1000, label: '1TB' },
    { value: 2000, label: '2TB' },
    { value: 3000, label: '3TB' },
    { value: 4000, label: '4TB' },
    { value: 8000, label: '8TB' },
    { value: 12000, label: '12TB' },
    { value: 24000, label: '24TB' },
    { value: 48000, label: '48TB' },
    { value: 72000, label: '72TB' }
  ];

  ngOnInit() {
    
  }

  filterByStorage(event) {
    this.value = event;
    this.filterEvent.emit(this.getStorageParams(event));
  }
  
  getStorageParams(event) {
    const storage_min = this.storageTypes[event[0]].value;
    const storage_max = this.storageTypes[event[1]].value;
    return { storage_min: storage_min, storage_max: storage_max};
  }

  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.value = [0, 11];
    }
  }

}
