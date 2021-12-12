import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelect8 } from 'src/app/models';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-formsd8',
  templateUrl: './formsd8.page.html',
  styleUrls: ['./formsd8.page.scss'],
})
export class Formsd8Page implements OnInit {
  FormSelect8: FormSelect8[] = [];
   

    
  newf8: FormSelect8 = {
    id: this.firestoreService.GetId(),
    res26: '',
    res27: '',
    res28: '',
    res29: '',


  };

  pathF8 = 'FormSelect8/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf8, this.pathF8, this.newf8.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd9');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelect8>(this.pathF8).subscribe(ob => {
        this.FormSelect8 = ob;
    });


  }
  OptionChanged(){
      this.AlertEnfermedad();
  }

  async AlertEnfermedad() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'No es posible donar si tiene o ha tenido alguna enfermedad. Para mas informacion contacte BSCRDOM. Si no es asi por favor continue llenando el formulario.',
      buttons: [  
        {
          text: 'Continuar',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
           text: 'Ok',
           handler: () => {
           this.router.navigate(['tab/folder/Inbox']);
        }
      }
    ]
    });

    await alert.present();
  
}
}

