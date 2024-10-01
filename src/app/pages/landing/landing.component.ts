import { Component } from '@angular/core';
import { ConexaoService } from 'src/app/service/conexao.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor (private conexaoService: ConexaoService){
    conexaoService.buscConexao().subscribe(res => {this.conexoes = res});
  }

  conexoes : number = 0;

}
