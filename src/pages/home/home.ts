import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CategoriaPage } from '../categoria-page/categoria-page';
import { ProdutoPage } from '../produto-page/produto-page';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  tabRoot1: any;
  tabRoot2: any;
  tabRoot3: any;
  constructor(public navCtrl: NavController) {
    this.tabRoot1 = CategoriaPage;
    this.tabRoot2 = ProdutoPage;
  }

}
