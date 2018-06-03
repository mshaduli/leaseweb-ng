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
import { FilterRamComponent } from './components/filter-ram/filter-ram.component';
import { FilterStorageTypeComponent } from './components/filter-storage-type/filter-storage-type.component';
import { FilterLocationComponent } from './components/filter-location/filter-location.component';
import { ShowUnitPipe } from './pipes/show-unit.pipe';


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
    FilterRamComponent,
    FilterStorageTypeComponent,
    FilterLocationComponent,
    ShowUnitPipe
  ],
  exports: [StoreFrontComponent, StoreFilterComponent],
  providers: [
    HttpClientModule,
    ApiService
  ]
})
export class StoreModule { }
