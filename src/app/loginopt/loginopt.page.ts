import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-loginopt',
  templateUrl: './loginopt.page.html',
  styleUrls: ['./loginopt.page.scss'],
})
export class LoginoptPage implements OnInit {
  public email:any;
  public password:any;
  nombreu: string;

  constructor(
    public router:Router,
    public alertCtrl: AlertController,
    public fireService:FirestoreService,
    
  ) { }

  ngOnInit() {
  }


  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
             this.router.navigate(['/tab/folder/Inbox']);
    
          
          
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }
  
  async presentAlert() {
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