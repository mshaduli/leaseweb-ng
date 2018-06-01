import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  public serversSubject = new Subject();
  public filtersSubject = new Subject();

  constructor(private http: HttpClient) { }

  public getAllServers(params): Observable<any> {
    return this.http.get(API_URL+'/servers/list', {params: new HttpParams({fromObject:params})});
  }

  public getFilters(): Observable<any> {
    return this.http.get(API_URL+'/filters');
  }

}
