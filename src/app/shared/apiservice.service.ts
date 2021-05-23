import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Band } from '../models/band';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

    // private url = 'http://localhost:300/bands'
    private url = 'https://apirest-angular-rocks-band.herokuapp.com/bands'

  constructor(private http: HttpClient) { 

  }

  getBands(){
    return this.http.get(this.url)
  }

  addBand(band: Band){
    return this.http.post(this.url, band)
  }

  updateBand(band: Band){
    return this.http.put(this.url, band)
  }

  deleteBand(id: number){
    let options = {
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      body:{"id" : id}
    }
    return this.http.delete(this.url, options)
  }

}
