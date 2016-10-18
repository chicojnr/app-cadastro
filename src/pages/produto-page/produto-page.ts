import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ProdutoService } from '../../providers/produto-service';
import { ProdutoModal } from '../produto-modal/produto-modal';
@Component({
  selector: 'page-produto-page',
  templateUrl: 'produto-page.html'
})
export class ProdutoPage {
  produtos: Array<any>;
  constructor(public navCtrl: NavController, private pdtService: ProdutoService, private alertCtrl: AlertController, private modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello ProdutoPage Page');
    this.findAll();
  }

  findAll() {
      this.pdtService.findAll()
      .then((produtos: Array<any>) => {
        this.produtos = produtos;
        console.log(this.produtos);
      }, (error) => {
        console.log(error);
      });
  }

  remover(produto) {
    let alert = this.alertCtrl.create({
        title: 'Deletar Produto',
        message: "Deseja realmente deletar o produto \'" + produto.nome + "\'?'",
        buttons: [
            { text: 'Cancelar' },
            { text: 'Deletar',
              handler: (data) => {
                this.pdtService.delete(produto.id)
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
    let modal = this.modalCtrl.create(ProdutoModal);
    modal.onDidDismiss(() => {
      this.findAll();
    });
    modal.present();
  }

  alterar(produto) {
    let modal = this.modalCtrl.create(ProdutoModal, {
      produto: produto
      //produto: Object.assign({}, produto); --> Para clonar o objeto;
    });
    modal.onDidDismiss(() => {
      this.findAll();
    });
    modal.present();
  }

}
