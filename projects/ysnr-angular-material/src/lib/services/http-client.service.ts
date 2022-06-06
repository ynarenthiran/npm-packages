import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YSNRHttpClient {
  constructor(private http: HttpClient) {}

  getjson(url: any): Observable<any> {
    return this.http.get(url);
  }

  get(url: any): Observable<any> {
    return this.http.get(`${url}`);
  }

  post(url: any, data: any): Observable<any> {
    return this.http.post(`${url}`, data || {});
  }

  put(url: any, data: any): Observable<any> {
    return this.http.put(`${url}`, data || {});
  }

  delete(url: any): Observable<any> {
    return this.http.delete(`${url}`);
  }
}
