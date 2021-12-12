import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {

  constructor(private alertController: AlertController,
              public router: Router) { }

  ngOnInit() {
    
  }

  ClickSolicita(){
    this.presentAlertPrompt();
  }


async presentAlertPrompt() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Importante',
    message: 'Si ha realizado una convocatoria por falta donante instantáneo. Por favor introduzca el código de garantía obtenido. Si no sabe cual es puede dirigirse al menú Mis convocatorias. De lo contrario, si tiene donante instantáneo. Por favor obviar este mensaje y continuar el proceso de solicitud.',
    inputs: [
      {
        name: 'Código',
        type: 'text',
        placeholder: 'Introduzca el código de garantía'
      },
    ],
    buttons: [
      {
        text: 'Obviar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
          this.router.navigate(['formdtosrec/']);
        }
      }, {
        text: 'Introducir',
        handler: () => {
          console.log('Confirm Ok');
          
        }
      }
    ]
  });

  await alert.present();
}
}
