import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animation',
  templateUrl: './todo-animation.component.html',
  styleUrls: ['./todo-animation.component.css'],
  animations:[
    trigger('myFade',[
      transition('void=>*',[
        style({backgroundColor:'red',opacity:0}),
        animate(2000,style({backgroundColor:'transparent',opacity:1}))
      ]),
      transition('*=>void',[
        style({backgroundColor:'transparent',opacity:1}),
        animate(2000,style({backgroundColor:'red',opacity:0,transform: 'translateX(40px)'}))
      ])
    ])
  ]
})
export class TodoAnimationComponent implements OnInit {
  todoItem:string='';
  allTodo:string[]=["Fill petrol", "Buy groceries", "Goto Bank"];
  constructor() { }

  ngOnInit(): void {
  }
  addtodoItems(){
    this.allTodo.push(this.todoItem);
    this.todoItem='';
  }
  removeTodo(todo:string){
   this.allTodo.splice(this.allTodo.indexOf(todo),1);
  }
}
