import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from '../modelo/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private url: string = 'http://localhost:8080/monitor/save';

  constructor(private HttpClient: HttpClient) { }

  inserir(monitor: Monitor): Observable<Monitor>{
    return this.HttpClient.post<Monitor>(this.url, monitor)
  }
}
