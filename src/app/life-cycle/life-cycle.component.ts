import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
 @Input() title:string='';
  constructor() { 
    console.log("Inside constructor");
  }
  ngOnInit(): void {
    console.log("Inside ngoninit");
  }  
  ngOnChanges(): void {
    console.log("Inside ngonchanges");
  }  
  ngDoCheck(): void {
    console.log("Inside ngDocheck");
  }  
  ngAfterContentChecked(): void {
    console.log("Inside ngafter Content checked");
  }
  ngAfterViewInit(){
    console.log("Inside ngafter view init");
  }
  ngAfterViewChecked(){
    console.log("view checked");
  }
  ngOnDestroy()
  {
    console.log("Destroy");
  }
}
  

