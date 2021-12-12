import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
    public email:any;
    public password:any;
    public name:any;
    public lastname:any;
    public bd:any;
    public ts:any;
    
    fechanac: Date

  constructor(public alertCtrl: AlertController,
              public router: Router,
              public firestoreservice: FirestoreService
              ) { }

  ngOnInit() {
  }

  signup(){ 
    this.firestoreservice.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          lastname: this.lastname,
          bd: this.bd,
          ts: this.ts,
          uid:res.user.uid
        }
        this.firestoreservice.saveDetails(data).then(res=>{
         this.AlertSU();
         
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }

  async AlertSU() {
    
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Registro Exitoso!',
      subHeader: '',
      message: 'Puede iniciar sesión',
      buttons: [  
        {
           text: 'Ok',
           handler: () => {
           this.router.navigate(['loginopt/']);
        }
      }
    ]
    });

    await alert.present();
  
}

}
