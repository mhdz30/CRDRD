import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormSelect5 } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsd5',
  templateUrl: './formsd5.page.html',
  styleUrls: ['./formsd5.page.scss'],
})
export class Formsd5Page implements OnInit {
  FormSelect5: FormSelect5[] = [];

    
  newf5: FormSelect5 = {
    id: this.firestoreService.GetId(),
    res16: '',
    res17: '',
    res18: '',
    res19: '',
    res20: '',

  };

  pathF5 = 'FormSelect5/';
  
  

  constructor(public firestoreService: FirestoreService, 
              private router : Router) { }

  ngOnInit() {
    this.GetF4();
  }

    /* FORM1---------------------------------------- */
  SaveDatos() { 
      this.firestoreService.createDoc(this.newf5, this.pathF5, this.newf5.id);
      
  }
  ClickNextForm() { 
    this.router.navigateByUrl('/formsd6');
    
};

  GetF4(){
    this.firestoreService.GetColletion<FormSelect5>(this.pathF5).subscribe(ob => {
        this.FormSelect5 = ob;
    });


  }
}
