import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'store-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() filterEvent = new EventEmitter();
  @Input() totalItems;
  @Input() filters;
  page = 1;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    console.log('infs');
    const filter = {page: this.page}
    this.filters = { ...this.filters, ...filter };
    this.apiService.filtersSubject.next(this.filters);
  }

  pageChanged(ev) {
    console.log('pageChanged')
    console.log(this.page);
    const filter = {page: this.page}
    this.filters = { ...this.filters, ...filter };
    console.log(this.filters);
    this.filterEvent.emit(this.filters);
  }

  ngOnChanges(e) {
    // if (e.clear.currentValue) {
    //   this.page = 1;
    // }
  }

}
