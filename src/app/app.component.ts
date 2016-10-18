import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { CategoriaService } from '../providers/categoria-service';
import { ProdutoService } from '../providers/produto-service';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [CategoriaService, ProdutoService]
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
