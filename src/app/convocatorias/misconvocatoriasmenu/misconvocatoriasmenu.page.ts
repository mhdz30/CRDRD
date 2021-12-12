import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Convocatoria } from 'src/app/models';
import { Cita } from 'src/app/models';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-misconvocatoriasmenu',
  templateUrl: './misconvocatoriasmenu.page.html',
  styleUrls: ['./misconvocatoriasmenu.page.scss'],
})
export class MisconvocatoriasmenuPage implements OnInit {
  Convocatorias: Convocatoria[] = [];
  Citas: Cita[] = [];

    
  newConvocatoria: Convocatoria = {
    tiposangre: '',
    ubicacion: '',
    id: this.firestoreService.GetId(),
    fechasolic: new Date(),
    cd: '',
  

  };
  newCita: Cita = {
    id: this.firestoreService.GetId(),
    fechacita: new Date(),
  
  

  };

  pathC = 'Convocatorias/';
  pathCita = 'Cita/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.GetConvocatorias();
    this.presentToast();
    this.GetCita();
  }

    /* CCONVOCATORIAS---------------------------------------- */
  SaveDatosConvocatorias() { 
      this.firestoreService.createDoc(this.newConvocatoria, this.pathC, this.newConvocatoria.id);
      
  }

  
  GetConvocatorias(){
    this.firestoreService.GetColletion<Convocatoria>(this.pathC).subscribe(ob => {
        this.Convocatorias = ob;
    });


  }
  GetCita(){
    this.firestoreService.GetColletion<Cita>(this.pathCita).subscribe(ob => {
        this.Citas = ob;
    });


  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Si tienes una convocatoria pendiente. Por favor verifica el código de garantia.',
      duration: 4000
    });
  
    toast.present();
  }
    
};

