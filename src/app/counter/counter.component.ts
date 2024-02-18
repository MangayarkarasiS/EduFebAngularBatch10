import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 @Input() value:string='';
 
 num:number=10;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.num++;
  }
  decrement(){
    this.num--;
  }

}
