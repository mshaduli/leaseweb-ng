import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { switchMap, tap } from 'rxjs/operators';
import { totalmem } from 'os';

@Component({
  selector: 'store-filter',
  templateUrl: './store-filter.component.html',
  styleUrls: ['./store-filter.component.css']
})
export class StoreFilterComponent implements OnInit {

  filters = {};
  clear = false;
  @Output() onFilterEvent = new EventEmitter();
  constructor(private apiService : ApiService) { }
  ngOnInit() {
    this.apiService.filtersSubject
      .pipe(
        tap(x => {
          this.getFilteredServers(x);
        })
      )
      .subscribe();
  }

  getFilteredServers(filter) {
    this.clear = false;
    this.filters = { ...this.filters, ...filter };
    this.onFilterEvent.emit(this.filters);
  }

  clearFilters() {
    this.clear = true;
    this.filters = {};
    this.apiService.serversSubject.next({});
  }

}
