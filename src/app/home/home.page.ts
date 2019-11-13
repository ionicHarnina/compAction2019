import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetOptions } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrar = false;
  // Inyectando la dependencia del sheet controller
  opciones: ActionSheetOptions;
  constructor(public actionSheetController: ActionSheetController) {
    this.opciones = { header: 'hola', buttons: [] };
  }

  // Aqui definimos el action sheet, con sus botones, etc
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albuns',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.mostrar = true;
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
