import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Cita } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-realizarcita',
  templateUrl: './realizarcita.page.html',
  styleUrls: ['./realizarcita.page.scss'],
})
export class RealizarcitaPage implements OnInit {
 


  cita: Cita[] = [];

    
  newCita: Cita = {
    id: this.firestoreService.GetId(),
    fechacita: new Date()
   
    

  };

  pathCita = 'Cita/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetCita();
  }

    /* CITA---------------------------------------- */
  SaveDatosCita() { 
      this.firestoreService.createDoc(this.newCita, this.pathCita, this.newCita.id);
      
  }
  ClickNextForm() { 
    this.AlertCitaHecha()
    
};
async AlertCitaHecha() {
    
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Alerta',
    subHeader: '',
    message: 'Tu Cita ha sido registrada. Puede dirigirse al banco de sangre de su localidad.',
    buttons: [  
      {
         text: 'Ok',
         handler: () => {
         this.router.navigate(['tab/folder/Inbox/']);
      }
    }
  ]
  });

  await alert.present();

}

  GetCita(){
    this.firestoreService.GetColletion<Cita>(this.pathCita).subscribe(ob => {
        this.cita = ob;
    });


  }
}
