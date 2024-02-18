import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.css']
})
export class ColorChildComponent implements OnInit {
  @Input() printColor:string='';
  @Output() deleteEventEmitter=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeColor(printColor:string){
  this.deleteEventEmitter.emit(printColor);
  }
}
