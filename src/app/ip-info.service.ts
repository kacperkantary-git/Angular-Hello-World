import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {
  constructor(private http: HttpClient) {}

  getIpInfo(ip: string): Observable<any> {
    return this.http.get(`https://ipinfo.io/${ip}/geo`);
  }
}