import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arrayBands: Band[] = []

  constructor(private apiservice: ApiserviceService, private _router:Router, public service: ServiceService) { 

  }

  getBands(){
    this.apiservice.getBands().subscribe((data: any)=>{
      this.arrayBands = data
      this.service.arrayBands = data
      console.log(this.arrayBands)
    })
  }

  seeDetails(id: number){
    this.service.id = id
    this.service.band = this.arrayBands.filter(e=>e.id === id)[0]
    
    this._router.navigate(['details'])
  }

  ngOnInit(): void {
    this.getBands()
  }

}
