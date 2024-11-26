import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conexao } from '../modelo/conexao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {
  private url: string = 'http://localhost:8080/conexao';

  constructor(private httpClient: HttpClient) { }

  buscConexao(): Observable<number>{
    return this.httpClient.get<number>(this.url)
  }
  contarConx(conv: any): number{
    conv = Number(this.contarConx)
    return conv;
  }
}

