import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  allColors:string[]=["Red","Blue","Green"];
  toggleEdit:boolean=false;
  changeColor:string='';

  constructor() { }

  ngOnInit(): void {
  }
  removeColor(color:string){
    this.allColors.splice(this.allColors.indexOf(color),1);
  }
  editColor(index:number,color:string){
    if(this.toggleEdit)
    {
      this.allColors[index]=this.changeColor;
    }
    this.toggleEdit=!this.toggleEdit;
  }
  

}
