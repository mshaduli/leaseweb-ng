import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-by-storage-type',
  templateUrl: './filter-storage-type.component.html',
  styleUrls: ['./filter-storage-type.component.css']
})
export class FilterStorageTypeComponent implements OnInit, OnChanges {
  @Output() filterEvent = new EventEmitter();
  @Input() clear = false;
  diskTypes = [
    { key: 'SATA2', value: 'SATA' },
    { key: 'SSD', value: 'SSD' },
    { key: 'SAS', value: 'SAS' }
  ];
  storageType;
  constructor() { }

  ngOnInit() {
  }

  filterByStorageType(event) {
    if (event) {
      this.filterEvent.emit({ storageType: event });
    }
  }
  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.storageType = null;
    }
  }

}
