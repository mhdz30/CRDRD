import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelecttwo } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd2',
  templateUrl: './formsd2.page.html',
  styleUrls: ['./formsd2.page.scss'],
})
export class Formsd2Page implements OnInit {
  FormSelect2: FormSelecttwo[] = [];

    
  newf1: FormSelecttwo = {
    id: this.firestoreService.GetId(),
    res5: '',
    res6: '',
    res7: '',
    res8: ''
    

  };

  pathF1 = 'FormSelecttwo/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF2();
  }

    /* FORM1---------------------------------------- */
  SaveDatosF2() { 
      this.firestoreService.createDoc(this.newf1, this.pathF1, this.newf1.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd3');
    
};

  GetF2(){
    this.firestoreService.GetColletion<FormSelecttwo>(this.pathF1).subscribe(ob => {
        this.FormSelect2 = ob;
    });


  }
}

