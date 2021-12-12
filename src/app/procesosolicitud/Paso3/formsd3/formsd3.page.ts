import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelectthree } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd3',
  templateUrl: './formsd3.page.html',
  styleUrls: ['./formsd3.page.scss'],
})
export class Formsd3Page implements OnInit {
  FormSelect3: FormSelectthree[] = [];

    
  newf3: FormSelectthree = {
    id: this.firestoreService.GetId(),
    res9: '',
    res10: '',
    res11: ''
    

  };

  pathF3 = 'FormSelectthree/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF3();
  }

    /* FORM1---------------------------------------- */
  SaveDatosF3() { 
      this.firestoreService.createDoc(this.newf3, this.pathF3, this.newf3.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd4');
    
};

  GetF3(){
    this.firestoreService.GetColletion<FormSelectthree>(this.pathF3).subscribe(ob => {
        this.FormSelect3 = ob;
    });


  }
}

