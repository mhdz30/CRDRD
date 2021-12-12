import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DonanteInstantaneo } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formdtosdon',
  templateUrl: './formdtosdon.page.html',
  styleUrls: ['./formdtosdon.page.scss'],
})
export class FormdtosdonPage implements OnInit {
  DonantesInsta: DonanteInstantaneo[] = [];

    
  newDonanteInstantaneo: DonanteInstantaneo = {
    nombres: '',
    apellidos: '',
    cedula: null,
    id: this.firestoreService.GetId(),
    fechanac: new Date(),
    tiposangredon: ''


  };

  pathDI = 'DonanteInstantaneo/';


  constructor(public firestoreService: FirestoreService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetDonantesInsta();
  }

    /* FUNCIONES DONANTE INSTANTANEO---------------------------------------- */
  SaveDatosDonanteInsta() { 
      this.firestoreService.createDoc(this.newDonanteInstantaneo, this.pathDI, this.newDonanteInstantaneo.id);
  }
  ClickSiguiente() { 
    this.AlertDatosDonante()
    
};

  GetDonantesInsta(){
    this.firestoreService.GetColletion<DonanteInstantaneo>(this.pathDI).subscribe(ob => {
        this.DonantesInsta = ob;
    });
  }
  async AlertDatosDonante() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Paso 2 Exitoso',
      subHeader: '',
      message: 'Se ha registrado con exito los datos del donante instanataneo. A continuacion el paso 3 sobre el formulario de preseguntas de seleccion de 40 preguntas de si y no. Por favor mantente conectado a internet para completar el proceso. Recuerda mantener la sinceridad, estás salvando una vida.',
      buttons: [  
        {
           text: 'Continuar',
           handler: () => {
           this.router.navigate(['formsd1/']);
        }
      }
    ]
    });
  
    await alert.present();
  
  }

}

