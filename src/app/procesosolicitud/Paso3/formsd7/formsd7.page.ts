import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelect7 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd7',
  templateUrl: './formsd7.page.html',
  styleUrls: ['./formsd7.page.scss'],
})
export class Formsd7Page implements OnInit {
  FormSelect7: FormSelect7[] = [];

    
  newf7: FormSelect7 = {
    id: this.firestoreService.GetId(),
    res24: '',
    res25: '',


  };

  pathF7 = 'FormSelect7/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf7, this.pathF7, this.newf7.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd8');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelect7>(this.pathF7).subscribe(ob => {
        this.FormSelect7 = ob;
    });


  }
}
