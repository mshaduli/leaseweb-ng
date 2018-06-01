import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'filter-by-location',
  templateUrl: './filter-location.component.html',
  styleUrls: ['./filter-location.component.css']
})
export class FilterLocationComponent implements OnInit, OnChanges {

  @Output() filterEvent =  new EventEmitter();
  @Input() clear = false;
  locations = [];
  selectedLocation;
  constructor(private apiService: ApiService) {  }

  ngOnInit() {
    this.apiService.getFilters().subscribe(
        res => (this.locations = res.locations)
    );
  }

  filterByLocation(event) {
    if (event) {
      this.filterEvent.emit({ location: event });
    }
  }

  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.selectedLocation = null;
    }
  }

}
