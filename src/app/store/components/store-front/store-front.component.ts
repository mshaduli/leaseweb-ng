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

  pageChanged(ev) {
      const filter = {page: this.page}
      this.filters = { ...this.filters, ...filter };
      this.apiService.serversSubject.next(this.filters);
  }

  onFilter(filter) {
    this.filters = { ...this.filters, ...filter };
    this.page = 1;
    this.pageChanged({page: this.page});
  }

}
