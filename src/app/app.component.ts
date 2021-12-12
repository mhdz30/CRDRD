import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { users } from 'src/app/models';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  uid:string = null;
  info: users = null;

  public appPages = [
    { title: 'DONANTE', url: '/tab/donante', icon: 'heart' },
    { title: 'RECEPTOR', url: '/tab/receptor', icon: 'hand-right' },
  
  ];
  public labels = [
    { title: 'Mi Perfil', url: '/asdonante', icon: 'person' },
    { title: 'Mis Convocatorias', url: '/misconvocatoriasmenu', icon: 'accessibility' },
    { title: 'Mis Solicitudes', url: '/folder/Outbox', icon: 'megaphone' },
    { title: 'Mis Donaciones', url: '/misdonaciones', icon: 'navigate' },
    { title: 'CERRAR SESION', url: '/loginopt', icon: 'power' },
  
  ];


  constructor(private activatedRoute: ActivatedRoute,
              private authservice: FirestoreService) { 


              }


  ngOnInit(){
    console.log('estoy en perfil');
    this.authservice.stateUser().subscribe(res => {
      console.log('esoty en perfil - estado de autenticacion => ', res);
      this.getuid();
    });
    this.getuid();
   
  }
  async getuid(){
    const uid = await this.authservice.getuid();
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
      this.authservice.getIu<users>(path, id).subscribe(res => {
        if (res){
          this.info = res;
        }
        console.log('datos son => ', res);
      })
    }


 
}


