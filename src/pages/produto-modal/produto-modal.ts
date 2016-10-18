import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';
import { ProdutoService } from '../../providers/produto-service';
/*
Generated class for the ProdutoModal page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-produto-modal',
  templateUrl: 'produto-modal.html'
})
export class ProdutoModal {
  produto: any;
  categorias: Array<any>;
  constructor(public navCtrl: NavController, private viewCtrol: ViewController, private ctgService: CategoriaService ,private pdtService: ProdutoService, private par: NavParams) {
    this.produto =  par.get('produto') || {};
    this.ctgService.findAll()
      .then((categorias: Array<any>) => {
        this.categorias = categorias;
      }, (error) => {
        this.categorias = [];
      });
  }

  ionViewDidLoad() {
    console.log('Hello ProdutoModal Page');
  }

  close() {
    this.viewCtrol.dismiss();
  }

  salvar() {
      if (this.produto.id !== undefined) {
        this.pdtService.alterar(this.produto).then((res) => {
          if (res) {
            this.viewCtrol.dismiss();
          }
        }, (error) => {
          console.log(error);
        });
      } else {
        this.pdtService.inserir(this.produto).then((res) => {
          if (res) {
            this.viewCtrol.dismiss();
          }
        }, (error) => {
          console.log(error);
        });
      }
  }


}
