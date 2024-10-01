import { Disciplina } from './../modelo/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private url: string = 'http://localhost:8080/disciplina';

  constructor(private httpClient: HttpClient) {  }

  buscDisciplina(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.url)
  }
}
