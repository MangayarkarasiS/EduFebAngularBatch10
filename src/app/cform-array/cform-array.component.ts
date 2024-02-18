import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cform-array',
  templateUrl: './cform-array.component.html',
  styleUrls: ['./cform-array.component.css']
})

export class CFormArrayComponent implements OnInit {
  items: any=FormArray;
 
 reactform=new FormGroup({
  code:new FormControl('',Validators.required),
  name:new FormControl('',Validators.required),
  deladdress:new FormArray([])
 });

 
  constructor() { }

  ngOnInit(): void {
    this.AddnewRow();
  }
  ProceedSave(){
    console.log(this.reactform.value);
   }
   AddnewRow(){
    this.items=this.reactform.get("deladdress") as FormArray;
    this.items.push(this.Genrow())
   }
   Removeitem(index:any){
    this.items=this.reactform.get("deladdress") as FormArray;
    this.items.removeAt(index)
   }
   get deladdress(){
    return this.reactform.get("deladdress") as FormArray;
   }
   Genrow():FormGroup{
    return new FormGroup({
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      zip:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(6)]))
    });
   }
}
