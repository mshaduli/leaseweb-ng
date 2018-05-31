import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { StoreFrontComponent } from './components/store-front/store-front.component';
import { StoreFilterComponent } from './components/store-filter/store-filter.component';
import { ApiService } from './services/api.service';
import { SliderModule } from '../slider/slider.module';
import { FilterStorageComponent } from './components/filter-storage/filter-storage.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    SliderModule
  ],
  declarations: [
    StoreFrontComponent,
    StoreFilterComponent,
    FilterStorageComponent,
    PaginationComponent,
  ],
  exports: [StoreFrontComponent, StoreFilterComponent],
  providers: [
    HttpClientModule,
    ApiService
  ]
})
export class StoreModule { }
