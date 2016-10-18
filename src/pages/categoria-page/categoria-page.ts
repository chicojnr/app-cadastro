import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';
import { CategoriaModal } from '../categoria-modal/categoria-modal';
/*
  Generated class for the CategoriaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categoria-page',
  templateUrl: 'categoria-page.html'
})
export class CategoriaPage {
  categorias: Array<any>;
  constructor(public navCtrl: NavController, private ctgService: CategoriaService,  private alertCtrl: AlertController, private modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello CategoriaPage Page');
    this.findAll();
  }
  findAll() {
      this.ctgService.findAll()
      .then((categories: Array<any>) => {
        this.categorias = categories;
        console.log(this.categorias);
        console.log('done');
      }, (error) => {
        console.log(error);
      });
  }

  removerCategoria(categoria) {
    let alert = this.alertCtrl.create({
        title: 'Deletar Categoria',
        message: "Deseja realmente deletar a categoria \'" + categoria.nome + "\'?'",
        buttons: [
            { text: 'Cancelar' },
            { text: 'Deletar',
              handler: (data) => {
                this.ctgService.delete(categoria.id)
                  .then((r) => {
                    this.findAll();
                  }, (error) =>  {
                    console.log(error);
                  });
                }
            }
        ]
    });
    alert.present();
  }

  inserir() {
    let modal = this.modalCtrl.create(CategoriaModal);
    modal.onDidDismiss(() => {
      this.findAll();
    });
    modal.present();
  }

  alterar(categoria) {
    let modal = this.modalCtrl.create(CategoriaModal, {categoria: categoria});
    modal.onDidDismiss(() => {
      this.findAll();
    });
    modal.present();
  }
}
