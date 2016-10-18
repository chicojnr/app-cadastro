import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProdutoService {
  baseUri: string;
  constructor(public http: Http) {
    this.baseUri = 'https://product-api-ionic2-chicojnr.c9users.io/api/product';
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  delete(idProduto) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + '/' + idProduto).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  inserir(produto) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri, JSON.stringify(produto), {headers: headers}).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  alterar(produto) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(produto), {headers: headers}).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
