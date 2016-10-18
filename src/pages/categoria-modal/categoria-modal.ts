import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';

/*
Generated class for the CategoriaModal page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-categoria-modal',
  templateUrl: 'categoria-modal.html'
})
export class CategoriaModal {
  categoria: any;
  constructor(public navCtrl: NavController, private viewCtrol: ViewController, private ctgService: CategoriaService, private par: NavParams) {
    this.categoria = par.get('categoria') || {};
  }

  ionViewDidLoad() {
    console.log('Hello CategoriaModal Page');
  }

  close() {
    this.viewCtrol.dismiss();
  }

  salvar() {
    if (this.categoria.id !== undefined) {
      this.ctgService.alterar(this.categoria).then((res) => {
        if (res) {
          this.viewCtrol.dismiss();
        }
      }, (error) => {
        console.log(error);
      });
    } else {
      this.ctgService.inserir(this.categoria).then((res) => {
        if (res) {
          this.viewCtrol.dismiss();
        }
      }, (error) => {
        console.log(error);
      });
    }
  }
}
