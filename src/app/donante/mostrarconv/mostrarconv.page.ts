import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Convocatoria } from 'src/app/models';
import { DonacionesC } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController, IonDatetime } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mostrarconv',
  templateUrl: './mostrarconv.page.html',
  styleUrls: ['./mostrarconv.page.scss'],
})
export class MostrarconvPage implements OnInit {
 
  Convocatorias: Convocatoria[] = [];
  Donaciones: DonacionesC[] = [];
  fecha: string
  
   
    
  newConvocatoria: Convocatoria = {
    tiposangre: '',
    ubicacion: '',
    id: this.firestoreService.GetId(),
    fechasolic: new Date(),
    cd: ''
  

  };
  newDC: DonacionesC = {
   
    id: this.firestoreService.GetId(),
    fechad: new Date(),
    tipo: '',
    
  

  };
  

  pathC = 'Convocatorias/';
  pathD = 'DonacionesC/';
  f= 'fechad'

  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private alertCtrl: AlertController) {
                
            }
          

  ngOnInit() {
    this.GetConvocatorias();
    this.getdonaciones();
    

    
  }


    /* CCONVOCATORIAS-------------- */
  SaveDatosConvocatorias() { 
      this.firestoreService.createDoc(this.newConvocatoria, this.pathC, this.newConvocatoria.id);
      
  }
  ClickVerConvocatoria() { 
    this.router.navigateByUrl('/aconvrealizada');
  }
  
  GetConvocatorias(){
    this.firestoreService.GetColletion<Convocatoria>(this.pathC).subscribe(ob => {
        this.Convocatorias = ob;
    });



  }
  getdonaciones(){
    this.firestoreService.GetColletion<DonacionesC>(this.pathD).subscribe(ob => {
        this.Donaciones = ob;
        
    });



  }

  async AlertDonacion() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Tu última fecha de donacion fue ' +this.newDC.fechad+'. Por favor verifica que hayes tenido dos meses a partir de esta fecha de lo contrario no puedes donar hasta haber pasado el tiempo requerido.',
      buttons: [  
        {
          text: 'Continuar',
          handler: (blah) => {
            this.AlertFormSeleccion();
          }
        },{
           text: 'Salir',
           handler: () => {
           this.router.navigate(['tab/folder/Inbox']);
        }
      }
    ]
    });

    await alert.present();
  
}
Clickdonar(){
 this.AlertDonacion();

}

async AlertFormSeleccion() {
    
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Alerta!',
    subHeader: '',
    message: 'A continuación va a llenar el formulario de selección de donante de 40 preguntas de si y no. Por favor mantente conectado a internet para completar el proceso. Recuerda mantener la sinceridad, estás salvando una vida.',
    buttons: [  
      {
         text: 'Entendido',
         handler: () => {
         this.router.navigate(['formsd1/']);
      }
    }
  ]
  });

  await alert.present();

}
    
};
