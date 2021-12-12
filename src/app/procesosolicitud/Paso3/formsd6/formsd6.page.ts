import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelect6 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd6',
  templateUrl: './formsd6.page.html',
  styleUrls: ['./formsd6.page.scss'],
})
export class Formsd6Page implements OnInit {
  FormSelect6: FormSelect6[] = [];

    
  newf6: FormSelect6 = {
    id: this.firestoreService.GetId(),
    res21: '',
    res22: '',
    res23: '',
   

  };

  pathF5 = 'FormSelect6/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf6, this.pathF5, this.newf6.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd7');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelect6>(this.pathF5).subscribe(ob => {
        this.FormSelect6 = ob;
    });


  }
}
