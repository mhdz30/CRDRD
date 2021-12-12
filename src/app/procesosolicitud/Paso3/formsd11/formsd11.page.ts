import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelec11 } from 'src/app/models';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formsd11',
  templateUrl: './formsd11.page.html',
  styleUrls: ['./formsd11.page.scss'],
})
export class Formsd11Page implements OnInit {
  FormSelect11: FormSelec11[] = [];

    
  newf11: FormSelec11 = {
    id: this.firestoreService.GetId(),
    res39: '',
    res40: '',
  };

  pathF11 = 'FormSelect11/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf11, this.pathF11, this.newf11.id);
      
  }
  ClickNextForm() { 
    this.AlertForm();
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelec11>(this.pathF11).subscribe(ob => {
        this.FormSelect11 = ob;
    });


  }
  async AlertForm() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Paso 3 Exitoso',
      subHeader: '',
      message: 'Se ha completado correctamente el formulario de selección de donante. Por favor proceder al 4to y último paso: realizar la cita de donación.',
      buttons: [  
        {
           text: 'Continuar',
           handler: () => {
           this.router.navigate(['realizarcita/']);
        }
      }
    ]
    });
  
    await alert.present();
  
  }
}
