import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {

  servers;
  totalItems;
  page = 1;
  filters = {};
  itemsPerPage = 10;
  itemStart = 1;
  itemEnd = 10;
  sortBy = {
    field: 'price',
    type: 'asc'
  }
  sortClass = 'sort_'+this.sortBy.type;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.serversSubject
      .pipe(
        switchMap(p => {
          return this.apiService.getAllServers(p);
        })
      )
      .subscribe(res => {
        this.servers = res.servers;
        this.totalItems = res.totalItems;
      });
    //this.pageChanged({page: this.page});
  }

  sort(field, type) {
    this.sortBy = {
      field: field,
      type: (this.sortBy.type ==='asc' && this.sortBy.field === field) ? 'desc' : 'asc'
    }
    this.sortClass = 'sort_'+this.sortBy.type;
    this.page = 1;
    this.pageChanged(
      {
        page: this.page,
        sort_by: this.sortBy
      }
    );
  }

  pageChanged(ev) {
      const filter = {
                        page: this.page, 
                        sort_by: this.sortBy.field, 
                        sort_type: this.sortBy.type
                      };
      this.filters = { ...this.filters, ...filter };
      this.apiService.serversSubject.next(this.filters);
      this.itemStart = (this.itemsPerPage*this.page) - 9;
      if((this.totalItems-this.itemStart) < this.itemsPerPage) {
        this.itemEnd = this.itemStart+this.totalItems-this.itemStart;
      }
      else {
        this.itemEnd = this.itemStart+9;
      }
      
  }

  onFilter(filter) {
    this.filters = { ...this.filters, ...filter };
    this.page = 1;
    this.pageChanged({page: this.page});
  }

}
