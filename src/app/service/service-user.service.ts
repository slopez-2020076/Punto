import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(
    private HttpClient : HttpClient,
  ) { }

    ObtenerInfo(){
      let url = '/api/getCompanyAdmin'
      return this.HttpClient.get(url);
    }

}


