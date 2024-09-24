import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep: string = '';
  endereco: any;
  estado: string = '';
  cidade: string = '';
  rua: string = '';

  cep2: string = '';
  endereco2: any;
  estado2: string = '';
  bairro2: string = '';
  cidade2: string = '';
  rua2: string = '';

  constructor(private http: HttpClient) {}

  buscarCep() {
    const url = `https://viacep.com.br/ws/${this.cep}/json/`;
    this.http.get(url).subscribe((data: any) => {
      this.endereco = data;
    });
  }
  buscarCep2() {
    const url2 = `https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.rua}/json/`;
    this.http.get(url2).subscribe((data: any) => {
      this.cep2 = data[0].cep;
      this.rua2 = data[0].logradouro;
      this.bairro2 = data[0].bairro;
      this.cidade2 = data[0].localidade;
      this.estado2 = data[0].uf;
    });
  }
}
