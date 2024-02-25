import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
  /*myObservable:Observable<string>=new Observable<string>((observer)=>{
    console.log("Streaming started");
    observer.next("A");
    observer.next("B");
    observer.next("c");
    observer.next("D");
    observer.next("E");
    observer.complete();

  });*/
 // myObservable:Observable<any>=of(25,"Hello",25.56);
 allColors:string[]=["RED","BLUE","GREEN","WHITE","BROWN"]

 //myObservable:Observable<string>=from(this.allColors)
 //myObservable:Observable<string>=from(this.allColors).pipe<string>(map((eachColor)=>eachColor.toLowerCase()))
 myObservable:Observable<string>=from(this.allColors).pipe<string>(filter((eachColor)=>eachColor.startsWith("B")))
  constructor() { }

  ngOnInit(): void {
  }

  AddSubscription(){
    this.myObservable.subscribe({
      next:(resp)=>{
        console.log(resp)},
      error: (err)=>{
        console.error();},
      complete:()=>{
        console.log("completed")}
       
    })
  }

}
