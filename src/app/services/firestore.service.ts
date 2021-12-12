import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database: AngularFirestore,
              public auth: AngularFireAuth) { }

  createDoc(data: any, path: string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
    
  }

  getDoc(path: string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();

  }
  getIu<tipo>(path: string, id: string){
    return this.database.collection(path).doc<tipo>(id).valueChanges()

  }
  
  DeleteDoc(path: string, id: string){
      const collection = this.database.collection(path);
      return collection.doc(id).delete();

  }

  UpdateDoc(data: any, path: string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }
  GetId(){
    return this.database.createId();
  }

  GetColletion<tipo>(path: string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();

  }

  GetColletionQuerytipo<tipo>(path: string, parametro: string, condicion: any, busqueda1: string){
    const collection = this.database.collection<tipo>(path,
      ref => ref.where(parametro, condicion, busqueda1));
    return collection.valueChanges();

  }
  loginWithEmail(data) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data) {
    return this.database.collection("users").doc(data.uid).set(data);
  }
  getDetails(data) {
    return this.database.collection("users").doc(data.uid).valueChanges();
  }
  getDate(data) {
    return this.database.collection("DonacionesC").doc(data.fechad).valueChanges();
  }
  getUserAuth(){
    return this.auth.authState
  }
  stateUser(){
    return this.auth.authState
  }
  async getuid(){
    const user  = await this.auth.currentUser;
    return user.uid;
  }



}
 
  
  

