import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Band } from 'src/app/models/band';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router, public	service: ServiceService) { }

  addLink(){
    this.service.isAdd=true
    this.service.band = new Band (0,"","","","",false,0,"","")
    this._router.navigate(['form'])
  }

  ngOnInit(): void {
  }

}
