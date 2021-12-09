import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Route3serviceService } from '../route3service.service';

@Component({
  selector: 'app-sibling4',
  templateUrl: './sibling4.component.html',
  styleUrls: ['./sibling4.component.css']
})
export class Sibling4Component implements OnInit,OnChanges {

  @Input()isPausedCounter=0;
  @Input()isStartCounter=0;
  constructor(public service:Route3serviceService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
this.isPausedCounter
  }
}
