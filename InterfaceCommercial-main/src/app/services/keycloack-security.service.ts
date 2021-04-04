import { Injectable } from '@angular/core';
import{KeycloakInstance}from 'keycloak-js';
//import{any}from '../../../node_modules/codelyzer/util/function';

declare var Keycloak:any ;
@Injectable({
  providedIn: 'root'
})
export class KeycloackSecurityService {
public kc:KeycloakInstance;


  constructor() { }
 public async  init(){
    console.log("sec intialisation...");
    this.kc=new Keycloak({
      url:'http://localhost:8080/auth/',
      realm:'agil',
      clientId:'interfaceCommercial'

    });
    await this.kc.init({
     // onLoad:"login-required"
     
     onLoad:"check-sso",
    // promiseType:"native",

      
    });
    console.log(this.kc.token);
  
  }
}


