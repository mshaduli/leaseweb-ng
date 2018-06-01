import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'filter-by-ram',
  templateUrl: './filter-ram.component.html',
  styleUrls: ['./filter-ram.component.css']
})
export class FilterRamComponent implements OnInit, OnChanges {
  
  @Output() filterEvent = new EventEmitter();
  @Input() clear = false;

  constructor() { }

  ramTypes = [
    { key: '2', label: '2GB', value: false },
    { key: '4', label: '4GB', value: false },
    { key: '8', label: '8GB', value: true },
    { key: '12', label: '12GB', value: false },
    { key: '16', label: '16GB', value: false },
    { key: '24', label: '24GB', value: false },
    { key: '32', label: '32GB', value: false },
    { key: '48', label: '48GB', value: false },
    { key: '64', label: '64GB', value: false },
    { key: '96', label: '96GB', value: false }
  ];

  ngOnInit() {
    this.filterEvent.emit(this.getRamParams());
  }

  filterByRam(event) {
    this.filterEvent.emit(this.getRamParams());
  }

  getRamParams() {
    return {
      ram: this.ramTypes
        .filter(a => a.value === true)
        .map(a => a.key)
        .join(',')
    };
  }

  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.ramTypes.map(a => (a.value = false));
    }
  }

}
