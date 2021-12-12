import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Receptor } from 'src/app/models';
import { Solicitud } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { users } from 'src/app/models';

@Component({
  selector: 'app-asdonante',
  templateUrl: './asdonante.page.html',
  styleUrls: ['./asdonante.page.scss'],
})
export class AsdonantePage implements OnInit {

  Receptores: Receptor[] = [];
  Solicitudes: Solicitud[] = [];
  uid:string = null
  info: users = null;
    
  newReceptor: Receptor = {
    nombres: '',
    apellidos: '',
    cedula: null,
    id: this.firestoreService.GetId(),
    fechareg: new Date(),
    fechanac: new Date(),
    tiposangre: '',


  };

  newSolicitud: Solicitud = {
      id: this.firestoreService.GetId(),
      fechasolic: new Date(),
      tiposangrereq: '',
      cantidadreq: '',
      medicosolic: '',
      institucionsolic: '',
      fechaindic: new Date()

  }
  enableDatosReceptor = false;  

  pathR = 'Receptor/';
  pathS = 'Solicitud/';
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private toastController: ToastController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetReceptores();
    console.log('estoy en perfil');
    this.firestoreService.stateUser().subscribe(res => {
      console.log('esoty en perfil - estado de autenticacion => ', res);
      this.getuid();
    });
    this.getuid();
  }

    /* RECEPTOR---------------------------------------- */
  SaveDatosReceptor() { 
      this.firestoreService.createDoc(this.newReceptor, this.pathR, this.newReceptor.id);
      
  }
  Clickactdatos() { 
    this.router.navigateByUrl('/asreceptor');
    
};

  GetReceptores(){
    this.firestoreService.GetColletion<Receptor>(this.pathR).subscribe(ob => {
        this.Receptores = ob;
    });


  }
  /* SOLICITUD---------------------------------------- */
  SaveDatosSolicitud() { 
    this.firestoreService.createDoc(this.newSolicitud, this.pathS, this.newSolicitud.id);
}

GetSolicitud(){
  this.firestoreService.GetColletion<Solicitud>(this.pathS).subscribe(obJ => {
      this.Solicitudes = obJ;
  });
}

DatosReceptor(){
  this.enableDatosReceptor = true;
  this.presentToast();
  } 


async presentToast() {
  const toast = await this.toastController.create({
    message: 'Tu solicitud ha sido iniciada. Continua con los datos del Receptor.',
    duration: 4000
  });

  toast.present();
}
async getuid(){
  const uid = await this.firestoreService.getuid();
  if (uid){
    this.uid = uid;
    console.log('uid => ', this.uid);
    this.getInforUser();                                    
  } else{
    console.log('no existe uid');
  }
  }

  getInforUser(){
    const path = 'users';
    const id = this.uid;
    this.firestoreService.getIu<users>(path, id).subscribe(res => {
      console.log('datos son =>', res);
    })
  }



}
