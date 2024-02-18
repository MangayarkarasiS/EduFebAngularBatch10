import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})


export class DisplayComponent implements OnInit {
 
  FruitName:string="Mango";
  

  constructor() { }

  ngOnInit(): void {
    
  }
  ChangeFruitName(){
    this.FruitName="Grapes";
  }
}
