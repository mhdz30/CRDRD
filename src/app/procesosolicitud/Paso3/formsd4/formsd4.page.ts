import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelect4 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd4',
  templateUrl: './formsd4.page.html',
  styleUrls: ['./formsd4.page.scss'],
})
export class Formsd4Page implements OnInit {
  FormSelect4: FormSelect4[] = [];

    
  newf4: FormSelect4 = {
    id: this.firestoreService.GetId(),
    res12: '',
    res13: '',
    res14: '',
    res15: '',
    

  };

  pathF4 = 'FormSelect4/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf4, this.pathF4, this.newf4.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd5');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelect4>(this.pathF4).subscribe(ob => {
        this.FormSelect4 = ob;
    });


  }
}