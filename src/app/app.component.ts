import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Edureka input variable';
  Color:string='Red';
  age:number=52;
  ShowComp:boolean=false;

  showorHide(){
    this.ShowComp=!this.ShowComp;
  }
}
