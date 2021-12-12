import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Convocatoria } from 'src/app/models';
import { Cita } from 'src/app/models';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-misdonaciones',
  templateUrl: './misdonaciones.page.html',
  styleUrls: ['./misdonaciones.page.scss'],
})
export class MisdonacionesPage implements OnInit {
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

  enablevisualizarcod = false;  

  pathC = 'Convocatorias/';
  pathCita = 'Cita/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.GetConvocatorias();
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

  VisualizarCod(){
    this.enablevisualizarcod = true;
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Si tienes una convocatoria pendiente. Por favor verifica el código de garantia.',
      duration: 4000
    });
  
    toast.present();
  }
    
};
