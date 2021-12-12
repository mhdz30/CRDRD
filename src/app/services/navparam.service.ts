import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'Is-what';


@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  navData: any;
  constructor() { }


  setNavData(navObj){
    this.navData = navObj

  }

  getNavData(){
    if (isNullOrUndefined(this.navData))
      return 0
    return this.navData;
  }
}

