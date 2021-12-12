import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelec9 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd9',
  templateUrl: './formsd9.page.html',
  styleUrls: ['./formsd9.page.scss'],
})
export class Formsd9Page implements OnInit {
  FormSelect9: FormSelec9[] = [];

    
  newf9: FormSelec9 = {
    id: this.firestoreService.GetId(),
    res30: '',
    res31: '',
    res32: '',
    res33: '',
    res34: '',


  };

  pathF9 = 'FormSelect9/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf9, this.pathF9, this.newf9.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd10');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelec9>(this.pathF9).subscribe(ob => {
        this.FormSelect9 = ob;
    });


  }
}