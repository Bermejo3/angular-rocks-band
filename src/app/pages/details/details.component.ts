import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public isModal: boolean = false

  constructor(public service: ServiceService) { }

  showModal(){
    this.isModal=!this.isModal
  }

  ngOnInit(): void {
  }

}
