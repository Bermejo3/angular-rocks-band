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
  public arrayBandsBackUp: Band[] = []
  public modalDelete: boolean = false

  public searchText: string = ""

  constructor(private apiservice: ApiserviceService, private _router:Router, public service: ServiceService) { 

  }

  getBands(){
    this.apiservice.getBands().subscribe((data: any)=>{
      this.arrayBands = data
      this.arrayBandsBackUp = data
      this.service.arrayBands = data
    })
  }

  seeDetails(id: number){
    this.service.id = id
    this.service.band = this.arrayBands.filter(e=>e.id === id)[0]
    
    this._router.navigate(['details'])
  }

  updateBand(id: number){
    this.service.isAdd=false

    this.service.id = id
    this.service.band = this.arrayBands.filter(e=>e.id === id)[0]
    
    this._router.navigate(['form'])
  }

  modalBand(id: number){
    this.service.id = id
    this.service.band = this.arrayBands.filter(e=>e.id === id)[0]

    this.modalDelete = true
  }

  deleteBand(){
    this.apiservice.deleteBand(this.service.id).subscribe((data:any)=>{
      console.log(data)
      this.getBands()
      this.hide()
    })
  }

  filter(){
    if (this.searchText==""){
      this.arrayBands = this.arrayBandsBackUp
    }
    else{
      this.arrayBands = this.arrayBandsBackUp.filter(newArray =>
        newArray.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()))
    }
  }

  filterActive(selectBox: HTMLSelectElement){
    if (selectBox.value=="option"){
      this.arrayBands = this.arrayBandsBackUp
    }
    else if (selectBox.value=="Active"){
      this.arrayBands = this.arrayBandsBackUp.filter(newArray =>
        newArray.isActive == true 
      )
    }
    else if (selectBox.value=="Disbanded"){
      this.arrayBands = this.arrayBandsBackUp.filter(newArray =>
        newArray.isActive == false 
      )
    }
  }

  hide(){
    this.modalDelete = false
  }

  ngOnInit(): void {
    this.getBands()
  }

}
