import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`
  constructor(
    public HTTP : HttpClient,
    
  ) { }

  login(username:string, password:string){
    console.log(username, password)
    let url = '/api/company/login'
   return this.HTTP.post(url, {username, password});
  }


  getInfoUser(){
    let url = '/api/company/searchCompany/1'
   return this.HTTP.get(url );
  }

  UpdateInfo(info : any){
    let url = '/api/company/update/1'
   return this.HTTP.put(url,info );
  }

  DeleteUser(info : any){
    let url = '/api/company/delete/1'
   return this.HTTP.put(url,info );
  }



    //private methods
    public setAuthFromLocalStorage(email: any, password:string): boolean {
      // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
      let auth ={
        email,
        password
      }
      if (auth) {
        localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
        return true;
      }
      return false;
    }
}
