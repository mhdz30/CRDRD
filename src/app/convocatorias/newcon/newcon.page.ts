import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Convocatoria } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newcon',
  templateUrl: './newcon.page.html',
  styleUrls: ['./newcon.page.scss'],
})
export class NewconPage implements OnInit {
  Convocatorias: Convocatoria[] = [];

    
  newConvocatoria: Convocatoria = {
    tiposangre: '',
    ubicacion: '',
    id: this.firestoreService.GetId(),
    fechasolic: new Date(),
    cd: ''
  

  };

  pathC = 'Convocatorias/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetConvocatorias();
  }

    /* CCONVOCATORIAS---------------------------------------- */
  SaveDatosConvocatorias() { 
      this.firestoreService.createDoc(this.newConvocatoria, this.pathC, this.newConvocatoria.id);
      
  }
  ClickVerConvocatoria() { 
    this.AlertConvRealizada();
    
};

  GetConvocatorias(){
    this.firestoreService.GetColletion<Convocatoria>(this.pathC).subscribe(ob => {
        this.Convocatorias = ob;
    });


  }
  async AlertConvRealizada() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Su convocatoria ha sido realizada de forma exitosa. ',
      buttons: [  
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
           text: 'Ver convocatoria realizada',
           handler: () => {
           this.router.navigate(['mostrarcon']);
        }
      }
    ]
    });

    await alert.present();
  
}
}