import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriaPage } from '../pages/categoria-page/categoria-page';
import { ProdutoPage } from '../pages/produto-page/produto-page';
import { ProdutoModal } from '../pages/produto-modal/produto-modal';
import { CategoriaModal } from '../pages/categoria-modal/categoria-modal';
import { CategoriaService } from '../providers/categoria-service';
import { ProdutoService } from '../providers/produto-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriaPage,
    ProdutoPage,
    CategoriaModal,
    ProdutoModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriaPage,
    ProdutoPage,
    CategoriaModal,
    ProdutoModal
  ],
  providers: [
    CategoriaService,
    ProdutoService
  ]
})
export class AppModule {}
