import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-consangre',
  templateUrl: './consangre.page.html',
  styleUrls: ['./consangre.page.scss'],
})
export class ConsangrePage implements OnInit {
  selected_option:string
  selected_city: string
 


  constructor(private router: Router,
              public alertCtrl: AlertController) { }
  
      

  ngOnInit() {
   
  }
  GotoSangreConsultada(){
    let d = this.selected_option
    this.router.navigate(['sangreconsultada/'+ JSON.stringify(d)]);
    
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Consulta',
      subHeader: '',
      message: '',
      buttons: [  
        {
           text: 'Ok',
           handler: () => {
           this.router.navigate(['loginopt/']);
        }
      },
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