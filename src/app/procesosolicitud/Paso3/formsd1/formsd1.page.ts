import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelectone } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd1',
  templateUrl: './formsd1.page.html',
  styleUrls: ['./formsd1.page.scss'],
})
export class Formsd1Page implements OnInit {
  
  FormSelect1: FormSelectone[] = [];

    
  newf1: FormSelectone = {
    id: this.firestoreService.GetId(),
    res1: '',
    res2: '',
    res3: '',
    res4: ''
    

  };

  pathF1 = 'FormSelectone/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF1();
  }

    /* FORM1---------------------------------------- */
  SaveDatosF1() { 
      this.firestoreService.createDoc(this.newf1, this.pathF1, this.newf1.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd2');
    
};

  GetF1(){
    this.firestoreService.GetColletion<FormSelectone>(this.pathF1).subscribe(ob => {
        this.FormSelect1 = ob;
    });


  }
}
