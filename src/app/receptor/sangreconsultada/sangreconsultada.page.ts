import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PintasSangresE } from 'src/app/models';
import { Subscription } from 'rxjs';
import { ConsangrePage } from '../consangre/consangre.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';




@Component({
  selector: 'app-sangreconsultada',
  templateUrl: './sangreconsultada.page.html',
  styleUrls: ['./sangreconsultada.page.scss'],
  
})
export class SangreconsultadaPage implements OnInit {


  suscriber: Subscription;
  PintasSangreExistentes: PintasSangresE[] = [];


  



    
  newPSE: PintasSangresE = {
    idregsangre: this.firestoreService.GetId(),
    nomTipoSangre: '',
    cantidadexistente: '',
    ubicacion: ''


  };

  pathPSE = 'PintasSangreE/';
  tipo: string;
  
  
  

  constructor(public firestoreService: FirestoreService,
              private activatedRoute: ActivatedRoute,
             
              ) { 
              //  this.activatedRoute.paramMap.subscribe{
              //    (data) =>{
              //      console.log(data)
              //    }
              //  }
                this.tipo = this.activatedRoute.snapshot.paramMap.get('xyz')
                
               
              }

              

  ngOnInit() {
    this.GetPintasSangreConsultada()
  }

    /* FUNCIONES PINTAS DE SANGRE EXISTENTES---------------------------------------- */
  SaveDatosPintasSangreE() { 
      this.firestoreService.createDoc(this.newPSE, this.pathPSE, this.newPSE.idregsangre);
  }
 

  GetPintasSangreConsultada(){
    const path = 'PintasSangreE/';
    this.suscriber = this.firestoreService.GetColletionQuerytipo<PintasSangresE>(path, "nomTipoSangre", "==" , this.tipo).subscribe(res => {
          if (res.length){
              this.PintasSangreExistentes = res;

            }    
    });

  }



}