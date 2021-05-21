import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

    private url = 'http://localhost:300/bands'

  constructor(public http: HttpClient) { 

  }

  getBands(){
    return this.http.get(this.url)
  }

}
