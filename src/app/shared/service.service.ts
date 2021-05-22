import { Injectable } from '@angular/core';
import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public id: number= 1
  public arrayBands: Band[] =[]
  public band: Band = new Band (0,"","","","",false,0,"","")
  public isAdd: boolean = true

  constructor(  ) { 
  }
}
