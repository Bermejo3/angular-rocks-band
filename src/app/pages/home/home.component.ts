import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arrayBands: Band[] = []

  constructor(private apiservice: ApiserviceService) { 

  }

  getBands(){
    this.apiservice.getBands().subscribe((data: any)=>{
      this.arrayBands = data
      console.log(this.arrayBands)
    })
  }

  ngOnInit(): void {
    this.getBands()
  }

}
