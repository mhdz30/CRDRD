import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../models';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  uid:string = null
  info: users = null;

  constructor(private activatedRoute: ActivatedRoute,
              private authservice: FirestoreService) { }
    option = {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      autoplay: true,
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
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
        console.log('datos son =>', res);
      })
    }
  }


  
