import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelec10 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd10',
  templateUrl: './formsd10.page.html',
  styleUrls: ['./formsd10.page.scss'],
})
export class Formsd10Page implements OnInit {
  FormSelect10: FormSelec10[] = [];

    
  newf10: FormSelec10 = {
    id: this.firestoreService.GetId(),
    res35: '',
    res36: '',
    res37: '',
    res38: '',


  };

  pathF10 = 'FormSelect10/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf10, this.pathF10, this.newf10.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd11');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelec10>(this.pathF10).subscribe(ob => {
        this.FormSelect10 = ob;
    });


  }
}
