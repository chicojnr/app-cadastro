import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoriaService {
  baseUri: string;
  constructor(public http: Http) {
    this.baseUri = 'https://product-api-ionic2-chicojnr.c9users.io/api/category';
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

  delete(idCategoria) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + '/' + idCategoria).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  inserir(categoria) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri, JSON.stringify(categoria), {headers: headers}).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  alterar(categoria) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(categoria), {headers: headers}).map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
