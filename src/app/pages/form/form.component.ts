import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Band } from 'src/app/models/band';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public formRock: FormGroup = this.formBuilder.group({
    id: [this.service.id],
    name: [ this.service.band.name, Validators.required],
    website: [ this.service.band.website, Validators.required],
    description: [ this.service.band.description, Validators.required],
    video: [ this.service.band.video, Validators.required],
    isActive: [ this.service.band.isActive, ],
    year: [ this.service.band.year, Validators.required],
    picture: [ this.service.band.picture, Validators.required],
    logo: [ this.service.band.logo, Validators.required],
  })

  public message: string = ""
  public showMessage: boolean = false

  constructor(private formBuilder:FormBuilder,  private _router:Router, public apiservice: ApiserviceService, public service: ServiceService) {
  }

  addBand(){
    console.log(this.formRock.value)
    this.apiservice.addBand(this.formRock.value).subscribe((data:any)=>{
      this.message = data.mensaje
      this.showMessage=true
      setTimeout(()=>{
          this.showMessage=false
          this._router.navigate(['home'])}
          ,2000
      )
    })
  }

  updateBand(){
    this.apiservice.updateBand(this.formRock.value).subscribe((data:any)=>{

      if (data.codigo == 0){
        this.message = data.mensaje
        this.showMessage=true
        setTimeout(()=>{
          this.showMessage=false}
          ,2000
        )
      } 
      else{
        this.message = data.mensaje
        this.showMessage=true
        setTimeout(()=>{
          this.showMessage=false
          this._router.navigate(['home'])}
          ,2000
        )
      }
    })  
  }

  ngOnInit(): void {
  }

}
